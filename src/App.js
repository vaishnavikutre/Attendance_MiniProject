import React from 'react'
import Faculty_Login from './pages/Login_page.jsx';
import FirstPage from './pages/FirstPage.jsx';
import TakeAttendance from './pages/TakeAttendance.jsx';
import View_Attendance from './pages/View_Attendance.jsx';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                <Route exact path="/" component={Faculty_Login} />
                <Route exact path="/First_page" component={FirstPage} />
                <Route exact path="/TakeAttendance" component={TakeAttendance} />
                <Route exact path="/ViewAttendance" component={View_Attendance} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
