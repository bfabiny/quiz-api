const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    questionText: {
        type: String,
        required: true
    },
    answers: { 
        type: Array, 
        required: true 
    },
    questionType: { 
        type: String, 
        required: true 
    },
    correctAnswers: { 
        type: Array, 
        required: true }
})

module.exports = mongoose.model('Question', QuestionSchema);