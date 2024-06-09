import React from 'react'
import Table from '../components/Table'
import {FaEdit, FaTrash} from 'react-icons/fa' 

const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
    { Header: 'City', accessor: 'city' },
    { Header: 'Actions', accessor: 'actions', Cell: ({row}) => (
        <div className='flex'>
            <FaEdit />
            <FaTrash />
        </div>
    ) },
  ];

  const data = [
    { name: 'John Doe', age: 32, city: 'New York' },
    { name: 'Jane Smith', age: 28, city: 'Los Angeles' },
    { name: 'Bob Johnson', age: 45, city: 'Chicago' },
  ];
  

  

const Cars = () => {

    
  return (
    <>
    <div className='flex'>< br/>< br/>
    <div className="btn btn-outline btn-secondary">Add Car</div>
    </div>
    <Table data={data} columns={columns} />
    </>
  )
}

export default Cars