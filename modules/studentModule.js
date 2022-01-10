const Student1 = require('../model/student');
const router = require('../routes');
const mongoose = require('mongoose')


exports.poststudent = async (req,res,next) => {
    // Create request data Object using Product Model
    const student = new Student1({
       _id : new mongoose.Types.ObjectId,
       //id: req.body.id,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        place: req.body.place
    })
    try {
        var response = await student.save();
        res.send(response)
        //res.status(200).json({msg:"succesfully submitted"});
    } catch (err) {
        console.log(err);
        //res.status(500).json({msg:"Error occured"});
    }
}

exports.getstudent = async (req,res,next) => {
    var response = await Student1.find();
    res.send(response);
}

exports.updatestudent = async (req,res,next) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const place = req.body.place;
    const id = req.params.id;

    var response = await Student1.findByIdAndUpdate({_id:id},{$set:{firstname:firstname,lastname:lastname,place:place}})
    res.send(response);
}


exports.deletestudent = async (req,res,next) => {
    var response = await Student1.findByIdAndRemove(req.params._id);
    res.send(response);
}

