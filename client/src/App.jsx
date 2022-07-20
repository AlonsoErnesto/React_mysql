import { Route, Routes } from 'react-router-dom';

//Components
import Taskspage from './pages/TasksPage';
import Taskform from './pages/TaskForm';
import NotFound from './pages/NotFound'; 
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Taskspage/>} />
        <Route path='/new' element={<Taskform/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App
