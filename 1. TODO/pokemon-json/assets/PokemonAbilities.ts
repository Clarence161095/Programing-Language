const POKEMON_ABILITIES = [
  {
    name: 'Adaptability',
    description: "The Pokemon's STAB modifier becomes 2x.",
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Aerilate',
    description:
      "Turns all of this Pokemon's Normal-typed attacks into Flying-type and deals 1.3x damage. Does not affect Hidden Power.",
    genfamily: ['XY'],
  },
  {
    name: 'Aftermath',
    description: 'Deals 25% damage when KOed by contact damage.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Air Lock',
    description: 'Blocks the effects of weather.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Analytic',
    description: 'Raises the power of all moves by 30% if the wielder moves last.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Anger Point',
    description: 'Raises Attack to +6 if struck by a critical hit.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Anticipation',
    description: 'Alerts the Pokemon of certain dangerous moves.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Arena Trap',
    description: 'Prevents switching and increases wild encounter rate.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Aroma Veil',
    description: 'Protects allies from attacks that limit their move choices.',
    genfamily: ['XY'],
  },
  {
    name: 'Aura Break',
    description: 'Reverses the effects of Dark Aura and Fairy Aura.',
    genfamily: ['XY'],
  },
  {
    name: 'Bad Dreams',
    description: 'Deals 12.5% damage to sleeping opponents per turn.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Battle Armor',
    description: 'Prevents critical hits.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Big Pecks',
    description: "The wielder's Defense cannot be lowered.",
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Blaze',
    description:
      'Boosts power of Fire-type moves 50% when at 1/3 of max HP or less.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Bulletproof',
    description: 'This Pokemon is protected from some Ball and Bomb moves.',
    genfamily: ['XY'],
  },
  {
    name: 'Cheek Pouch',
    description: 'Increases HP when this Pokemon consumes a berry.',
    genfamily: ['XY'],
  },
  {
    name: 'Chlorophyll',
    description: 'Speed doubles in sun.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Clear Body',
    description: "Stops the enemy from lowering this Pokemon's stats.",
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Cloud Nine',
    description: 'Blocks the effects of weather.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Color Change',
    description: "Changes user's type to type of last attack that hit this Pokemon.",
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Competitive',
    description:
      "Raises the user's Special Attack stat by two stages when a stat is lowered, including the Special Attack stat. This does not include self-induced stat drops like those from Close Combat.",
    genfamily: ['XY'],
  },
  {
    name: 'Compound Eyes',
    description:
      'Raises accuracy by 30% and increases the probability of wild Pokemon holding items.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Contrary',
    description: "The wielder's stat changes are reversed.",
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Cursed Body',
    description: 'The wielder has a 30% chance to disable any move that hits it.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Cute Charm',
    description:
      'Can infatuate Pokemon of opposite gender when struck and increases their wild encounter rate.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Damp',
    description: 'Prevents the use of Self-Destruct or Explosion.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Dark Aura',
    description: 'Increases the power of all Dark-type moves in battle to 1.3x.',
    genfamily: ['XY'],
  },
  {
    name: 'Defeatist',
    description:
      "Halves the wielder's Attack and Special Attack if its HP drops below 50%.",
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Defiant',
    description: 'Boosts Attack by two stages for every stat drop.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Delta Stream',
    description:
      'Summons Strong Winds until Pokemon leaves battle. Electric/Ice/Rock moves do half damage and Weather changing moves/abilities fail, except for Primordial Sea and Desolate Land.',
    genfamily: ['XY'],
  },
  {
    name: 'Desolate Land',
    description:
      'Summons Heavy Sun until Pokemon leaves battle. Water-type moves and weather changing moves/abilities fail, except for Primordial Sea and Delta Stream.',
    genfamily: ['XY'],
  },
  {
    name: 'Download',
    description: "User gets a stat boost depending on its opponent's stats.",
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Drizzle',
    description: 'Summons rain.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Drought',
    description: 'Summons sun.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Dry Skin',
    description:
      'User absorbs Water-type attacks and has a weakness to Fire-type moves. Heals in rain and is damaged by sun.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Early Bird',
    description: 'Reduces sleep time by 50%.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Effect Spore',
    description: 'Induces paralysis, poison, or sleep on contact.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Fairy Aura',
    description: 'Increases the power of all Fairy-type moves in battle to 1.3x.',
    genfamily: ['XY'],
  },
  {
    name: 'Filter',
    description: 'Reduces damage from super effective hits by 1/4.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Flame Body',
    description:
      "Enemies' contact moves have a 30% chance to burn them. Halves the amount of steps required to hatch Eggs.",
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Flare Boost',
    description: 'Special Attack is increased by 50% when burned.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Flash Fire',
    description:
      "Grants immunity to Fire and increases Fire's power 50% when hit by a Fire move.",
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Flower Gift',
    description:
      'Raises Attack and Special Defense of this Pokemon and its partners in sun.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Flower Veil',
    description: "Prevents lowering of ally Grass-type Pokemon's stats.",
    genfamily: ['XY'],
  },
  {
    name: 'Forecast',
    description: 'Changes type according to weather.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Forewarn',
    description: "Tells which of the opponent's moves has the highest Base Power.",
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Friend Guard',
    description: 'Reduces damage done to a teammate by 25%.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Frisk',
    description: "Reveals the foe's items.",
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Fur Coat',
    description: 'Halves the damage done to this Pokemon by physical attacks.',
    genfamily: ['XY'],
  },
  {
    name: 'Gale Wings',
    description:
      "This Pokemon's Flying-type moves have their priority increased by 1.",
    genfamily: ['XY'],
  },
  {
    name: 'Gluttony',
    description: 'Consumes pinch Berries at 50% HP or less.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Gooey',
    description:
      "Contact with this Pokemon decreases the attacker's Speed by 1 stage.",
    genfamily: ['XY'],
  },
  {
    name: 'Grass Pelt',
    description: "This Pokemon's Defense is boosted by 50% in Grassy Terrain",
    genfamily: ['XY'],
  },
  {
    name: 'Guts',
    description: 'Attack is increased 50% when afflicted by a non-volatile status.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Harvest',
    description:
      'After each turn, the wielder may receive the Berry it used at a 50% chance (100% if in sun).',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Healer',
    description:
      '30% chance to heal an adjacent teammate of a status condition every turn.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Heatproof',
    description: 'Reduces Fire damage 50%.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Heavy Metal',
    description: "The wielder's weight is doubled.",
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Honey Gather',
    description: 'Adds a chance of finding Honey after each in-game battle.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Huge Power',
    description: 'Doubles Attack.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Hustle',
    description:
      'Physical moves do 50% more damage at the cost of 20% accuracy. Increases wild encounter rate with higher level Pokemon.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Hydration',
    description: 'Heals status effects in rain.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Hyper Cutter',
    description:
      "Prevents the enemy from lowering this Pokemon's Attack. Increases Cut's area of effect.",
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Ice Body',
    description: 'Heals 1/16 of max HP in hail.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Illuminate',
    description: 'Increases wild encounter rate (no effect in battles).',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Illusion',
    description:
      'The wielder appears as the last Pokemon in the party to the opponent.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Immunity',
    description: 'This Pokemon cannot be poisoned.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Imposter',
    description: 'The wielder transforms into the opponent when it switches in.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Infiltrator',
    description:
      "The wielder bypasses the foe's Light Screen, Reflect, Mist, Safeguard, and Substitute.",
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Inner Focus',
    description: 'Prevents flinching.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Insomnia',
    description: 'Prevents sleep.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Intimidate',
    description:
      "Lowers the foe's Attack by 1 stage. Decreases wild encounter rate.",
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Iron Barbs',
    description: 'Deals 1/8 recoil damage when the opponent makes contact.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Iron Fist',
    description: 'Increases the power of punching moves by 20%.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Justified',
    description: 'Raises Attack by one stage when hit by a Dark-type move.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Keen Eye',
    description:
      "Pokemon's accuracy cannot be lowered. Opponent's evasion boosts are ignored. Decreases wild encounter rate.",
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Klutz',
    description:
      'This Pokemon both is unaffected by and will not utilize held items.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Leaf Guard',
    description: 'Prevents status effects in sun.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Levitate',
    description: 'This Pokemon is immune to Ground-type moves.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Light Metal',
    description: "The wielder's weight is halved.",
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Lightningrod',
    description:
      'All Electric-type attacks target this Pokemon. Grants immunity to Electric-type moves and boosts Special Attack by 1 stage when hit by an Electric-type move.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Limber',
    description: 'Blocks paralysis.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Liquid Ooze',
    description: 'Leeching moves cause the enemy to lose HP instead.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Magic Bounce',
    description: 'Bounces back certain non-damaging moves.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Magic Guard',
    description: 'Prevents indirect damage.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Magician',
    description:
      'If this Pokemon is not holding an item, it steals the held item of a target it hits with a move.',
    genfamily: ['XY'],
  },
  {
    name: 'Magma Armor',
    description:
      'Cannot be frozen. Halves the amount of steps required to hatch Eggs.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Magnet Pull',
    description:
      'Prevents Steel-type Pokemon from switching. Increases the chance of encountering a Steel-type Pokemon in the wild.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Marvel Scale',
    description: 'Boosts Defense 50% when afflicted by a non-volatile status.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Mega Launcher',
    description:
      'Boosts the power of Aura and Pulse moves, such as Aura Sphere and Dark Pulse, by 50%.',
    genfamily: ['XY'],
  },
  {
    name: 'Minus',
    description:
      'If allied with a Pokemon with Plus or Minus, its Special Attack increases by 50%.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Mold Breaker',
    description: 'Abilities that hinder attacks are nullified.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Moody',
    description:
      'A random stat is lowered by 1 stage and another is boosted by 2 stages every turn.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Motor Drive',
    description:
      'Grants immunity to Electric-type moves and boosts Speed by 1 stage when hit by a Electric-type move.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Moxie',
    description:
      'Boosts Attack by 1 stage if the wielder knocks out another Pokemon.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Multiscale',
    description: 'Reduces damage by 50% if the wielder is at full health.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Multitype',
    description: 'Type changes depending on the held plate. Prevents item loss.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Mummy',
    description:
      "The opponent's ability becomes Mummy when it hits the wielder with a contact move.",
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Natural Cure',
    description: 'Cures status on switching out.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'No Guard',
    description: 'All attacks used by and used on this Pokemon will never miss.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Normalize',
    description: 'All moves used by this Pokemon become Normal-type.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Oblivious',
    description: 'Grants immunity to infatuation, Captivate, and Taunt.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Overcoat',
    description: 'Grants immunity to damage from weather effects and powder moves.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Overgrow',
    description:
      'Raises the power of Grass-type moves by 50% when at 1/3 HP or less.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Own Tempo',
    description: 'Cannot be confused.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Parental Bond',
    description:
      'Allows the Pokemon to hit twice with the same move in one turn. Second hit has 0.5x base power. Does not affect Status, multihit, self-KO, or spread moves (in doubles).',
    genfamily: ['XY'],
  },
  {
    name: 'Pickpocket',
    description:
      'The wielder immediately steals an item from an attacker using a contact move.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Pickup',
    description:
      'If the wielder has no held item, it gets the last item consumed at the end of the turn. Adds a chance of finding an item after each battle.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Pixilate',
    description:
      "Turns all of this Pokemon's Normal-typed attacks into Fairy-type and deals 1.3x damage. Does not affect Hidden Power.",
    genfamily: ['XY'],
  },
  {
    name: 'Plus',
    description:
      'If allied with a Pokemon with Plus or Minus, its Special Attack increases by 50%.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Poison Heal',
    description: 'Heals 1/8 of max HP per turn when poisoned.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Poison Point',
    description: "Enemies' contact moves have a 30% chance of poisoning them.",
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Poison Touch',
    description:
      "The wielder's contact moves gain a 30% chance to poison the opponent.",
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Prankster',
    description: 'Non-damaging moves have their priority increased by one level.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Pressure',
    description: 'Enemy attacks lose 1 extra PP. Increases wild encounter rate.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Primordial Sea',
    description:
      'Summons Heavy Rain until Pokemon leaves battle. Fire-type moves and weather changing moves/abilities fail, except for Desolate Land and Delta Stream.',
    genfamily: ['XY'],
  },
  {
    name: 'Protean',
    description:
      'Right before this Pokemon uses a move, it changes its type to match that move. Hidden Power is interpreted as its Hidden Power type, rather than Normal.',
    genfamily: ['XY'],
  },
  {
    name: 'Pure Power',
    description: 'Doubles Attack.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Quick Feet',
    description: 'Increases Speed by 50% when afflicted with a status condition.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Rain Dish',
    description: 'Heals 1/16 of max HP in rain.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Rattled',
    description:
      'Raises Speed one stage when hit by a Bug-, Dark-, or Ghost-type move.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Reckless',
    description: 'Increases the power of recoil moves by 20%.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Refrigerate',
    description:
      "Turns all of this Pokemon's Normal-typed attacks into Ice-typed and deal 1.3x damage. Does not affect Hidden Power.",
    genfamily: ['XY'],
  },
  {
    name: 'Regenerator',
    description: 'Wielder heals 1/3 of its maximum HP on switching out.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Rivalry',
    description:
      'Raises move power by 25% if the opponent has the same gender, and reduces by 25% if the opponent has the opposite gender. Genderless Pokemon do not affect this ability.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Rock Head',
    description: 'Negates recoil from recoil moves.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Rough Skin',
    description: 'Deals 1/8 recoil damage when the opponent makes contact.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Run Away',
    description:
      'Increases the chance of successfully escaping battle with a wild Pokemon.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Sand Force',
    description:
      'Increases power of Ground-, Rock-, and Steel-type attacks by 30% in a sandstorm.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Sand Rush',
    description: 'Speed doubles in sandstorm.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Sand Stream',
    description: 'Summons sandstorm.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Sand Veil',
    description: 'Evasion increases by 20% in a sandstorm.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Sap Sipper',
    description:
      'Grants immunity to Grass-type moves and boosts Attack by 1 stage when hit by a Grass-type move.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Scrappy',
    description: 'Can hit Ghost-types with Fighting- and Normal-type moves.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Serene Grace',
    description: "This Pokemon's secondary effect chances are doubled.",
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Shadow Tag',
    description: 'Traps opponents. Does not affect Pokemon with Shadow Tag.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Shed Skin',
    description: '30% chance to heal status.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Sheer Force',
    description:
      'Increases power of moves with secondary effects by 30%, but removes the effects.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Shell Armor',
    description: 'Prevents critical hits.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Shield Dust',
    description: "Secondary effects won't occur.",
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Simple',
    description: 'Doubles the effect of stat boosts and drops.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Skill Link',
    description: 'Multi-hit moves will always hit the maximum number of times.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Slow Start',
    description: 'Attack and Speed are halved for 5 turns.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Sniper',
    description: 'Critical hits do 2.25x damage instead of 1.5x.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Snow Cloak',
    description: 'Evasion increases by 20% in hail.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Snow Warning',
    description: 'Summons hail.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Solar Power',
    description: 'Loses 10% HP in sun each turn. Special Attack increases by 50%.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Solid Rock',
    description: 'Reduces damage from super effective hits by 1/4.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Soundproof',
    description: 'Unaffected by sound moves.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Speed Boost',
    description: 'Speed raises at end of turn.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Stall',
    description: 'This Pokemon moves last.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Stance Change',
    description:
      "Only affects Aegislash. If this Pokemon uses a Physical or Special move, it changes to Blade forme. If this Pokemon uses King's Shield, it changes to Shield forme.",
    genfamily: ['XY'],
  },
  {
    name: 'Static',
    description: "Enemies' contact moves can paralyze them.",
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Steadfast',
    description: 'Speed is boosted one stage when flinched.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Stench',
    description:
      'Adds a 10% flinch chance for moves that do not have one. Decreases wild encounter rate.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Sticky Hold',
    description:
      "This Pokemon's item cannot be removed. Increases the chance of encountering Pokemon while fishing.",
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Storm Drain',
    description:
      'All Water-type attacks target this Pokemon. Grants immunity to Water-type moves and boosts Special Attack by 1 stage when hit by a Water-type move.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Strong Jaw',
    description:
      'This Pokemon receives a 50% power boost for jaw attacks such as Bite and Crunch.',
    genfamily: ['XY'],
  },
  {
    name: 'Sturdy',
    description: "The wielder cannot be KO'd in one hit. OHKO moves will fail.",
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Suction Cups',
    description:
      'Cannot be forced to switch. Increases chance of encountering Pokemon while fishing.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Super Luck',
    description: 'Critical hit rate increases one stage.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Swarm',
    description: 'Boosts power of Bug-type moves by 50% when at 1/3 HP or less.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Sweet Veil',
    description: 'Prevents allies from being put to Sleep.',
    genfamily: ['XY'],
  },
  {
    name: 'Swift Swim',
    description: 'Speed doubles in rain.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Symbiosis',
    description:
      'This Pokemon immediately passes its item to an ally after their item is consumed.',
    genfamily: ['XY'],
  },
  {
    name: 'Synchronize',
    description:
      'When statused, the enemy is also statused. Can pass nature to wild Pokemon.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Tangled Feet',
    description: 'Evasion increases when confused.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Technician',
    description: 'Increases power of moves with 60 base power or less by 50%.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Telepathy',
    description: "Does not take damage from allies' attacks.",
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Teravolt',
    description: 'Abilities that hinder attacks are nullified.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Thick Fat',
    description: 'Halves Ice- and Fire-type damage.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Tinted Lens',
    description: 'Doubles damage on resisted hits.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Torrent',
    description: 'Boosts power of Water-type moves by 50% when at 1/3 HP or less.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Tough Claws',
    description: "This Pokemon's contact attacks do 1.33x damage.",
    genfamily: ['XY'],
  },
  {
    name: 'Toxic Boost',
    description: 'Attack is increased by 50% when poisoned.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Trace',
    description: "Copies foe's ability.",
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Truant',
    description: 'This Pokemon does nothing every other turn.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Turboblaze',
    description: 'Abilities that hinder attacks are nullified.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Unaware',
    description: 'Ignores stat boosts and debuffs on other Pokemon.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Unburden',
    description: 'Speed increases when an item is used or lost.',
    genfamily: ['DP', 'BW', 'XY'],
  },
  {
    name: 'Unnerve',
    description: 'Prevents the foe from consuming its held Berry item.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Victory Star',
    description:
      'Increases the accuracy of the wielder and allies on its side of the field by 10%.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Vital Spirit',
    description:
      'Prevents sleep. Increases wild encounters with higher level Pokemon.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Volt Absorb',
    description: 'Heals 25% HP when hit by an Electric-type attack.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Water Absorb',
    description: 'Heals 25% HP when hit by a Water-type attack.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Water Veil',
    description: 'Prevents burn.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Weak Armor',
    description:
      'Boosts Speed by 1 stage and lowers Defense by 1 stage when hit by a Physical move.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'White Smoke',
    description:
      "Prevents the enemy from lowering this Pokemon's stats and decreases wild encounter rate.",
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Wonder Guard',
    description: 'Only super effective attacks harm this Pokemon.',
    genfamily: ['RS', 'DP', 'BW', 'XY'],
  },
  {
    name: 'Wonder Skin',
    description: 'Reduces the accuracy of a status move to 50%.',
    genfamily: ['BW', 'XY'],
  },
  {
    name: 'Zen Mode',
    description: 'The wielder changes forme when below 50% of its max HP.',
    genfamily: ['BW', 'XY'],
  },
];
