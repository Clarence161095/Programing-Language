import { languageState } from 'contexts/CommonState';
import { selector } from 'recoil';

export const languageSelector = selector({
  key: 'languageSelector',
  get: ({ get }) => {
    const filter = get(languageState);
    switch (filter) {
      case 'vn':
        return {
          text_1: 'Hướng dẫn sử dụng dòng lệnh gõ:',
          text_2_en: 'Convert to English language:',
          text_3: 'Để bắt đầu hãy gõ lệnh:',
          text_4: 'Chọn pokemon khởi đầu gõ:',
        };
      case 'en':
        return {
          text_1: 'Instructions for using the command line:',
          text_2_vn: 'Chuyển đổi sang ngôn ngữ Tiếng Việt:',
          text_3: 'To get started, type the command:',
          text_4: 'Select the pokemon type:',
        };
      default:
        return {};
    }
  },
});
