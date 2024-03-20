var express = require ("express")
var bodyParser = require("body-parser");
var app = express()
var port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req, res) {
    res.send("Hello, World!");
  });
  
  app.get('/addTwoNumbers', function(req,res){
    const { num1, num2 } = req.query;
 
  const result = parseFloat(num1) + parseFloat(num2);
  res.json({ statusCode: 567, message: ' Success', result: result});
  })


app.listen(port,()=>{
    console.log("App Listening to: "+ port)
})