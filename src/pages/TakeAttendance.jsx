import React from 'react';

import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';

function TakeAttendance() {
    const branch = ['CSE', 'ECE', 'ME', 'EEE', 'CIVIL'];
    const sem = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];
    const classes = ['A', 'B', 'C'];
    const sub = ['ade', 'maths']


    const usn = ['2JI18CS020', '2JI18CS021', '2JI18CS022', '2JI18CS023', '2JI18CS024', '2JI18CS025'];


    return (
        <div>
            <div className="takeA_MainContainer">
                <div className="takeA_Container">
                    <TextField
                        select
                        size="small"
                        className="Dropdown"
                        label="branch"
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
                        style={{ marginLeft: 20 }}
                    >
                        {
                            sub.map((ele) => <MenuItem key={ele} value={ele}>{ele}</MenuItem>)
                        }
                    </TextField>
                    <Button variant="contained" style={{ width: 200, marginLeft: 20 }} >submit</Button>
                </div>
            </div>
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
                            usn.map((ele,index) =>
                                <tr>
                                    <th scope="row">{index+1}</th>
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
