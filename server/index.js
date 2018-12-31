const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5555   ;

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
    console.error(`Node cluster master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
    });

} else {
    const app = express();

    // Priority serve any static files.
    app.use(express.static(path.resolve(__dirname, '../website/build')));
    app.use(bodyParser.urlencoded({extended: true}));
    // Answer API requests.
    app.use(/^(\/api).*$/, function(req, res) {
        // console.log(req.method, Object.keys(req.body).length);
        let options = {
            method: req.method,
            url: process.env.API_URL + req.originalUrl,
            headers: {'X-Custom-Header': 'foobar'}
        }
        if (Object.keys(req.body).length !== 0 ) {
            const data = req.body;
            options = {
                ...options,
                data,
            }
        }
        // console.log(options);
        axios(options)
            .then(function (response) {
            //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
                // console.log(response);
                res.send(response.data);
            })
            .catch(function (error) {
                // handle error
                // console.log(error.response.data);
                const status = error.response.data.status;
                const message = error.response.data.message;
                res.status(status).json({ status, message });
                // res.send(error.response.data);
            })
            .then(function () {
                // always executed
            });

        
        // res.set('Content-Type', 'application/json');
        // res.send('{"message":"Hello from the custom server!"}');
        // axios.get('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(function (response) {
        //         // handle success
        //         // res.set('Content-Type', 'application/json');
        //         res.send(response.data);
        //         // console.log(response.data);
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        //     .then(function () {
        //         // always executed
        //     });
    });

    // All remaining requests return the React app, so it can handle routing.
    app.get('*', function(request, response) {
        response.sendFile(path.resolve(__dirname, '../website/build', 'index.html'));
    });

    app.listen(PORT, function() {
        console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
    });
}