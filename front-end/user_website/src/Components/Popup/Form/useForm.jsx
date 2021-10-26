import { useCallback, useEffect, useState } from "react";
import axios from 'axios';

const useForm = (FormType, formRef, setShowForm, validator, setUser, setDialogState) => {
    const default_values = useCallback(() => {
        if (FormType === "Login"){
            return {
                Email: "",
                Password: ""
            }
        }
        if (FormType === "SignUp"){
            return {
                Full_name: "",
                Email: "",
                Password: "",
                Confirm_password: "",
                Gender: 1
            }
        }

        if (FormType === "ForgotPassword"){
            return {
                Email: ""
            }
        }
    }, [FormType])

    const [values, setValues] = useState(default_values)

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        
        setErrors({});
        setErrors(validator(FormType, values));

        setIsSubmitted(true);
    }

    useEffect(() => {
        if (isSubmitted && Object.keys(errors).length === 0){
            if (FormType === "Login"){
                axios.post('user/login', values).then(
                    res => {
                        if (res.data.message === 'Authentication successful!'){
                            localStorage.setItem('token', res.data.token)
                            setUser(res.data.user)
                            setShowForm(false)
                        }
                    }
                ).catch(
                    err => {
                        if (err.message === "Request failed with status code 401"){
                            setErrors(validator(FormType, 'Wrong email or password!'))
                        }
                        else{
                            setDialogState({
                                title: "Error!",
                                message: err.message,
                                show: true
                            })
                        }
                    }
                )  
            }
            if (FormType === "SignUp"){
                axios.post('user/sign-up', values).then(
                    res => {
                        setDialogState({
                            title: "Notify!",
                            message: res.data.message,
                            show: true
                        });
                        setShowForm(false);
                    }
                ).catch(
                    err => {
                        setDialogState({
                            title: "Error!",
                            message: err.message,
                            show: true
                        })
                    }
                )
            }
    
            if (FormType === "ForgotPassword"){
                axios.post('user/forgot-password', values).then(
                    res => {
                        setDialogState({
                            title: "Notify!",
                            message: res.data.message,
                            show: true
                        })
                        setShowForm(false)
                    }
                ).catch(
                    err => {
                        setDialogState({
                            title: "Error!",
                            message: err.message,
                            show: true
                        })
                    }
                )
            }
            setValues(default_values);
            setIsSubmitted(false);
        }  
    }, [errors, FormType, default_values, isSubmitted, setDialogState, setShowForm, setUser, validator, values])

    const handleClose = (e) => {
        if (formRef.current === e.target || e.target.className === "close-btn"){
            setIsSubmitted(false)
            setValues(default_values)
            setErrors({})
            setShowForm(false)
        }
    }

    return { handleSubmit, handleClose, handleChange, values , errors }
}

export default useForm;