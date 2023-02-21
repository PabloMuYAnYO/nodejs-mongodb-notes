const { Schema, model} = require('mongoose'); // Erase if already required

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
},{
    //createAt
    //updatedAt
    timestamps: true
});

module.exports = model('Note', NoteSchema);