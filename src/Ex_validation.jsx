

import { useFormik } from "formik"

export function ValidationDemo(){

    function ValidateForm(formCollection)
    {
         var errors = {UserName:'', Age:'', Mobile:''};

         if(formCollection.UserName.length===0){
             errors.UserName = "User Name Required";
         } else {
             if(formCollection.UserName.length<4){
                errors.UserName = "Name too short";
             } else {
                errors.UserName = "";
             }
         }

         if(isNaN(formCollection.Age)){
            errors.Age = "Age must be a number";
         } else {
            errors.Age = "";
         }

         if(formCollection.Mobile.match(/\+91\d{10}/))
          {
            errors.Mobile = "";
          } else {
            errors.Mobile = "Invalid Mobile";
          }

         return errors;
    }

    const formik = useFormik({
        initialValues: {
            UserName:'',
            Age:0,
            Mobile: ''
        },
        validate: ValidateForm,
        onSubmit: (values)=>{
            console.log(values);
        }
    });

    return(
        <div className="container-fluid">
            <form  noValidate onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="UserName" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Age" /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Mobile" /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}

	