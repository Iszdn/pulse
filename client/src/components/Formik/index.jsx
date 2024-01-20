import React from 'react'
import "./index.scss"
import axios from "axios"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const FormAdd = ({getData}) => {
async function addMenu(values) {
  const res=await axios.post("http://localhost:8000/",values)
  getData()
}

  return (
    <div className='formik'>

 <Formik
      initialValues={{ title: '', desc: '', price: '' }}
      validationSchema={Yup.object({
        title: Yup.string()
          .required('Required'),
        desc: Yup.string()
          .required('Required'),
        price: Yup.number().positive("number must be positive").required('Required'),
      })}
      onSubmit={(values, { resetForm }) => {
        addMenu(values)
       resetForm()
      }}
    >
      <Form>
        <label htmlFor="title">title</label>
        <Field name="title" type="text" />
        <div className='red'><ErrorMessage  name="desc" /></div>

        <label htmlFor="desc">description</label>
        <Field name="desc" type="text" />
        <div className='red'><ErrorMessage  name="desc" /></div>

        <label htmlFor="price">price</label>
        <Field name="price" type="text" />
        <div className='red'><ErrorMessage  name="desc" /></div>

        <button className='btn' type="submit">add</button>
      </Form>
    </Formik>
    </div>
  )
}

export default FormAdd



