//add koa.js
const Koa = require('koa')
const app = new Koa()

const Router = require('@koa/router')

//create new Router
const router = new Router()

//If wrote the /index to url, write in body "Index Sayfasına Hoşgeldiniz"
router.get('/index',ctx => {
    ctx.body =  '<h1>Index Sayfasına Hoşgeldiniz</h1>'
})

//If wrote the /hakkimizda to url, write in body "Hakkımızda Sayfasına Hoşgeldiniz"
router.get('/hakkimizda',ctx => {
    ctx.body =  '<h1>Hakkımızda Sayfasına Hoşgeldiniz</h1>'
})

//If wrote the /iletisim to url, write in body "İletişim Sayfasına Hoşgeldiniz"
router.get('/iletisim',ctx => {
    ctx.body =  '<h1>İletişim Sayfasına Hoşgeldiniz</h1>'
})

app.use(router.routes())

const port = 3000
  app.listen(port,() => {
      console.log(`Sunucu ${port} Portunda Çalıştırıldı.`)
  })