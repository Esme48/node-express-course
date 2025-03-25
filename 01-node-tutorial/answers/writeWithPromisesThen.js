const {writeFile, readFile} = require('fs').promises

writeFile('./content/first.txt', 'First Component')
    .then(()=>{
        return writeFile('./content/second.txt', 'Second Component')
    })
    .then(()=>{
        return writeFile('./content/return-async.txt', 'Third Component')
    })
    .then(()=>{
        return readFile('./content/first.txt', 'utf8')
    })
    .then(dataOne =>{
        return readFile('./content/second.txt', 'utf8').then(dataTwo =>{
            return {dataOne, dataTwo};
        })
    })
    .then(({dataOne, dataTwo})=>{
        return readFile('./content/return-async.txt', 'utf8').then(allData =>{
            console.log(dataOne, dataTwo, allData)
            return{dataOne, dataTwo, allData}
        })
    })
    .then(({dataOne, dataTwo, allData})=>{
        return writeFile('./content/temp.txt', `Final Component: ${dataOne} ${dataTwo} ${allData}`)
    })

    .then(()=>{
        return readFile('./content/temp.txt', 'utf8');
    })
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log(error)
    })