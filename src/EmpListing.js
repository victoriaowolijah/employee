import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


const EmpListing = () => {
    const [empdata, empdatachange]=useState(null);
    useEffect(() => {
        fetch("http://localhost:8000/employee").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    })
  return (
    <div className='container'>
        <div className='card'>
            <div className='card-title'>
                <h2>Employee Listing</h2>
            </div>
            <div className='card-body'>
                <div className='divbtn'> 
                    <Link to="employee/create" className='btn btn-success'>Add New(+)</Link>
                </div>
                <table className='table table-bordered'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Action</td>
                        </tr>

                    </thead>

                    <tbody>

                        {empdata &&
                            empdata.map(item=>(
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <a className='btn btn-success'>Edit</a>
                                        <a className='btn btn-danger'>Remove</a>
                                        <a className='btn btn-primary'>Detail</a>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>

                </table>

            </div>
        </div>  
      
    </div>
  )
}

export default EmpListing
