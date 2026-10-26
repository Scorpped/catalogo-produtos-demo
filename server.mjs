import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
const routes={'/':'index.html','/app.mjs':'app.mjs','/catalog.mjs':'catalog.mjs','/style.css':'style.css'};
const types={html:'text/html',mjs:'text/javascript',css:'text/css'};
createServer(async(req,res)=>{
  const file=routes[new URL(req.url,'http://localhost').pathname];
  if(req.method!=='GET'||!file){res.writeHead(404);return res.end('Not found');}
  try {const data=await readFile(new URL(file,import.meta.url));res.writeHead(200,{'Content-Type':types[file.split('.').pop()]+'; charset=utf-8','X-Content-Type-Options':'nosniff'});res.end(data);}
  catch {res.writeHead(500);res.end('Unable to read asset');}
}).listen(Number(process.env.PORT||3000),'127.0.0.1',()=>console.log('Demonstração: http://127.0.0.1:'+(process.env.PORT||3000)));
