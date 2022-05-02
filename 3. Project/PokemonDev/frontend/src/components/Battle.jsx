/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import { Select } from 'antd';
import { TYPE_POKEMON, TYPE_QUESTION } from 'constants/Constant';
import IMAGE from 'constants/ImageConstant';
import {
  enemyCurrentTeamPokemon,
  enemyTeamEffectAttackState,
  myCurrentTeamPokemon,
  myTeamEffectAttackState,
  throwPokeball,
} from 'contexts/BattleState';
import { currentCommandState } from 'contexts/CommonState';
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  getAnimatedSkill,
  getBattlePokemon,
  getTypeSkillEffect,
} from 'utilities/PokemonInfo';
import { BATTLE_SCALE } from '../constants/Config';
import { randomNumber } from '../utilities/MathFunc';
import { Terminal } from './Home';

const showGifPokemon = ({
  top = 230,
  left = 330,
  show = false,
  pokemon = { id: 130 },
  back = false,
  attack = { showAttack: false, hitType: 'fire' },
}) => {
  const TransitionAttack = () => {
    const [stateTransitionAttack, setStateTransitionAttack] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setStateTransitionAttack(!stateTransitionAttack);
      }, 25);
    });
    return (
      <img
        src={getBattlePokemon(pokemon.id, back)}
        style={{
          position: 'absolute',
          bottom: stateTransitionAttack
            ? 0 + randomNumber(2)
            : 0 - randomNumber(2),
          left: stateTransitionAttack
            ? 0 + randomNumber(2)
            : 0 - randomNumber(2),
          maxWidth: '100px',
          maxHeight: '100px',
          transition: `width 2s, height 4s`,
        }}
      />
    );
  };

  const EffectGifAttack = () => {
    return (
      <img
        src={getAnimatedSkill('ghost')}
        style={{
          color: 'rgba(192, 57, 43,1.0)',
          position: 'absolute',
          bottom: 0,
          left: 0,
          maxWidth: '80px',
          maxHeight: '100px',
          transition: `width 2s, height 4s`,
        }}
      />
    );
  };

  const EffectTypeAttack = () => {
    return (
      <img
        src={getTypeSkillEffect(attack.hitType)}
        style={{
          opacity: 0.5,
          position: 'absolute',
          bottom: 0,
          left: 0,
          maxWidth: '70px',
          maxHeight: '70px',
          transition: `width 2s, height 4s`,
        }}
      />
    );
  };

  return (
    <div
      style={{
        position: 'relative',
        top: `${top}px`,
        left: `${left}px`,
      }}>
      <img
        src={getBattlePokemon(pokemon.id, back)}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          maxWidth: '100px',
          maxHeight: '100px',
          display: !show ? 'block' : 'none',
        }}
      />
      {attack.showAttack && !show && <TransitionAttack />}
      {attack.showAttack && !show && <EffectGifAttack />}
      {attack.showAttack && !show && <EffectTypeAttack />}
    </div>
  );
};

const showTeam6x6 = ({
  top = 230,
  left = 330,
  show = false,
  team = [],
  back = false,
  attack = [],
}) => {
  return (
    <div
      style={{
        position: 'relative',
        top: '0px',
        left: '0px',
        transform: `scale(${BATTLE_SCALE.scale})`,
      }}>
      {showGifPokemon({
        top: top,
        left: left,
        show: show,
        pokemon: team[0],
        back: back,
        attack: attack[0],
      })}

      {showGifPokemon({
        top: top - 10,
        left: left - 100,
        show: show,
        pokemon: team[1],
        back: back,
        attack: attack[1],
      })}
      {showGifPokemon({
        top: top - 20,
        left: left - 180,
        show: show,
        pokemon: team[2],
        back: back,
        attack: attack[2],
      })}

      {showGifPokemon({
        top: top + 40,
        left: left - 50,
        show: show,
        pokemon: team[3],
        back: back,
        attack: attack[3],
      })}
      {showGifPokemon({
        top: top + 25,
        left: left - 150,
        show: show,
        pokemon: team[4],
        back: back,
        attack: attack[4],
      })}
      {showGifPokemon({
        top: top + 15,
        left: left - 240,
        show: show,
        pokemon: team[5],
        back: back,
        attack: attack[5],
      })}
    </div>
  );
};

