
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export function FormDemo() {
    return (
        <div className="container-fluid">
            <Formik
                initialValues={{ UserName: "", Age: 0, Mobile: "" }}
                validationSchema={yup.object({
                    UserName: yup.string()
                        .required("Name is required")
                        .min(4, "Minimum 4 characters")
                        .max(10, "Maximum 10 characters"),
                    Age: yup.number()
                        .required("Age is required")
                        .min(10, "Minimum age is 10")
                        .max(20, "Maximum age is 20"),
                    Mobile: yup.string()
                        .matches(/\+91\d{10}/, "Mobile number should match +91XXXXXXXXXX format")
                })}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                <Form>
                    <dl>
                        <dt>UserName:</dt>
                        <dd>
                            <Field type="text" name="UserName" />
                            <dd className="text-danger"><ErrorMessage name="UserName" /></dd>
                        </dd>

                        <dt>Age:</dt>
                        <dd>
                            <Field type="number" name="Age" />
                            <dd className="text-danger"><ErrorMessage name="Age" /></dd>
                        </dd>

                        <dt>Mobile:</dt>
                        <dd>
                            <Field type="text" name="Mobile" />
                            <dd className="text-danger"><ErrorMessage name="Mobile" /></dd>
                        </dd>
                    </dl>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}
