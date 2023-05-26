/* eslint-disable react-hooks/exhaustive-deps */
import Carousel from "@/components/carousel";
import { AppActions, useAppContext } from "@/context/Appcontext";
import { Button } from "@material-tailwind/react";
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
      <div className="w-full h-screen bg-gradient-to-tl from-green-40000 to-pink-200 transition-colors">
        <Carousel />
      </div>
      <div className="lg:text-center text-white font-extrabold absolute top-60 pl-20 pt-10">
        <div>
          <h1 className="text-6xl lg:text-8xl text-green-300 font-semibold md:inline sm:block">
            Striker
          </h1>
          <span className="text-3xl text-green-200 font-extralight ">
            Metrics
          </span>
        </div>
        <h3 className="pt-8 text-lg lg:text-6xl lg:mr-20 pb-10">Bem Vindo!</h3>

        <form
          onSubmit={handleSubmit}
          className="lg:mr-0 sm:mr-10rem flex flex-col items-start justify-center gap-4 lg:max-w-[350px] sm:max-w-[180px]"
        >
          <input
            value={displayString.value}
            onChange={handleChange}
            type="password"
            className="h-10 lg:w-full bg-transparent focus:outline-none text-white focus:ring-4 focus:ring-blue-300 rounded-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-sm border"
            placeholder="APIKEY"
          />
          <Button
            type="submit"
            className="h-10 lg:w-[250px] sm:w-full text-white bg-stone-200 focus:ring-4 focus:ring-blue-300 rounded-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-sm border"
          >
            Login
          </Button>
        </form>
      </div>
    </>
  );
}
