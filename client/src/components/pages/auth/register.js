import React, { useState } from 'react'
// functions
import {register} from '../../fonctions/auth';

const Register = () => {

    const [value, setValue] = useState({
        username: "",
        password: "",
        password1: "",
    });

    const handleChang = (e) =>{
        console.log(e.target.name);
        console.log(e.target.value);
        setValue({...value, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('submit');

        if (value.password !== value.password1) {
            alert("Password not match");
        }else{
            // checkpassword seccess
            register(value).then(res=>{
                console.log(res.data);
                alert(res.data);
            }).catch(err =>{
                console.log(err.response.data);
                alert(err.response.data);
            });
        }
    };

    // console.log(value);

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" onChange={handleChang}/>

            <label>Password</label>
            <input type="text" name="password" onChange={handleChang}/>

            <br/>
            <label>Confirm Password</label>
            <input type="text" name="password1" onChange={handleChang}/>

            <button disabled={value.password.length<6}>Submit</button>

        </form>
    </div>
  )
}

export default Register