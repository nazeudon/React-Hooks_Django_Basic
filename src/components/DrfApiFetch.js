import React, { useState, useEffect } from "react";
import axios from "axios";

const DrfApiFetch = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/tasks/", {
        headers: {
          Authorization: "Token a6b7bef4438319565d13d02f104e0f68cb8f3489",
        },
      })
      .then((res) => {
        setTasks(res.data);
      });
  }, []);

  const getTask = () => {
    axios
      .get(`http://127.0.0.1:8000/api/tasks/${id}/`, {
        headers: {
          Authorization: "Token a6b7bef4438319565d13d02f104e0f68cb8f3489",
        },
      })
      .then((res) => {
        setSelectedTask(res.data);
      });
  };

  const deleteTask = () => {
    axios
      .delete(`http://127.0.0.1:8000/api/tasks/${id}/`, {
        headers: {
          Authorization: "Token a6b7bef4438319565d13d02f104e0f68cb8f3489",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.id}
          </li>
        ))}
      </ul>
      Set Id
      <br />
      <input
        type="text"
        value={id}
        onChange={(evt) => {
          setId(evt.target.value);
        }}
      />
      <br />
      <button type="button" onClick={() => getTask()}>
        Get task
      </button>
      <h3>
        {selectedTask.title} {selectedTask.id}
      </h3>
      <button type="button" onClick={() => deleteTask()}>
        Delete task
      </button>
    </div>
  );
};

export default DrfApiFetch;
