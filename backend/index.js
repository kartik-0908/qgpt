const express = require('express');
const app = express();
let chatHis=["First"];

app.use(express.json());

app.post("/add_mssg",function(req,res){
    const curr_mssg = req.body.mssg;
    console.log(curr_mssg);
    chatHis.push(curr_mssg);
    console.log(chatHis);
    res.send("done")

})
app.get("/get_history",function(req,res){
    res.send({
        "chat_history":chatHis
    });
})

app.listen(3001);
