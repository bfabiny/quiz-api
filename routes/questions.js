const express = require('express');
const router = express.Router();
const Question = require('../Models/Question');

// Get All Questions
router.get('/', async (req, res) => {
   try {
        const questions = await Question.find();
        res.json(questions);
   } catch (err) {
       res.json({message: err});
   }
});

// Get Question by ID
router.get('/:questionID', async (req, res) => {
    try {
         const questions = await Question.findById(req.params.questionID);
         res.json(questions);
    } catch (err) {
        res.json({message: err});
    }
 });


// Get Questions By Category
router.get('/:category', async (req, res) => {
    try {
        const questions = await Question.find({ category: req.params.category } );
        res.json(questions);
    } catch(err) {
        res.json({ message: err });
    }
});

// Get Questions By Sub-Category
router.get('/:subCategory', async (req, res) => {
    try {
        const questions = await Question.find({ subCategory: req.params.subCategory } );
        res.json(questions);
    } catch(err) {
        res.json({ message: err });
    }
});

// Post Question
router.post('/', async (req, res) => {
    const question = new Question({
        category: req.body.category,
        subCategory: req.body.subCategory,
        questionText: req.body.questionText,
        answers: req.body.answers,
        questionType: req.body.questionType,
        correctAnswers: req.body.correctAnswers
    });

    try {
        const savedQuestion = await question.save();
        res.json(savedQuestion);
    } catch(err) {
        res.json({ message: err });
    }
}); 

// Delete
router.delete('/:questionID', async (req, res) => {
    try {
        const removed = await Question.remove({ _id: req.params.questionID});
        res.json(removed);
    } catch(err) {
        res.json({ message: err });
    }
});

// Update a post
router.patch('/:questionID', async (req, res) => {
    try {
        const post = await Post.findById(req.params.questionID);
        
        const updatedQuestion = await Post.updateOne(
            { _id: req.params.questionID }, 
            { 
                $set: 
                { 
                    category: req.body.category,
                    subCategory: req.body.subCategory,
                    questionText: req.body.questionText,
                    answers: req.body.answers,
                    questionType: req.body.questionType,
                    correctAnswers: req.body.correctAnswers
                } 
            }
        );
        res.json(updatedPost);
    } catch(err) {
        res.json({ message: err });
    }
});

module.exports = router;