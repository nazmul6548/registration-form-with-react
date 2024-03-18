import { useState } from "react"


function Registration() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isSubmit , setIsSubmit] = useState(false);

// console.log(name);
// console.log(email);
// console.log(password);

const buttonClick = (event) => {
    // console.log("mia");
    event.preventDefault();
    if (!name || !email || !password) {
        alert("Please fill in all required fields.");
        return; // Exit function if any required field is empty
    }
    const user = {
        name: name,
        email: email,
        password: password
    };
    console.log(user);
    setIsSubmit(true);
}


  return (
    <div>

<div className='bg-[purple] rounded-xl'>
      <h1 className=' font-bold text-white text-5xl p-5'>Registration Card</h1>

      <div className=' p-16  flex flex-col justify-center items-center ' >
<form onSubmit={(event) =>  buttonClick(event) }>
    
<label className="input input-bordered flex items-center gap-2 m-5">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input onChange={(event)=> setName(event.target.value)} type="text" className="grow" placeholder="Username" 
  required
  />
  
</label>
      <label className="input input-bordered flex items-center gap-2 m-5">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input
  onChange={(event) => setEmail(event.target.value)}
   type="text" className="grow" placeholder="Enter your Email" required />
</label>
<label className="input input-bordered flex items-center gap-2 m-5">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input
  onChange={(event) => setPassword(event.target.value)}
  type="password" className="grow" placeholder="password" required />
</label>

<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>SignUp</button>
{/* <button  className="btn btn-outline bg-blue text-white">Sign Up</button> */}
</form>
      </div>

      <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_1" className="modal bg-purple-900">
  <div className="modal-box bg-fuchsia-700 text-white">
    <h1 className="font-bold text-lg">You have submitted successfully !</h1>
    <p className="py-4">Name : {name}</p>
    <p className="py-4">Email : {email}</p>
    <p className="py-4">Password : {password}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
      </div>


    </div>  
    </div>
  )
}

export default Registration