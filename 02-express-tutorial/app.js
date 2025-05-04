const express = require('express')
const path = require('path')
const app=express()

const peopleRouter = require('./routes/people')
const logger = (req, res, next) =>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}

const { products} = require('./data')

app.use(logger)
app.use(express.static('./public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use("/api/v1/people", peopleRouter)

app.get('/', (req, res)=>{
    res.send('Home')
})
app.get('/about', (req, res)=>{
    res.send('About')

})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/v1/test', (req, res)=> res.status(200).json({message: "It Worked!", 
    status: true
}))

app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID);
    const product = products.find((p) => p.id === idToFind)

    if(!product){
        return res.status(404).json({message: "That Product Was Not Found",
        })
    }
    return res.json(product)
})

app.get('/api/v1/query', (req, res) => {
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
        return res.status(404).send(' We Do Not Have a Product That Is a Match ')
    }
    res.status(200).json(sortedProducts)
})


app.all('*', (req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>")
})    

app.listen(3000, () => {
    console.log(`Our Server Is Working Great On Port`, 3000)
})

