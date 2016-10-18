

const http = require('http');

const httpServer = http.createServer(function(req, res) {

      if(req.url === '/JAK') {
        res.writeHead(20, {'Content-Type' : 'text/plain'});
        res.end('FS\n');
    } else if(req.url === '/FS') {
    	res.writeHead(200, {'Content-Type' : 'text/plain'});
    	res.end('FS RO !!!\n');
    } else if(req.url === '/FS/termimnator') {
    	res.writeHead(200, {'Content-Type' : 'text/plain'});
    	res.end('Cd, Dd\n');
    } else if(req.url === '/FS/terminator/cd') {
    	res.writeHead(200, {'Content-Type' : 'text/plain'});
    	res.end('da !!!\n');
	} else if(req.url === '/DS/terminator/dd') {
    	res.writeHead(200, {'Content-Type' : 'text/plain'});
    	res.end('ddnon !!!\n');	
    } else if(req.url === '/FS/trtud/lefrance') {
    	res.writeHead(200, {'Content-Type' : 'text/plain'});
    	res.end('ERROR 404 !!!\n');
    } else if(req.url === '/FS/sts/hies') {
    	res.writeHead(200, {'Content-Type' : 'text/plain'});
    	res.end('Forviews !!!\n');	
    } else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("YES!");
    }
});

httpServer.listen(3001);