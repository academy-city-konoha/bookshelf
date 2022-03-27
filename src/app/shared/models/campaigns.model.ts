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
    label: '하얀주인의 메아리',
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
      },
    ]
  },
  {
    title: 'FUTURE',
    label: '미래로 보낸 편지',
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
    label: '모험의 시작',
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
    label: '숲의 아이',
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
    label: '동료 모집',
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
    title: 'TEST2',
    label: 'FVTT테스트',
    platform: 'FVTTDWDS',
    npcs: [
    ],
    logs: [
      {
        index: '1',
        name: '1',
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
