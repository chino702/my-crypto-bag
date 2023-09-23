import React, { useState } from "react";


function AddAssetForm() { 
    const [ formData, setFormData ] = useState({ name: "", quantity: "", price: ""});

    const handleInputChange = (e) => {
        const{ name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log("New asset data:", formData);
    };

    return(
        <div>
            <h2>Add Cryptocurrency</h2>
            <form onSubmit={HandleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Quantity:</label>
                        <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange}/>
                        </div>
                        <div>
                            <lable>Price:</lable>
                            <input type="number" name="price" value={formData.price} onChange={handleInputChange}/>
                        </div>
                        <button type="submit">Add Asset</button>
            </form>
        </div>
    );
}

export default AddAssetForm;