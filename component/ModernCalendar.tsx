import style from "./ModernCalendar.scss";

// 컴포넌트 사용시 받아올 값을 여기에 명시합니다.
export interface IModernCalendarProps {
  // 문자열 예시
  name: string;

  // 숫자 예시
  // age: number;
}

// 리액트 컴포넌트 코드를 여기에 입력합니다.
const ModernCalendar = (props: IModernCalendarProps) => {
  // 자바스크립트 코드가 여기에 입력됩니다.

  // HTML + React 코드가 여기 입력됩니다.
  return (
    <>
      <div className="modernCalendar">
        <div class="calendar">
          <div class="header">
            <div class="year-month"></div>
            <div class="nav">
              <button class="nav-btn go-prev">&lt;</button>
              <button class="nav-btn go-today">Today</button>
              <button class="nav-btn go-next">&gt;</button>
            </div>
          </div>
          <div class="main">
            <div class="days">
              <div class="day">SUN</div>
              <div class="day">MON</div>
              <div class="day">TUE</div>
              <div class="day">WED</div>
              <div class="day">THU</div>
              <div class="day">FRI</div>
              <div class="day">SAT</div>
            </div>
            <div class="dates"></div>
          </div>
        </div>{" "}
      </div>

      {/* SCSS 스타일 파일 주입을 위한 코드입니다. 수정 X */}
      <style jsx>{style}</style>
    </>
  );
};

export default ModernCalendar;
