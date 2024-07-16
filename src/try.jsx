
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export function Ss() {
  const formik = useFormik({
    initialValues: {
      UserName: "",
      Age: "",
      Mobile: ""
    },
    validationSchema: yup.object({
      UserName: yup
        .string()
        .required("Username is required")
        .min(4, "Username must be at least 4 characters long"),
      Age: yup
        .number()
        .required("Age is required")
        .min(19, "Minimum age is 19")
        .max(30, "Maximum age is 30"),
      Mobile: yup
        .string()
        .matches(/\+91\d{10}/, "Invalid mobile number format")
        .required("Mobile number is required")
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <div className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>Username:</dt>
          <dd>
            <input
              type="text"
              name="UserName"
              value={formik.values.UserName}
              onChange={formik.handleChange}
           
              
            />
          </dd>
          <dd className="text-danger">
            {formik.errors.UserName}
          </dd>

          <dt>Age:</dt>
          <dd>
            <input
              type="text"
              name="Age"
              
              
              onChange={formik.handleChange}
                          />
          </dd>
          <dd className="text-danger">
            {formik.errors.Age}
          </dd>

          <dt>Mobile:</dt>
          <dd>
            <input
              type="text"
              name="Mobile"
            
              
              onChange={formik.handleChange}
            
              
            />
          </dd>
          <dd className="text-danger">
           
           {formik.errors.Mobile}
          </dd>
        </dl>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
