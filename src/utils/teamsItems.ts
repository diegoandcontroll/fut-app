import { Player } from "@/types";

export function extractPlayerData(response: any[]): Player[] {
  const playerData: Player[] = [];

  for (const item of response) {
    if (item.hasOwnProperty("player")) {
      const player = item.player;
      playerData.push(player);
    }
  }

  return playerData;
}




export const responseGraph = [
	{
		league: {
			id: 76,
			name: 'Serie D',
			country: 'Brazil',
			logo: 'https://media-2.api-sports.io/football/leagues/76.png',
			flag: 'https://media-3.api-sports.io/flags/br.svg',
			season: 2021,
		},
		team: {
			id: 1214,
			name: 'Portuguesa',
			logo: 'https://media-3.api-sports.io/football/teams/1214.png',
		},
		form: 'DDWDWLWWDWLDWDLW',
		fixtures: {
			played: {
				home: 8,
				away: 8,
				total: 16,
			},
			wins: {
				home: 5,
				away: 2,
				total: 7,
			},
			draws: {
				home: 2,
				away: 4,
				total: 6,
			},
			loses: {
				home: 1,
				away: 2,
				total: 3,
			},
		},
		goals: {
			for: {
				total: {
					home: 12,
					away: 9,
					total: 21,
				},
				average: {
					home: '1.5',
					away: '1.1',
					total: '1.3',
				},
				minute: {
					'0-15': {
						total: null,
						percentage: null,
					},
					'16-30': {
						total: 1,
						percentage: '5.00%',
					},
					'31-45': {
						total: 5,
						percentage: '25.00%',
					},
					'46-60': {
						total: 4,
						percentage: '20.00%',
					},
					'61-75': {
						total: 5,
						percentage: '25.00%',
					},
					'76-90': {
						total: 2,
						percentage: '10.00%',
					},
					'91-105': {
						total: 3,
						percentage: '15.00%',
					},
					'106-120': {
						total: null,
						percentage: null,
					},
				},
			},
			against: {
				total: {
					home: 4,
					away: 9,
					total: 13,
				},
				average: {
					home: '0.5',
					away: '1.1',
					total: '0.8',
				},
				minute: {
					'0-15': {
						total: 1,
						percentage: '7.14%',
					},
					'16-30': {
						total: 4,
						percentage: '28.57%',
					},
					'31-45': {
						total: 1,
						percentage: '7.14%',
					},
					'46-60': {
						total: 2,
						percentage: '14.29%',
					},
					'61-75': {
						total: 3,
						percentage: '21.43%',
					},
					'76-90': {
						total: 3,
						percentage: '21.43%',
					},
					'91-105': {
						total: null,
						percentage: null,
					},
					'106-120': {
						total: null,
						percentage: null,
					},
				},
			},
		},
		biggest: {
			streak: {
				wins: 2,
				draws: 2,
				loses: 1,
			},
			wins: {
				home: '3-0',
				away: '2-3',
			},
			loses: {
				home: '0-1',
				away: '2-1',
			},
			goals: {
				for: {
					home: 3,
					away: 3,
				},
				against: {
					home: 2,
					away: 2,
				},
			},
		},
		clean_sheet: {
			home: 5,
			away: 2,
			total: 7,
		},
		failed_to_score: {
			home: 1,
			away: 2,
			total: 3,
		},
		penalty: {
			scored: {
				total: 1,
				percentage: '100.00%',
			},
			missed: {
				total: 0,
				percentage: '0%',
			},
			total: 1,
		},
		lineups: [],
		cards: {
			yellow: {
				'0-15': {
					total: null,
					percentage: null,
				},
				'16-30': {
					total: null,
					percentage: null,
				},
				'31-45': {
					total: null,
					percentage: null,
				},
				'46-60': {
					total: 1,
					percentage: '100.00%',
				},
				'61-75': {
					total: null,
					percentage: null,
				},
				'76-90': {
					total: null,
					percentage: null,
				},
				'91-105': {
					total: null,
					percentage: null,
				},
				'106-120': {
					total: null,
					percentage: null,
				},
			},
			red: {
				'0-15': {
					total: null,
					percentage: null,
				},
				'16-30': {
					total: null,
					percentage: null,
				},
				'31-45': {
					total: null,
					percentage: null,
				},
				'46-60': {
					total: 1,
					percentage: '50.00%',
				},
				'61-75': {
					total: null,
					percentage: null,
				},
				'76-90': {
					total: 1,
					percentage: '50.00%',
				},
				'91-105': {
					total: null,
					percentage: null,
				},
				'106-120': {
					total: null,
					percentage: null,
				},
			},
		}
	}
]