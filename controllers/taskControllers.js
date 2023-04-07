const users   = require("../models/user.js");
const tasks   = require("../models/task.js");
const bcrypt  = require('bcrypt');
const { valid } = require("joi");

/*

request.body = {
    "heading": heading,
    "description": description,
    "creator_id": creator_id
}

1. Create new task from request body .
2. Update the tasks array of creator who have created this task by inserting task _id to tasks of creator.


Response :

1. Success

200 Code

json = 
{
    "message": 'Task added successfully',
    "task_id": task._id, //id of task that is created.
    "status": 'success'
}

2. Fail to do

404 Status Code
json = 
{
    "status": 'fail',
    "message": error message
}

*/

const createTask =async (req, res) => {

    //Write your code here.


    //creator_id is user id who have created this task.
    const { heading, description, creator_id  } = req.body;

}


module.exports = { createTask };