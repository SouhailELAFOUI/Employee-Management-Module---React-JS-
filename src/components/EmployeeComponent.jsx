import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee} from '../services/EmployeeService'
import { useNavigate, useParams} from 'react-router-dom'


const EmployeeComponent = () => {

    const [firstName, setFirstName]= useState('')
    const [lastName, setLastName]= useState('')
    const [email, setEmail]= useState('')
    const [errors, setErrors]= useState({
        firstName : '',
        lastName : '',
        email : ''
    })
    const {id} = useParams()
    //call the employe with the Id 
    useEffect(()=>{
        if(id){
            getEmployee(id).then((response) =>{
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
            }).catch(error =>{
                console.error(error);
            })
        }
    }, [id])
    
    function validateForm(){
        let valid= true;
        const errorsCopy = {... errors}

        if(firstName.trim()){
            errorsCopy.firstName ='';
        }else{
            errorsCopy.firstName ='Enter a valid FirstName';
            valid = false;
        }
        if(lastName.trim()){
            errorsCopy.lastName='';
        }else{
            errorsCopy.lastName='Enter a valid LastName';
            valid= false;
        }
        if(email.trim()){
            errors.email='';
        }else{
            errorsCopy.email='Enter a valid email';
            valid= false;
        }
        setErrors(errorsCopy);
        return valid;
    }
    
    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }else{
            return <h2 className='text-center'>Add Employee</h2>
        } 
    }
    
    const navigator = useNavigate();
    function saveOrUpdateEmployee(e){
        if(validateForm()){
            const employee = {firstName,lastName,email}
            console.log(employee)
            e.preventDefault();
            if(id){
                updateEmployee(id, employee).then((response) =>{ 
                    console.log(response.data)
                    navigator('/employees')
                }).catch(error =>{
                    console.error(error)
                })
            } else {
            createEmployee(employee).then((response) => {
                console.log(response.data)
                navigator('/employees')
            }).catch(error =>{
                console.error(error)
            })
          }
        }
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
               {pageTitle()}
                <div className='card-body'>
                <form>
                <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text" 
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                        name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value) }></input>
                        {errors.firstName && <div className='invalid-feedback'> {errors.firstName} </div>}
                 </div>
                 <div className="mb-3">
                        <label className="form-label">Last Name </label>
                        <input type="text"
                         className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                         name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} ></input>
                         {errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div>}
                 </div>
                 <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" 
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                        name='email' value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                        {errors.email && <div className='invalid-feedback'> {errors.email} </div>}

                 </div>
                    <button type="submit" className="btn btn-primary" onClick={saveOrUpdateEmployee}>Submit</button>
                </form>
                </div>
            </div>
        </div>
    </div>
  ) 
}

export default EmployeeComponent