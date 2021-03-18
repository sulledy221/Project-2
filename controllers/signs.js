const Sign = require("../models/sign");
const Trait = require('../models/trait');
const { ObjectId } = require("bson");


module.exports = {
    index,
    show
};

function index(req, res) {
    res.render('signs/index',  { title: 'BeanPods', user: req.user});
 }
 
 function show(req, res) {
 
     Sign.findOne({ name: req.params.sign }, function (err, sign) {
         console.log('show ', sign)
         Trait.find({ sign: sign._id }, function (err, traits) {
             res.render ('signs/show',  { title: 'Beanpods', user: req.user, sign, traits })
         }
         )
 })
 }
 


// const Todo = require("../models/todo");

// Todo.findByIdAndUpdate(
//     req.params.todoId,
//     req.body,
//     {new: true},
//     (err, todo) => {
//         if (err) return res.status(500).send(err);
//         return res.send(todo);
//     }
// )

// Todo.findByIdAndRemove(req.params.todoId, (err, todo) => {
//     if (err) return res.status(500).send(err);
//     const response = {
//         message: "Todo successfully deleted",
//         id: todo._id
//     };
//     return res.status(200).send(response);
// });