import React, { useEffect } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, selectUsers } from '../../store/slices/users/usersSlice'
import { fetchUsers } from '../../store/slices/users/usersAPI'
import { useNavigate } from 'react-router-dom'
import IMAGES from '../../images'

function Login() {
    const navigate = useNavigate()
    const {usersData, currentUser} = useSelector(selectUsers)
    const dispatch = useDispatch()

    useEffect(()=>{
        if (currentUser) {
            navigate('/')
        }
    },[currentUser])

    useEffect(()=>{
        if (!usersData.length) {
            dispatch(fetchUsers())
        }
        
    },[])

    const validationSchema = yup.object().shape({
        email: yup.string().typeError('Must be a string').required('Required field'), 
        password: yup.string().typeError('Must be a string').min(3, 'Very short password')
       
    })
  return (
    <Formik 
        initialValues={{
            email: '',
            password:''
        }}

        onSubmit={(value,{resetForm})=>{
            // console.log(value);
            dispatch(logIn(value))
            resetForm()
        }}
        
        validateOnBlur

        validationSchema={validationSchema}
        
        >
        
        {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
        <div className='row'>
            <div className='img'>
                <img className='prof' width={300} src="https://images.squarespace-cdn.com/content/v1/54c45370e4b060a8975bb8f0/1580760425574-XL93VH4LD77UH8RVZ8KF/IMG_7948.jpg?format=1000w" alt="" />
            </div>
            <div className='side-row'>
            <div className='form-row'>
                <img  src={IMAGES.logo} width={200} alt=""/>
                <form className='login-form' onSubmit={handleSubmit}>
                    <input className='login-input' name={`email`} type={`text`}  placeholder="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                        {touched.email && errors.email && <p style={{color:'red'}}>{errors.email}</p>} 
                    <br/><br/>
                    <input name={`password`}className='login-input'  type={`password`} placeholder="password" onBlur={handleBlur}  onChange={handleChange} value={values.password} />
                        {touched.password && errors.password && <p style={{color:'red'}}>{errors.password}</p>}
                    <br/><br/>
                    <input type="checkbox" /> &nbsp; <label className='check'>Save login info</label><br/><br/>
                    <button  className='submit' type={'submit'}>Log In </button>  
                </form>
            </div>
            <div className='signup'>
                <p>Dont have an account? &nbsp; <span>Sign up</span></p>
               
            </div>
            </div>
        </div>
        )}
    </Formik>
  )
}

export default Login