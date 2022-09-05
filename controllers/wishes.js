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
        try {
            console.log('got req')
            await Wish.findOneAndUpdate({_id:req.body.wishIdFromJSFile}, {
                purchased: true
            })
            console.log('Wish Granted!')
            res.json('Wish Granted!')
        } catch(err) {
            console.log(err)
        }
    },

    markWishing: async(req,res) =>{
        try {
            console.log('got req')
            await Wish.findOneAndUpdate({_id:req.body.wishIdFromJSFile}, {
                purchased: false
            })
            console.log('Wish Unfulfilled!')
            res.json('Wish Unfulfilled!')
        } catch(err) {
            console.log(err)
        }
    },
    
    deleteWish: async(req,res) =>{
        try{
            console.log(req)
            await Wish.findOneAndDelete({_id: req.body.wishIdFromJSFile})
            console.log('wish deleted')
            res.json('deleted wish')
        }
        catch(err){
            console.log(err)
        }

    },
}
