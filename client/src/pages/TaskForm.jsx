import { Form, Formik } from 'formik';

const Taskform = () => {
  return (
    <div>
      <Formik>
        <Form>
          <label>Title</label> 
          <input type="text" name="title"/>
          <label>Description</label>
          <textarea name="description" rows="3" placeholder='Escribe una descripcion'/>
        </Form>
      </Formik>
    </div>
  )
}

export default Taskform;
