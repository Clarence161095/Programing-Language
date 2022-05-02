import { atom } from 'recoil';
import { randomNumber } from '../utilities/MathFunc';

export const myCurrentTeamPokemon = atom({
  key: 'myCurrentTeamPokemon',
  default: [
    {
      id: randomNumber(649),
    },
    {
      id: randomNumber(649),
    },
    {
      id: randomNumber(649),
    },
    {
      id: randomNumber(649),
    },
    {
      id: randomNumber(649),
    },
    {
      id: randomNumber(649),
    },
  ],
});

export const enemyCurrentTeamPokemon = atom({
  key: 'enemyCurrentTeamPokemon',
  default: [
    {
      id: randomNumber(649),
    },
    {
      id: randomNumber(649),
    },
    {
      id: randomNumber(649),
    },
    {
      id: randomNumber(649),
    },
    {
      id: randomNumber(649),
    },
    {
      id: randomNumber(649),
    },
  ],
});

export const throwPokeball = atom({
  key: 'throwPokeball',
  default: false,
});

export const attackXXX = [
  { showAttack: true, hitType: 'ice' }, //Freeze
  { showAttack: true, hitType: 'fire' }, // Burn
  { showAttack: true, hitType: 'poison' }, // Poison
  { showAttack: true, hitType: 'electric' }, // Paralysis
  { showAttack: true, hitType: 'psychic' }, // Sleep
  { showAttack: true, hitType: 'fighting' }, // Bound (Trói)
];

export const enemyAttackXXX = [
  { showAttack: true, hitType: 'ground' }, // Identified
  { showAttack: true, hitType: 'dark' }, // Curse (nguyền rủa)
  { showAttack: true, hitType: 'grass' }, // Leech Seed (hạt mầm)
  { showAttack: true, hitType: 'fairy' }, // Infatuation (Say mê)
  { showAttack: true, hitType: 'water' }, // Aqua Rin (Vòng nước)
  { showAttack: true, hitType: 'flying' }, // Confusion (Hoang mang)
];

export const myTeamEffectAttackState = atom({
  key: 'myTeamEffectAttackState',
  default: [],
});

export const enemyTeamEffectAttackState = atom({
  key: 'enemyTeamEffectAttackState',
  default: [],
});
