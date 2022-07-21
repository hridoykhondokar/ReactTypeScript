import React, { useState } from 'react';
import Contract from './Contact';

interface IContact {
    name: string;
    email?: string;
   }

const Contracts = () => {
    const [contact, setContact] = useState<IContact>({} as IContact);
    const [contactList, setContactList] = useState<IContact[]>([]);
  
    const handleClick = () =>{
        setContactList([...contactList, contact])
        setContact({
            name: "",
            email: ''
           }  
        )
    }

 const onChange = (e : React.ChangeEvent<HTMLInputElement>) =>{

    setContact({...contact,[e.target.name]: e.target.value})
 }

 const handleRemove = (email : string) => {
       const newContact = contactList.filter(c => c.email !== email)
       setContactList(newContact)

 };



    return (
        <>

<h1> 💂‍♂️ Contact List</h1>
     
     <div className="form">
       <input 
        value={contact.name}
        name = "name"
        onChange={onChange}
        type="text" 
        placeholder='Contact name'
        required
       />

<input 
        value={contact.email}
        name = "email"
        onChange={onChange}
        type="text" 
        placeholder='Contact name'
        required
       />

       <button
       onClick={handleClick}>Add</button>
     
     </div>
            {
              contactList.map((contact) => 
                <Contract name={contact.name} email={contact.email}   handleRemove={handleRemove}  key={contact.name}></Contract>
              )  
            }
          
      
        </>
    );
};

export default Contracts;