import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Profile = () => {
    const [userdata,setUserdata]=useState([])

    useEffect(()=>{
        const fetchAllProfile = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/userdata")
                setUserdata(res.data);
                console.log(res);
            }catch(err){
                console.log(err);
            }
        }
        fetchAllProfile()
    },[])

  return (
    <div style={{textAlign:"left",marginTop:"140vh"}}>
        <h1 >Profile</h1>
        {/* <div className='userdata' ></div> */}
        {userdata.map((users)=>(
            <div className='users' key={users.id}>
            <p><b>User Name :</b>{users.username}</p>
            <p><b>Email :</b>{users.email}</p>
            <p><b>First Name : </b>{users.firstname}</p>
            <p><b>Last Name :</b>{users.contact}</p>
            <p><b>Date of Birth :</b>{users.dateofbirth}</p>
            <p><b>Address :</b>{users.address}</p>
            <p><b>Password :</b>{users.password}</p>
            <p><b>Confirm Password :</b>{users.confirmpassword}</p><br></br>
            <button type='submit'>
            <Link to="/update">Update</Link>
        </button>
        </div>
        ))}
        
    </div>
  )
}

export default Profile