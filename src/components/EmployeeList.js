import React, { Component } from 'react'
import {connect} from 'react-redux'


export class EmployeeList extends Component {
   
    render() {
        
        console.log(this.props)
        return (
            <div>
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.employees.map(emp => {
                            return (
                                    <tr>
                                        <td>{emp.name}</td>
                                        <td>{emp.age}</td>
                                        <td>{emp.gender}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.phoneNo}</td>
                                    </tr>
                            )})}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        employees : state.employee.user
    }
}

export default connect(mapStateToProps)(EmployeeList)
