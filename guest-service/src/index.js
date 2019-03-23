import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('src/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const port = process.env.GUEST_SERVICE_PORT || 3002

server.listen(port, () => {
  console.log(`Guest Service is running on localhost:${port}`)
})