export type Team = {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
};
export type ObjTeam = Pick<Team, 'id' | 'name' | 'logo'>;
export type OriginalData = {
  team: Team;
  venue: {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string;
  };
};
export type League = {
  id: number;
  name: string;
  type: string;
  logo: string;
};

export type LeagueObj = Pick<League, 'id' | 'logo' | 'name'>

export type Country = {
  name: string;
  code: string;
  flag: string;
};

export type Season = {
  year: number;
  start: string;
  end: string;
  current: boolean;
  coverage: {
    fixtures: {
      events: boolean;
      lineups: boolean;
      statistics_fixtures: boolean;
      statistics_players: boolean;
    };
    standings: boolean;
    players: boolean;
    top_scorers: boolean;
    top_assists: boolean;
    top_cards: boolean;
    injuries: boolean;
    predictions: boolean;
    odds: boolean;
  };
};

export type ResponseData = {
  league: League;
  country: Country;
  seasons: Season[];
};

export interface Player {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: {
    date: string;
    place: string;
    country: string;
  };
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string;
}
export interface ResponseDataGraph {
  league: {
    name: string;
  };
  goals: {
    for: {
      total: number;
      home: number;
      away: number;
    };
    against: {
      total: number;
      home: number;
      away: number;
    };
  };
}
// export interface PropChart {
//   goals: {
//     for: {
//       total: {
//         home: number;
//         away: number;
//         total: number;
//       };
//       average: {
//         home: string;
//         away: string;
//         total: string;
//       };
//     };
//     against: {
//       total: {
//         home: number;
//         away: number;
//         total: number;
//       };
//       average: {
//         home: string;
//         away: string;
//         total: string;
//       };
//     };
//   };
// }
export interface TeamData {
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  form: string;
  fixtures: {
    played: {
      home: number;
      away: number;
      total: number;
    };
    wins: {
      home: number;
      away: number;
      total: number;
    };
    draws: {
      home: number;
      away: number;
      total: number;
    };
    loses: {
      home: number;
      away: number;
      total: number;
    };
  };
  goals: {
    for: {
      total: {
        home: number;
        away: number;
        total: number;
      };
      average: {
        home: string;
        away: string;
        total: string;
      };
      minute: {
        [key: string]: {
          total: number | null;
          percentage: string | null;
        };
      };
    };
    against: {
      total: {
        home: number;
        away: number;
        total: number;
      };
      average: {
        home: string;
        away: string;
        total: string;
      };
      minute: {
        [key: string]: {
          total: number | null;
          percentage: string | null;
        };
      };
    };
  };
  biggest: {
    streak: {
      wins: number;
      draws: number;
      loses: number;
    };
    wins: {
      home: string;
      away: string;
    };
    loses: {
      home: string;
      away: string;
    };
    goals: {
      for: {
        home: number;
        away: number;
      };
      against: {
        home: number;
        away: number;
      };
    };
  };
  clean_sheet: {
    home: number;
    away: number;
    total: number;
  };
  failed_to_score: {
    home: number;
    away: number;
    total: number;
  };
  penalty: {
    scored: {
      total: number;
      percentage: string;
    };
    missed: {
      total: number;
      percentage: string;
    };
    total: number;
  };
  lineups: any[];
  cards: {
    yellow: {
      [key: string]: {
        total: number | null;
        percentage: string | null;
      };
    };
    red: {
      [key: string]: {
        total: number | null;
        percentage: string | null;
      };
    };
  };
}