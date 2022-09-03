const Wish = require('../models/Wish')

module.exports = {
    getWishes: async(req,res) =>{
        try{
            const userWishes = await Wish.find({userId: req.user._id})
            res.render('wishlist.ejs', {wishes: userWishes})
        }
        catch(err){
            console.log(err)
        }
       

    },
    makeWish: async(req,res) =>{
        try{
            await Wish.create({
                wish: req.body.wish,
                price: req.body.price,
                url: req.body.url,
                purchased: false,
                userId: req.user._id,
              })
            res.redirect('/wishes')
        }
        catch(err){
            console.log(err)
        }
        
    },
    markGranted: async(req,res) =>{

    },
    markWishing: async(req,res) =>{

    },
    deleteWish: async(req,res) =>{
        try{
            console.log(req)
            await Wish.findOneAndDelete({_id: req.body.clientWish})
            console.log('wish deleted')
            res.json('deleted wish')
        }
        catch(err){
            console.log(err)
        }

    },
}
