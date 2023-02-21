const { Schema, model} = require('mongoose'); // Erase if already required
const bcryptjs =  require('bcryptjs');

// Declare the Schema of the Mongo model
const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},{
    //createAt
    //updatedAt
    timestamps: true
});

userSchema.methods.encryptPassword = async password => {
    const salt = await bcryptjs.genSalt(10);
   return await bcryptjs.hash(password, salt);
};

userSchema.methods.matchPassword = async function(password) {
    return await bcryptjs.compare(password, this.password);
}

//Export the model
module.exports = model('User', userSchema);