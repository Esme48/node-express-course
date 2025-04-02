const { writeFile, readFile} = require('fs').promises

const writer = async() =>{
    try{
        await writeFile('./content/temp.txt', 'This is the first lines component 1\n','utf8')
        await writeFile('./content/temp.txt', 'This is the second lines component 2\n', {flag: 'a'})
        await writeFile('./content/temp.txt', 'This is the third lines component 3\n', {flag: 'a'})
        //await writeFile('./content/temp.txt', `This is the response : ${first} ${second} ${third}`)
        //console.log(first, second, third) //Wainting for promise to be resolved
        //await makes sure that everything is wrritten sequentally 
    } catch (error){
        console.log(error)
    }
}

const reader = async() =>{
    try{
        const data = await readFile('./content/temp.txt', 'utf8')
        console.log(data);
    } catch(error){
        console.log(error)
    }
}

const readwrite = async() =>{
    await writer()
    await reader()
}

readwrite()


// writer('./content/first.txt')
// .then((result)=> console.log(result))
// .catch((err)=> console.log(err))

//const util = require('util');

//const readFilePromise=util.promisify(readFile)
//const writeFilePromise=util.promisify(writeFile)

// const writer = (path)=>{
//    return new Promise((resolve,reject)=>{
//        readFile(path, 'utf8', (err, data) =>{
//            if(err){ //Passing the path and passing a call back
//                 reject(err)
//             } else{
//                 resolve(data)
//             }
//          })
//      })
//  }