require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// home route 
app.get('/twitter',(req,res)=>
{
 res.send("Pm");
});
app.get('/login',(req,res)=>
{
    res.send("<h1>please login at PM</h1>");
});
app.get('/chai',(req,res)=>
{
    res.send("<h2>chai aur code </h2>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
});