export const BattleScreen = () => {
  const myPokemon = useRecoilValue(myCurrentTeamPokemon);
  const enemyPokemon = useRecoilValue(enemyCurrentTeamPokemon);
  const throwPokeballValue = useRecoilValue(throwPokeball);
  const myEffectAttack = useRecoilValue(myTeamEffectAttackState);
  const enemyEffectAttack = useRecoilValue(enemyTeamEffectAttackState);

  return (
    <div
      style={{
        backgroundImage: `url(${
          throwPokeballValue ? IMAGE.THROW_POKEBALL : IMAGE.DEFAULT_BACKGROUND
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        minWidth: '368px',
        height: '210px',
      }}>
      {showTeam6x6({
        top: 110 + BATTLE_SCALE.y,
        left: 500 + BATTLE_SCALE.x,
        show: throwPokeballValue,
        team: enemyPokemon,
        back: true,
        attack: enemyEffectAttack,
      })}
      {showTeam6x6({
        top: 210 + BATTLE_SCALE.y,
        left: -300 + BATTLE_SCALE.x,
        show: throwPokeballValue,
        team: myPokemon,
        back: false,
        attack: myEffectAttack,
      })}
    </div>
  );
};

export const BattleControl = () => {
  const setThrowPokeball = useSetRecoilState(throwPokeball);
  const [resultNumber, setResultNumber] = useState('');
  const currentCommand = useRecoilValue(currentCommandState);
  const setMyEffectAttack = useSetRecoilState(myTeamEffectAttackState);
  const setEnemyEffectAttack = useSetRecoilState(enemyTeamEffectAttackState);

  const handleThrowPokeball = () => {
    // setThrowPokeball(true);
    setTimeout(() => {
      setThrowPokeball(false);
    }, 1500);
  };

  useEffect(() => {
    handleThrowPokeball();
    setResultNumber('');
  }, []);

  // Mỗi khi command hiện tại thay đổi thì check lại
  useEffect(() => {
    // Fix kiểm tra thay đổi của current Command nếu nó vẫn giống trước đó thì nó ko render
    if (currentCommand.includes('attack')) {
      console.log('currentCommand :>> ', currentCommand);
      const cmd = currentCommand.split(' ').map((e) => e);
      let effect = [];
      if (Number(cmd[2]) < 6 && TYPE_POKEMON.includes(cmd[3])) {
        effect[Number(cmd[2]) - 1] = { showAttack: true, hitType: cmd[3] };
      }
      if (cmd[1] === 'm') {
        setMyEffectAttack(effect);
        setTimeout(() => {
          setMyEffectAttack([]);
        }, 500);
      } else if (cmd[1] === 'e') {
        setEnemyEffectAttack(effect);
        setTimeout(() => {
          setEnemyEffectAttack([]);
        }, 500);
      }
    }
  });

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '10px',
      }}>
      <Select
        defaultValue='random'
        onChange={handleChange}
        style={{ width: 350 }}>
        {TYPE_QUESTION.map((e) => (
          <Select.Option value={e.type} key={e.type}>
            {e.text}
          </Select.Option>
        ))}
      </Select>

      <div
        style={{
          fontSize: '3rem',
          margin: '3px 0 3px 0',
          fontFamily: `'Mochiy Pop One', sans-serif`,
        }}>
        500 + 500 = {String(resultNumber).replace(/(.)(?=(\d{3})+$)/g, '$1,')}
      </div>

      <Terminal />
    </div>
  );
};

export const Battle = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <BattleScreen />
      <BattleControl />
    </div>
  );
};
