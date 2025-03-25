const {createReadStream}=require('fs')

const stream = createReadStream('./content/big.txt',{
    highWaterMark: 200 ,
    encoding: 'utf8',
})

let beginCount=0;
stream.on('data', (result) => {
    beginCount++;
    console.log(`Counter ${beginCount}:`)
    console.log(result)
})
stream.on('end', ()=> {
    console.log(`Total counted value is: ${beginCount}`)
})
stream.on('error', (err)=>console.log(err))
