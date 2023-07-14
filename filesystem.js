// const file = require('fs');

// file.readFile('test.txt',(error, result)=>{
//     if(error)throw error;
//     // console.log('file seen')
//     console.log(result.toString())
// });

// 
// const file = require('fs');

//  file.readFile('test.txt', 'utf8' ,(error, result)=>{
//     if(error)throw error;
//     // console.log('file seen')
//     console.log(result)
// });

const file = require('fs');
file.writeFile('test.txt' , 'Hey, you are a tech guru', (err)=>
{
    if (err) throw err;
    console.log(' i don do am')
})