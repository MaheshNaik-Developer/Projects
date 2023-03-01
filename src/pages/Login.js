import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
const Login = () => {
  const [users,setUsers] = useState({
    email:'',
    password:'',
  })
  const navigate = useNavigate()

  const handleChange = (e) =>{
    setUsers((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleClick = async e =>{
    e.preventDefault()
    try{
      if(users.email=== users.email)
      await axios.post("http://localhost:8800/userdata",users)
      navigate("/")
    }catch(err){
      console.log(err);
    }
    
  }
  return (
    <div>
    <Card style={{ width: '15rem',height:'20rem' }}>
      <Card.Body>
      <Card.Title><h3>Login</h3></Card.Title>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{marginRight:"40vh",padding:"10px"}}>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{marginRight:"40vh"}}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleClick}>
        Sign In
      </Button>
    </Form>
      </Card.Body>
    </Card>
      </div>
  )
}

export default Login