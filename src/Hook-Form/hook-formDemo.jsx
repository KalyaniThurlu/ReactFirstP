
import { useForm } from "react-hook-form";

export function HookFormDemos() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (values) => {
        console.log(values);
    }

    return (
        <div className="container-fluid">
            <h2>Register</h2>
            <form onSubmit={handleSubmit(submit)}>
                <dl>
                    <dt>UserName</dt>
                    <dd>
                        {/*The useForm hook is destructured to get 
                        register, handleSubmit, and formState (which includes errors).
The register function is used to register the input fields with validation rules.
The handleSubmit function handles the form submission.
Errors are displayed if the validation rules are not met.*/}

                        <input type="text" name="UserName" {...register("UserName", { required: true, minLength: 4 })} />
                    </dd>
                    <dd className="text-danger">
                        {errors.UserName?.type === "required" && <span>Name Required</span>}
                        {errors.UserName?.type === "minLength" && <span>Name too short</span>}
                    </dd>
                    <dt>Mobile</dt>
                    <dd>
                        <input type="text" name="Mobile" {...register("Mobile", { required: true, pattern: /\+91\d{10}/ })} />
                    </dd>
                    <dd className="text-danger">
                        {errors.Mobile?.type === "required" && <span>Mobile Required</span>}
                        {errors.Mobile?.type === "pattern" && <span>Invalid Mobile</span>}
                    </dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
