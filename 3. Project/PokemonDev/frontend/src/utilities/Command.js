/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from 'antd';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { languageSelector } from '../constants/Language';
import {
  currentCommandState,
  languageState,
  responseCommandState,
} from '../contexts/CommonState';

export const LIST_COMMAND = ['language vn', 'language en', 'start', 'help'];

export const Command_Mapping = () => {
  const currentCommand = useRecoilValue(currentCommandState);
  const setLanguage = useSetRecoilState(languageState);
  const setResponseCommand = useSetRecoilState(responseCommandState);

  useEffect(() => {
    if (LIST_COMMAND.includes(currentCommand.toLowerCase())) {
      switch (currentCommand.toLowerCase()) {
        case 'language vn':
          setLanguage('vn');
          break;
        case 'language en':
          setLanguage('en');
          break;
        case 'help':
          setResponseCommand(<CodeHelp />);
          break;
        case 'start':
          setResponseCommand(<CodeStart />);
          break;
        default:
          setResponseCommand(<CodeDefault />);
      }
    } else if (!currentCommand) {
      setResponseCommand(<CodeDefault />);
    }
  }, [currentCommand]);
};

export const LineGuideCode = ({ text, code, codeEN = code, sample = '' }) => {
  const language = useRecoilValue(languageState);

  return (
    <div>
      {text}
      <Typography.Text keyboard style={{ color: '#67f34b' }}>
        {codeEN === code ? code : language === 'en' ? codeEN : code}
      </Typography.Text>
      {sample}
    </div>
  );
};

const CodeHelp = () => {
  const T = useRecoilValue(languageSelector);
  const language = useRecoilValue(languageState);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <LineGuideCode
        text={language === 'vn' ? T.text_2_en : T.text_2_vn}
        code={language === 'vn' ? `language en` : `language vn`}
      />
      <LineGuideCode text={T.text_3} code={`start`} />
    </div>
  );
};

const CodeStart = () => {
  const T = useRecoilValue(languageSelector);

  // TODO nếu không có pokemon thì cho chọn pokemon khởi đầu

  return (
    <div>
      <LineGuideCode
        text={T.text_4}
        code={`pick [tên pokemon]`}
        codeEN={`pick [pokemon name]`}
        sample={`ex: pick pikachu`}
      />
    </div>
  );
};

export const CodeDefault = () => {
  const T = useRecoilValue(languageSelector);
  const language = useRecoilValue(languageState);

  return (
    <div>
      <LineGuideCode
        text={language === 'vn' ? T.text_2_en : T.text_2_vn}
        code={language === 'vn' ? `language en` : `language vn`}
      />
      <LineGuideCode text={T.text_1} code={`help`} />
      <LineGuideCode text={T.text_3} code={`start`} />
    </div>
  );
};
