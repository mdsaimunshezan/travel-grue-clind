import React,{useState} from 'react';
import "./AddServis.css"

const AddServis = () => {
    const [name,setName] =useState("");
    const [image,setImage] =useState("");
    const [price,setPrice] =useState("");
    const [dec,setDec] =useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newServis = {
            name:name,
            image:image,
            price:price,
            dec:dec
        }

        fetch("https://still-brushlands-57197.herokuapp.com/user",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newServis)
            
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId)
            alert("Data Added successfull");
            e.target.reset();
        })

        

        
    }
    return (
        <div className="form">
           <form onSubmit={handleSubmit}>
               <input type="text" placeholder="Enter servis name" className="form__itme" onChange={(e)=>{
                   setName(e.target.value)
               }}/>
               <input type="text" placeholder="Enter image url" className="form__itme" onChange={(e)=>{
                   setImage(e.target.value)
               }}/>
               <input type="number" placeholder="Enter serves price" className="form__itme" onChange={(e)=>{
                   setPrice(e.target.value)
               }}/>
               <textarea name="" id="" cols="30" className="form__itme" rows="5" onChange={(e)=>setDec(e.target.value)}></textarea>
               <button type="submit" className="form__button">Add Item</button>
           </form>
        </div>
    )
}

export default AddServis
