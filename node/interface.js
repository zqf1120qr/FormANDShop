const express = require('express')
const path = require("path");
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const {log} = console;
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// 配置静态资源目录 整一个文件夹 通过域名能访问
app.use('/img', express.static("./public"))
//数据模型
//路由配置
const upload = require('./upload.js');
app.use('/upload', upload)

// 映入mysql模块
const mysql = require('mysql');
const db = mysql.createPool({
  // 数据库的IP
  host: '127.0.0.1',
  // 登录数据库的账号
  user: 'root',
  // 登录数据库的密码
  password: '12345678',
  // 指定要操作的数据库
  database: 'my_sql'
})


app.get('/getGoodsInfo', (req, res) => {
  const queryInfo = `select * from goods_table;`
  db.query(queryInfo, (err, result) => {
    if (err) {
      res.send({code: 500, msg: '服务器异常'});
      return log('查询错误', err.message);
    }
    if (result.length) {
      result = result.map(item => ({...item, url: `${item.url}`}))
      res.send({code: 200, msg: '获取成功', goods_info: result});
      return log(`查询成功`);
    }
  })
})

app.post('/getGoodsDetails', (req, res) => {
  // log(req.body);
  let prom = Promise.resolve();
  let resObj = {};
  prom.then(() => {
    return new Promise(resolve => {
      const queryDetails = `select * from goods_details where id = ${req.body.id} `
      db.query(queryDetails, (err, result) => {
        if (err) {
          res.send({code: 500, msg: '服务器异常'});
          return log('查询错误', err.message);
        }
        if (result.length) {
          // console.log('111', result)
          resolve(result);
        }
      })
    })
  })
    .then((data) => {
      log('data', data)
      const queryImage = `select * from goods_image_connection where goods_id=${data[0].id};`
      db.query(queryImage, (err, result) => {
        if (err) {
          res.send({code: 500, msg: '服务器异常'});
          return log('查询错误', err.message);
        }
        log(result)
        if (result.length) {
          res.send({code: 200, msg: '获取成功', goods_info: {...data[0], imgURL: [...result]}})
          return log('查询成功');
        } else {
          res.send({code: 200, msg: '获取失败', goods_info: result});
          return log(`查询id${req.body}失败`);
        }
      })
    })
})
app.post('/login', (req, res) => {
  console.log(req)
  const { name, password } = req.body
  const queryLogin = `select * from users where name = '${name}' and password = '${password}'`;
  db.query(queryLogin, (err, result) => {
    if (err) {
      res.send({ code: 500, msg: '服务器异常' });
      return log('查询错误', err.message);
    }
    if (result.length == 1) {
      res.send({ code: 200, msg: '登陆成功', info: { ...result[0] } });
      return log(`查询${name}&${password}成功`);
    } else {
      res.send({ code: 404, msg: '登陆失败', info: { ...result[0] } });
      return log(`查询${name}&${password}失败`);
    }
  })
})

app.post('/register', (req, res) => {
  const { name, password } = req.body;
  if (!name || !password ) {
    res.send({ code: 404, msg: '信息不完整', info: { ...req.body } });
    return;
  }
  const queryRegister = `insert into users (name, password ) values ('${name}', '${password}');`;
  db.query(queryRegister, (err, result) => {
    if (err) {
      res.send({ code: 404, msg: '注册失败,用户名重复' });
      return log('插入错误', err.message)
    }
    log(result);
    if (result) {
      res.send({ code: 200, msg: '注册成功', info: { ...result } });
      return log(`${name}注册成功`);
    } else {
      res.send({ code: 404, msg: '注册失败,用户名重复' });
      return log(`${name}注册失败`);
    }
  })
})

app.listen(8080, () => console.log("服务器开启"))
