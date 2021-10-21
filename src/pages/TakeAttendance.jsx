import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';

function TakeAttendance() {
    const branch = ['CSE', 'ECE', 'ME', 'EEE', 'CIVIL'];
    const sem = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];
    const classes = ['A', 'B', 'C'];
    const sub = ['ade', 'maths']

    const usn = ['2JI18CS020', '2JI18CS021', '2JI18CS022', '2JI18CS023', '2JI18CS024', '2JI18CS025'];

    const schema = yup.object().shape({
        branch: yup.string().required('this field is required'),
        sem: yup.string().required('this field is required'),
        classes: yup.string().required('this field is required'),
        subject: yup.string().required('this field is required'),
    });

    const formik = useFormik(
        {
            initialValues: {
                branch: '',
                sem: '',
                classes:'',
                subject:'',
            },
            onSubmit: (data) => {
                console.log(data);
                axios({
                    url: 'http://127.0.0.1:5000//TakeAttendance',
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
                <div className="takeA_MainContainer">
                    <div className="takeA_Container">
                        <TextField
                            select
                            size="small"
                            className="Dropdown"
                            label="branch"
                            name="branch"
                            value={formik.values.branch}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.branch && formik.touched.branch ? true : false}
                            touched={formik.touched.branch}
                            helperText={formik.touched.branch && formik.errors.branch ? formik.errors.branch : ""}
                        >
                            {
                                branch.map((ele) => <MenuItem key={ele} value={ele}>{ele}</MenuItem>)
                            }
                        </TextField>
                        <TextField
                            select
                            size="small"
                            className="Dropdown"
                            label="sem"
                            name="sem"
                            value={formik.values.sem}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.sem && formik.touched.sem ? true : false}
                            touched={formik.touched.sem}
                            helperText={formik.touched.sem && formik.errors.sem ? formik.errors.sem : ""}
                            style={{ marginLeft: 20 }}
                        >
                            {
                                sem.map((ele) => <MenuItem key={ele} value={ele}>{ele}</MenuItem>)
                            }
                        </TextField>
                        <TextField
                            select
                            size="small"
                            className="Dropdown"
                            label="classes"
                            name="classes"
                            value={formik.values.classes}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.classes && formik.touched.classes ? true : false}
                            touched={formik.touched.classes}
                            helperText={formik.touched.classes && formik.errors.classes ? formik.errors.classes : ""}
                            style={{ marginLeft: 20 }}
                        >
                            {
                                classes.map((ele) => <MenuItem key={ele} value={ele}>{ele}</MenuItem>)
                            }
                        </TextField>
                        <TextField
                            select
                            size="small"
                            className="Dropdown"
                            label="subject"
                            name="subject"
                            value={formik.values.subject}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.subject && formik.touched.subject ? true : false}
                            touched={formik.touched.subject}
                            helperText={formik.touched.subject && formik.errors.subject ? formik.errors.subject : ""}
                            style={{ marginLeft: 20 }}
                        >
                            {
                                sub.map((ele) => <MenuItem key={ele} value={ele}>{ele}</MenuItem>)
                            }
                        </TextField>
                        <Button variant="contained" style={{ width: 200, marginLeft: 20 }}
                            disabled={!formik.dirty}>submit</Button>
                    </div>
                </div>
            </form>
            <div className="table_container">
                <table className="table table-hover">
                    <thead className="table_head">
                        <tr>
                            <th scope="col">SI</th>
                            <th scope="col">usn</th>
                            <th scope="col">Present</th>
                            <th scope="col">Absent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usn.map((ele, index) =>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{ele}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                        /> Present
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                        /> Absent
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default TakeAttendance
