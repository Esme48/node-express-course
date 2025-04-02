const {writeFile, readFile} = require('fs').promises
//writing the files
writeFile('./content/temp.txt', 'First Component 1\n')
    .then(()=>{
        return writeFile('./content/temp.txt', 'Second Component 2\n', {flag: 'a'});
    })
    .then(()=>{
        return writeFile('./content/temp.txt', 'Third Component 3\n', {flag: 'a'});
    })
    .then(()=>{
        return readFile('./content/temp.txt', 'utf8') ///Read the file 
    })
        //Note: These commented components are from video example, they are not needed 
        // //.then(dataOne =>{
        //        // return readFile('./content/second.txt', 'utf8').then(dataTwo =>{
        //        //     return {dataOne, dataTwo};
        //         //})
        //         //})
        //     .then(({dataOne, dataTwo})=>{
        //         return readFile('./content/return-async.txt', 'utf8').then(allData =>{
        //             console.log(dataOne, dataTwo, allData)
        //             return{dataOne, dataTwo, allData}
        //         })
        //     })
        //     .then(({dataOne, dataTwo, allData})=>{
        //         return writeFile('./content/temp.txt', `Final Component: ${dataOne} ${dataTwo} ${allData}`)
        //     })
        // 
        //     .then(()=>{
        //         return readFile('./content/temp.txt', 'utf8');
        //     })
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log(error)
    })