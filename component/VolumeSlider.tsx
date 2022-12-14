import React, { useState } from "react";
import style from "./VolumeSlider.scss";

// 컴포넌트 사용시 받아올 값을 여기에 명시합니다.
export interface IVolumeSliderProps {
  // 문자열 예시
  // 숫자 예시
  // age: number;
  percentage: number;
}

// 리액트 컴포넌트 코드를 여기에 입력합니다.
const VolumeSlider = (props: IVolumeSliderProps) => {
  // 자바스크립트 코드가 여기에 입력됩니다.
  const [volume, setVolume] = useState(1);

  let percentage = props.percentage;

  if(percentage < 0) {
    percentage = 0;
  } else if(percentage > 100) {
    percentage = 100;
  }

  // HTML + React 코드가 여기 입력됩니다.
  return (
    <>
      <div className="volumeSlider">
        <div id="player">
          <div id="player_volume" style={{width : `${percentage}%`}}></div>
          <div id="volume" style={{marginLeft: 343 * percentage / 100}}></div>
        </div>
      </div>
      {/* SCSS 스타일 파일 주입을 위한 코드입니다. 수정 X */}
      <style jsx>{style}</style>
    </>
  );
};

export default VolumeSlider;
