import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('src/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const port = process.env.LOCATION_SERVICE_PORT || 3001

server.listen(port, () => {
  console.log(`Location Service is running on localhost:${port}`)
})