const express = require("express");
const bodyPaser = require("body-parser");
const path = require("path");
const helmet = require("helmet");

//authorizationのルート
const authRoutes = require('./router/auth');
//matchingのルート
// const matchRoutes = require('./router/match') 


const app = express();


app.use(helmet());
app.use(express.static('./'));
app.use(bodyPaser.json());

//CORSの対応文
// app.use((Req,res,next) => {
//   res.setHeader('Access-Control-Allow-Origin','*');
//   res.setHeader('Access-Control-Allow-Methods','OPTIONS, GET, POST, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers','Content-type, Accept, X-Custom-Header');
//   if (req.method === 'OPTIONS') {
//     return res.sendStatus(200);
//   }
//   next();
// })

app.use('/auth',authRoutes);
// app.use('/match',matchRoutes);


app.get('/test', (req,res) => {
  res.send('This is a test');
})

const port = process.env.PORT || 8080;
app.listen(port, () => {console.log('Server started on port:' + port);})