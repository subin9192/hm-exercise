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
        <div className="switch">
          <div className="Off">Off</div>

          <button className="handle">
            <div className="On">On</div>
          </button>
        </div>

        <div className="switch_2">
          <div className="Off">Off</div>
          <div className="separator"></div>
          <div className="Off_2">Off</div>

          <button className="handle">
            <div className="On">On</div>
          </button>
        </div>

        <div className="switch_3">
          <div className="Off">Off</div>
          <div className="separator"></div>
          <div className="Off_2">Off</div>
          <div className="separator_2"></div>
          <div className="Off_3">Off</div>

          <button className="handle">
            <div className="On">On</div>
          </button>
        </div>
      </div>

      {/* SCSS 스타일 파일 주입을 위한 코드입니다. 수정 X */}
      <style jsx>{style}</style>
    </>
  );
};

export default SegmentedPicker;
