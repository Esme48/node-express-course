const express = require('express')
const path = require('path')
const app=express()

const { products } = require('./data')

app.use(express.static('./public'))
    
    //const port=process.env.PORT || 3000;
    //this is the endpoint: http://localhost:3000/

    //Middleware


 //app.get('/', (req, res) => {
   // res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
 //})

app.get('/api/users', (req, res) => {
    res.json(products)
})

app.get("/api/v1/test", (req, res)=> res.status(200).json({message: "It Worked!", 
    status: true
}))

app.get("/api/v1/products/:productID", (req, res) => {
    const idToFind = parseInt(req.params.productID);
    const product = products.find((p) => p.id === idToFind)

    if(!product){
        return res.status(404).json({message: "This Product Was Not Found",
           status: true
        })
    }
    return res.json(product)
})

app.get("/api/v1/query", (req, res) => {
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0 , Number(limit))
    }
    if(sortedProducts.length < 1){
        res.status(200).send(' We Do Not Have A Product With That Match ')
     //res.send('Hello World')
    }
    res.status(200).json(sortedProducts)
})

app.all('*', (req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>")
})     //If they cannot find a resource, this is what it is

app.listen(3000, () => {
    console.log(`Our Server Is Working Great On Port`, 3000)
})

//console.log('Express Tutorial')
