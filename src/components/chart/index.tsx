
import { TeamData } from "@/types";
import React from "react";
import { Chart } from "react-google-charts";

interface ChartComponentProps {
  data?: TeamData;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ data }) => {
  if (!data) {
    return <div>No data available</div>;
  }

  const fixturesData = [["Type", "Home", "Away"]];
  fixturesData.push([
    "Played",
    data.fixtures?.played?.home.toString() || "0",
    data.fixtures?.played?.away.toString() || "0",
  ]);
  fixturesData.push([
    "Wins",
    data.fixtures?.wins?.home.toString() || "0",
    data.fixtures?.wins?.away.toString() || "0",
  ]);
  fixturesData.push([
    "Draws",
    data.fixtures?.draws?.home.toString() || "0",
    data.fixtures?.draws?.away.toString() || "0",
  ]);
  fixturesData.push([
    "Losses",
    data.fixtures?.loses?.home.toString() || "0",
    data.fixtures?.loses?.away.toString() || "0",
  ]);

  const goalsChartData: (string | number)[][] = [
    ["Minute", "Goals For", "Goals Against"],
  ];
  const minuteData = data?.goals?.for?.minute;
  if (minuteData) {
    Object.keys(minuteData).forEach((minute) => {
      const goalsFor = minuteData[minute]?.total || 0;
      const goalsAgainst = data?.goals?.against?.minute?.[minute]?.total || 0;
      goalsChartData.push([Number(minute), goalsFor, goalsAgainst]);
    });
  }


  const biggestData = [["Type", "Home", "Away"]];
  Object.keys(data?.biggest?.wins || {}).forEach((type) => {
    const homeValue =
      data?.biggest?.wins[type as keyof typeof data.biggest.wins]?.split(
        "-"
      )[0] || "0";
    const awayValue =
      data?.biggest?.wins[type as keyof typeof data.biggest.wins]?.split(
        "-"
      )[1] || "0";
    biggestData.push([type.toUpperCase(), homeValue, awayValue.toString()]);
  });

  return (
    <div className="grid lg:grid-cols-3 flex-col lg:justify-between items-center mr-8 lg:gap-28 gap-8 sm:justify-center items:center lg:mt-0 mt-[100rem]">
      {data.fixtures ? (
        <div className="w-72">
          <Chart
            width={"100%"}
            height={"300px"}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={fixturesData}
            options={{
              chart: {
                title: "Fixtures",
              },
            }}
          />
        </div>
      ) : (
        <></>
      )}

      {data.goals ? (
        <div className="w-72">
          <Chart
            width={"100%"}
            height={"300px"}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={goalsChartData}
            options={{
              title: "Goals",
              hAxis: {
                title: "Minute",
              },
              vAxis: {
                title: "Goals",
              },
            }}
          />
        </div>
      ) : (
        <></>
      )}

      {data.biggest ? (
        <div className="w-72">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={biggestData}
          options={{
            chart: {
              title: "Biggest",
            },
          }}
        />
      </div>
      ): (
        <></>
      )}
    </div>
  );
};

export default ChartComponent;
