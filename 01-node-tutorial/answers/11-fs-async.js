

// const {writeFile} = require("ffs");
// console.log("at start");
// writeFile("./temporary/output.txt", "This is line 1\n",(err, result)=>{
//     console.log("at point 1");
//     if (err){
//         console.log("This error happened: ", err);
//     } else{
// 
//     }
// });
// console.log("at end");



const {readFile, writeFile} = require ('fs');

console.log('Beginning')

readFile('./content/first.txt','utf8', (err,result) => {
    if (err){
        console.log(err)
        return
    }
    const first = result;
    
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if (err){
            console.log(err)
            return
        }
        console.log('Next Component')
        const second = result; 

        readFile('./content/result-sync.txt', 'utf8', (err, result)=> {
            if(err){
                console.log(err);
                return;
            }
            const third = result;
        
            writeFile(
                './temporary/fileB.txt',
                `Here is the result : ${first}, ${second}, ${third}`,
                (err, result)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    console.log('Last Component')
                }
            );
        });
    });
});
console.log('Starting next component')




