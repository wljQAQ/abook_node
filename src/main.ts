// import express from 'express';

import express from './lib/myexpress';
//
const app = express();

// app.get('/', function (req, res) {
//   res.send('123');
//   console.log(app)
// },function(req,res,next){

//   next();
// });

app.get('/a', (req, res) => {
  // console.log(app);
});

app.listen(8124);
