const POKEMON_TYPES_LANG = [
  {
    english: 'Normal',
    chinese: '一般',
    japanese: 'ノーマル',
  },
  {
    english: 'Fighting',
    chinese: '格斗',
    japanese: 'かくとう',
  },
  {
    english: 'Flying',
    chinese: '飞行',
    japanese: 'ひこう',
  },
  {
    english: 'Poison',
    chinese: '毒',
    japanese: 'どく',
  },
  {
    english: 'Ground',
    chinese: '地上',
    japanese: 'じめん',
  },
  {
    english: 'Rock',
    chinese: '岩石',
    japanese: 'いわ',
  },
  {
    english: 'Bug',
    chinese: '虫',
    japanese: 'むし',
  },
  {
    english: 'Ghost',
    chinese: '幽灵',
    japanese: 'ゴースト',
  },
  {
    english: 'Steel',
    chinese: '钢',
    japanese: 'はがね',
  },
  {
    english: 'Fire',
    chinese: '炎',
    japanese: 'ほのお',
  },
  {
    english: 'Water',
    chinese: '水',
    japanese: 'みず',
  },
  {
    english: 'Grass',
    chinese: '草',
    japanese: 'くさ',
  },
  {
    english: 'Electric',
    chinese: '电',
    japanese: 'でんき',
  },
  {
    english: 'Psychic',
    chinese: '超能',
    japanese: 'エスパー',
  },
  {
    english: 'Ice',
    chinese: '冰',
    japanese: 'こおり',
  },
  {
    english: 'Dragon',
    chinese: '龙',
    japanese: 'ドラゴン',
  },
  {
    english: 'Dark',
    chinese: '恶',
    japanese: 'あく',
  },
  {
    english: 'Fairy',
    chinese: '妖精',
    japanese: 'フェアリー',
  },
];

