/* eslint-disable react-hooks/exhaustive-deps */
import { EnterOutlined } from '@ant-design/icons/lib/icons';
import { Button, Input } from 'antd';
import React, { useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  currentCommandState,
  responseCommandState,
} from '../contexts/CommonState';
import { Command_Mapping } from '../utilities/Command';

const HomeScreen = () => {
  const responseCommand = useRecoilValue(responseCommandState);

  Command_Mapping();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#2c3e50',
        height: '35vh',
        width: '90%',
        padding: '2%',
        overflow: 'auto',
        fontSize: '1.2rem',
        borderRadius: '10px 10px 10px 10px',
      }}>
      <div>{responseCommand}</div>
    </div>
  );
};

export const Terminal = () => {
  const [inputText, setInputText] = useState('');
  const terminalText = useRef([]);
  const fakeKey = useRef(1);
  const currentCommand = useSetRecoilState(currentCommandState);

  const handleEnterCode = (e) => {
    terminalText.current.unshift(e.target.value);
    currentCommand(terminalText.current[0]);
    setInputText('');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '80%',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column-reverse',
          backgroundColor: '#2c3e50',
          height: '20vh',
          padding: '2%',
          overflow: 'auto',
          fontSize: '1rem',
        }}>
        {terminalText.current.map((line) => (
          <div
            style={{
              fontFamily: `'Courier New', Courier, monospace`,
              color: '#67f34b',
            }}
            key={fakeKey.current++}>
            # {line}
          </div>
        ))}
      </div>
      <Input
        placeholder='Insert Code'
        value={inputText}
        autoFocus
        onChange={(e) => setInputText(e.target.value)}
        onPressEnter={handleEnterCode}
        suffix={<Button icon={<EnterOutlined />}>Enter</Button>}></Input>
    </div>
  );
};

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '10px',
      }}>
      <HomeScreen />
      <Terminal />
    </div>
  );
};

export default Home;
