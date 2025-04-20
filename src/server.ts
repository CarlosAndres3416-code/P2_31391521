import app from './app'
import { puerto } from './config/index'

const port = puerto || 3000

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})