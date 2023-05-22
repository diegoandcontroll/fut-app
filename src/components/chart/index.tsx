import { TeamData } from "@/types";
import Chart from "react-google-charts";

interface ChartProps {
  data: TeamData;
}

const TeamChart: React.FC<ChartProps> = ({ data }) => {
  const {
    fixtures,
    goals,
    biggest,
    clean_sheet,
    failed_to_score,
    penalty,
    cards,
  } = data;

  const fixturesData = [
    ["Type", "Home", "Away", "Total"],
    [
      "Played",
      fixtures.played.home,
      fixtures.played.away,
      fixtures.played.total,
    ],
    ["Wins", fixtures.wins.home, fixtures.wins.away, fixtures.wins.total],
    ["Draws", fixtures.draws.home, fixtures.draws.away, fixtures.draws.total],
    ["Losses", fixtures.loses.home, fixtures.loses.away, fixtures.loses.total],
  ];

  const goalsData = [
    ["Type", "Home", "Away", "Total"],
    [
      "Goals For",
      goals.for.total.home,
      goals.for.total.away,
      goals.for.total.total,
    ],
    [
      "Goals Against",
      goals.against.total.home,
      goals.against.total.away,
      goals.against.total.total,
    ],
  ];

  const biggestData = [
    ["Type", "Home", "Away"],
    ["Wins", biggest.wins.home, biggest.wins.away],
    ["Losses", biggest.loses.home, biggest.loses.away],
    ["Goals For", biggest.goals.for.home, biggest.goals.for.away],
    ["Goals Against", biggest.goals.against.home, biggest.goals.against.away],
  ];

  const cleanSheetData = [
    ["Type", "Home", "Away", "Total"],
    ["Clean Sheets", clean_sheet.home, clean_sheet.away, clean_sheet.total],
  ];

  const failedToScoreData = [
    ["Type", "Home", "Away", "Total"],
    [
      "Failed to Score",
      failed_to_score.home,
      failed_to_score.away,
      failed_to_score.total,
    ],
  ];

  const penaltyData = [
    ["Type", "Scored", "Missed", "Total"],
    ["Penalty", penalty.scored.total, penalty.missed.total, penalty.total],
  ];

  const cardsData = [
    ["Minute", "Yellow", "Red"],
    ["0-15", cards.yellow["0-15"].total, cards.red["0-15"].total],
    ["16-30", cards.yellow["16-30"].total, cards.red["16-30"].total],
    ["31-45", cards.yellow["31-45"].total, cards.red["31-45"].total],
    ["46-60", cards.yellow["46-60"].total, cards.red["46-60"].total],
    ["61-75", cards.yellow["61-75"].total, cards.red["61-75"].total],
    ["76-90", cards.yellow["76-90"].total, cards.red["76-90"].total],
    ["91-105", cards.yellow["91-105"].total, cards.red["91-105"].total],
    ["106-120", cards.yellow["106-120"].total, cards.red["106-120"].total],
  ];

  return (
    <div className="grid grid-cols-3 gap-32 w-full h-screen pr-20 mb-10">
      <div className={` w-72 `}>
        <h1 className="py-4 text-center text-white text-lg font-semibold">
          Fixtures
        </h1>
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="ColumnChart"
          loader={<div>Loading Chart...</div>}
          data={fixturesData}
          options={{
            title: "Fixtures",
            vAxis: { title: "Count" },
            hAxis: { title: "Type" },
          }}
        />
      </div>
      <div className={`w-72 `}>
        <h1 className="py-4 text-center text-white text-lg font-semibold">
          Goals
        </h1>
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="ColumnChart"
          loader={<div>Loading Chart...</div>}
          data={goalsData}
          options={{
            title: "Goals",
            vAxis: { title: "Count" },
            hAxis: { title: "Type" },
          }}
        />
      </div>
      {/* <div className={` w-72 `}>
        <h3>Biggest</h3>
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="ColumnChart"
          loader={<div>Loading Chart...</div>}
          data={biggestData}
          options={{
            title: "Biggest",
            vAxis: { title: "Count" },
            hAxis: { title: "Type" },
          }}
        />
      </div> */}
      <div className={` w-72 `}>
        <h1 className="py-4 text-center text-white text-lg font-semibold">
          Clean Sheet
        </h1>
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="ColumnChart"
          loader={<div>Loading Chart...</div>}
          data={cleanSheetData}
          options={{
            title: "Clean Sheet",
            vAxis: { title: "Count" },
            hAxis: { title: "Type" },
          }}
        />
      </div>

      <div className={` w-72 `}>
        <h1 className="py-4 text-center text-white text-lg font-semibold">
          Failed to Score
        </h1>
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="ColumnChart"
          loader={<div>Loading Chart...</div>}
          data={failedToScoreData}
          options={{
            title: "Failed to Score",
            vAxis: { title: "Count" },
            hAxis: { title: "Type" },
          }}
        />
      </div>
      <div className={` w-72 `}>
        <h1 className="py-4 text-center text-white text-lg font-semibold">
          Penalty
        </h1>
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="ColumnChart"
          loader={<div>Loading Chart...</div>}
          data={penaltyData}
          options={{
            title: "Penalty",
            vAxis: { title: "Count" },
            hAxis: { title: "Type" },
          }}
        />
      </div>
      <div className={` w-72 `}>
      <h1 className="py-4 text-center text-white text-lg font-semibold">Cards</h1>
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="ColumnChart"
          loader={<div>Loading Chart...</div>}
          data={cardsData}
          options={{
            title: "Cards",
            vAxis: { title: "Count" },
            hAxis: { title: "Minute" },
          }}
        />
      </div>
    </div>
  );
};

export default TeamChart;
