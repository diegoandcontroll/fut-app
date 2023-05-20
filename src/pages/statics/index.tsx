import { useAppContext } from "@/context/Appcontext";
import Head from "next/head";

const Statics = () => {
  const { state } = useAppContext();
  return (
    <>
      <Head>
        <title>[YxY].Blog - About</title>
      </Head>
      <div className="lg:w-full lg:h-screen w-auto lg:pt-60 lg:pl-20">
        <h1 className="text-white">{state.apiKey} - 1y2y831823y8</h1>
      </div>
    </>
  );
};

export default Statics;
