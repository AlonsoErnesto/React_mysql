import axios from 'axios';

export const createTaskRequest = async (task)=> await axios.post('http://localhost:4000/tasks',task);
export const   showTaskRequest = async () => await axios.get('http://localhost:4000/tasks');
export const deleteTaskRequest = async (taskId) => await axios.delete(`http://localhost:4000/tasks/${taskId}`);
export const    getTaskRequest = async (taskId) => await axios.get(`http://localhost:4000/tasks/${taskId}`);
export const updateTaskRequest = async (id, newFields) => await axios.put(`http://localhost:4000/tasks/${id}`, newFields);
