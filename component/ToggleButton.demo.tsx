import { demo } from "frontbook-react";

export default demo({
  // * 컴포넌트가 패널로 보여질 가로 크기입니다. (최대 크기는 12입니다.)
  w: 6,

  // * 컴포넌트가 패널로 보여질 세로크기입니다.
  h: 6,

  // * 컴포넌트 Props 들을 명시하는 공간입니다.
  controls: {
    // * 문자열 예시
    // * 숫자 예시
    // age: {
    //   type: "number",
    //   defaultValue: 0,
    // },

    checked:{
      type: "boolean",
      defaultValue: false,
    }

    // * 선택 가능한 문자열 예시
    // language: {
    //   type: "select",
    //   defaultValue: {
    //     defaultValue: "English",
    //     selectableValues: ["English", "Korean"],
    //   },
    // },
  },

  renderProps: (props) => {
    // (고급) 여기서 Props 를 중간에 자바스크립트로 바꿀 수 있습니다.
    return props;
  },
});
