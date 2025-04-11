const express = require('express')
const path = require('path')
const app=express()

const peopleRouter = require('./routes/people')
//const morgan = require('morgan')
//const logger = require('./logger')
//const authorize = require('./authorize')
const logger = (req, res, next) =>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
    //Either send back your own response or pass it on to your home page
}

const { products} = require('./data')

app.use(express.static('./public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use("/api/v1/people", peopleRouter)
    /// Middleware Component
    //app.use(morgan('tiny'))
    //app.use(logger, authorize)
app.use(logger)

app.get('/', (req, res)=>{
    res.send('Home')
})
app.get('/about', (req, res)=>{
    res.send('About')
     ////The mthod was the get, and the user was trying to access in 2025.
})




    //const port=process.env.PORT || 3000;
    //this is the endpoint: http://localhost:3000/

    //Middleware


    //app.get('/', (req, res) => {
   // res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
    //})

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
           //status: true
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
     //res.send('Hello World')
    }
    res.status(200).json(sortedProducts)
})

// app.get('/api/v1/people', (req, res)=>{
//     res.status(200).json({success: true, data: people})
// })
// 
// app.post('/api/v1/people', (req, res) =>{
//     const {name}= req.body
//     if(!name){
//         return res.status(400).json({ success: false, message: "Please provide a name"})
//     }
//     people.push({id: people.length + 1, name: req.body.name})
//     res.status(201).json({ success: true, name: req.body.name})
// })

app.all('*', (req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>")
})     //If they cannot find a resource, this is what it is

app.listen(3000, () => {
    console.log(`Our Server Is Working Great On Port`, 3000)
})

//console.log('Express Tutorial')
