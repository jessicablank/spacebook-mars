import React, {useEffect, useState} from "react";
import taskAPI from "../../utils/taskAPI";
import Container from "../Container";

function TaskCard() {
  const [tasksData, setTasksData] = useState([])

  useEffect(()=>{
    loadTasks()
  }, [])

  function loadTasks() {
    taskAPI.getTasks()
      .then(res => 
        setTasksData(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <Container>
      <div className="card container-sm clear-card">
        <div className="card-body">Task:</div>
        
        {tasksData.map((each,index)=>{
           return(
            <p key={index} onClick={()=>alert(each.textBody)}>{each.title}</p>
          )
          })}
      
      </div>
    </Container>
  );
}

export default TaskCard;
