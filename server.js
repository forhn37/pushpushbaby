const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // path 모듈 추가

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// 정적 파일 제공을 위한 미들웨어 설정
app.use(express.static('public'));

app.get('/', (req, res) => {
  // public 디렉토리 내의 index.html 파일을 제공
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/send-message', (req, res) => {
    const { message } = req.body;
    console.log('Received message:', message);

    res.status(200).send({ success: true, message: 'Message received' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
