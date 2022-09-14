import style from "./SegmentedPicker.scss";

// 컴포넌트 사용시 받아올 값을 여기에 명시합니다.
export interface ISegmentedPickerProps {
  // 문자열 예시
  // 숫자 예시
  // age: number;
  repeat: number;
}

// 리액트 컴포넌트 코드를 여기에 입력합니다.
const SegmentedPicker = (props: ISegmentedPickerProps) => {
  // 자바스크립트 코드가 여기에 입력됩니다.
  // HTML + React 코드가 여기 입력됩니다
  return (
    <>
      <div className="segmentedPicker">
        <span>Off</span>
        <button><span>On</span></button>
      </div>
      <div className="segmentedPicker_2">
        <span>Off</span>
        <div className="separator"></div>
        <span className="Off_2">Off</span>
        <button><span>On</span></button>
      </div>


      {/* SCSS 스타일 파일 주입을 위한 코드입니다. 수정 X */}
      <style jsx>{style}</style>
    </>
  );
};

export default SegmentedPicker;
