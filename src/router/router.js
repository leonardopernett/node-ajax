const {Router} = require('express');
const router = Router();

let products = [
    {
        id:1,
        name:"laptop"
    },

    {
        id:2,
        name:"monitor"
    },
    {
        id:3,
        name:"pc"
    },

]

router.get('/products',(req,res)=>{
    res.json(products)
})

router.post('/products',(req,res)=>{
     const {product} = req.body;
     products.push({
        id:products.length +1,
        name:product
    })
     res.json({message:'product created'});
})

router.delete('/product/:id',(req,res)=>{
     const id =req.params.id;    
        products.forEach((product, i) => {
            if(product.id == id ){
                products.splice(i, 1);
            }
        });

        // products.map((p,i) => p.id == id ? products.splice(i,1):p)

     res.json('product deleted')
})

router.put('/product/:id', (req,res)=>{
     const {id}= req.params;
     const {prod}= req.body;

    //  products.forEach(product => {
    //     if(product.id == id){
    //         product.name=prod
    //     }
    //  });

    products.filter(p=>p.id ==id)
            .map(product=> product.name = prod)

    //  products.map(p =>p.id==id ? p.name = prod : p)
     res.json('rupdated succefully')
})

module.exports = router;