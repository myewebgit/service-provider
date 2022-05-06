import React from "react";
import { useForm } from "react-hook-form";

const AddService =()=>{
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
      console.log(data);
      const url = `http://localhost:5000/book`;
      fetch(url,{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(result=>{
          console.log(result);
      })
    }
    return (
        <div className="w-50 mx-auto">
		<h4> Add a service…</h4>
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
      <input className="mb-2" placeholder="Name"{...register("name")} />
      <input className="mb-2" placeholder="Price"{...register("price")} />
      <textarea className="mb-2" placeholder="Description"{...register("description")} />
      
      <input className="mb-2" placeholder="Photo URL" type="text"{...register("img")} />
      {/* <select {...register("Description")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select> */}
      <input type="submit" value="Add Service" />
    </form>
        </div>
    );
};

export default AddService;
