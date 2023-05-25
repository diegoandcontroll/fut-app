import { League, OriginalData, ResponseData, TablePropsObj } from "@/types";

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
  }
  ];
export const optionsTeams: OriginalData[][] = [
  [
    {
      team: {
        id: 33,
        name: "Manchester United",
        code: "MUN",
        country: "England",
        founded: 1878,
        national: false,
        logo: "https://media-1.api-sports.io/football/teams/33.png",
      },
      venue: {
        id: 556,
        name: "Old Trafford",
        address: "Sir Matt Busby Way",
        city: "Manchester",
        capacity: 76212,
        surface: "grass",
        image: "https://media-1.api-sports.io/football/venues/556.png",
      },
    },
    {
      team: {
        id: 34,
        name: "Newcastle",
        code: "NEW",
        country: "England",
        founded: 1892,
        national: false,
        logo: "https:media-1.api-sports.io/football/teams/34.png"
      },
      venue: {
        id: 562,
        name: "St. James' Park",
        address: "St. James&apos; Street",
        city: "Newcastle upon Tyne",
        capacity: 52389,
        surface: "grass",
        image: "https:media-3.api-sports.io/football/venues/562.png"
      }
    },
    {
      team: {
        id: 38,
        name: "Watford",
        code: "WAT",
        country: "England",
        founded: 1881,
        national: false,
        logo: "https:media-3.api-sports.io/football/teams/38.png"
      },
      venue: {
        id: 596,
        name: "Vicarage Road",
        address: "Vicarage Road",
        city: "Watford",
        capacity: 22200,
        surface: "grass",
        image: "https:media-3.api-sports.io/football/venues/596.png"
      }
    },
    {
      team: {
        id: 39,
        name: "Wolves",
        code: "WOL",
        country: "England",
        founded: 1877,
        national: false,
        logo: "https:media-1.api-sports.io/football/teams/39.png"
      },
      venue: {
        id: 600,
        name: "Molineux Stadium",
        address: "Waterloo Road",
        city: "Wolverhampton, West Midlands",
        capacity: 32050,
        surface: "grass",
        image: "https:media-2.api-sports.io/football/venues/600.png"
      }
    },
    {
      team: {
        id: 40,
        name: "Liverpool",
        code: "LIV",
        country: "England",
        founded: 1892,
        national: false,
        logo: "https:media-1.api-sports.io/football/teams/40.png"
      },
      venue: {
        id: 550,
        name: "Anfield",
        address: "Anfield Road",
        city: "Liverpool",
        capacity: 55212,
        surface: "grass",
        image: "https:media-1.api-sports.io/football/venues/550.png"
      }
    },
    {
      team: {
        id: 41,
        name: "Southampton",
        code: "SOU",
        country: "England",
        founded: 1885,
        national: false,
        logo: "https:media-3.api-sports.io/football/teams/41.png"
      },
      venue: {
        id: 585,
        name: "St. Mary's Stadium",
        address: "Britannia Road",
        city: "Southampton, Hampshire",
        capacity: 32689,
        surface: "grass",
        image: "https:media-3.api-sports.io/football/venues/585.png"
      }
    },
    {
      team: {
        id: 42,
        name: "Arsenal",
        code: "ARS",
        country: "England",
        founded: 1886,
        national: false,
        logo: "https:media-3.api-sports.io/football/teams/42.png"
      },
      venue: {
        id: 494,
        name: "Emirates Stadium",
        address: "Queensland Road",
        city: "London",
        capacity: 60383,
        surface: "grass",
        image: "https:media-3.api-sports.io/football/venues/494.png"
      }
    },
    {
      team: {
        id: 44,
        name: "Burnley",
        code: "BUR",
        country: "England",
        founded: 1882,
        national: false,
        logo: "https:media-3.api-sports.io/football/teams/44.png"
      },
      venue: {
        id: 512,
        name: "Turf Moor",
        address: "Harry Potts Way",
        city: "Burnley",
        capacity: 22546,
        surface: "grass",
        image: "https:media-1.api-sports.io/football/venues/512.png"
      }
    },
    {
      team: {
        id: 45,
        name: "Everton",
        code: "EVE",
        country: "England",
        founded: 1878,
        national: false,
        logo: "https:media-2.api-sports.io/football/teams/45.png"
      },
      venue: {
        id: 8560,
        name: "Goodison Park",
        address: "Goodison Road",
        city: "Liverpool",
        capacity: 40569,
        surface: "grass",
        image: "https:media-2.api-sports.io/football/venues/8560.png"
      }
    },
    {
      team: {
        id: 46,
        name: "Leicester",
        code: "LEI",
        country: "England",
        founded: 1884,
        national: false,
        logo: "https:media-1.api-sports.io/football/teams/46.png"
      },
      venue: {
        id: 547,
        name: "King Power Stadium",
        address: "Filbert Way",
        city: "Leicester, Leicestershire",
        capacity: 34310,
        surface: "grass",
        image: "https:media-2.api-sports.io/football/venues/547.png"
      }
    },
    {
      team: {
        id: 47,
        name: "Tottenham",
        code: "TOT",
        country: "England",
        founded: 1882,
        national: false,
        logo: "https:media-2.api-sports.io/football/teams/47.png"
      },
      venue: {
        id: 593,
        name: "Tottenham Hotspur Stadium",
        address: "Bill Nicholson Way, 748 High Road",
        city: "London",
        capacity: 62850,
        surface: "grass",
        image: "https:media-2.api-sports.io/football/venues/593.png"
      }
    },
    {
      team: {
        id: 48,
        name: "West Ham",
        code: "WES",
        country: "England",
        founded: 1895,
        national: false,
        logo: "https:media-1.api-sports.io/football/teams/48.png"
      },
      venue: {
        id: 598,
        name: "London Stadium",
        address: "Marshgate Lane, Stratford",
        city: "London",
        capacity: 62500,
        surface: "grass",
        image: "https:media-2.api-sports.io/football/venues/598.png"
      }
    },
    {
      team: {
        id: 49,
        name: "Chelsea",
        code: "CHE",
        country: "England",
        founded: 1905,
        national: false,
        logo: "https:media-2.api-sports.io/football/teams/49.png"
      },
      venue: {
        id: 519,
        name: "Stamford Bridge",
        address: "Fulham Road",
        city: "London",
        capacity: 41841,
        surface: "grass",
        image: "https:media-1.api-sports.io/football/venues/519.png"
      }
    },
    {
      team: {
        id: 50,
        name: "Manchester City",
        code: "MAC",
        country: "England",
        founded: 1880,
        national: false,
        logo: "https:media-3.api-sports.io/football/teams/50.png"
      },
      venue: {
        id: 555,
        name: "Etihad Stadium",
        address: "Rowsley Street",
        city: "Manchester",
        capacity: 55097,
        surface: "grass",
        image: "https:media-3.api-sports.io/football/venues/555.png"
      }
    },
    {
      team: {
        id: 51,
        name: "Brighton",
        code: "BRI",
        country: "England",
        founded: 1901,
        national: false,
        logo: "https:media-3.api-sports.io/football/teams/51.png"
      },
      venue: {
        id: 508,
        name: "The American Express Community Stadium",
        address: "Village Way",
        city: "Falmer, East Sussex",
        capacity: 31800,
        surface: "grass",
        image: "https:media-2.api-sports.io/football/venues/508.png"
      }
    },
    {
      team: {
        id: 52,
        name: "Crystal Palace",
        code: "CRY",
        country: "England",
        founded: 1905,
        national: false,
        logo: "https:media-1.api-sports.io/football/teams/52.png"
      },
      venue: {
        id: 525,
        name: "Selhurst Park",
        address: "Holmesdale Road",
        city: "London",
        capacity: 26309,
        surface: "grass",
        image: "https:media-1.api-sports.io/football/venues/525.png"
      }
    },
    {
      team: {
        id: 55,
        name: "Brentford",
        code: "BRE",
        country: "England",
        founded: 1889,
        national: false,
        logo: "https:media-2.api-sports.io/football/teams/55.png"
      },
      venue: {
        id: 10503,
        name: "Gtech Community Stadium",
        address: "166 Lionel Rd N, Brentford",
        city: "Brentford, Middlesex",
        capacity: 17250,
        surface: "grass",
        image: "https:media-1.api-sports.io/football/venues/10503.png"
      }
    },
    {
      team: {
        id: 63,
        name: "Leeds",
        code: "LEE",
        country: "England",
        founded: 1919,
        national: false,
        logo: "https:media-3.api-sports.io/football/teams/63.png"
      },
      venue: {
        id: 546,
        name: "Elland Road",
        address: "Elland Road",
        city: "Leeds, West Yorkshire",
        capacity: 40204,
        surface: "grass",
        image: "https:media-2.api-sports.io/football/venues/546.png"
      }
    },
    {
      team: {
        id: 66,
        name: "Aston Villa",
        code: "AST",
        country: "England",
        founded: 1874,
        national: false,
        logo: "https:media-1.api-sports.io/football/teams/66.png"
      },
      venue: {
        id: 495,
        name: "Villa Park",
        address: "Trinity Road",
        city: "Birmingham",
        capacity: 42788,
        surface: "grass",
        image: "https:media-2.api-sports.io/football/venues/495.png"
      }
    },
    {
      team: {
        id: 71,
        name: "Norwich",
        code: "NOR",
        country: "England",
        founded: 1902,
        national: false,
        logo: "https:media-2.api-sports.io/football/teams/71.png"
      },
      venue: {
        id: 565,
        name: "Carrow Road",
        address: "Carrow Road",
        city: "Norwich, Norfolk",
        capacity: 27606,
        surface: "grass",
        image: "https:media-2.api-sports.io/football/venues/565.png"
      }
    }
  ]
];

export const getLeagueData = (response: ResponseData[]): League[] => {
  const leagues: League[] = response.map((item) => item.league);
  return leagues;
};

// Exemplo de uso
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
export const graphData  = {
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