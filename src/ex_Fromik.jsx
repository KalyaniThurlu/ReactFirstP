
import React from 'react';
import { useFormik } from "formik";

export function ExFormikDemo() {
    const formik = useFormik({
        initialValues: {
            name: '',
            price: 0,
            city: ''
        },
        onSubmit: (values) => {
            console.log(values);
            // Here you can perform further actions like API calls, etc.
        },
        validate: (values) => {
            const errors = {name:"",price:0,city:""};

            if (values.name.length < 5) {
                errors.name = 'Name must be at least 5 characters long';
            }

            if (values.price <= 0) {
                errors.price = 'Price must be a positive number';
            }

            if (!values.city) {
                errors.city = 'City is required';
            }

            return errors;
        }
    });

    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {formik.errors.name && formik.touched.name && (
                        <div className="text-danger">{formik.errors.name}</div>
                    )}
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    
                    <input
                        type="number"
                        id="price"
                        name="price"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                    /><span className='text-danger'>*</span>
                    {formik.errors.price &&
                        <div className="text-danger" required>{formik.errors.price}</div>
                    }
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <select
                        id="city"
                        name="city"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                    >
                        <option value="">Select City</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Hyd">Hyd</option>
                    </select>
                    {formik.errors.city && formik.touched.city && (
                        <div className="text-danger">{formik.errors.city}</div>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
