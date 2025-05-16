const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// wsServer.on('connection', onConnect);
// function onConnect(wsClient) {
//   console.log('Новый пользователь');
//   // отправка приветственного сообщения клиенту
//   wsClient.send('Привет');
//   wsClient.on('message', function (message) {
//     /* обработчик сообщений от клиента */
//   }),
//     wsClient.on('close', function () {
//       // отправка уведомления в консоль
//       console.log('Пользователь отключился');
//     })
// }

const logDirectory = './logs';
const logFile = path.join(logDirectory, 'my-app.log');
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}
function logToFile(text) {
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp}: ${text}\n`;

  fs.appendFile(logFile, logEntry, (err) => {
    if (err) {
      console.error('Error appending to log file:', err);
    }
  });
}



app.use(cors());
var response_table = {
  50: "Fifty"
}
// Basic error handling for the file reading process
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

var descriptions = {

}
app.get('/log/:string_to_log', (req, res) => {
  const stringToLog = req.params.string_to_log;

  if (typeof stringToLog !== 'string' || stringToLog.trim() === '') {
    return res.status(400).send('Invalid log string.  Must be a non-empty string.');
  }

  logToFile(stringToLog); // Append the string to the log file

  res.send(`Logged: ${stringToLog}`); // Send a response to the client
});
function ensureLogFileExists(logFilePath) {
  if (!fs.existsSync(logFilePath)) {
    //Create directory if it doesn't exist
    if (!fs.existsSync(path.dirname(logFilePath))) {
      fs.mkdirSync(path.dirname(logFilePath), { recursive: true });
    }
    // Create the log file
    fs.writeFileSync(logFilePath, ''); // Create an empty file
    console.log(`Log file created: ${logFilePath}`);
  }
}
app.get('/logs', (req, res) => {
  ensureLogFileExists(logFile); // Guarantee file exists before reading

  fs.readFile(logFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading log file:', err);
      return res.status(500).send('Error reading log file'); // Send appropriate error response
    }
    res.setHeader('Content-Type', 'text/plain'); // Set correct MIME type
    res.send(data);  // Send the entire log file content as plain text.
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/S/:SRouteID/E/:NodeID', (req, res) => {
  console.log(req.params.SRouteID, req.params.NodeID)

  var response = ""
  if (response_table[req.params.SRouteID])
    response += response_table[req.params.SRouteID]
  else response = "Not found"
  res.send(response)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// 
function execsp(exp) {
  console.log("from exec", exp)
}
app.get('/execsp/:Expression', (req, res) => {
  execsp(req.params.Expression);
  res.send("Static param expression executed:\n" + req.params.Expression);

  // res.send(req.params.Expression)
})
function single_param_route_no_return() {

}

// app.post()
// MJ
// Execute named expression where all the params are known
// Execute expression with given param string (MJ text)

// ... where source = wikidata


var UNIVERSE = {

}//contains MJ objects

//no params functions:

var NPF = {
  // log_time
  //log new MJ ID
  M1744572439841log_rand_MJID____: function text2MJid(text) {
    text = text.replaceAll(/\W/ig, "_")
    console.log(("M" + Date.now() + text + "________________________").slice(0, 32))
  }

}

// function text2MJid(text){
//   text = text.replaceAll(/\W/ig,"_")
//   return ("M"+Date.now()+text+"________________________").slice(0,32)
// }
// Build expression (Call, params)
// function build_expression(){
//   if(allParamsKnown)
// }
var instant_proxies = {

}
var reverse_resolver = {}
var some_list_of_phone_numbers = {
  1: "+79231150876"
}
var some_list_of_first_names = {
  1: "Oleg"
}
var some_list_of_last_names = {
  1: "Lilitko"
}


function get_MJID_by_address(address) {
  return "MJID"
}

// static words. 