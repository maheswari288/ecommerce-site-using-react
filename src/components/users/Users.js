import "./users.css";


import axios from "axios";

import React, { useState } from 'react';

function Users(){
    const [state,setState]=useState([])
    
    const getUsers= ()=>{
      var promiseObj=  axios.get("https://randomuser.me/api/?results=10");
      promiseObj
      .then((successdata)=>
      {
        console.log("Successdata",successdata.data.results)
        setState(successdata.data.results)

    })
      .catch((failuredata)=>
      {console.log("Failuredata",failuredata)})

    }
    return(
        <div> <h2>users details</h2>
        <p>A detail is a small fact or spot in a larger entity. That ambiguous smile is just one detail of Leonardo da Vinci's Mona Lisa. Detail comes from the French for cutting into pieces, but in English we only use it to refer to the pieces. As a noun, detail means an isolated aspect of something larger.A detail is a small fact or spot in a larger entity. That ambiguous smile is just one detail of Leonardo da Vinci's Mona Lisa. Detail comes from the French for cutting into pieces, but in English we only use it to refer to the pieces. As a noun, detail means an isolated aspect of something larger.</p>
    <button onClick={getUsers}>click</button>
       {
        state.length>0 && (<table width="1000px" className="tablecss">
        <thead><tr>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>GENDER</th>
            <th>details</th>
           
            </tr></thead>
        <tbody>
            {
                state.map((user)=>{
                  return  <tr>
                    <td><img src={user.picture.medium} alt="hi"  width="100" height="100" /></td>
                    <td>{user.name.first}</td>
                    <td>{user.gender}</td>
                    
                    <td><button>Details</button></td>
                   
                  </tr>
                })
            }
        </tbody>
    </table>
    )
    }

    </div>
        )

}
       export default Users;