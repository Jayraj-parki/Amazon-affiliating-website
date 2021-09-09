const express = require('express')
const validator = require("validator")
const Product = require("../model/Product")
const Contact = require("../model/Contact")
const RandomProduct = require("../model/RandomProduct")

const router = express.Router()

router.post("/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body
        if (!name || !email || !message) {
            return res.status(422).json({ err: "PLz fill all the field properly " })
        }
        else if (!validator.isEmail(email)) {
            return res.status(422).json({ err: "Enter a valid email" })
        }
        else {

            const contactMgs = new Contact({ name, email, message})
            await contactMgs.save()
            return res.status(201).json({ msg: "Message Send Successfully! Thanks for your comment!" })

        }

    } catch (err) {
        return res.status(422).json({ err: "Opps! Something went wrong, Please try again later!" })
    }
})
router.post("/addProduct", async (req, res) => {
    try {
        const { link } = req.body
         const addProduct = new RandomProduct({link})
        await addProduct.save()
        return res.status(201).json({ msg: " Product saved" })
    } catch (err) {
        console.log(err)
        return res.status(422).json({ err: "Opps! Something went wrong, Please try again later!" })
    }
}) 
router.post("/addAllProduct", async (req, res) => {
    try {
         const addAllProduct = new Product(req.body)
        await addAllProduct.save()
        return res.status(201).json({ msg: " All Product saved" })
    } catch (err) {
        console.log(err)
        return res.status(422).json({ err: "Opps! Something went wrong, Please try again later!" })
    }
})  
router.post("/getProductDetail", async (req, res) => {
    try {
        // console.log("hello")
        const products = await Product.find({_id:req.body._id})
        res.status(201).send(products)
    }
    catch (err) {
        res.status(404).json({ err: "No Product Found" })
    }
}) 
router.get("/randomProduct", async (req, res) => {
    try {
        // console.log("hello")
        const products = await RandomProduct.find({})
        res.status(201).send(products)
    }
    catch (err) {
        res.status(404).json({ err: "No Product Found" })
    }
})  
router.post("/allProduct", async (req, res) => {
    try {
        // console.log("hello")
        const {subcategory,category}=req.body
        if(subcategory=="All" && category=="All"){
            const products = await Product.find()
            res.status(201).send(products)
        }
        else if(subcategory==category){
            const products = await Product.find({category})
            res.status(201).send(products)
        }
        else{
            const products = await Product.find({subcategory})
            res.status(201).send(products)
        }
        
    }
    catch (err) {
        res.status(404).json({ err: "No Product Found" })
    }
})  
router.post("/getRelatedProduct", async (req, res) => {
    try {

        const {_id}=req.body
            const category = await Product.findById({_id},{_id:0,subcategory:1})
            const {subcategory}=category
            const products = await Product.find({subcategory})
            res.status(201).send(products)
    
        
    }
    catch (err) {
        res.status(404).json({ err: "No Product Found" })
    }
})  
router.get("/popularProduct", async (req, res) => {
    try {
        // console.log("hello")
        const products = await Product.find({}).sort({clicks:-1}).limit(30)
        res.status(201).send(products)
    }
    catch (err) {
        res.status(404).json({ err: "No Product Found" })
    }
})  
  

module.exports = router
