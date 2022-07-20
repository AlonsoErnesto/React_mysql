import { pool } from '../db.js';


//Mostrar Tareas
export const getTasks = async (req, res) => {
  try{
    const [ result ] = await pool.query('SELECT * FROM tasks ORDER BY createAt ASC');
    res.json(result);
  } catch(error) {
    return res.status(500).json({message:error.message});
  }
}

//Buscar Tarea
export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?",[req.params.id]);
    if(result.length === 0) return res.status(404).json({message:"Task no found"});
    res.json(result[0]);
  } catch(error){
    return res.status(500).json({message:error.message});
  }
}

//Crear Tarea
export const postTask = async (req,res) => {
  try{
    const { title, description } = req.body;
    const [result] = await pool.query('INSERT INTO tasks(title,description) VALUES (?,?)',[title,description]);
    res.json(result.row);
  } catch(error){
    return res.status(500).json({message:error.message});
  }
}
//Update
export const putTask = async (req,res) => {
  try{
    const result = await pool.query('UPDATE tasks SET ? WHERE id = ?',[req.body,req.params.id]);
    res.json(result);
  } catch(error){
    return res.status(500).json({message:error.message});
  }
}

export const deleteTask = async (req,res) => {
  try {
    const [result] = await pool.query('DELETE FROM tasks WHERE id = ?',[req.params.id]);
    if(result.affectedRows === 0) return res.status(404).json({message:'Task no found'});
    return res.status(204);
  } catch(error){
    return res.status(500).json({message:error.message});
  }
}
