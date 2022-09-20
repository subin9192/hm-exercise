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
        <div className="calendar">
          <div className="header">
            <div className="year-month"></div>
            <div className="nav">
              <button className="nav-btn go-prev">&lt;</button>
              <button className="nav-btn go-next">&gt;</button>
            </div>
          </div>
          <div className="main">
            <div className="days">
              <div className="day">SUN</div>
              <div className="day">MON</div>
              <div className="day">TUE</div>
              <div className="day">WED</div>
              <div className="day">THU</div>
              <div className="day">FRI</div>
              <div className="day">SAT</div>
            </div>
            <div className="dates"></div>
          </div>
        </div>{" "}
      </div>

      {/* SCSS 스타일 파일 주입을 위한 코드입니다. 수정 X */}
      <style jsx>{style}</style>
    </>
  );
};

export default ModernCalendar;
