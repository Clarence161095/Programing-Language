const CHAPTER_POSITION = 0;
const MAP_POSITION = 1;
const STAGE_POSITION = 2;

const MIN_STAGE_NUMBER = 1;
const MAX_STAGE_NUMBER = 10;
const MIN_MAP_NUMBER = 1;
const STEP_SIZE = 1;

const getIdPreviousStage = (stage) => {
  const matches = Array.from(stage.matchAll(/\d+/g)).map((match) =>
    Number(match[0])
  );

  if (
    typeof matches[CHAPTER_POSITION] === "number" &&
    typeof matches[MAP_POSITION] === "number" &&
    typeof matches[STAGE_POSITION] === "number"
  ) {
    let prevStageNumber = matches[STAGE_POSITION];
    let prevMapNumber = matches[MAP_POSITION];
    const prevChapterNumber = matches[CHAPTER_POSITION];

    if (prevStageNumber > MIN_STAGE_NUMBER) {
      prevStageNumber -= STEP_SIZE;
    } else if (
      prevStageNumber == MIN_STAGE_NUMBER &&
      prevMapNumber > MIN_MAP_NUMBER
    ) {
      prevStageNumber = MAX_STAGE_NUMBER;
      prevMapNumber -= STEP_SIZE;
    }
    return `WC${prevChapterNumber}_M${prevMapNumber}_ST${prevStageNumber}`;
  } else {
    throw new Error("Name of stage is invalid");
  }
};

const listStageName = [
  "WC1_M1_ST1",
  "WC1_M1_ST2",
  "WC1_M1_ST3",
  "WC1_M1_ST4",
  "WC1_M1_ST5",
  "WC1_M1_ST6",
  "WC1_M1_ST7",
  "WC1_M1_ST8",
  "WC1_M1_ST9",
  "WC1_M1_ST10",
  "WC1_M2_ST1",
  "WC1_M2_ST2",
  "WC1_M2_ST3",
  "WC1_M2_ST4",
  "WC1_M2_ST5",
  "WC1_M2_ST6",
  "WC1_M2_ST7",
  "WC1_M2_ST8",
  "WC1_M2_ST9",
  "WC1_M2_ST10",
  "WC1_M3_ST1",
  "WC1_M3_ST2",
  "WC1_M3_ST3",
  "WC1_M3_ST4",
  "WC1_M3_ST5",
  "WC1_M3_ST6",
  "WC1_M3_ST7",
  "WC1_M3_ST8",
  "WC1_M3_ST9",
  "WC1_M3_ST10",
  "WC1_M4_ST1",
  "WC1_M4_ST2",
  "WC1_M4_ST3",
  "WC1_M4_ST4",
  "WC1_M4_ST5",
  "WC1_M4_ST6",
  "WC1_M4_ST7",
  "WC1_M4_ST8",
  "WC1_M4_ST9",
  "WC1_M4_ST10",
  "WC1_M5_ST1",
  "WC1_M5_ST2",
  "WC1_M5_ST3",
  "WC1_M5_ST4",
  "WC1_M5_ST5",
  "WC1_M5_ST6",
  "WC1_M5_ST7",
  "WC1_M5_ST8",
  "WC1_M5_ST9",
  "WC1_M5_ST10",
  "WC1_M6_ST1",
  "WC1_M6_ST2",
  "WC1_M6_ST3",
  "WC1_M6_ST4",
  "WC1_M6_ST5",
  "WC1_M6_ST6",
  "WC1_M6_ST7",
  "WC1_M6_ST8",
  "WC1_M6_ST9",
  "WC1_M6_ST10",
  "WC1_M7_ST1",
  "WC1_M7_ST2",
  "WC1_M7_ST3",
  "WC1_M7_ST4",
  "WC1_M7_ST5",
  "WC1_M7_ST6",
  "WC1_M7_ST7",
  "WC1_M7_ST8",
  "WC1_M7_ST9",
  "WC1_M7_ST10",
  "WC1_M8_ST1",
  "WC1_M8_ST2",
  "WC1_M8_ST3",
  "WC1_M8_ST4",
  "WC1_M8_ST5",
  "WC1_M8_ST6",
  "WC1_M8_ST7",
  "WC1_M8_ST8",
  "WC1_M8_ST9",
  "WC1_M8_ST10",
  "WC1_M9_ST1",
  "WC1_M9_ST2",
  "WC1_M9_ST3",
  "WC1_M9_ST4",
  "WC1_M9_ST5",
  "WC1_M9_ST6",
  "WC1_M9_ST7",
  "WC1_M9_ST8",
  "WC1_M9_ST9",
  "WC1_M9_ST10",
  "WC1_M10_ST1",
  "WC1_M10_ST2",
  "WC1_M10_ST3",
  "WC1_M10_ST4",
  "WC1_M10_ST5",
  "WC1_M10_ST6",
  "WC1_M10_ST7",
  "WC1_M10_ST8",
  "WC1_M10_ST9",
  "WC1_M10_ST10",
];

console.log(
  `getIdPreviousStage(listStageName[1])`,
  getIdPreviousStage(listStageName[1])
);

listStageName.forEach((value, index, array) => {
  const currentStageIndex = index - 1;
  test(`${array[index]} : ${array[currentStageIndex]}`, () => {
    if (index > 0 && index < listStageName.length) {
      expect(getIdPreviousStage(array[index])).toBe(array[currentStageIndex]);
    }
  });
});
