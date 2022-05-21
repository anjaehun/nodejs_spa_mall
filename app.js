const express = require("express");  // express 패키지 파일 불러오기 
const app = express(); 
const port = 3000; 

const goodsRouter = require("./routes/goods");

const requestMiddleWare= (req , res,  next)=> {
    console.log("Request URL : ", req.originalUrl, "-" , new Date());
    next();
    };

app.use(requestMiddleWare);

app.use("/api", [goodsRouter]);

app.get('/',(req, res) => {
    res.send(" 끼야앙 world");
})

// 포트 번호 받는 곳 
app.listen(port, () => {
   console.log(port, "포트로 서버가 켜졌어요!");
}); 

