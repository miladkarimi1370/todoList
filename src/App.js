import React, { useState } from "react";
import Header from "./components/Header";
import AddTAsk from "./components/AddTAsk";
import Template from "./components/Template";


export default function App() {
  let [tasks, setTasks] = useState([]);
  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );
  function addTask(e) {
    setTasks([...tasks, { task: e }]);
  
  }
  function deleteTask(id) {
    const newListOfTasks = tasks.filter((item) => item.id !== id);
    setTasks(newListOfTasks);
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <Header />
            <AddTAsk  />
            <Template />
          </div>
        </div>
      </div>
    </>
  );
}
