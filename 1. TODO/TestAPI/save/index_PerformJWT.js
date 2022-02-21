var jwt = require('jsonwebtoken');

const data = {
  user_id: '123',
  map_id: '1',
  inputData: [
    {
      data: {
        id: 'DR2',
        rarity: 'Uncommon',
        skillSlot: 1,
        stat: {
          att: { value: 40, unit: null },
          hp: { value: 84, unit: null },
          def: { value: 15, unit: null },
          crit: { value: 20, unit: 'percent' },
          avoid: { value: 8.2, unit: 'percent' },
          speed: { value: 20, unit: null },
        },
        dragonType: 'Fire',
        dragonClass: 'Ranger',
        hasBasicAbility: true,
        hasAdvancedAbility: false,
      },
      slotNumber: 2,
    },
    {
      data: {
        id: 'DR5',
        rarity: 'Common',
        skillSlot: 1,
        stat: {
          att: { value: 38.2, unit: null },
          hp: { value: 23, unit: null },
          def: { value: 15, unit: null },
          crit: { value: 13.2, unit: 'percent' },
          avoid: { value: 8.2, unit: 'percent' },
          speed: { value: 30, unit: null },
        },
        dragonType: 'Fire',
        dragonClass: 'Ranger',
        hasBasicAbility: true,
        hasAdvancedAbility: false,
      },
      slotNumber: 5,
    },
    {
      data: {
        id: 'DR6',
        rarity: 'Uncommon',
        skillSlot: 1,
        stat: {
          att: { value: 38.2, unit: null },
          hp: { value: 84, unit: null },
          def: { value: 15, unit: null },
          crit: { value: 13.3, unit: 'percent' },
          avoid: { value: 8.3, unit: 'percent' },
          speed: { value: 20, unit: null },
        },
        dragonType: 'Fire',
        dragonClass: 'Ranger',
        hasBasicAbility: true,
        hasAdvancedAbility: false,
      },
      slotNumber: 6,
    },
    {
      data: {
        id: 'DR9',
        rarity: 'Uncommon',
        skillSlot: 1,
        stat: {
          att: { value: 38.2, unit: null },
          hp: { value: 84, unit: null },
          def: { value: 15, unit: null },
          crit: { value: 13.4, unit: 'percent' },
          avoid: { value: 8.5, unit: 'percent' },
          speed: { value: 50, unit: null },
        },
        dragonType: 'Fire',
        dragonClass: 'Ranger',
        hasBasicAbility: true,
        hasAdvancedAbility: false,
      },
      slotNumber: 9,
    },
    {
      data: {
        id: 'DR7',
        rarity: 'Uncommon',
        skillSlot: 1,
        stat: {
          att: { value: 38.2, unit: null },
          hp: { value: 84, unit: null },
          def: { value: 15, unit: null },
          crit: { value: 13.6, unit: 'percent' },
          avoid: { value: 8.3, unit: 'percent' },
          speed: { value: 20, unit: null },
        },
        dragonType: 'Fire',
        dragonClass: 'Ranger',
        hasBasicAbility: true,
        hasAdvancedAbility: false,
      },
      slotNumber: 7,
    },
  ],
};

console.time('endCode')
let dataX = []
for (let i = 0; i < 10000; i++) {
  const token = jwt.sign(data, '[nodemon]');
  const decoded = jwt.verify(token, '[nodemon]');
  dataX.push({ token: token, decoded: decoded })
}
console.timeEnd(`endCode`) //endCode: 163.408ms
