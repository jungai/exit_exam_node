import * as jsonServer from 'json-server'
import { mapRoutes } from './routes'

const server = jsonServer.create()
const router = jsonServer.router('./db/db.json')

const middlewaresOptions: jsonServer.MiddlewaresOptions = {
    bodyParser: true,
    logger: false,
    noCors: true,
    readOnly: true,
    static: 'assets',
}

const port: number = 3002

const middlewares = jsonServer.defaults(middlewaresOptions)

// server.set('view engine', 'ejs')

server.use(jsonServer.bodyParser)

server.use(middlewares)
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});
// mapRoutes in routes
mapRoutes(server)


server.use(router);

server.listen(3002, () => {
    console.log(`JSON Server is running on port ${port}`);
});
