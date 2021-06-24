var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// 配置 body-parser 中间件（插件，专门用来解析表单 POST 请求体）
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//配置使用 art-template 模板引擎
app.engine('html', require('express-art-template'))

var comments = [
    {
        name: '张三',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三2',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三3',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三4',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三5',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    }
]
//开放 /public/xxx 目录下的资源
app.use('/public/',express.static('./public/'))

app.get('/',function (req,res) {
    res.render('index.html',{
        comments:comments
    })
})

app.get('/post',function (req,res) {
    res.render('post.html')
})

app.post('/post',function (req,res) {
    var comment = req.body
    console.log(comment);
    comment.dateTime = '2021-6-24'
    comments.unshift(comment)

    // res.statusCode = 302
    // res.setHeader('Location','/')
    // res.send()
    res.redirect('/')
})

app.listen(3000,function () {
    console.log('Runing...');
})