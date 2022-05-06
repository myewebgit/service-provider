import React from 'react';
import { Button } from 'react-bootstrap';
import useServices from '../hooks/useServices';


const ManageServices = () => {
    const [services,setServices] = useServices();
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if (proceed){
            const url = `http://localhost:5000/book/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = services.filter(service => service._id!==id);
                setServices(remaining);
            })

        }
    }
    return(
        <div className='w-50 mx-auto'>
            <h5>Manage Services</h5>
            {
                services.map(service => <div key={service._id}>
                    <h4>{service.name}<Button onClick={()=> handleDelete(service._id)}>X</Button></h4>
                </div>)
            }
        </div>
    )
}
    
   

export default ManageServices;
