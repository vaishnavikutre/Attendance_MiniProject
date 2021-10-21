import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './Styles.css';


function Login_page(props) {

    const schema = yup.object().shape({
        email: yup.string().required('this field is required').email(),
        password: yup.string().required('this field is required')
    });


    const formik = useFormik(
        {
            initialValues: {
                email: '',
                password: ''
            },
            onSubmit: (data) => {
                console.log(data);
                axios({
                    url: 'http://127.0.0.1:5000//',
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    data: data
                }).then((response) => {
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            },
            validationSchema: schema
        }
    )


    return (
        console.log(formik),
        <div>
            <form onSubmit={formik.handleSubmit} >
                <div className="Login_container">
                    <div className="login_container2">
                        <h2 style={{ fontFamily: "sans-serif" }}>Login</h2><br />
                        <TextField
                            id="outlined-basic" label="Email" variant="outlined" size="small"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.email && formik.touched.email ? true : false}
                            touched={formik.touched.email}
                            helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                        /><br />
                        <TextField
                            id="outlined-basic" label="Password" variant="outlined" size="small" type="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.password && formik.touched.password ? true : false}
                            touched={formik.touched.password}
                            helperText={formik.touched.password && formik.errors.password ? formik.errors.password : ""}
                        />
                        <div className="link_container">
                            <a href="https://google.com" style={{ alignItems: "start" }}>forgot password?</a>
                        </div><br />
                        <Button
                            variant="contained"
                            className="login-button"
                            disabled={!formik.dirty}
                        >Submit</Button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default Login_page
