import { Route, Routes } from 'react-router-dom';

//Components
import Taskspage from './pages/TasksPage';
import Taskform from './pages/TaskForm';
import NotFound from './pages/NotFound'; 
import Navbar from './components/Navbar';
//Context
import { TaskContextProvider } from './context/TaskContext';


const App = () => {
  return (
      <TaskContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Taskspage/>} />
          <Route path='/new' element={<Taskform/>} />
          <Route path='*' element={<NotFound/>}/>
          <Route path='edit/:id' element={<Taskform/>}/>
        </Routes>
      </TaskContextProvider>
  );
}

export default App
