import React from "react";
import style from "./SegmentedPicker.scss";

// 컴포넌트 사용시 받아올 값을 여기에 명시합니다.
export interface ISegmentedPickerProps {
  // 문자열 예시
  // 숫자 예시
  // age: number;
  repeat: number;

  id: string;

  label: string;

  onChange: (isChecked: boolean) => void;

  "data-on"?: string;

  isChecked: boolean;

  "data-off"?: string;

  description?: string;
}

// 리액트 컴포넌트 코드를 여기에 입력합니다.
const SegmentedPicker = (props: ISegmentedPickerProps) => {
  // 자바스크립트 코드가 여기에 입력됩니다.
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange && props.onChange(event.target.checked);
  };

  const labelId = `label-${props.id}`;
  const descriptionId = `description-${props.id}`;

  const labelBy = labelId + " " + descriptionId;
  // HTML + React 코드가 여기 입력됩니다
  return (
    <>
      <div className="segmentedPicker" selectedIndex={props.repeat}>
        <label htmlFor={props.id} className="switch">
          <input
            id={props.id}
            type="checkbox"
            role="switch"
            data-on={props["data-on"]}
            checked={props.isChecked}
            data-off={props["data-off"]}
            onChange={onChange}
            aria-checked={props.isChecked}
            aria-labelledby={labelBy}
          />
          <div className="switch-labels">
            <span id={labelId}>{props.label}</span>
            {props.description && <p id={descriptionId}>{props.description}</p>}
          </div>
        </label>{" "}
      </div>

      {/* SCSS 스타일 파일 주입을 위한 코드입니다. 수정 X */}
      <style jsx>{style}</style>
    </>
  );
};

SegmentedPicker.defaultProps = {
  "data-on": "ON",
  "data-off": "OFF",
};

export default SegmentedPicker;
