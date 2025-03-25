const { writeFile, readFile} = require('fs').promises

const writer = async() =>{
    try{
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    const third = await readFile('./content/result-sync.txt', 'utf8')
    await writeFile('./content/temp.txt', `This is the response : ${first} ${second} ${third}`)
    console.log(first, second, third) //Wainting for promise to be resolved
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