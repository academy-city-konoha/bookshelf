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
  },
  {
    title: 'TEST',
    label: '테스트',
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
        name: '1화 테스트',
      },
      {
        index: '2',
        name: '2화 테스트, 잘린 이미지 복구 테스트',
      }
    ]
  }
]
