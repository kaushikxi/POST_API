const express= require('express');
const bodyparser=require('body-parser');
const { log } = require('console');

const app=express();
app.use(bodyparser.json())

app.get('',function(request,response){
    response.send({
        operation_code:1
    });
});
app.post('/EnterDetails',function(request,response){
   
    try{
        let obj = request.body;
        let values = obj.data

        let alphaReg = new RegExp(/^[a-z]/i);
        let numReg = new RegExp(/^[0-9]/);
        let num=[];
        let alpha=[];
        for(let i=0;i<values.length;i++){
            if(alphaReg.test(values[i])) {
                alpha.push(values[i]);
                } else if(numReg.test(values[i])) {
                num.push(values[i]);
                }
        }
        response.send({
            is_success: true,
            user_id: "kaushik_subramanian_24052002", 
            email : "ks2916@srmist.edu.in",
            roll_number:"RA2011026010434",
            numbers:num,
            alphabets:alpha
        })

    }catch(e){
        response.send({
            is_success: false
        })
    }
   
});

app.listen(3000,()=>{
    console.log('server running')
});