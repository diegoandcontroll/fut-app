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

  // Dados para o gráfico de fixtures
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

  // Dados para o gráfico de goals
  const goalsData = [["Minute", "Goals For", "Goals Against"]];
  Object.keys(data?.goals?.for?.minute || {}).forEach((minute) => {
    const goalsFor =
      data?.goals?.for?.minute?.[minute]?.total?.toString() || "0";
    const goalsAgainst =
      data?.goals?.against?.minute?.[minute]?.total?.toString() || "0";
    goalsData.push([minute, goalsFor, goalsAgainst]);
  });

  // Dados para o gráfico de biggest
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
    <div>
      <h2>Fixtures</h2>
      <Chart
        width={"500px"}
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

      <h2>Goals</h2>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={goalsData}
        options={{
          chart: {
            title: "Goals",
          },
        }}
      />

      <h2>Biggest</h2>
      <Chart
        width={"500px"}
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
  );
};

export default ChartComponent;
