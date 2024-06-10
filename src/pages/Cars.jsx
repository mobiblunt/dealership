import {useState, useEffect} from 'react'
import Table from '../components/Table'
import {FaEdit, FaTrash} from 'react-icons/fa' 
import {
    onSnapshot,
    addDoc,
    doc,
    deleteDoc,
    setDoc
  } from "firebase/firestore"
import { carsCollection, db } from "../firebase"

  

const Cars = () => {
    const columns = [
        { Header: 'ID', accessor: 'id' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Year', accessor: 'year' },
        { Header: 'Model', accessor: 'model' },
       
        { Header: 'Actions', accessor: 'actions', Cell: ({row}) =>  (
            <div className='flex'>
                <FaEdit onClick={() => editItem(row.values)} />
                <FaTrash onClick={() => handleItemRemove(row.values.id)} style={{ marginLeft: '0.5rem', color: 'red' }} />
            </div>
        ) },
      ];

    const [formData, setFormData] = useState({
        name: '',
        model: '',
        year: '',
      });
      const [dat, setDat] = useState([])
      const [add, setAdd] = useState(false)
      const [itemEdit, setItemEdit] = useState({
        item: {},
        edit: false,
    })
    
      const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      function filterObjectProperty(obj, excludedProp) {
        const entries = Object.entries(obj);
        const filteredEntries = entries.filter(([key]) => key !== excludedProp);
        return Object.fromEntries(filteredEntries);
      }
      
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if(itemEdit.edit === true) {

            const docRef = doc(db, "cars", itemEdit.item.id)
            await setDoc(docRef, { model: formData.model, name: formData.name, year: formData.year }, { merge: true })
            setItemEdit({
          item: {},
          edit: false,
      })
      
      
          } else {
        await addDoc(carsCollection, formData);
    }
        setFormData({
            name: '',
            model: '',
            year: '',
          });
      
       document.getElementById('my_modal_3').close()
        
      };

      const editItem = (obj) => {
        const item = filterObjectProperty(obj, 'actions');
        
        setItemEdit({
            item,
            edit: true,
        })
        
      }

      const handleItemRemove = (itemId) => {
        
        const exactLocationOfItemInDB = doc(db, "cars", itemId);
        deleteDoc(exactLocationOfItemInDB);
      };
    

    

    useEffect(() => {
        const unsubscribe = onSnapshot(carsCollection, (snapshot) => {
          
            const notesArr = snapshot.docs.map(doc => ({
              ...doc.data(),
              id: doc.id
          }))
          setDat(notesArr);
          
        });
        
        return unsubscribe
        
      }, []);


      useEffect(() => {
        if(itemEdit.edit === true) {
            
            setFormData(itemEdit.item)
            document.getElementById('my_modal_3').showModal()
            
        }
    }, [itemEdit])



  return (
    <>
    <div className='flex justify-evenly'>< br/>< br/>
    <button className="btn btn-accent" onClick={()=>document.getElementById('my_modal_3').showModal()}>Add Car</button>

<dialog id="my_modal_3" className="modal">
  <div className="modal-box" >
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg mb-3">Add a new Car</h3>
    <form onSubmit={handleSubmit}>
              <div>
              <label className="input input-bordered flex items-center gap-2 mb-3">
  
  <input type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}  className="grow" placeholder="Name" />
</label>
<label className="input input-bordered flex items-center gap-2 mb-3">
  
  <input type="text"
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleInputChange} className="grow" placeholder="Model" />
</label>
<label className="input input-bordered flex items-center gap-2 mb-3">
  
  <input type="text"
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange} className="grow" placeholder="Year" />
</label>
                
              </div>
              <button className="btn btn-primary"  type="submit">Submit</button>
            </form>
  </div>
</dialog>
<label class="input input-bordered flex items-center gap-2">
  <input type="text" class="grow" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
</label>
    </div>
    <Table data={dat} columns={columns} />
    </>
  )
}

export default Cars