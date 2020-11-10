// const http = require('http');

// let server = http.createServer((request, response)=>{
// 	if(request.url === ' /'){
// 		response.writeHead(200, {content-type : 'text/html'});
// 		response.write()
// 	}

// });

// server.listen(8000);
// console.log('server is running on port', 8000);


const http = require('http');

let server = http.createServer( (request, response)=>{
	if(request.url == '/'){
		response.writeHead(200, {'content-type' : 'text/html'});
		response.write('<html><body><h1> Hello World!</h1><p>This is root page</p></body></html>');
		response.end();   //ends the response
	}else if(request.url === '/profile'){
		response.writeHead(200, {'content-type' : 'text/html'});
		response.write('<html><body><h1> Hello Profile page!  How are you???</h1><p>This is profile page</p></body></html>');
		response.end();

	}else{
		response.writeHead(404, {'content-type':'text/html'});
		response.write('<html><body><h1> 404 page not found </h1></body></html>');
		response.end();
	
	}
});


server.listen(8000);
console.log('Server is running on port: ', 8000);