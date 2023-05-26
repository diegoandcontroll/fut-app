import { League, ResponseData, TablePropsObj } from "@/types";

export const options = [
  { label: "2023", value: "2023" },
  { label: "2022", value: "2022" },
  { label: "2021", value: "2021" },
  { label: "2020", value: "2020" },
  { label: "2019", value: "2019" },
  { label: "2018", value: "2018" },
  { label: "2017", value: "2017" },
  { label: "2016", value: "2016" },
  { label: "2015", value: "2015" },
  { label: "2014", value: "2014" },
  { label: "2013", value: "2013" },
  { label: "2012", value: "2012" },
  { label: "2011", value: "2011" },
  { label: "2010", value: "2010" },
  { label: "2009", value: "2009" },
  { label: "2008", value: "2008" },
];

export const dataTable: TablePropsObj[] = [
  {
    games: 3,
    victories: 3,
    defeats: 2,
    draws: 1,
  },
];
export const formations = [
  {
    "formation": "4-2-3-1",
    "played": 32
  },
  {
    "formation": "3-4-1-2",
    "played": 4
  },
  {
    "formation": "3-4-2-1",
    "played": 1
  },
  {
    "formation": "4-3-1-2",
    "played": 1
  },
  {
    "formation": "4-3-1-2",
    "played": 1
  },
  {
    "formation": "4-3-1-2",
    "played": 1
  }, {
    "formation": "4-3-1-2",
    "played": 1
  },
  {
    "formation": "4-3-1-2",
    "played": 1
  },
  
];

export const getLeagueData = (response: ResponseData[]): League[] => {
  const leagues: League[] = response.map((item) => item.league);
  return leagues;
};

export const fakeResponse: ResponseData[] = [
  {
    league: {
      id: 851,
      name: "Carioca A2",
      type: "League",
      logo: "https:\/\/media-2.api-sports.io\/football\/leagues\/851.png"
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https:\/\/media-1.api-sports.io\/flags\/br.svg"
    },
    "seasons": [
      {
        "year": 2022,
        "start": "2022-04-30",
        "end": "2022-08-24",
        "current": false,
        "coverage": {
          "fixtures": {
            "events": true,
            "lineups": false,
            "statistics_fixtures": false,
            "statistics_players": false
          },
          "standings": false,
          "players": false,
          "top_scorers": false,
          "top_assists": false,
          "top_cards": false,
          "injuries": false,
          "predictions": true,
          "odds": false
        }
      }
    ]
  },
  {
    league: {
      id: 623,
      name: "Sul-Matogrossense",
      type: "League",
      logo: "https:\/\/media-1.api-sports.io\/football\/leagues\/623.png"
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https:\/\/media-1.api-sports.io\/flags\/br.svg"
    },
    seasons: [
      {
        "year": 2022,
        "start": "2022-02-02",
        "end": "2022-04-24",
        "current": false,
        "coverage": {
          "fixtures": {
            "events": false,
            "lineups": false,
            "statistics_fixtures": false,
            "statistics_players": false
          },
          "standings": true,
          "players": true,
          "top_scorers": true,
          "top_assists": true,
          "top_cards": true,
          "injuries": false,
          "predictions": true,
          "odds": false
        }
      }
    ]
  },
  {
    league: {
      id: 615,
      name: "Rondoniense",
      type: "League",
      logo: "https:\/\/media-1.api-sports.io\/football\/leagues\/615.png"
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https:\/\/media-3.api-sports.io\/flags\/br.svg"
    },
    "seasons": [
      {
        "year": 2022,
        "start": "2022-02-20",
        "end": "2022-05-14",
        "current": false,
        "coverage": {
          "fixtures": {
            "events": false,
            "lineups": false,
            "statistics_fixtures": false,
            "statistics_players": false
          },
          "standings": true,
          "players": true,
          "top_scorers": true,
          "top_assists": true,
          "top_cards": true,
          "injuries": false,
          "predictions": true,
          "odds": false
        }
      }
    ]
  },
  {
    league: {
      id: 627,
      name: "Paraense",
      type: "League",
      logo: "https:\/\/media-2.api-sports.io\/football\/leagues\/627.png"
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https:\/\/media-1.api-sports.io\/flags\/br.svg"
    },
    seasons: [
      {
        "year": 2022,
        "start": "2022-01-26",
        "end": "2022-04-06",
        "current": false,
        "coverage": {
          "fixtures": {
            "events": true,
            "lineups": false,
            "statistics_fixtures": false,
            "statistics_players": false
          },
          "standings": true,
          "players": false,
          "top_scorers": false,
          "top_assists": false,
          "top_cards": false,
          "injuries": false,
          "predictions": true,
          "odds": false
        }
      }
    ]
  },
  {
    league: {
      id: 73,
      name: "Copa Do Brasil",
      type: "Cup",
      logo: "https:\/\/media-3.api-sports.io\/football\/leagues\/73.png"
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https:\/\/media-2.api-sports.io\/flags\/br.svg"
    },
    "seasons": [
      {
        "year": 2022,
        "start": "2022-02-22",
        "end": "2022-10-20",
        "current": false,
        "coverage": {
          "fixtures": {
            "events": true,
            "lineups": true,
            "statistics_fixtures": true,
            "statistics_players": true
          },
          "standings": false,
          "players": true,
          "top_scorers": true,
          "top_assists": true,
          "top_cards": true,
          "injuries": false,
          "predictions": true,
          "odds": false
        }
      }
    ]
  },
  {
    league: {
      id: 520,
      name: "Acreano",
      type: "League",
      logo: "https:\/\/media-3.api-sports.io\/football\/leagues\/520.png"
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https:\/\/media-3.api-sports.io\/flags\/br.svg"
    },
    "seasons": [
      {
        "year": 2022,
        "start": "2022-02-13",
        "end": "2022-04-21",
        "current": false,
        "coverage": {
          "fixtures": {
            "events": true,
            "lineups": false,
            "statistics_fixtures": false,
            "statistics_players": false
          },
          "standings": true,
          "players": true,
          "top_scorers": true,
          "top_assists": true,
          "top_cards": true,
          "injuries": false,
          "predictions": true,
          "odds": false
        }
      }
    ]
  },
  {
    league: {
      id: 71,
      name: "Serie A",
      type: "League",
      logo: "https:\/\/media-2.api-sports.io\/football\/leagues\/71.png"
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https:\/\/media-1.api-sports.io\/flags\/br.svg"
    },
    "seasons": [
      {
        "year": 2022,
        "start": "2022-04-10",
        "end": "2022-11-13",
        "current": false,
        "coverage": {
          "fixtures": {
            "events": true,
            "lineups": true,
            "statistics_fixtures": true,
            "statistics_players": true
          },
          "standings": true,
          "players": true,
          "top_scorers": true,
          "top_assists": true,
          "top_cards": true,
          "injuries": false,
          "predictions": true,
          "odds": false
        }
      }
    ]
  },
  {
    league: {
      id: 72,
      name: "Serie B",
      type: "League",
      logo: "https:\/\/media-3.api-sports.io\/football\/leagues\/72.png"
    },
    country: {
      name: "Brazil",
      code: "BR",
      flag: "https:\/\/media-1.api-sports.io\/flags\/br.svg"
    },
    "seasons": [
      {
        "year": 2022,
        "start": "2022-04-09",
        "end": "2022-11-05",
        "current": false,
        "coverage": {
          "fixtures": {
            "events": true,
            "lineups": true,
            "statistics_fixtures": true,
            "statistics_players": true
          },
          "standings": true,
          "players": true,
          "top_scorers": true,
          "top_assists": true,
          "top_cards": true,
          "injuries": false,
          "predictions": true,
          "odds": false
        }
      }
    ]
  },
];

