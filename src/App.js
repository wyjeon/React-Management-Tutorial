//웹사이트의 화면에 대한 내용출력을 담당하는 부분
import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/any/1',
  'name': '홍길동',
  'birthday': '000000',
  'gender': '남자',
  'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/any/2',
    'name': '김훈',
    'birthday': '111111',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any/3',
    'name': '이준',
    'birthday': '222222',
    'gender': '여자',
    'job': '교수'
  }
]

class App extends Component {
  render() {
    return (
      <div>
      {
        customers.map(c => {
          return(
            <Customer 
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              job={c.job}
            />
          );
        })
      }
      </div>
    )
  }
}

export default App;
