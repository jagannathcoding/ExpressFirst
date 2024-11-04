const express = require("express");
const app = express();
app.listen(3000);


function emni(n)
{
    let sum=0;
    for(let i=1;i<=n;i++)
    {
        sum+=i;
    }
    return sum;
    
}


app.get("/", (req, res) => {
    const n=req.query.n;
    const result=emni(n);
    res.send(result+" is emni of the function by pa pa paglu");
});


