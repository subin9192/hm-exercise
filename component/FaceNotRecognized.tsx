import style from "./FaceNotRecognized.scss";

// 컴포넌트 사용시 받아올 값을 여기에 명시합니다.
export interface IFaceNotRecognizedProps {
  // 문자열 예시
  title: string;

  try: boolean;

  cancel: string;

  // 숫자 예시
  // age: number;
}

// 리액트 컴포넌트 코드를 여기에 입력합니다.
const FaceNotRecognized = (props: IFaceNotRecognizedProps) => {
  // 자바스크립트 코드가 여기에 입력됩니다.

  // HTML + React 코드가 여기 입력됩니다.
  return (
    <>
      <div className={`faceNotRecognized${props.try ? ' try' : ''}`}>
      <svg className="symbol" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.27655 19.9763C2.10458 19.9763 2.5531 19.4933 2.5531 18.6652V9.38437C2.5531 4.89919 4.89919 2.5531 9.38437 2.5531H18.6997C19.5278 2.5531 20.0108 2.10458 20.0108 1.27655C20.0108 0.448518 19.5278 0 18.6997 0H9.31536C3.20863 0 0 3.17412 0 9.24636V18.6652C0 19.4933 0.448518 19.9763 1.27655 19.9763ZM62.7234 19.9763C63.5515 19.9763 64 19.4933 64 18.6652V9.24636C64 3.24313 60.8259 0 54.7191 0H45.3003C44.4722 0 43.9892 0.448518 43.9892 1.27655C43.9892 2.10458 44.4722 2.5531 45.3003 2.5531H54.6156C58.9628 2.5531 61.4469 4.89919 61.4469 9.38437V18.6652C61.4469 19.4933 61.8954 19.9763 62.7234 19.9763ZM29.1881 36.6404H29.4987C32.2933 36.6404 33.7078 35.2604 33.7078 32.4313V21.8394C33.7078 21.0458 33.3283 20.6663 32.5348 20.6663C31.7757 20.6663 31.3617 21.0458 31.3617 21.8394V32.7418C31.3617 33.6733 30.6027 34.2598 29.8437 34.2598H28.6706C28.0151 34.2598 27.5321 34.7429 27.5321 35.3984C27.5321 36.2264 28.0496 36.6404 29.1881 36.6404ZM19.5968 28.7051C20.6318 28.7051 21.2873 28.0496 21.2873 27.0146V22.4259C21.2873 21.3563 20.6318 20.7008 19.5968 20.7008C18.5962 20.7008 17.9407 21.3908 17.9407 22.4259V27.0146C17.9407 28.0496 18.5962 28.7051 19.5968 28.7051ZM44.0927 28.7051C45.0933 28.7051 45.7488 28.0496 45.7488 27.0146V22.4259C45.7488 21.3908 45.0933 20.7008 44.0927 20.7008C43.0577 20.7008 42.3677 21.3563 42.3677 22.4259V27.0146C42.3677 28.0496 43.0577 28.7051 44.0927 28.7051ZM31.7067 47.1978C35.5019 47.1978 39.297 45.6108 42.0916 42.8162C42.2987 42.6437 42.5057 42.3332 42.5057 41.8846C42.5057 41.1946 41.9881 40.7461 41.3671 40.7461C40.9876 40.7461 40.6771 40.8496 40.2286 41.3326C38.1585 43.4027 34.9499 44.8863 31.7067 44.8863C28.4636 44.8863 25.2895 43.4027 23.1849 41.3326C22.7709 40.8841 22.4604 40.7461 22.0464 40.7461C21.4253 40.7461 20.9078 41.1946 20.9078 41.8846C20.9078 42.2987 21.1148 42.6092 21.3218 42.8162C24.0474 45.6453 27.9116 47.1978 31.7067 47.1978ZM9.31536 64H18.6997C19.5278 64 20.0108 63.5515 20.0108 62.7234C20.0108 61.8954 19.5278 61.4469 18.6997 61.4469H9.38437C4.89919 61.4469 2.5531 59.1008 2.5531 54.5811V45.3348C2.5531 44.5067 2.10458 43.9892 1.27655 43.9892C0.448518 43.9892 0 44.5067 0 45.3348V54.7191C0 60.8259 3.20863 64 9.31536 64ZM45.3003 64H54.7191C60.8259 64 64 60.7224 64 54.7191V45.3348C64 44.5067 63.5515 43.9892 62.7234 43.9892C61.8954 43.9892 61.4469 44.5067 61.4469 45.3348V54.5811C61.4469 59.1008 58.9628 61.4469 54.6156 61.4469H45.3003C44.4722 61.4469 43.9892 61.8954 43.9892 62.7234C43.9892 63.5515 44.4722 64 45.3003 64Z" fill="#EBEBF5" fill-opacity="0.6"/>
</svg>
        <div className="title">{props.title}</div>
        <div className="description">{props.try ? 'Try Again' : ''}</div>
        <div className="action">{props.try ? 'Try Face ID Again' : ''}</div>
        <div className="cancel">{props.cancel}</div>
      </div>

      {/* SCSS 스타일 파일 주입을 위한 코드입니다. 수정 X */}
      <style jsx>{style}</style>
    </>
  );
};

export default FaceNotRecognized;
