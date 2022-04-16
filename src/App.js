import './App.css';
import { useState } from 'react';

function App() {

  let [title, title_changer] = useState(['기본 글 제목1', '기본 글 제목2', '기본 글 제목1'])
  let [count, count_changer] = useState(0);

  function title_change() {
    let newarr = [...title];
    newarr[0] = '제목1 '
    title_changer(newarr);
  }

  return (
    <div className="App">

      <div className='nav-bar'>
        <div> 블로그 만들기 연습</div>
      </div>
      <div className='list'>
        <h2> {title[0]} <span onClick={() => { count_changer(count + 1) }}>LIKE!</span>{count}</h2>
        <p>2022.04.17</p> <span onClick={title_change}>제목 바꾸기</span>
        <hr></hr>
      </div>
      <div className='list'>
        <h2> {title[1]} </h2>
        <p>2022.04.17</p>
        <hr></hr>
      </div>
      <div className='list'>
        <h2> {title[2]} </h2>
        <p>2022.04.17</p>
        <hr></hr>
      </div>
      <Modal></Modal>


    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>내용</p>
    </div>
  )
}

export default App;
