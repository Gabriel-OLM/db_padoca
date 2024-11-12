const jsonServer = require("json-server"); // importing json-server library
const auth = require('json-server-auth')
const server = jsonServer.create();
const router = jsonServer.router("db.json");

server.db = router.db
app.use(auth)
app.use(router)
app.listen(3000)

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port);
