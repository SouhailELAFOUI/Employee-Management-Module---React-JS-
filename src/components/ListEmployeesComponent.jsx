import React , {useEffect, useState}from 'react'
import { getEmployees, deleteEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeesComponent = () => {

  const [employees, setEmployees] = useState([])
  const navigator = useNavigate();

  useEffect(() =>{
    getAllEmployees()
  },[])
  function getAllEmployees(){
        getEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
  }
  function addNewEmployee(){
    navigator('/add-employee')
  }
  function updateEmploye(id){
    navigator(`/update-employee/${id}`)
  }
  function deleteEmp(id){
    deleteEmployee(id).then((response) =>{
        getAllEmployees()
    }).catch(error =>{
        console.error(error)
    })
  }
  
  return (
        <div className='container'>
            <h2 className='text-center'>Employee Information</h2>
            <button className='btn btn-primary mb-4' onClick={addNewEmployee}>Add Employee</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id </th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Emlpoyee Email </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { employees.map( emp =>
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmploye(emp.id)}>Update</button>    
                                    <button className='btn btn-danger' onClick={() => deleteEmp(emp.id)} style={{marginLeft:'10px'}}>Delete</button>    
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
  )
}

export default ListEmployeesComponent