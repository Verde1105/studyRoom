import logo from './logo.svg';
import './App.css';
//JSX문법.
//변수는 LET 혹은 CONST만 사용. 사유는 VAR사용시 스코프{범위}가 꼬인다.
//LET은 변수 CONST는 절대불변의 상수. 얘들 펑션밖에서도 선언 가능하다.
//리턴시 하나의 태크만 리턴해주니 잘 포장해줄것
//IF 사용 불가 대신 삼항연산자 사용가능. 삼항사용법 (조건 ? 값(맞을시) : 값(틀릴시))
//스타일시트는 외부파일 추천!!!1

let 관리자 = 20233333; //변수

function App() {
  const color = {
    color: 'red',
    //추천 안하는 방식, 기억.
  };

  let list = [1, 2, 3];

  return (
    <div style={color}>
      어서오세요.<br></br>
      {관리자 === 20233353 ? '관리자입니다' : '사용자입니다.'}
      <div>{list.map((n) => n)}</div>
    </div>
  );
}

export default App;
