import { Roboto } from "next/font/google";
import Head from "next/head";
import Image from "next/image";

const roboto = Roboto({ subsets: ["latin"], display: "swap", weight: "400" });

export default function Home() {
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
      <div className="lg:w-full lg:h-screen bg-gradient-to-tl from-orange-600 to-green-300 w-auto">
        <Image
          alt=""
          src="/imagelayout.jpg"
          fill
          style={{objectFit: 'cover'}}
          className="mix-blend-color-burn brightness-200"
        />
      </div>
      <div className=" text-center text-white font-extrabold absolute lg:top-28 lg:pt-16 lg:left-40 lg:pl-20 pt-36">
        <h1 className="text-6xl text-center lg:text-8xl text-green-300 font-semibold md:inline sm:block">
        Striker
        </h1>
        <span className="text-3xl text-green-200 font-extralight ">
        Metrics
        </span>
        <h3 className="pt-8 pl-6 lg:pt-20 text-6xl text-center">Welcome</h3>
      </div>
    </>
  );
}
