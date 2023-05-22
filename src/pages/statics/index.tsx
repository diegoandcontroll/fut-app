/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import TeamChart from "@/components/chart";
import Table from "@/components/table";
import { AppActions, useAppContext } from "@/context/Appcontext";
import { ObjTeam } from "@/types";
import { leaguesArray, options, optionsTeams } from "@/utils";
import { formations, playerArray, responseGraph } from "@/utils/teamsItems";
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
interface SelectOption {
  value: number;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
}

const Statics = () => {
  const router = useRouter();
  const { state, dispatch } = useAppContext();
  const [visibleOptions, setVisibleOptions] = useState(5);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [team, setTeam] = useState<ObjTeam>(state.team);

  const handleLoadMore = () => {
    setVisibleOptions((prevVisibleOptions) => prevVisibleOptions + 5);
  };
  // const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
  //   const selectedTeamId = parseInt(event.target.value, state.team.id);
  //   const selectedTeam = newArrayTeams.map((data) =>
  //     data.find((team) => team.id === selectedTeamId)
  //   );

  //   if (selectedTeam) {
  //     dispatch({
  //       type: AppActions.setTeam,
  //       payload: selectedTeam,
  //     });
  //   }
  // };
  const handleOptionClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: AppActions.setSeason,
      payload: event.target.value,
    });
    const value = parseInt(event.target.value, 10);
    setSelectedOption(value);
  };
  const arrayObjs: ObjTeam[] = [];
  const newArrayTeams = optionsTeams.map((item) => {
    return item.map(({ team }) => {
      arrayObjs.push({ id: team.id, name: team.name, logo: team.logo });
    });
  });
  useEffect(() => {
    if (!state.isLogged) router.push("/");
  }, []);
  console.log(state);
  console.log(newArrayTeams);
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
              value={`${state.league.name}`}
              onChange={(e) => {
                const selectedLeagueName = e;
                const selectedleague = leaguesArray.find(
                  (league) => league.name === selectedLeagueName
                );
                if (selectedLeagueName) {
                  dispatch({
                    type: AppActions.setLeague,
                    payload: selectedleague,
                  });
                }
              }}
              variant="static"
              label="Select your team"
              className="border-b-purple-900 text-xl text-white mt-[4px]"
            >
              {leaguesArray.map((item) => (
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

          <div className={`p-4 w-72`}>
            <Select
              selected={(element) =>
                element &&
                React.cloneElement(element, {
                  className: "flex items-center px-0 gap-2 pointer-events-none",
                })
              }
              value={`${state.team.name}`}
              onChange={(e) => {
                const selectedTeamName = e;
                const selectedTeam = arrayObjs.find(
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
              {arrayObjs.map((item) => (
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
            <h1 className="py-4 text-center text-white text-lg font-semibold">Info - Jogadores</h1>
            <Card className="w-96 max-h-96 overflow-y-auto h-96">
              <List>
                {playerArray.map((p) => (
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
          </div>
          <div className={` w-72`}>
          <h1 className="py-4 text-center text-white text-lg font-semibold pl-10">Formaçõeos mais usadadas</h1>
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
          </div>
          <div className={`w-72`}>
          <h1 className="py-4 text-center text-white text-lg font-semibold">Resultados</h1>
            <Table />
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 w-full h-screen">
          <div className="">
            <TeamChart data={responseGraph[0]}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statics;
