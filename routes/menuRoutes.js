const express = require('express');
const route = express.Router();
const MenuItem = require('../Models/menuItem');


route.post('/',async (req,res) =>{
    try{
            const data = req.body;
            const newMenu = new MenuItem(data);
            const response = await newMenu.save();
            console.log('Menu Data Saved');
            res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
    
})

route.get('/',async (req,res) =>{
    try{
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error!'})
    }
})

route.get('/:taste',async (req,res) =>{
    try{
            const tastetype = req.params.taste;
            if(tastetype == 'sweet' || tastetype == 'spicy' || tastetype == 'sour'){
                const response =await MenuItem.find({taste:tastetype});
                console.log('Data fetched');
                res.status(200).json(response);
            }
            else{
                res.status(404).json({error:'Invalid taste type'});
            }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error' })
    }
})

module.exports = route;