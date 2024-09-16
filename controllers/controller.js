const tracker = require("../models/transaction");

const defaultController = async (req, res) => {
    const defData = await tracker.find({});
    console.log("defData", defData);
    
    res.render('index.ejs',{todos: defData});
}
const todoApp = async (req, res) => {


    const data = {
        path : req.file.path,
        title : req.body.title,
        description : req.body.description,
        releaseDate : req.body.releaseDate,
        rating : req.body.rating
    }

    const datamodelObj = new tracker(data);
    await datamodelObj.save();
    console.log("todom", datamodelObj);

    res.redirect('/')
}


const editTodoController = async(req, res) =>{   

    const {id}= req.params; 
    console.log("editeID", id);

    const editeData = await tracker.findOne({ _id: id });

    console.log("editeData", editeData);

    res.render("addtransaction", { editeData });
}

const updateMovie = async (req, res) => {

    const {id} = req.params;
    const update = await tracker.findById(id)
    console.log("update",update);
    
    if(req.path){
        fs.unlink(update.path , (err)=>{
            console.log(err);
        })
        console.log("delete  path...");
        
    }
    update.title = req.body.title,
    update.description = req.body.description,
    update.releaseDate = req.body.releaseDate,
    update.rating = req.body.rating

    if(req.file){
        update.path = req.file.path
    }




    const newUpdateMovie = await Movie_model.findByIdAndUpdate(id , update , {new : true})

    console.log("newUpdateMovie", newUpdateMovie);


    res.redirect("/");
}

const deleteVolTood = async(req , res) => {

    const {id} = req.body;
    console.log("DeleteID", id);
    
const deleteData = await tracker.findByIdAndDelete(req.params.id);

    console.log("deleteData", deleteData);

    res.redirect("/");
}


module.exports = { defaultController, todoApp, editTodoController,updateMovie, deleteVolTood };