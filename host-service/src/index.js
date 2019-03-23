import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('src/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const port = process.env.HOST_SERVICE_PORT || 3003

server.listen(port, () => {
  console.log(`Host Service is running on localhost:${port}`)
})