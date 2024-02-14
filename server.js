const express = require('express');
const app = express();

// POST /subscribe 요청 처리
app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  console.log('새로운 구독:', subscription);
  // TODO: 구독 정보 저장 또는 처리

  res.status(200).send('구독 정보가 성공적으로 받아졌습니다.');
});

app.listen(3000, () => {
  console.log('서버가 3000 포트에서 실행 중입니다.');
});
