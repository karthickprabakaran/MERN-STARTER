import mongoose from 'mongoose' ;

const dbConnection  = async() =>{
    try{
        await mongoose.connect("mongodb+srv://karthickop6:XiwLDDgFRTa7Ditk@notesapp.ivn0s1x.mongodb.net/?retryWrites=true&w=majority&appName=NotesApp");
        console.log("Database Connection Successfull..");
    }
    catch(error)
    {
        console.log(error);
        
    }
};

export default dbConnection;