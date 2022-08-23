import style from "./GlobalButton.scss";

// 컴포넌트 사용시 받아올 값을 여기에 명시합니다.
export interface IGlobalButtonProps {
  // 문자열 예시
  name: string;

  // 숫자 예시
  age: number;

  // 언어 예시
  language: string;
}

// 리액트 컴포넌트 코드를 여기에 입력합니다.
const GlobalButton = (props: IGlobalButtonProps) => {
  // 자바스크립트 코드가 여기에 입력됩니다.

  // HTML + React 코드가 여기 입력됩니다.
  return (
    <>
      <div className="globalButton">
        {props.language === 'Korean' && <div>민수/ 23살 님 안녕하세요</div>}
        {props.language === 'English' && <div>Minsu / 23 years-old Hello!</div>}
      </div>

      {/* SCSS 스타일 파일 주입을 위한 코드입니다. 수정 X */}
      <style jsx>{style}</style>
    </>
  );
};

export default GlobalButton;
