import React from 'react';
import * as yup from 'yup';
import { useState } from 'react';
import { TextField, Button } from "@mui/material";
import { useFormik } from 'formik';
import axios from 'axios';
import { useSnackbar } from 'notistack';

export function Contact() {

    const { enqueueSnackbar } = useSnackbar();

    // Initial values of the form
    const initialValues = {
        name: '',
        email: '',
        message: ''
    };

    // Validation schema for the form
    const validationSchema = yup.object({
        name: yup
            .string()
            .required('Name is required'),
        email: yup
            .string()
            .email('Email is invalid')
            .required('Email is required'),
        message: yup
            .string()
            .required('Message is required'),
    });


    // Remove all of the values from the form
    function clearTheFormValues() {
        formikForm.resetForm();
    }


    // Function to handle the form submission
    async function handleFormSubmit(formValues: typeof initialValues) {

        const apiResponse = await axios.post("/api/form-submission", formValues);
        if (apiResponse.success) {
            // Show a snackbar with a success message
            enqueueSnackbar("Message sent successfully");

            // Go back to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }

        // Clear the form values
        clearTheFormValues();
    };


    // Formik hook to handle the form
    const formikForm = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: handleFormSubmit,
    });




    return (
        <>
            <div className={" flex flex-1 flex-col justify-center items-center w-full bg-transparent min-h-screen"} id="Contact">
                <header className={"flex flex-1 justify-evenly items-center flex-col md:flex-row  "}>
                    <h1 className={" text-2xl  md:text-5xl  text-black "}>
                        Contact Me
                    </h1>
                </header>
                <form className={"flex flex-1  items-center flex-col md:w-72 "} onSubmit={formikForm.handleSubmit}>
                    <TextField
                        label="Name"
                        name="name"
                        variant="outlined"
                        margin="normal"
                        error={formikForm.errors.name && formikForm.touched.name}
                        helperText={formikForm.errors.name && formikForm.touched.name ? formikForm.errors.name : ''}
                        value={formikForm.values.name}
                        onChange={formikForm.handleChange}
                        fullWidth
                        {...formikForm.getFieldProps('name')}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        margin="normal"
                        error={formikForm.errors.email && formikForm.touched.email}
                        helperText={formikForm.errors.email && formikForm.touched.email ? formikForm.errors.email : ''}
                        value={formikForm.values.email}
                        onChange={formikForm.handleChange}
                        fullWidth
                        {...formikForm.getFieldProps('email')}
                    />
                    <TextField
                        label="Message"
                        name="message"
                        variant="outlined"
                        margin="normal"
                        error={formikForm.touched.message && formikForm.errors.message}
                        helperText={formikForm.errors.message}
                        value={formikForm.values.message}
                        onChange={formikForm.handleChange}
                        fullWidth
                        {...formikForm.getFieldProps('message')}
                    />
                    <Button
                        type="submit"
                        color="primary"

                        className={"mt-4"}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </>
    )
}