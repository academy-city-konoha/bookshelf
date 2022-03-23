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
