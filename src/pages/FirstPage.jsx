import React from 'react'
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

function FirstPage() {

    const history = useHistory();

    const handleClick1 = () => {
        history.push("/TakeAttendance")
    }
    const handleClick2 = () => {
        history.push("/ViewAttendance")
    }


    return (
        <div className="FirstP_MainContainer">
            <div className="FirstPage_Container">
                <Button variant="contained" className="FirstP-button" name="takeAttendance" style={{ marginRight: "20px" }} onClick={handleClick1}>Take  Attendance</Button>
                <Button variant="contained" className="FirstP-button" name="viewAttendance" style={{ marginLeft: "20px" }} onClick={handleClick2}>View  Attendance</Button>
            </div>
        </div>
    )
}

export default FirstPage
