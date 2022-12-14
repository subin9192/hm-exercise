import style from "./ToggleButton.scss";

// 컴포넌트 사용시 받아올 값을 여기에 명시합니다.
export interface IToggleButtonProps {
  // 문자열 예시
  // 숫자 예시
  // age: number;

  checked: boolean;
}

// 리액트 컴포넌트 코드를 여기에 입력합니다.
const ToggleButton = (props: IToggleButtonProps) => {
  // 자바스크립트 코드가 여기에 입력됩니다.
  const styles = {
    togglebutton: {
      marginBottom: 16,
    },
  };
  // HTML + React 코드가 여기 입력됩니다.
  return (
    <>
      <div className="toggleButton">
        <label className="switch">
          <input type="checkbox" checked={props.checked} />
          <span className="slider round"></span>
        </label>
      </div>

      {/* SCSS 스타일 파일 주입을 위한 코드입니다. 수정 X */}
      <style jsx>{style}</style>
    </>
  );
};

export default ToggleButton;
