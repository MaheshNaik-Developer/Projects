
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
const Register = () => {
  const [users,setUsers] = useState({
        username:'',
        email:'',
        firstname:'',
        lastname:'',
        contact:'',
        dateofbirth:'',
        address:'',
        password:'',
        confirmpassword:''
      })
      const navigate = useNavigate()
    
    const handleChange = (e) =>{
      setUsers((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleClick = async e =>{
      e.preventDefault()
      try{
        await axios.post("http://localhost:8800/userdata",users)
        navigate("/login")
      }catch(err){
        console.log(err);
      }
      
    }
    console.log(users);
  return (
    <div style={{paddingTop:"80vh",paddingBottom:"2vh" }}>
      <Card >
      <Card.Body style={{padding:"10vh"}}>
      <Card.Title><h3>Registration</h3></Card.Title>
        <Form>
        <Form.Group className='mb-2' controlId="username">
        <Form.Label style={{marginRight:"22vh"}}>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter user" name='username' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className='mb-2'  controlId="email">
        <Form.Label style={{marginRight:"30vh"}}>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'onChange={handleChange}/>
      </Form.Group>
      <Form.Group className='mb-2' controlId="firstname">
        <Form.Label style={{marginRight:"24vh"}}>First name</Form.Label>
        <Form.Control type="text" placeholder="Enter Firdtname" name='firstname' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className='mb-2' controlId="lastname">
        <Form.Label style={{marginRight:"24vh"}}>Last name</Form.Label>
        <Form.Control type="text" placeholder="Enter Lastname" name='lastname' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className='mb-2' controlId="contact">
        <Form.Label style={{marginRight:"17vh"}}>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Phonenumber"  name='contact' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className='mb-2' controlId="dateofbirth">
        <Form.Label style={{marginRight:"21vh"}}>Date Of Birth</Form.Label>
        <Form.Control type="date" placeholder="Enter Dateofbirth" name='dateofbirth' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className='mb-2' controlId="address">
        <Form.Label style={{marginRight:"26vh"}}>Address</Form.Label>
        
        <Form.Control type="text" rows="4" cols="20" placeholder="Enter Address" name='address' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className='mb-2' controlId="password">
        <Form.Label style={{marginRight:"25vh"}}>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" name='password' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className='mb-3' controlId="confirmpassword">
        <Form.Label style={{marginRight:"14vh"}}>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Enter ConfirmPassword" name='confirmpassword' onChange={handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleClick}>
        Sign Up
      </Button>
    </Form>
    
      </Card.Body>
    </Card>
    </div>
  )
}

export default Register



































// import axios from 'axios'
// import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.min.css';
// const Register = () => {
//   const [users,setUsers] = useState({
//     username:'',
//     email:'',
//     firstname:'',
//     lastname:'',
//     contact:'',
//     dateofbirth:'',
//     address:'',
//     password:'',
//     confirmpassword:''
//   })
//   const navigate = useNavigate()

// const handleChange = (e) =>{
//   setUsers((prev)=>({...prev,[e.target.name]:e.target.value}))
// }
// const handleClick = async e =>{
//   e.preventDefault()
//   try{
//     await axios.post("http://localhost:8800/userdata",users)
//     navigate("/login")
//   }catch(err){
//     console.log(err);
//   }
  
// }
// console.log(users);
//   return (
//     <div className='container'>
//       <h1>Registration</h1>
//       <form>
//         <label>User Name</label> <br />
//         <input type="text" placeholder='enter username' name='username' onChange={handleChange}/><br />
//         <label>Email</label><br />
//         <input type="email" placeholder='enter email' name='email' onChange={handleChange}/><br />
//         <label>First Name</label><br />
//         <input type="text" placeholder='enter firstname' name='firstname' onChange={handleChange}/><br />
//         <label>Last Name</label><br />
//         <input type="text" placeholder='enter lastname' name='lastname' onChange={handleChange}/><br />
//         <label>Phone Number</label><br />
//         <input type="text" placeholder='phonenumber' name='contact' onChange={handleChange}/><br />
//         <label>Date of Birth</label><br />
//         <input type="date" placeholder='dateofbirth' name='dateofbirth' onChange={handleChange}/><br />
//         <label>Address</label><br />
//         <textarea rows="4" cols="20" name='address' onChange={handleChange}>
//           Enter text address...</textarea><br />
//         <label>Password</label><br />
//         <input type="password" placeholder='enter password' name='password' onChange={handleChange}/><br />
//         <label>Confirm Password</label><br />
//         <input type="password" placeholder='enter confirm password' name='confirmpassword' onChange={handleChange}/>
        
//       </form>
