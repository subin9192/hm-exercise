import style from "./AlertModal.scss";

// 컴포넌트 사용시 받아올 값을 여기에 명시합니다.
export interface IAlertModalProps {
  // 문자열 예시
  title: string;

  subtitle: string;

  actionLabel: string;

  theme: string;

  // 숫자 예시
  // age: number;
}

// 리액트 컴포넌트 코드를 여기에 입력합니다.
const AlertModal = (props: IAlertModalProps) => {
  // 자바스크립트 코드가 여기에 입력됩니다.

  // HTML + React 코드가 여기 입력됩니다.
  return (
    <>
      <div className={`AlertModal${props.theme === 'Light' ? '' : ' -dark'}`}>
        <div className="title"></div>
        <div className="subtitle">{props.subtitle}</div>
        <div className="seperator"></div>
        <div className="actionLabel">{props.actionLabel}</div>
      </div>

      {/* SCSS 스타일 파일 주입을 위한 코드입니다. 수정 X */}
      <style jsx>{style}</style>
    </>
  );
};

export default AlertModal;
