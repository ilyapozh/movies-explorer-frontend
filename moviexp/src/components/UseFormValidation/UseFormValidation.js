import React from "react";
import { useCallback } from "react";


export function useFormWithValidation() {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    function validateName(name) {
      const re = /(^[a-zA-Zа-яА-Я\-\s]+$)/;
      return re.test(String(name).toLowerCase())
    }

    const handleChange = (event) => {
      
      const target = event.target;
      const name = target.name;
      const value = target.value;

    
      if (name === 'email') {
        setValues({...values, [name]: value});
        if (!validateEmail(value)) {
          setErrors({...errors, [name]: `Введите email` });
          setIsValid(false)
        } else {
          setErrors({...errors, [name]: `` })
          setIsValid(true)
          
        }
      } else if (name === 'name') {
        setValues({...values, [name]: value});
        if (!validateName(value)) {
          setErrors({...errors, [name]: `Вводите только киррилицу, латиницу, пробел или дефис` });
        } else {
          setErrors({...errors, [name]: `` })
        }

      } else {

        setValues({...values, [name]: value});
        setErrors({...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
      }
      
      setIsValid(target.closest("form").checkValidity());
    };
  
    const resetForm = useCallback(
      (newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
      },
      [setValues, setErrors, setIsValid]
    );
  
    return {values, errors, isValid, handleChange, resetForm}
   
  }