export const leaguesArray = getLeagueData(fakeResponse);

export const graphData = {
  league: {
    id: 123,
    name: "Premier League",
    country: "England",
    logo: "https://example.com/logo.png",
    flag: "https://example.com/flag.png",
    season: 2023
  },
  team: {
    id: 456,
    name: "Manchester United",
    logo: "https://example.com/manutd_logo.png"
  },
  form: "WWDLW",
  fixtures: {
    played: {
      home: 10,
      away: 9,
      total: 19
    },
    wins: {
      home: 6,
      away: 4,
      total: 10
    },
    draws: {
      home: 2,
      away: 3,
      total: 5
    },
    loses: {
      home: 2,
      away: 2,
      total: 4
    }
  },
  goals: {
    for: {
      total: {
        home: 25,
        away: 15,
        total: 40
      },
      average: {
        home: "1.32",
        away: "1.67",
        total: "1.51"
      },
      minute: {
        "0-15": {
          total: 3,
          percentage: "8%"
        },
        "16-30": {
          total: 5,
          percentage: "13%"
        },
        // Rest of the minute ranges...
      }
    },
    against: {
      total: {
        home: 10,
        away: 20,
        total: 30
      },
      average: {
        home: "0.53",
        away: "1.11",
        total: "0.95"
      },
      minute: {
        "0-15": {
          total: 2,
          percentage: "7%"
        },
        "16-30": {
          total: 8,
          percentage: "27%"
        },
        // Rest of the minute ranges...
      }
    }
  },
  biggest: {
    streak: {
      wins: 4,
      draws: 0,
      loses: 2
    },
    wins: {
      home: "Wolverhampton Wanderers",
      away: "Tottenham Hotspur"
    },
    loses: {
      home: "Manchester City",
      away: "Liverpool"
    },
    goals: {
      for: {
        home: 4,
        away: 3
      },
      against: {
        home: 2,
        away: 5
      }
    }
  },
  clean_sheet: {
    home: 7,
    away: 5,
    total: 12
  },
  failed_to_score: {
    home: 2,
    away: 3,
    total: 5
  },
  penalty: {
    scored: {
      total: 2,
      percentage: "66%"
    },
    missed: {
      total: 1,
      percentage: "33%"
    },
    total: 3
  },
  lineups: [
    // Array of lineups, can contain any data
  ],
  cards: {
    yellow: {
      "0-15": {
        total: 4,
        percentage: "10%"
      },
      "16-30": {
        total: 6,
        percentage: "15%"
      },
      // Rest of the minute ranges...
    },
    red: {
      "0-15": {
        total: 1,
        percentage: "2.5%"
      },
      "16-30": {
        total: 2,
        percentage: "5%"
      },
      // Rest of the minute ranges...
    }
  }
};