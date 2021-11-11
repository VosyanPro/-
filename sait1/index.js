import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))
console.log(app.get('views'))

app.use(express.static('public'))
app.use(express.static(path.resolve(__dirname, 'static')))

app.get('/', (req, res) => {
    res.render('index', {title: 'Главная'})
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'О компании'})
})

app.get('/contacts', (req, res) => {
    res.render('contacts', {title: 'Контакты'})
})

app.listen(PORT,() => {
    console.log(`Server has been started on port ${PORT}...`)
})