console.log("hello")
let form= document.getElementById('myform')
form.addEventListener('submit',(event)=>{
    console.log('test')
    event.preventDefault()
    newsFunction()
    form.reset()
})

let newsFunction= async()=>{
    try{//http://localhost:3000/news?country=eg
        
        const country= document.getElementById('country').value
        const res= await fetch('http://localhost:3000/news?country='+country)
        const data = await res.json()
        console.log(data) 
        if(data.error){
            document.getElementById('error').innerText=data.error
            document.getElementById('title').innerText=""
            document.getElementById('img').innerText=""
            document.getElementById('description').innerText=""

        }
        else {
            document.getElementById('title').innerText=data
            document.getElementById('img').innerText=data[0].img
            document.getElementById('description').innerText=data[0].description
            document.getElementById('error').innerText=""
            



        }
        
    }
    catch(e){
        console.log(e)
    }

}