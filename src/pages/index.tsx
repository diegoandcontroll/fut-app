/* eslint-disable react-hooks/exhaustive-deps */
import Carousel from "@/components/carousel";
import { AppActions, useAppContext } from "@/context/Appcontext";
import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent, useCallback, useEffect, useState } from "react";
interface DisplayStringState {
  value: string;
}

export default function Home() {
  const router = useRouter();
  const { state, dispatch } = useAppContext();
  const [displayString, setDisplayString] = useState<DisplayStringState>({
    value: "",
  });
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let isValid;

    const response = await axios.get(
      "https://v3.football.api-sports.io/timezone",
      {
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": displayString.value,
        },
      }
    );
    if (response.data.results > 0) {
      isValid = true;
    } else {
      isValid = false;
    }
    if (isValid) {
      dispatch({
        type: AppActions.setIsValidApiKey,
        payload: isValid,
      });
      dispatch({
        type: AppActions.setApiKey,
        payload: displayString.value,
      });
      dispatch({
        type: AppActions.setIsLogged,
        payload: true,
      });
      router.push("/statics");
    } else {
      setDisplayString((prevState) => ({ ...prevState, value: "" }));
      alert("INVALID API KEY");
    }
  };
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      if (displayString.value !== newValue) {
        setDisplayString({
          value: newValue,
        });
      }
    },
    [displayString.value]
  );
  useEffect(() => {
    if (state.isValidApiKey)
      dispatch({ type: AppActions.setApiKey, payload: displayString.value });
  }, [state.isValidApiKey]);

  return (
    <>
      <Head>
        <title>[Striker.Metrics] - Home</title>
        <meta
          name="Striker.Metric"
          content="Striker.Metric Metrics to football"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:w-full lg:h-screen bg-gradient-to-tl from-pink-100 to-purple-100 to-slate-950">
        <Carousel />
      </div>
      <div className="lg:text-center text-white font-extrabold absolute top-60 pl-20">
        <div>
          <h1 className="text-6xl lg:text-8xl text-green-300 font-semibold md:inline sm:block">
            Striker
          </h1>
          <span className="text-3xl text-green-200 font-extralight ">
            Metrics
          </span>
        </div>
        <h3 className="pt-8 text-6xl lg:mr-20 pb-10">Bem Vindo!</h3>

        <form onSubmit={handleSubmit}>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            {/* <div className="absolute inset-y-0 left-40 flex items-center pl-3 cursor-pointer">
        <FaPaste width={40} height={40} fill="black"/>
        </div> */}
            <Input
              value={displayString.value}
              onChange={handleChange}
              type="password"
              size="lg"
              label="ApiKey"
              className="focus:outline-none text-white"
            />
            {/* <input type="password" id="default-search" className="block w-full p-4 pl-14 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none" placeholder="ApiKey" required onChange={(e) => dispatch({
          type: AppActions.setApiKey,
          payload: e.target.value
        })}/> */}
          </div>
          <Button
            type="submit"
            className="h-[45px] w-32 text-white relative left-[16rem] top-[-45px] ml-16 bg-stone-200 focus:ring-4 focus:ring-blue-300 rounded-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-sm border"
          >
            Login
          </Button>
        </form>
      </div>
    </>
  );
}
