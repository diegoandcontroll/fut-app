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