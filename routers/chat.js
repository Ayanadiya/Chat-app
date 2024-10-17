const express=require('express');
const fs=require('fs');
const router=express.Router();
router.get('/',(req,res,next)=>{
    fs.readFile('username.txt',(error,data)=>{
        if(error){
            console.log(error);
            data='No Chat exists';
        }
        res.send(`
            ${data}<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/" method="POST">
            <input type="text" id="message" name="message">
            <input type="hidden" id="username" name="username">
            <button type="submit">Send</button>
            </form>
                `)
    })
    
})
router.post('/',(req,res,next)=>{
        fs.writeFile('username.txt',`${req.body.username}:${req.body.message}`,{flag:'a'},(error)=>
        {
            console.log(error);
        }
    );
        res.redirect('/');
})

module.exports=router;