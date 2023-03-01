import React,{useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
const Update = () => {
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
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const usersId = location.pathname.split("/")[2];

const handleChange = (e) =>{
  setUsers((prev)=>({...prev,[e.target.name]:e.target.value}))
}
const handleClick = async e =>{
  e.preventDefault()
  try{
    await axios.put("http://localhost:8800/userdata",users)
    navigate("/")
  }catch(err){
    console.log(err);
    setError(true);
  }
} 
console.log(users);
  return (
    <div style={{paddingTop:"80vh",paddingBottom:"2vh" }}>
    <Card >
    <Card.Body style={{padding:"10vh"}}>
    <Card.Title><h3>Update</h3></Card.Title>
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
      Update
    </Button>
  </Form>
  
    </Card.Body>
  </Card>
  </div>
  )
}

export default Update