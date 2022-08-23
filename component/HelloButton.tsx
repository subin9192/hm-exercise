import style from "./HelloButton.scss";

// 컴포넌트 사용시 받아올 값을 여기에 명시합니다.
export interface IHelloButtonProps {
  // 문자열 예시
  name: string;

  // 숫자 예시
  age: number;
}

// 리액트 컴포넌트 코드를 여기에 입력합니다.
const HelloButton = (props: IHelloButtonProps) => {
  // 자바스크립트 코드가 여기에 입력됩니다.

  // HTML + React 코드가 여기 입력됩니다.
  return (
    <>
      <div className="helloButton">
        <div>{props.name} / {props.age}살 님 안녕하세요</div>
      </div>

      {/* SCSS 스타일 파일 주입을 위한 코드입니다. 수정 X */}
      <style jsx>{style}</style>
    </>
  );
};

export default HelloButton;
