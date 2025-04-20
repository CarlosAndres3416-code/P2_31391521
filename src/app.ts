import express from 'express'
import path from 'path'
import router from './routes/index'

const app = express()

// Configuración de plantilla EJS
app.set('view engine', 'ejs')
app.set('views', [
    path.join(__dirname, 'views/main.ejs'),
    path.join(__dirname, '../src/views/main.ejs'),
    path.join(process.cwd(), 'views/main.ejs')
])

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// Rutas
app.use('/', router)

export default app