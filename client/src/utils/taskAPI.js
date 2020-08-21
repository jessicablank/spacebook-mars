import axios from "axios";
//matches with back-end routes folder>taskAPI.js

export default {
  //Gets all the tasks
  getTasks: function() {
    return axios.get("/api/task");
  },
  //Saves on task to Mongodb
  saveTask: function(taskData) {
    return axios.post("/api/task", taskData);
  },
  //Deletes the task with the given id
  deleteTask: function(id) {
    return axios.delete("/api/task/" + id);
  },
  //Gets the task with the given id
  getTask: function(id) {
    return axios.post("/api/task"+ id);
  }
};
