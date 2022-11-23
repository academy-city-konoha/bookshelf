export interface Campaign {
  title: string;
  label: string;
  platform: string;
  npcs: NPC[];
  logs: Log[];
}

export interface NPC {
  name: string;
  avatar: string;
}

export interface Log {
  index: string;
  name: string;
  images?: Image[];
  interfaces?: Image[];
}

export interface Image {
  id: string;
  file: string;
}

export const Campaigns = [
  {
    title: 'OPEN',
    label: '코노하 중앙도서관',
    platform: 'roll20',
    npcs: [
      {
        name: '',
        avatar: '',
      },
    ],
    logs: [
      {
        index: '1',
        name: '자료열람실 안내문',
        images: [
          {
            id: `Myh32HT9QbLwiaINwIV`,
            file: '0.jpg',
          },
        ],
        interfaces: [
          {
            id: ``,
            file: '',
          },
        ],
      },
    ]
  },
  {
    title: 'ANOM',
    label: '마나이상현상 사전',
    platform: 'roll20',
    npcs: [
      {
        name: '',
        avatar: '',
      },
    ],
    logs: [
      {
        index: '1',
        name: '마인드 웜',
        images: [
          {
            id: `MyhL2_Vvo5KWJRd9Opj`,
            file: '0.jpg',
          },
          {
            id: `MyhLBEHne3Gwdi8fulX`,
            file: '1.jpg',
          },
          {
            id: `MyhLE4Nnvw_rYIRD3sA`,
            file: '2.jpg',
          },
        ],
        interfaces: [
          {
            id: `MyhL2_Vvo5KWJRd9Opj`,
            file: '0.jpg',
          },
        ],
      },
    ]
  },
  {
    title: 'WHITE',
    label: '하얀주인의 메아리(2nd 주말팀 01)',
    platform: 'roll20',
    npcs: [
      {
        name: '',
        avatar: '',
      },
    ],
    logs: [
      {
        index: '1',
        name: '첫 만남',
      },
      {
        index: '2',
        name: '1화',
      },
      {
        index: '3',
        name: '2화',
      },
      {
        index: '4',
        name: '3화',
      },
      {
        index: '5',
        name: '4화',
      },
      {
        index: '6',
        name: '5화',
      },
      {
        index: '7',
        name: '6화',
      },
      {
        index: '8',
        name: '에필로그',
      }
    ]
  },
  {
    title: 'FUTURE',
    label: '미래로 보낸 편지(2nd 주말팀 02)',
    platform: 'roll20',
    npcs: [
      {
        name: '[NPC]실마',
        avatar: 'NPC118-.jpg',
      },
      {
        name: '케이',
        avatar: 'pc_kay.png',
      },
    ],
    logs: [
      {
        index: '1',
        name: '1화',
      },
      {
        index: '2',
        name: '2화',
      },
      {
        index: '3',
        name: '3화',
      },
      {
        index: '4',
        name: '4화',
      },
      {
        index: '5',
        name: '5화',
      },
      {
        index: '6',
        name: '6화',
      },
      {
        index: '7',
        name: '7화',
      },
      {
        index: '8',
        name: '8화',
      },
      {
        index: '9',
        name: '9화',
      },
      {
        index: '10',
        name: '10화',
      },
      {
        index: '11',
        name: '11화',
      },
      {
        index: '12',
        name: '12화',
      },
      {
        index: '13',
        name: '13화',
      },
      {
        index: '14',
        name: '14화',
      },
      {
        index: '15',
        name: '15화',
      },
      {
        index: '16',
        name: '16화',
      },
      {
        index: '17',
        name: '17화',
      },
      {
        index: '18',
        name: '18화',
      },
      {
        index: '19',
        name: '19화',
      },
      {
        index: '20',
        name: '20화',
      }
    ]
  },
  {
    title: 'MOHEOM',
    label: '모험의 시작(2nd 주말팀 03)',
    platform: 'roll20',
    npcs: [
      {
        name: '[NPC]실마',
        avatar: 'NPC118-.jpg',
      },
      {
        name: '케이',
        avatar: 'pc_kay.png',
      },
    ],
    logs: [
      {
        index: '1',
        name: '1화',
      },
      {
        index: '2',
        name: '2화',
      },
      {
        index: '3',
        name: '3화',
      },
      {
        index: '4',
        name: '4화',
      }
    ]
  },
  {
    title: 'FOREST',
    label: '숲의 아이(2nd 주말팀 04)',
    platform: 'roll20',
    npcs: [
      {
        name: '[NPC]실마',
        avatar: 'NPC118-.jpg',
      },
      {
        name: '케이',
        avatar: 'pc_kay.png',
      },
    ],
    logs: [
      {
        index: '1',
        name: '1화',
      },
      {
        index: '2',
        name: '2화',
      },
      {
        index: '3',
        name: '3화',
      },
      {
        index: '4',
        name: '4화',
      },
      {
        index: '5',
        name: '5화',
      },
      {
        index: '6',
        name: '6화',
      },
      {
        index: '7',
        name: '7화',
      }
    ]
  },
  {
    title: 'RECRUIT',
    label: '동료 모집(2nd 주말팀 05)',
    platform: 'roll20',
    npcs: [
      {
        name: '[NPC]실마',
        avatar: 'NPC118-.jpg',
      },
      {
        name: '케이',
        avatar: 'pc_kay.png',
      },
    ],
    logs: [
      {
        index: '1',
        name: '1화',
      },
      {
        index: '2',
        name: '2화',
      },
      {
        index: '3',
        name: '3화',
      }
    ]
  },
  {
    title: 'REDLIGHT',
    label: '붉은 빛(2nd 주말팀 06)',
    platform: 'roll20',
    npcs: [
    ],
    logs: [
      {
        index: '1',
        name: '1화',
      },
      {
        index: '2',
        name: '2화',
      },
      {
        index: '3',
        name: '3화',
      },
      {
        index: '4',
        name: '4화',
      },
      {
        index: '5',
        name: '5화',
      }
    ]
  },
  {
    title: 'MAGICALGIRL',
    label: '마법소녀의 비밀(2nd 주말팀 외전)',
    platform: 'roll20',
    npcs: [
    ],
    logs: [
      {
        index: '1',
        name: '1화',
      },
      {
        index: '2',
        name: '2화',
      },
      {
        index: '3',
        name: '3화',
      }
    ]
  },
  {
    title: 'REORGANIZE',
    label: '재정비(2nd 주말팀 07)',
    platform: 'roll20',
    npcs: [
    ],
    logs: [
      {
        index: '1',
        name: '1화',
      }
    ]
  },
  {
    title: 'DREAMWAY',
    label: '꿈으로 가는 길(2nd 주말팀 08)',
    platform: 'roll20',
    npcs: [
    ],
    logs: [
      {
        index: '1',
        name: '1화',
      },
      {
        index: '2',
        name: '2화',
      },
      {
        index: '3',
        name: '3화',
      },
      {
        index: '4',
        name: '4화',
      },
      {
        index: '5',
        name: '5화',
      }
    ]
  },
  {
    title: 'FAIRYYFIREWKEND',
    label: '요정의 불꽃(2nd 주말팀 09)',
    platform: 'roll20',
    npcs: [
    ],
    logs: [
      {
        index: '1',
        name: '1화',
      },
      {
        index: '2',
        name: '2화',
      },
      {
        index: '3',
        name: '3화',
      }
    ]
  },
  {
    title: '2NDWEEKEND10',
    label: '제목 미정(2nd 주말팀 10)',
    platform: 'roll20',
    npcs: [
    ],
    logs: [
      {
        index: '1',
        name: '1화',
      },
      {
        index: '2',
        name: '2화',
      },
      {
        index: '3',
        name: '3화',
      },
      {
        index: '4',
        name: '4화',
      },
      {
        index: '5',
        name: '5화',
      },
      {
        index: '6',
        name: '6화',
      },
      {
        index: '7',
        name: '7화',
      },
      {
        index: '8',
        name: '8화',
      },
      {
        index: '9',
        name: '9화',
      },
      {
        index: '10',
        name: '10화',
      },
      {
        index: '11',
        name: '11화',
      },
      {
        index: '12',
        name: '12화',
      },
      {
        index: '13',
        name: '13화',
      },
      {
        index: '14',
        name: '14화',
      },
      {
        index: '15',
        name: '15화',
      },
      {
        index: '16',
        name: '16화',
      },
      {
        index: '17',
        name: '17화',
      },
      {
        index: '18',
        name: '18화',
      },
      {
        index: '19',
        name: '19화',
      },
      {
        index: '20',
        name: '20화',
      },
      {
        index: '21',
        name: '21화',
      },
      {
        index: '22',
        name: '22화',
      },
      {
        index: '23',
        name: '23화',
      },
      {
        index: '24',
        name: '24화',
      },
      {
        index: '25',
        name: '25화',
      },
      {
        index: '26',
        name: '26화',
      },
      {
        index: '27',
        name: '27화',
      },
      {
        index: '28',
        name: '28화',
      }.
      {
        index: '29',
        name: '29화',
      },
      {
        index: '30',
        name: '30화',
      },
      {
        index: '31',
        name: '31화',
      },
      {
        index: '32',
        name: '32화',
      },
      {
        index: '33',
        name: '33화',
      },
      {
        index: '34',
        name: '34화',
      },
      {
        index: '35',
        name: '35화',
      },
      {
        index: '36',
        name: '36화',
      },
      {
        index: '37',
        name: '37화',
      },
      {
        index: '38',
        name: '38화',
      },
      {
        index: '39',
        name: '39화',
      },
      {
        index: '40',
        name: '40화',
      },
      {
        index: '41',
        name: '41화',
      },
      {
        index: '42',
        name: '42화',
      },
      {
        index: '43',
        name: '43화',
      },
      {
        index: '44',
        name: '44화',
      },
      {
        index: '45',
        name: '45화',
      },
      {
        index: '46',
        name: '46화',
      },
      {
        index: '47',
        name: '47화',
      },
      {
        index: '48',
        name: '48화',
      },
      {
        index: '49',
        name: '49화',
      },
      {
        index: '50',
        name: '50화',
      }
    ]
  },
  {
    title: '',
    label: '',
    platform: 'roll20',
    npcs: [
      {
        name: '',
        avatar: '',
      },
    ],
    logs: [
      {
        index: '',
        name: '',
        images: [
          {
            id: ``,
            file: '',
          },
        ],
        interfaces: [
          {
            id: ``,
            file: '',
          },
        ],
      },
    ]
  },
  {
    title: '',
    label: '',
    platform: 'FVTT',
    npcs: [
    ],
    logs: [
      {
        index: '',
        name: '',
        images: [
          {
            id: ``,
            file: '',
          },
        ],
        interfaces: [
          {
            id: ``,
            file: '',
          },
        ],
      },
    ]
  }
]
