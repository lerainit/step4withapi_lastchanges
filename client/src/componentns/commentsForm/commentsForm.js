import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as yup from 'yup'
import { addCommentsAC } from "../../store/comments/actionCreators";
import { setProducts } from "../../store/products/actions";
import { setCounter } from "../../store/likes/actions";



const CommentsForm = (props) => {
  const dispatch = useDispatch()

  let initialValues = {
    comment: '',

  }



  const validationSchema = yup.object().shape({
    comment: yup.string()
      .min(3, 'Min 3 symbols')
      .max(12, 'Max 12 symbols')
      .required('Name is required'),

  })


  return (

    <Formik
      initialValues={initialValues}

      validationSchema={validationSchema}
      onSubmit={(values, FormikProps) => {
        console.log(values)
        fetch(`http://localhost:3001/posts/comments/${props.index}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ comment: values.comment, userIndex: props.userIndex })
        }).then(res => res.json())
        dispatch(addCommentsAC({ comment: values.comment, userIndex: props.userIndex, index: props.index }))
        dispatch({ type: setProducts })
        dispatch({ type: setCounter })

      }}

    >
      {({ dirty, isValid }) => {




        return (
          <Form>

            <Field
              type='text'
              name='comment'
              placeholder='Add comment'

            />
            <ErrorMessage name="comment">{msg => <span className='error'>{msg}</span>}</ErrorMessage>



            <button className='form_button' disabled={!dirty || !isValid} type="submit">Checkout</button>

          </Form>

        )
      }
      }
    </Formik>
  )

}
export default CommentsForm
