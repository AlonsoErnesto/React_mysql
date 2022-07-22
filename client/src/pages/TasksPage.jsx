import { useEffect } from "react";
import Taskcard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";


const Taskspage = () => {
  
  const { tasks, loadTasks } = useTasks();

  useEffect(()=>{
    try{
      loadTasks();
    }catch(err){
      console.log(err.message);
    }
  },[])

  const RenderCards = () => {
    
    if(tasks.length === 0 ) return <h1>No hay tareas.</h1>
    return tasks.map((task)=>( 
      <Taskcard task={task} key={task.id}/>
    )) 
  }

  return (
    <div>
      <h1>Tasks List</h1>
      <RenderCards/>
    </div>
  )
}

export default Taskspage;
