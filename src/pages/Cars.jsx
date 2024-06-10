import {useState} from 'react'
import Table from '../components/Table'
import {FaEdit, FaTrash} from 'react-icons/fa' 

const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Year', accessor: 'year' },
    { Header: 'Model', accessor: 'model' },
    { Header: 'Actions', accessor: 'actions', Cell: ({row}) => (
        <div className='flex'>
            <FaEdit />
            <FaTrash style={{ marginLeft: '0.5rem', color: 'red' }} />
        </div>
    ) },
  ];

  const data = [
    { name: 'Cadillac', year: 1962, model: 'impalla' },
    { name: 'Roll Royce', year: 1985, model: 'canute' },
    { name: 'Porsche', year: 1945, model: 'Cayenne' },
  ];
  

  

const Cars = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        year: '',
      });
    
      const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        setIsOpen(false);
      };
    

    const [dat, setDat] = useState([
        { name: 'John Doe', age: 32, city: 'New York' },
        { name: 'Jane Smith', age: 28, city: 'Los Angeles' },
        { name: 'Bob Johnson', age: 45, city: 'Chicago' },
      ])

    const [add, setAdd] = useState(false)
  return (
    <>
    <div className='flex justify-evenly'>< br/>< br/>
    <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Add Car</button>

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Add a new Car</h3>
    <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                 class="input input-bordered w-full max-w-xs"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email">Model:</label>
                <input
                 class="input input-bordered w-full max-w-xs"
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email">Year:</label>
                <input
                 class="input input-bordered w-full max-w-xs"
                  type="text"
                  id="email"
                  name="email"
                  value={formData.year}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
  </div>
</dialog>
<label class="input input-bordered flex items-center gap-2">
  <input type="text" class="grow" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
</label>
    </div>
    <Table data={data} columns={columns} />
    </>
  )
}

export default Cars