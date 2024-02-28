import React, { useEffect, useState } from 'react'
import { getuserDetails } from '../services/QnaServices'

function UserDetails() 
{
    const [userDetails,setUserDetails]= useState([])
    useEffect(()=>{


        getuserDetails().then((response)=>{
            console.log(response.data)
            setUserDetails(response.data)
        }).catch((error)=>{
            console.log(error) 
        })

    },[])
  return (
    <div>UserDetails
        <h2>Name:</h2>{userDetails.userName}<br/>
        <h2>Email:</h2>{userDetails.email}<br/>
        <h2>Role:</h2>{userDetails.role}
    </div>
  )
}

export default UserDetails