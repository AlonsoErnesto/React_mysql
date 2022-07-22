import { useEffect, useState } from 'react';

import { Form, Formik } from 'formik';
import { useTasks } from '../context/TaskContext'
import { useParams, useNavigate } from 'react-router-dom';

const Taskform = () => {

  const { createTask, getTask, updateTask } = useTasks();
  const [ task, setTask ] = useState({
    title:"",
    description:"",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    const loadTask = async () => {  
      if(params.id){ 
        const task = await getTask(params.id);
        setTask({
          title:task.title,
          description:task.description,
        });
      }
    }
    loadTask();
  },[])

  return (
    <div>
    <h1>{params.id ? "Edit Task" : "Create Task"}</h1>
      <Formik initialValues={task} enableReinitialize={true}
        onSubmit={async(values,actions)=>{
          if(params.id){
            await updateTask(params.id, values);
            navigate('/');
          }else {
            await createTask(values);
          }
          setTask({
            title:"",
            description:"",
          });
        }}
      >
      {({handleChange, handleSubmit, values, isSubmitting}) =>(
        <Form onSubmit={handleSubmit}>
          <label>Title</label> 
          <input type="text" name="title" value={values.title} onChange={handleChange}/>
          <label>Description</label>
          <textarea name="description" rows="3" value={values.description} placeholder='Escribe una descripcion' onChange={handleChange}/>
          {params.id ?(
            <button type='submit' >Update</button>
          ) : (
            <button type="submit" disabled={isSubmitting}>{ isSubmitting ? "Saving..." : "Save" }</button> 
          )}
        </Form>
      )}
      </Formik>
    </div>
  )
}

export default Taskform;
