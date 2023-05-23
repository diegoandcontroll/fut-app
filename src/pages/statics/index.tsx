/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
//a81f144f126b579ddc45b6e8c194a3cb
import { Table } from "@/components/table";
import { AppActions, useAppContext } from "@/context/Appcontext";
import { Formation, League, ObjTeam, Player, TeamData } from "@/types";
import { dataTable, formations, getLeagueData, options } from "@/utils";
import { extractPlayerData } from "@/utils/teamsItems";

import {
  Avatar,
  Card,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const staticObjs = [
  { id: 1, value: "GB", label: "Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: 2, value: "ES", label: "Espanha 🇪🇸" },
  { id: 3, value: "DE", label: "Alemanha 🇩🇪" },
  { id: 4, value: "IT", label: "Itália 🇮🇹" },
  { id: 5, value: "FR", label: "França 🇫🇷" },
  { id: 6, value: "BR", label: "Brasil 🇧🇷" },
];

const Statics = () => {
  const router = useRouter();
  const { state, dispatch } = useAppContext();
  const [visibleOptions, setVisibleOptions] = useState(5);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [team, setTeam] = useState<ObjTeam[]>([]);
  const [arrayLeague, setArrayLeague] = useState<League[]>([]);
  const [loading, setLoading] = useState(false);
  const [arrayPlayers, setArrayPlayers] = useState<Player[]>([]);
  const [formation, setFormation] = useState<Formation[]>([]);
  const [graph, setGraph] = useState<TeamData>();
  useEffect(() => {
    if (!state.isLogged) router.push("/");
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      if (!state.country || !state.season) {
        return; // Ignorar a chamada se state.country ou state.season estiverem vazios
      }

      try {
        const headers = {
          "x-apisports-key": state.apiKey,
        };

        // Fetch Leagues
        const leaguesUrl = `https://v3.football.api-sports.io/leagues?code=${state.country}&season=${state.season}`;
        const leaguesResponse = await axios.get(leaguesUrl, { headers });
        setArrayLeague(getLeagueData(leaguesResponse.data?.response));

        // Fetch Teams
        if (state.league?.id) {
          const teamsUrl = `https://v3.football.api-sports.io/teams?league=${state.league?.id}&season=${state.season}`;
          const teamsResponse = await axios.get(teamsUrl, { headers });
          const newTeamArray = teamsResponse.data?.response.map(
            ({ team }: any) => team
          );
          setTeam(newTeamArray);
        }

        // Fetch Players
        if (state.league?.id && state.team?.id) {
          setLoading(true);
          const playersUrl = `https://v3.football.api-sports.io/players?team=${state.team?.id}&season=${state.season}&league=${state.league?.id}&page=1`;
          const playersResponse = await axios.get(playersUrl, { headers });
          setArrayPlayers(extractPlayerData(playersResponse.data?.response));
        }
        setLoading(false);

        // Fetch Team Statistics
        if (state.league?.id && state.team?.id) {
          const teamStatisticsUrl = `https://v3.football.api-sports.io/teams/statistics?team=${state.team?.id}&league=${state.league?.id}&season=${state.season}`;
          const teamStatisticsResponse = await axios.get(teamStatisticsUrl, {
            headers,
          });
          const { fixtures, lineups } = teamStatisticsResponse.data?.response;
          setFormation(lineups);
          dispatch({
            type: AppActions.setTableObjs,
            payload: {
              tGames: fixtures?.played,
              tDraws: fixtures?.draws,
              tLoses: fixtures?.loses,
              tVictories: fixtures?.wins,
            },
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [state.country, state.season, state.league?.id, state.team?.id, dispatch]);

  useEffect(() => {
    dispatch({
      type: AppActions.setTeam,
      payload: null,
    });
    dispatch({
      type: AppActions.setLeague,
      payload: null,
    });
    setFormation([]);
    setArrayLeague([]);
    setTeam([]);
    setArrayPlayers([]);
  }, [state.country, state.season, dispatch]);
  console.log(state);
  return (
    <>
      <Head>
        <title>[YxY].Blog - About</title>
      </Head>
      <div className="lg:w-full lg:h-full w-auto lg:pt-40 pl-20 focus:outline-none from-pink-100 to-purple-100 to-slate-950">
        <div className="grid grid-cols-4 gap-4 flex-col ">
          <div className=" p-4 w-72">
            <Select
              value={state.country}
              onChange={(e) =>
                dispatch({ type: AppActions.setCountry, payload: e })
              }
              variant="static"
              label="Select Countries"
              className="border-b-purple-900 text-xl text-white mt-[4px]"
            >
              {staticObjs.map((item) => (
                <Option key={item.id} value={item.value}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </div>
          <div className="p-4 w-72">
            <Select
              value={state.season}
              size="lg"
              label="Select Season"
              variant="static"
              className="border-b-purple-900 text-xl text-white"
              selected={(element) =>
                element &&
                React.cloneElement(element, {
                  className: "flex items-center px-0 gap-2 pointer-events-none",
                })
              }
              onChange={(e) =>
                dispatch({ type: AppActions.setSeason, payload: e })
              }
            >
              {options.map(({ value }) => (
                <Option
                  key={value}
                  value={value}
                  className="flex items-center gap-2"
                >
                  {value}
                </Option>
              ))}
            </Select>
          </div>
          <div className={`p-4 w-72`}>
            <Select
              selected={(element) =>
                element &&
                React.cloneElement(element, {
                  className: "flex items-center px-0 gap-2 pointer-events-none",
                })
              }
              onChange={(e) => {
                const selectedLeagueName = e;
                const selectedLeague = arrayLeague.find(
                  (league) => league.name === selectedLeagueName
                );
                if (selectedLeague) {
                  dispatch({
                    type: AppActions.setLeague,
                    payload: selectedLeague,
                  });
                }
              }}
              variant="static"
              label="Select your league"
              className="border-b-purple-900 text-xl text-white mt-[4px]"
            >
              {arrayLeague.map((item) => (
                <Option key={item.name} value={item.name}>
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-5 w-5 rounded-full object-cover"
                  />
                  <span className="text-[14px]">{item.name}</span>
                </Option>
              ))}
            </Select>
          </div>

          <div className={`p-4 w-72`}>
            <Select
              selected={(element) =>
                element &&
                React.cloneElement(element, {
                  className: "flex items-center px-0 gap-2 pointer-events-none",
                })
              }
              onChange={(e) => {
                const selectedTeamName = e;
                const selectedTeam = team.find(
                  (team) => team.name === selectedTeamName
                );
                console.log("SELECTED TEAM", selectedTeam);
                if (selectedTeam) {
                  dispatch({
                    type: AppActions.setTeam,
                    payload: selectedTeam,
                  });
                }
              }}
              variant="static"
              label="Select your team"
              className="border-b-purple-900 text-xl text-white mt-[4px]"
            >
              {team.map((item) => (
                <Option key={item.id} value={item.name}>
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-5 w-5 rounded-full object-cover"
                  />
                  {item.name}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-3 flex-col pt-8 w-full h-screen pr-30">
          <div className={` w-72 `}>
            <h1 className="py-4 text-center text-white text-lg font-semibold">
              Info - Jogadores
            </h1>
            {!state.team ? (
              <h1>Selecione as informações</h1>
            ) : (
              <Card className="w-96 max-h-96 overflow-y-auto h-96">
                <List>
                  {arrayPlayers.map((p) => (
                    <>
                      <ListItem key={p.id}>
                        <ListItemPrefix>
                          <Avatar
                            variant="circular"
                            alt="candice"
                            src={p.photo}
                          />
                        </ListItemPrefix>
                        <div>
                          <Typography variant="h6" color="blue-gray">
                            {p.name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-normal"
                          >
                            {`${p.name} - ${p.age} - ${p.nationality}`}
                          </Typography>
                        </div>
                      </ListItem>
                    </>
                  ))}
                </List>
              </Card>
            )}
          </div>
          <div className={` w-72`}>
            <h1 className="py-4 text-center text-white text-lg font-semibold pl-10">
              Formações mais usadadas
            </h1>
            {!state.team ? (
              <h1>Selecione as informações</h1>
            ) : loading ? (
              <h1>Loading...</h1>
            ) : (
              <>
                <Card className="w-96 h-96">
                  <List>
                    {formations.map((f) => (
                      <>
                        <ListItem key={f.formation}>
                          {f.formation}
                          <ListItemSuffix>
                            <Chip
                              value={f.played}
                              variant="ghost"
                              size="sm"
                              className="rounded-full"
                            />
                          </ListItemSuffix>
                        </ListItem>
                      </>
                    ))}
                  </List>
                </Card>
              </>
            )}
          </div>
          <div className={`w-72`}>
            <h1 className="py-4 text-center text-white text-lg font-semibold">
              Resultados
            </h1>
            {!state.team ? (
              <h1>Selecione as informações</h1>
            ) : (
              <Table data={dataTable} />
            )}
          </div>
        </div>
        {/* <h1 className="text-6xl lg:text-8xl text-green-300 font-extralight text-center">
          Graficos
        </h1>
        <div className="flex justify-center items-center gap-10 w-full h-screen mt-32">
          <div>
            <TeamChart data={graph} />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Statics;
