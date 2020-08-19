import axios from "axios";

export default {

  saveTask: function(taskData) {
    return axios.post("/api/tasks", taskData);
  }
};
