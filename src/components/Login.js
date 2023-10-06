

import React,{useState} from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import axios from 'axios'
 function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''   // Corrected the typo here
  });

  const navigate=useNavigate();
  axios.defaults.withCredentials=true;
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    axios
      .post('http://localhost:8081/login', values)
      .then((res) => {
        if (res.data.Status === 'Success') {
          localStorage.setItem("name",res.data.name);
          toast.success('Login successful', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000, // Close the toast after 1 second
          });
  
          // Add a delay using setTimeout and then navigate
          setTimeout( () => {
             navigate('/');
          }, 3000); 
          
        } else {
          toast.error('Wrong Password or Email', {
            autoClose: 1000,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error('Error');
      });
  };
  
  
  return(
    <>
    <ToastContainer />
   
    
    <div className=' d-flex bg-success align-items-center justify-content-center vh-100'>
     <div className='bg-white p-3  rounded w-6'>

    <form onSubmit={handleSubmit}>
        <div  className='mb-3'>
          <h3>Sign-In</h3>
            <label><strong>Email</strong></label>
            <input type='email'  placeholder='ENTER EMAIL' onChange={e => setValues({ ...values, email: e.target.value })}  className='form-control rounded-0' />
        </div> 
         <div  className='mb-3'>
            <label><strong>PASSWORD</strong></label>
            <input type='password' placeholder='ENTER THE PASSWORD'onChange={e => setValues({ ...values, password: e.target.value })}  className='form-control rounded-0 ' />
        </div>
        
        <button className='btn btn-success w-100 rounded-0' >Login</button>
        <p>YOU ARE AGREE FOR OUR TERMS AND POLICIES?</p>
       
        <Link to='/signup' className='btn btn-success w-100' > CREATE ACCOUNT </Link> 
       </form>
    </div> 
     </div>
    </>
  )
}

export default Login;




