import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
             ...preVal,
             [name] : value,
            };
        });
    };

    const formSubmit = (e)  => {
        e.preventDefault();
        alert(`My Name is ${data.fullname}. My Mobile Number Is ${data.phone} And My Email is ${data.eamil}, Here is what I wannt to say${data.msg}`)
    };
    return(
      <>
       <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
       </div>
       <div className="container-fluid nav_bg">
         <div className="row">
          <div className="col-10 mx-auto">
           <form onSubmit={formSubmit}>
           <div class="mb-3"> 
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name"/>
     </div>
           <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" name="mobilenumber" value={data.mobilenumber} onChange={InputEvent} placeholder="Enter Mobile Number" />
           </div>
           <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"  name="email" value={data.email} onChange={InputEvent} placeholder="Enter Your Email" />
  
           </div>
           <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent} placeholder="Type here..."></textarea>
           </div>
           <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
           </div>
           </form> 
          </div>
         </div>
       </div>

      </>
    );
};
export default Contact;