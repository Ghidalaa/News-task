const request=require('request')
const express = require('express')
const app = express()
const port = 3000
const news = require('./tools/news')

 //////////// public files 

 const path = require ('path')
 const publicDirectory = path.join(__dirname,'../public')
//  console.log(publicDirectory)
 app.use(express.static(publicDirectory))

 ////////////////////////// hbs files 
 app.set('view engine','hbs')
 /////
 const viewPath= path.join(__dirname,'../templates/views')
 app.set('views',viewPath)

    
//////////////////////////
// test hbs files : 
app.get('/',(req,res)=>{
    res.render('index')
})


////

// const country = process.argv[2]
// news(country,(error,data)=>{
//     console.log('Error ' ,error)
//     console.log('Data ' ,data[0])
   
// })
///// send data to hbs file 
app.get('/news',(req,res)=>{
    if(!req.query.country){
        return res.send({
            error:"you must provide country"
        })
    }
    
        news(req.query.country,(error,data)=>{
            if(error){
                console.log(error)
                return res.send({error:error})
            }
            res.send({
                data :data
            })
        })
    })


///
app.listen(port,()=>{
    console.log('server is running')
    
    })
