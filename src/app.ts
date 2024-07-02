import http from 'http';

const server = http.createServer((req,res)=>{
  if(req.method === 'GET'){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end('This is me!');
  } else {
    res.writeHead(404, {"Content-Type" : "text/plain"});
    res.end('404 Not-Found');
  }
});

server.listen(3000,()=>{
  console.log(`http://localhost:3000`);
});

