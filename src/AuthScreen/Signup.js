import React, {  useEffect, useState } from 'react'

 function Signup() {
    //set here true and false
  const[dataVal, setData] = useState(0);
  const[backButton, setbackButton] = useState(false);
  const[nextButton, setnextButton] = useState(false);
 useEffect(()=>{
  // if(dataVal >=1 && dataVal <= 3){
  //   setbackButton(false)

  // }else if(dataVal < 3  ){setnextButton(true) 
  //   setbackButton(false)}
if(dataVal<=1){
    setbackButton(true)
setData(1)
} else if(dataVal>=3){
    setData(3)
}
 },[dataVal])
    return (
      <div><form style={
        {height: "75vh"}
      }>

      {dataVal <= 1? <CompanyDetail></CompanyDetail>:dataVal===2? <BranchDetail></BranchDetail>:<UserDetail></UserDetail>}</form>
     
    
      <div style={{display: "flex", justifyContent: "space-around" }}>
      <button className='btn btn-primary' onClick={()=>{setData(dataVal-1)}} disabled = {backButton}   >Back</button>
       {dataVal !== 3?<button className='btn btn-primary' onClick={()=>{setData(dataVal+1); setbackButton(false)}} disabled = {nextButton}>Next</button>:
      
      <button className='btn btn-primary' onClick={()=>{setData(dataVal+1); setbackButton(false)}} disabled = {nextButton}>Submit</button>}
        </div>
      {console.log(dataVal)}
      </div>
    )
    
  }
  
 function CompanyDetail() {
    return (
       <><h1 style={{color : "lightblue", display: "flex", justifyContent: "center"}}>Company detail</h1>
        <div className="mb-3">
          <label>Company Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Company Name"
          />
        </div>
        <div className="mb-3">
          <label>Domain Name</label>
          <input type="text" className="form-control" placeholder="Domain Name" />
        </div>
        </>
    
    )
  }
  
 function BranchDetail() {
    return (
      <><h1 style={{color : "lightblue", display: "flex", justifyContent: "center"}}>Branch detail</h1>
        <div className="mb-3">
          <label>Main Branch Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Branch Name"
          />
        </div>
        <div className="mb-3">
          <label>GST</label>
          <input type="text" className="form-control" placeholder="GST" />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input type="text" className="form-control" placeholder="address" />
        </div>
       
     </>
    )
  }
  
 function UserDetail() {
    return (
      <><h1 style={{color : "lightblue", display: "flex", justifyContent: "center"}}>User detail</h1>
        <div className="mb-1">
          <label>full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="full Name"
          />
        </div>
        <div className="mb-1">
          <label>email</label>
          <input type="text" className="form-control" placeholder="email" />
        </div>
        <div className="mb-1">
          <label>phone Number</label>
          <input type="Number" className="form-control" placeholder="phone Number" />
        </div>
        <div className="mb-1">
          <label>Country</label>
          <input type="text" className="form-control" placeholder="Country" />
        </div>
        <div className="mb-1">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password" />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input type="text" className="form-control" placeholder="Confirm Password" />
        </div>
       
     </>
    )
  }
  
  
  export default Signup;


