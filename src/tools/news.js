const request=require('request');
/// error we face :
// 1- "code": "apiKeyInvalid", => if(code) => wrong access key
//totalResults = 0 or  if(!body.articles) => wrong query
//

const news = (country,callback) =>{
    const url = "https://newsapi.org/v2/top-headlines?country="+country+"&apiKey=888fcce93cdf457fb90f0b80790e1650";
     request({ url ,json:true}, (error, response) => {
    // console.log(response.body)

    // internet connection / invalid url
    if(error){
     callback('Unable to connect to weather service',undefined)
    }

    else if(response.body.code){
       callback('wrong in access key',undefined)
    }
    else if(response.body.totalResults==0){
        callback('wrong country name',undefined)
     }
    else{
       callback(undefined,[
          
         {data:response.body.articles}
         
         
         ])
    }
 });
}

module.exports = news

///////////// array :
// //[
          
//    {
//       title:response.body.articles[0].title ,
//        img:response.body.articles[0].urlToImage,
//       description: response.body.articles[0].description},
//       {
//         title:response.body.articles[1].title ,
//         img:response.body.articles[1].urlToImage,
//        description: response.body.articles[1].description

//       },
//       {
//         title:response.body.articles[2].title ,
//         img:response.body.articles[2].urlToImage,
//        description: response.body.articles[2].description

//       },
//       {
//         title:response.body.articles[3].title ,
//         img:response.body.articles[3].urlToImage,
//        description: response.body.articles[3].description

//       },
//       {
//         title:response.body.articles[4].title ,
//         img:response.body.articles[4].urlToImage,
//        description: response.body.articles[4].description

//       }
     
     
//      ]