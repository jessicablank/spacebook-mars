import axios from "axios";

export default {
  getTasks: function() {
    return axios.get("/api/tasks");
  },
  saveTask: function(taskData) {
    return axios.post("/api/tasks", taskData);
  }
};
