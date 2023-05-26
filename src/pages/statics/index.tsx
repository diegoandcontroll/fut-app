/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
//a81f144f126b579ddc45b6e8c194a3cb
import ChartComponent from "@/components/chart";
import { Table } from "@/components/table";
import { AppActions, useAppContext } from "@/context/Appcontext";
import {
  Fixtures,
  Formation,
  League,
  ObjTeam,
  Player,
  TablePropsObj,
  TeamData,
  TeamData2,
} from "@/types";
import { dataTable, formations, getLeagueData, options } from "@/utils";
import { extractPlayerData, playerDataMocked, responseGraph } from "@/utils/teamsItems";

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
import React, { useCallback, useEffect, useState } from "react";
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
  const [team, setTeam] = useState<ObjTeam[]>([]);
  const [arrayLeague, setArrayLeague] = useState<League[]>([]);
  const [arrayPlayers, setArrayPlayers] = useState<Player[] | undefined>([]);
  const [formation, setFormation] = useState<Formation[]>([]);
  const [graph, setGraph] = useState<TeamData | undefined>();
  const [tableObjs, setTableObjs] = useState<TablePropsObj[]>([]);
  const headers = {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-apisports-key": state.apiKey,
  };

  const fetchLeagues = async (country: string, season: string) => {
    try {
      if (country !== "" && season !== "") {
        const leaguesUrl = `https://v3.football.api-sports.io/leagues?code=${country}&season=${season}`;
        const leaguesResponse = await axios.get(leaguesUrl, { headers });
        return leaguesResponse.data?.response;
      } else {
        throw new Error("COUNTRY AND SEASON EMPTY");
      }
    } catch (e) {
      console.error(e);
    }
  };
  const fetchTeams = async (leagueId: number, season: string) => {
    try {
      if (!leagueId && season !== "") {
        return;
      } else {
        throw new Error("SEASON OR LEAGUE_ID INVALID");
      }
    } catch (e) {
      const teamUrl = `https://v3.football.api-sports.io/teams?league=${leagueId}&season=${season}`;
      const teamsResponse = await axios.get(teamUrl, { headers });
      const arrayTeams = teamsResponse.data?.response.map(
        ({ team }: any) => team
      );
      return arrayTeams;
    }
  };
  const fetchPlayers = async (
    teamId: number | undefined,
    leagueId: number | undefined,
    season: string
  ) => {
    try {
      if (!leagueId && season !== "") {
        return;
      } else {
        throw new Error("SEASON OR LEAGUE_ID INVALID");
      }
    } catch (e) {
      const playerUrl = `https://v3.football.api-sports.io/players?team=${teamId}&season=${season}&league=${leagueId}&page=1`;
      const playerResponse = await axios.get(playerUrl, { headers });
      const playerData = extractPlayerData(
        playerResponse.data?.response
      ) as Player[];
      return playerData;
    }
  };
  const fetchStatics = async (
    teamId: number | undefined,
    leagueId: number | undefined,
    season: string
  ) => {
    const staticsUrl = `https://v3.football.api-sports.io/teams/statistics?team=${teamId}&league=${leagueId}&season=${season}`;
    const staticsResponse = await axios.get<TeamData2>(staticsUrl, { headers });
    const { fixtures, lineups } = staticsResponse.data?.response;
    return [fixtures, lineups, staticsResponse.data?.response];
  };
  useEffect(() => {
    if (!state.isLogged && state.isValidApiKey) router.push("/");
  }, [state.isLogged,state.isValidApiKey]);
  const fetchDataLeagueCallback = useCallback(async () => {
    if (state.country && state.season) {
      setFormation([]);
      setArrayLeague([]);
      setTeam([]);
      setArrayPlayers([]);
      setGraph(undefined);
      setTableObjs([]);
      dispatch({
        type: AppActions.setLoading,
        payload: true,
      });
      dispatch({
        type: AppActions.setTeam,
        payload: {},
      });
      dispatch({
        type: AppActions.setLeague,
        payload: {},
      });
      const data = (await fetchLeagues(
        state.country,
        state.season
      ));
      setArrayLeague(getLeagueData(data));
      dispatch({
        type: AppActions.setLoading,
        payload: false,
      });
    } else {
      dispatch({
        type: AppActions.setLoading,
        payload: false,
      });
      return;
    }
  }, [state.country, state.season]);

  const fetchDataTeamCallback = useCallback(async () => {
    if (state.league?.id) {
      dispatch({
        type: AppActions.setLoading,
        payload: true,
      });
      const data = (await fetchTeams(
        state.league?.id,
        state.season
      )) as ObjTeam[];
      setTeam(data);
      dispatch({
        type: AppActions.setLoading,
        payload: false,
      });
    } else {
      dispatch({
        type: AppActions.setLoading,
        payload: false,
      });
      return;
    }
  }, [state.league?.id]);
  const fetchDataPlayerCallback = useCallback(async () => {
    if (state.team?.id && state.league?.id) {
      dispatch({
        type: AppActions.setLoading,
        payload: true,
      });
      const fetchPlayersPromise = fetchPlayers(
        state.team?.id,
        state.league?.id,
        state.season
      );
      const fetchStaticsPromise = fetchStatics(
        state.team?.id,
        state.league?.id,
        state.season
      );
      const [data, dataStatics] = await Promise.all([
        fetchPlayersPromise,
        fetchStaticsPromise,
      ]);

      const fixturesData = dataStatics[0] as Fixtures;
      const lineupsData = dataStatics[1] as Formation[];
      const graphData = dataStatics[2] as TeamData;

      setArrayPlayers(data);
      setTableObjs([
        {
          victories: fixturesData?.wins.total,
          defeats: fixturesData?.loses.total,
          games: fixturesData?.played.total,
          draws: fixturesData?.draws.total,
        },
      ]);
      setFormation(lineupsData);
      setGraph(graphData);

      dispatch({
        type: AppActions.setLoading,
        payload: false,
      });
    } else {
      dispatch({
        type: AppActions.setLoading,
        payload: false,
      });
      return;
    }
  }, [state.team?.id]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchDataLeagueCallback();
    };

    fetchData();
  }, [fetchDataLeagueCallback, state.country, state.season]);

  useEffect(() => {
    const fetchData = async () => {
      if (state.league?.id) {
        await fetchDataTeamCallback();
      }
    };

    fetchData();
  }, [fetchDataTeamCallback, state.league?.id]);

  useEffect(() => {
    const fetchData = async () => {
      if (state.team?.id && state.league?.id) {
        await fetchDataPlayerCallback();
      }
    };

    fetchData();
  }, [fetchDataPlayerCallback, state.team?.id, state.league?.id]);
  return (
    <>
      <Head>
        <title>Statics</title>
      </Head>
      <div className="lg:w-full lg:h-full w-auto lg:pt-24 pl-12 focus:outline-none from-pink-100 to-purple-100 to-slate-950" id="statics">
        <div className="grid lg:grid-cols-4 gap-4 flex-col lg:pt-0 pt-32 items-start justify-start">
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
                  (league) => league?.name === selectedLeagueName
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
              {arrayLeague &&
                arrayLeague.map((item) => (
                  <Option key={item?.name} value={item?.name}>
                    <img
                      src={item?.logo}
                      alt={item?.name}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    <span className="text-[14px]">{item?.name}</span>
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
                  (team) => team?.name === selectedTeamName
                );
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
              {team &&
                team.map((item) => (
                  <Option key={item?.id} value={item?.name}>
                    <img
                      src={item?.logo}
                      alt={item.name}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    {item?.name}
                  </Option>
                ))}
            </Select>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 flex-col pt-4 w-full h-screen pr-30">
          <div className={` w-72 `}>
            <h1 className="py-4 text-center text-white text-lg font-semibold">
              Info - Jogadores
            </h1>
            {/* {arrayPlayers && arrayPlayers.length > 0 && ( */}
              <Card className="lg:w-96 max-h-96 overflow-y-auto h-96">
                <List>
                  {playerDataMocked.map((p) => (
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
            {/* )} */}
           
          </div>
          <div className={` w-72`}>
            <h1 className="py-4 text-center text-white text-lg font-semibold pl-10">
              Formações mais usadadas
            </h1>
            {/* {formation[0]?.formation !== undefined && ( */}
              <>
                <Card className="lg:w-96 max-h-96 overflow-y-auto h-96">
                  <List>
                    {formations.map((f) => (
                      <>
                        <ListItem key={f?.formation}>
                          {f?.formation}
                          <ListItemSuffix>
                            <Chip
                              value={f?.played}
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
            {/* )} */}
          </div>
          <div className={`w-72`}>
            <h1 className="py-4 text-center text-white text-lg font-semibold">
              Resultados
            </h1>
            <Table data={dataTable} />
            {/* {tableObjs[0]?.games && <Table data={dataTable} />} */}
          </div>
        </div>
        <h1 id="graphs" className="text-center text-6xl text-white pt-20">Gráficos</h1>
        <div className="flex justify-center items-center gap-10 w-full h-screen">
          <ChartComponent data={responseGraph[0]} />
        </div>
      </div>
    </>
  );
};

export default Statics;
