import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { isUserAuthenticated } from "../Auth";
import { useNavigate } from "react-router-dom";
import { setUserDetails } from "../Storage";

function LoginPage(props){

    const navigate = useNavigate()

    const initialInputs = {name:"",email:"",password:""}
    const initialErrorInputs = {name:{required:false},email:{required:false},password:{required:false},customError:null};

    const [inputs,setInputs] = useState(initialInputs);
    const [errors,setErrors]= useState(initialErrorInputs);
    const [haveError,setHaveError]=useState(true);

    function handleChange(e){
        const {name,value} = e.target;
        setInputs({...inputs,[name]:value});
    }


    function handleSubmit(e){
        e.preventDefault();
        let error = initialErrorInputs
        let hasError = false

        if(inputs.name === ""){
            error.name.required = true
            hasError=true
        }

        if(inputs.email === ""){
            error.email.required = true
            hasError=true
        }

        if(inputs.password === ""){
            error.password.required = true
            hasError=true
        }

        if(!hasError){

                let url = "http://127.0.0.1:5001/api/user/login";
    
            axios.post(url,{
                username :  inputs.name,
                email: inputs.email,
                password: inputs.password
            },).then((res)=>{
                setUserDetails(res.data.accessToken)
                console.log(res)
                localStorage.setItem('userData', JSON.stringify(JSON.parse(res.config.data)));
            }).catch((err)=>{
                console.log(err);
            })
        
        }

        setHaveError(hasError)
        setErrors({...error})

        if(isUserAuthenticated){
            navigate('/')
        }
        
    }


    return(
        <>
        <main className="login-page">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-inputs">
                        <br/>
                        <br/>
                        <br/>
                        <input type="text" name="name" id="name" className="name" placeholder="Name" onChange={handleChange} />
                        {errors.name.required ? <div>Enter Your Name</div> : null}
                        <br/>
                        <br/>

                       
                        <input type="email" name="email" id="email" className="email" placeholder="Email" onChange={handleChange} />
                        {errors.email.required ? <div>Enter Your Email</div> : null}
                        <br/>
                        <br/>

                       
                        <input type="password" name="password" id="password" className="password" placeholder="Password" onChange={handleChange} />
                        {errors.password.required ? <div>Enter Your Password</div> : null}
                        <br/>
                        <br/>

                        {errors.customError ? errors.customError : null}
                        <br/>
                        <br/>

                        <button disabled={!haveError} className="btn-submit">Submit</button> 

                        <div><span>Don't You Have An Account</span>&nbsp;<Link to={'/register'}>Register</Link></div>
                        </div>
                    </form>
        </main>
        </>
    )
}

export default LoginPage;