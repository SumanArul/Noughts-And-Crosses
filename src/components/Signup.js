import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '', // Corrected the typo here
  });

  const navigate=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:8081/signup', values)
      .then((res) => {
        if(res.data.Status==="Success")
        {
          navigate('/login')
        }
        else
        {
          alert(res.data.Error)
        }
      })
      .catch((err) => {
        console.error(err);
        // Handle the error here, such as displaying an error message to the user
      });
  };

  return (
    <>
      <div className='d-flex bg-success align-items-center justify-content-center vh-100'>
        <div className='bg-white p-3 rounded w-25'>
          <form onSubmit={handleSubmit}>
            <h3>Signup</h3>
            <div className='mb-2'>
              <label><strong>Name</strong></label>
              <input type='name' placeholder='ENTER NAME' onChange={e => setValues({ ...values, name: e.target.value })} className='form-control rounded-0' required />
            </div>
            <div className='mb-2'>
              <label><strong>Email</strong></label>
              <input type='email' placeholder='ENTER EMAIL' onChange={e => setValues({ ...values, email: e.target.value })} className='form-control rounded-0' required />
            </div>
            <div className='mb-3'>
              <label><strong>PASSWORD</strong></label>
              <input type='password' placeholder='ENTER THE PASSWORD' onChange={e => setValues({ ...values, password: e.target.value })} className='form-control rounded-0' required />
            </div>
            <button type="submit" className='btn btn-success w-100 rounded-0'>Signup</button>
            <p>YOU AGREE TERMS AND CONDITIONS?</p>
            <Link to='/login' className='btn btn-success w-100'> Login </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