const POKEMON_TYPES = [
  {
    name: 'Bug',
    atk_effectives: [
      ['Bug', 1],
      ['Dark', 2],
      ['Dragon', 1],
      ['Electric', 1],
      ['Fairy', 0.5],
      ['Fighting', 0.5],
      ['Fire', 0.5],
      ['Flying', 0.5],
      ['Ghost', 0.5],
      ['Grass', 2],
      ['Ground', 1],
      ['Ice', 1],
      ['Normal', 1],
      ['Poison', 0.5],
      ['Psychic', 2],
      ['Rock', 1],
      ['Steel', 0.5],
      ['Water', 1],
    ],
    genfamily: ['RB', 'GS', 'RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Dark',
    atk_effectives: [
      ['Bug', 1],
      ['Dark', 0.5],
      ['Dragon', 1],
      ['Electric', 1],
      ['Fairy', 0.5],
      ['Fighting', 0.5],
      ['Fire', 1],
      ['Flying', 1],
      ['Ghost', 2],
      ['Grass', 1],
      ['Ground', 1],
      ['Ice', 1],
      ['Normal', 1],
      ['Poison', 1],
      ['Psychic', 2],
      ['Rock', 1],
      ['Steel', 1],
      ['Water', 1],
    ],
    genfamily: ['GS', 'RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Dragon',
    atk_effectives: [
      ['Bug', 1],
      ['Dark', 1],
      ['Dragon', 2],
      ['Electric', 1],
      ['Fairy', 0],
      ['Fighting', 1],
      ['Fire', 1],
      ['Flying', 1],
      ['Ghost', 1],
      ['Grass', 1],
      ['Ground', 1],
      ['Ice', 1],
      ['Normal', 1],
      ['Poison', 1],
      ['Psychic', 1],
      ['Rock', 1],
      ['Steel', 0.5],
      ['Water', 1],
    ],
    genfamily: ['RB', 'GS', 'RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Electric',
    atk_effectives: [
      ['Bug', 1],
      ['Dark', 1],
      ['Dragon', 0.5],
      ['Electric', 0.5],
      ['Fairy', 1],
      ['Fighting', 1],
      ['Fire', 1],
      ['Flying', 2],
      ['Ghost', 1],
      ['Grass', 0.5],
      ['Ground', 0],
      ['Ice', 1],
      ['Normal', 1],
      ['Poison', 1],
      ['Psychic', 1],
      ['Rock', 1],
      ['Steel', 1],
      ['Water', 2],
    ],
    genfamily: ['RB', 'GS', 'RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Fairy',
    atk_effectives: [
      ['Bug', 1],
      ['Dark', 2],
      ['Dragon', 2],
      ['Electric', 1],
      ['Fairy', 1],
      ['Fighting', 2],
      ['Fire', 0.5],
      ['Flying', 1],
      ['Ghost', 1],
      ['Grass', 1],
      ['Ground', 1],
      ['Ice', 1],
      ['Normal', 1],
      ['Poison', 0.5],
      ['Psychic', 1],
      ['Rock', 1],
      ['Steel', 0.5],
      ['Water', 1],
    ],
    genfamily: ['XY'],
  },
  {
    name: 'Fighting',
    atk_effectives: [
      ['Bug', 0.5],
      ['Dark', 2],
      ['Dragon', 1],
      ['Electric', 1],
      ['Fairy', 0.5],
      ['Fighting', 1],
      ['Fire', 1],
      ['Flying', 0.5],
      ['Ghost', 0],
      ['Grass', 1],
      ['Ground', 1],
      ['Ice', 2],
      ['Normal', 2],
      ['Poison', 0.5],
      ['Psychic', 0.5],
      ['Rock', 2],
      ['Steel', 2],
      ['Water', 1],
    ],
    genfamily: ['RB', 'GS', 'RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Fire',
    atk_effectives: [
      ['Bug', 2],
      ['Dark', 1],
      ['Dragon', 0.5],
      ['Electric', 1],
      ['Fairy', 1],
      ['Fighting', 1],
      ['Fire', 0.5],
      ['Flying', 1],
      ['Ghost', 1],
      ['Grass', 2],
      ['Ground', 1],
      ['Ice', 2],
      ['Normal', 1],
      ['Poison', 1],
      ['Psychic', 1],
      ['Rock', 0.5],
      ['Steel', 2],
      ['Water', 0.5],
    ],
    genfamily: ['RB', 'GS', 'RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Flying',
    atk_effectives: [
      ['Bug', 2],
      ['Dark', 1],
      ['Dragon', 1],
      ['Electric', 0.5],
      ['Fairy', 1],
      ['Fighting', 2],
      ['Fire', 1],
      ['Flying', 1],
      ['Ghost', 1],
      ['Grass', 2],
      ['Ground', 1],
      ['Ice', 1],
      ['Normal', 1],
      ['Poison', 1],
      ['Psychic', 1],
      ['Rock', 0.5],
      ['Steel', 0.5],
      ['Water', 1],
    ],
    genfamily: ['RB', 'GS', 'RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Ghost',
    atk_effectives: [
      ['Bug', 1],
      ['Dark', 0.5],
      ['Dragon', 1],
      ['Electric', 1],
      ['Fairy', 1],
      ['Fighting', 1],
      ['Fire', 1],
      ['Flying', 1],
      ['Ghost', 2],
      ['Grass', 1],
      ['Ground', 1],
      ['Ice', 1],
      ['Normal', 0],
      ['Poison', 1],
      ['Psychic', 2],
      ['Rock', 1],
      ['Steel', 1],
      ['Water', 1],
    ],
    genfamily: ['RB', 'GS', 'RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Grass',
    atk_effectives: [
      ['Bug', 0.5],
      ['Dark', 1],
      ['Dragon', 0.5],
      ['Electric', 1],
      ['Fairy', 1],
      ['Fighting', 1],
      ['Fire', 0.5],
      ['Flying', 0.5],
      ['Ghost', 1],
      ['Grass', 0.5],
      ['Ground', 2],
      ['Ice', 1],
      ['Normal', 1],
      ['Poison', 0.5],
      ['Psychic', 1],
      ['Rock', 2],
      ['Steel', 0.5],
      ['Water', 2],
    ],
    genfamily: ['RB', 'GS', 'RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Ground',
    atk_effectives: [
      ['Bug', 0.5],
      ['Dark', 1],
      ['Dragon', 1],
      ['Electric', 2],
      ['Fairy', 1],
      ['Fighting', 1],
      ['Fire', 2],
      ['Flying', 0],
      ['Ghost', 1],
      ['Grass', 0.5],
      ['Ground', 1],
      ['Ice', 1],
      ['Normal', 1],
      ['Poison', 2],
      ['Psychic', 1],
      ['Rock', 2],
      ['Steel', 2],
      ['Water', 1],
    ],
    genfamily: ['RB', 'GS', 'RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Ice',
    atk_effectives: [
      ['Bug', 1],
      ['Dark', 1],
      ['Dragon', 2],
      ['Electric', 1],
      ['Fairy', 1],
      ['Fighting', 1],
      ['Fire', 0.5],
      ['Flying', 2],
      ['Ghost', 1],
      ['Grass', 2],
      ['Ground', 2],
      ['Ice', 0.5],
      ['Normal', 1],
      ['Poison', 1],
      ['Psychic', 1],
      ['Rock', 1],
      ['Steel', 0.5],
      ['Water', 0.5],
    ],
    genfamily: ['RB', 'GS', 'RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Normal',
    atk_effectives: [
      ['Bug', 1],
      ['Dark', 1],
      ['Dragon', 1],
      ['Electric', 1],
      ['Fairy', 1],
      ['Fighting', 1],
      ['Fire', 1],
      ['Flying', 1],
      ['Ghost', 0],
      ['Grass', 1],
      ['Ground', 1],
      ['Ice', 1],
      ['Normal', 1],
      ['Poison', 1],
      ['Psychic', 1],
      ['Rock', 0.5],
      ['Steel', 0.5],
      ['Water', 1],
    ],
    genfamily: ['RB', 'GS', 'RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Poison',
    atk_effectives: [
      ['Bug', 1],
      ['Dark', 1],
      ['Dragon', 1],
      ['Electric', 1],
      ['Fairy', 2],
      ['Fighting', 1],
      ['Fire', 1],
      ['Flying', 1],
      ['Ghost', 0.5],
      ['Grass', 2],
      ['Ground', 0.5],
      ['Ice', 1],
      ['Normal', 1],
      ['Poison', 0.5],
      ['Psychic', 1],
      ['Rock', 0.5],
      ['Steel', 0],
      ['Water', 1],
    ],
    genfamily: ['RB', 'GS', 'RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Psychic',
    atk_effectives: [
      ['Bug', 1],
      ['Dark', 0],
      ['Dragon', 1],
      ['Electric', 1],
      ['Fairy', 1],
      ['Fighting', 2],
      ['Fire', 1],
      ['Flying', 1],
      ['Ghost', 1],
      ['Grass', 1],
      ['Ground', 1],
      ['Ice', 1],
      ['Normal', 1],
      ['Poison', 2],
      ['Psychic', 0.5],
      ['Rock', 1],
      ['Steel', 0.5],
      ['Water', 1],
    ],
    genfamily: ['RB', 'GS', 'RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Rock',
    atk_effectives: [
      ['Bug', 2],
      ['Dark', 1],
      ['Dragon', 1],
      ['Electric', 1],
      ['Fairy', 1],
      ['Fighting', 0.5],
      ['Fire', 2],
      ['Flying', 2],
      ['Ghost', 1],
      ['Grass', 1],
      ['Ground', 0.5],
      ['Ice', 2],
      ['Normal', 1],
      ['Poison', 1],
      ['Psychic', 1],
      ['Rock', 1],
      ['Steel', 0.5],
      ['Water', 1],
    ],
    genfamily: ['RB', 'GS', 'RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Steel',
    atk_effectives: [
      ['Bug', 1],
      ['Dark', 1],
      ['Dragon', 1],
      ['Electric', 0.5],
      ['Fairy', 2],
      ['Fighting', 1],
      ['Fire', 0.5],
      ['Flying', 1],
      ['Ghost', 1],
      ['Grass', 1],
      ['Ground', 1],
      ['Ice', 2],
      ['Normal', 1],
      ['Poison', 1],
      ['Psychic', 1],
      ['Rock', 2],
      ['Steel', 0.5],
      ['Water', 0.5],
    ],
    genfamily: ['GS', 'RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Water',
    atk_effectives: [
      ['Bug', 1],
      ['Dark', 1],
      ['Dragon', 0.5],
      ['Electric', 1],
      ['Fairy', 1],
      ['Fighting', 1],
      ['Fire', 2],
      ['Flying', 1],
      ['Ghost', 1],
      ['Grass', 0.5],
      ['Ground', 2],
      ['Ice', 1],
      ['Normal', 1],
      ['Poison', 1],
      ['Psychic', 1],
      ['Rock', 2],
      ['Steel', 1],
      ['Water', 0.5],
    ],
    genfamily: ['RB', 'GS', 'RS', 'DP', 'BW', 'XY'],
  },
];

export default POKEMON_TYPES;
