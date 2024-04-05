const express = require('express');
const router = express.Router();
const Person = require('../Models/person');
const { route } = require('./personRoutes');

//Post route to add person

router.post('/', async (req,res) => {
    try{
      const data = req.body;                    //requeste or fetch the data from the body
      const newPerson = new Person(data);       //fetched data saved into the new person
      const response = await newPerson.save();  // new person saved
      console.log("data saved");
      res.status(200).json(response);
      }
      catch(err){
          console.log(err);
          res.status(500).json({error:"Internal Server Error"})
      }
  
  })

  
//Get method to get the person
router.get('/',async (req,res) => {
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }


})


router.get('/:workType',async (req,res) =>{
    try{
        const workType = req.params.workType; //extract the work type from the URL parameter
        if(workType == 'chef' || workType =='waiter' || workType =='manager'){
            const response = await Person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'Invalid Work Type'});
        }
        }
        catch(err){
            console.log(err);
            res.status(500).json({error:'Internal Server Error'});
    }
})

router.put('/:id',async (req,res) => {
    try{
            const personId = req.params.id; // Extract the id from the URL parameter
            const updatedPersonData = req.body; //Updated data for the person

            const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
                new: true,  //Return the updated document
                runValidators:true, //Run Mongoose Validation
            })
            if(!response){
                res.status(404).json({error:'Person Not Found'});
            }
            console.log('Data Updated');
            res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

router.delete('/:id',async (req,res) => {
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);

        if(!response){
            res.status(404).json({error:'Person Not Found'});
        }
        else{
            console.log('Data Deleted');
            res.status(200).json({message:'Person Data Removed'});
        }

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});

    }
})
 
 


 

module.exports= router;