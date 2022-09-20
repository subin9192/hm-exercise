import style from "./ModernCalendar.scss";

// 컴포넌트 사용시 받아올 값을 여기에 명시합니다.
export interface IModernCalendarProps {
  // 문자열 예시
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
            <svg
              className="ym_next"
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.69043 6C6.69043 5.72705 6.59521 5.50488 6.37305 5.29541L1.50439 0.534668C1.33936 0.363281 1.13623 0.280762 0.888672 0.280762C0.399902 0.280762 0 0.674316 0 1.16309C0 1.4043 0.101562 1.62646 0.279297 1.8042L4.5957 5.99365L0.279297 10.1958C0.101562 10.3672 0 10.5894 0 10.8369C0 11.3257 0.399902 11.7192 0.888672 11.7192C1.12988 11.7192 1.33936 11.6367 1.50439 11.4653L6.37305 6.70459C6.59521 6.49512 6.69043 6.2666 6.69043 6Z"
                fill="#FF3B30"
              />
            </svg>

            <div className="nav">
              <svg
              className="prev"
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 9C0 9.3418 0.126953 9.63477 0.400391 9.88867L7.99805 17.3301C8.21289 17.5449 8.48633 17.6621 8.80859 17.6621C9.45312 17.6621 9.9707 17.1543 9.9707 16.5C9.9707 16.1777 9.83398 15.8945 9.61914 15.6699L2.77344 9L9.61914 2.33008C9.83398 2.10547 9.9707 1.8125 9.9707 1.5C9.9707 0.845703 9.45312 0.337891 8.80859 0.337891C8.48633 0.337891 8.21289 0.455078 7.99805 0.669922L0.400391 8.10156C0.126953 8.36523 0 8.6582 0 9Z"
                  fill="#FF3B30"
                />
              </svg>
              <svg
              className="next"
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 9C9.99023 8.6582 9.86328 8.36523 9.59961 8.10156L2.00195 0.669922C1.77734 0.455078 1.51367 0.337891 1.19141 0.337891C0.537109 0.337891 0.0292969 0.845703 0.0292969 1.5C0.0292969 1.8125 0.15625 2.10547 0.380859 2.33008L7.2168 9L0.380859 15.6699C0.15625 15.8945 0.0292969 16.1777 0.0292969 16.5C0.0292969 17.1543 0.537109 17.6621 1.19141 17.6621C1.50391 17.6621 1.77734 17.5449 2.00195 17.3301L9.59961 9.88867C9.87305 9.63477 10 9.3418 10 9Z"
                  fill="#FF3B30"
                />
              </svg>
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
