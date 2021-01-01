const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
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
      ]);
})



app.listen(port, ()=> console.log(`Listening on port ${port}`));