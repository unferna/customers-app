const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();

server.use(middlewares);

const PORT = 3001;
server.listen(PORT, () => {
    console.log("JSON SERVER is running on port", PORT);
});

server.put('/customers/300000001', (req, res) => {
    let body = [];
    
    req.on('data', chunk => {
        body.push(chunk);
    })
    .on('end', () => {
        body = JSON.parse( Buffer.concat(body).toString() );
        // console.log( JSON.stringify(body) )

        if( body.age && body.age > 18) {
            return res.send({
                error: true,
                validation: {
                    age: 'Debe ser menor de edad',
                    name: 'El nombre es incorrecto'
                }
            });
        } else {
            res.send({msg: 'ok', error: false});
        }
    });
});

server.use(router);