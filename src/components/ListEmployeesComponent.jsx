import React , {useEffect, useState}from 'react'

const ListEmployeesComponent = () => {

    
  return (
        <div className='container'>
            <h2 className='text-center'>Employee Information</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id </th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Emlpoyee Email </th>
                    </tr>
                </thead>
                <tbody>
                    { employeeData.map( emp =>
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
  )
}

export default ListEmployeesComponent