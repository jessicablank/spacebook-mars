import axios from "axios";

export default {
  getTasks: function() {
    return axios.get("/api/task");
  },
  saveTask: function(taskData) {
    return axios.post("/api/task", taskData);
  }
};
