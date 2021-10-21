import React from 'react'

function View_Attendance() {

    const table = [{
        usn:'2JI18CS025',
        name:'Manasi',
        total_present:'20',
        total_absent:'20',
        percent:'50',
        remark:'average'
    },
    {
        usn:'2JI18CS024',
        name:'Vaishnavi',
        total_present:'15',
        total_absent:'25',
        percent:'65',
        remark:'average'
    },
    {
        usn:'2JI18CS023',
        name:'Vaibhav',
        total_present:'05',
        total_absent:'35',
        percent:'15',
        remark:'bad'
    }
];
    

    return (
        <div>
            <div className="takeA_MainContainer">
                <div className="ViewA_Container">
                    <h5 style={{ marginRight: 40 }}>Faculty Name: abc</h5>
                    <h5 style={{ marginRight: 40 }}>Total Classes: 40</h5>
                    <h5>Average : 20</h5>
                </div>
            </div>
            <div className="table_container">
                <table className="table table-hover">
                    <thead className="table_head">
                        <tr>
                            <th scope="col">SI</th>
                            <th scope="col">usn</th>
                            <th scope="col">Name</th>
                            <th scope="col">Total Present</th>
                            <th scope="col">Total Absent</th>
                            <th scope="col">Percent(%)</th>
                            <th scope="col">Remark</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            table.map((ele, index) =>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{ele.usn}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.total_present}</td>
                                    <td>{ele.total_absent}</td>
                                    <td>{ele.percent}</td>
                                    <td>{ele.remark}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default View_Attendance
