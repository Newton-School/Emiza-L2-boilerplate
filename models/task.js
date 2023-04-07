var mongoose = require("mongoose");

/*
Complete your other field here

1. "heading" should be a string and required
2. "description" should be a string and required
3. "Status" should be a string and it can have only 2 values ('pending', 'done') and default should be pending
4. "creationdate" should contain only current date while task is created.
5. "creator_id" will be reference to user who have created this task (store the user id of creator).

*/


var taskSchema = mongoose.Schema({
  
  //Write your code here.

});


module.exports = mongoose.model("Task", taskSchema);;