import { useContext, useState} from "react";
import { showTaskRequest, deleteTaskRequest, createTaskRequest, getTaskRequest, updateTaskRequest } from "../api/tasks.api";
import { TaskContext } from "./Taskcontext";

export const useTasks = () => {
  const context = useContext(TaskContext);
  if(!context) throw new Error("UseTasks no esta dentro de TaskContextProvider");
  return context;
}


 export const TaskContextProvider = ({children}) => {
  const [ tasks, setTasks ] = useState([]);

  async function loadTasks(){                                                    
       const response = await showTaskRequest();                                    
       setTasks(response.data);  
  }

  const deleteTask = async (taskId) => {
    try{
      setTasks(tasks.filter(task => task.id !== taskId))
      const response = await deleteTaskRequest(taskId);
    } catch(err){
      console.log(err.message);
    }
  }

   const createTask = async (task) => {  
   try{                                                                                                                                                                         
         const result = await createTaskRequest(task);
         console.log(result);
          //setTasks([...tasks, response.data])
       } catch(error){
         console.log(error.message);
       }
   }
  
   const getTask = async (id) =>{
     try{
        const result = await getTaskRequest(id);
       return result.data;
     }catch(err){
       console.log(err.message)
     }
   }

   const updateTask = async (id, value)=>{
     try{ 
       const response = await updateTaskRequest(id, value)
       console.log(response)
     } catch(error){
       console.log(error);
     }
   }

  return (
    <TaskContext.Provider value={{tasks, loadTasks, deleteTask, createTask, getTask, updateTask}}>
      {children}
    </TaskContext.Provider>
  )
}
