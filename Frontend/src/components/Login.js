import { useState } from "react";
import validate from './validator'
import {getLoggedIn} from './utilities'

const Login = (props) => {
   // state which takes care of email and password
   const [formdata, setFormData] = useState({
     email: 'youremail@domain.com',
     password: ''
   })

   // save the status
   const [message, setMessage] = useState('')

   //handle the change
   const handleChange = ce => {
     //make a copy of the data
     const copy_state = { ...formdata }
     // manipulate the copy
     copy_state[ce.target.id] = ce.target.value
     // update the actual formdata using the copy
     setFormData(copy_state)
   }

   // login 
   const login = async fse => {
     //prevent the default action
     fse.preventDefault()
     //validate
     const {validationStatus, validationMessage}=validate(formdata)
     // only if validation passes only then do the signup
     if(validationStatus){
       //only then do the signup
       // fetch : POST http://localhost:8888/users/login
       try {
         //only then do the signup
         // fetch : API => http://localhost:8888/user/register   POST
         const response = await fetch('http://localhost:8888/user/login', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json'
           },
           body: JSON.stringify(formdata)
         })
         const data = await response.json()
         // success message
         setMessage('You have successfully logged in')
         //login action
         getLoggedIn(data.firstname)
        

       } catch (error) {
         setMessage('Sorry! something went wrong!')
       }
     
     }else{
       alert(validationMessage)
     }
   }


  return (
     <form onSubmit={login}>

       <div class="mb-3">
         <label for="email" class="form-label">Email address</label>
         <input type="email"
           class="form-control"
           id="email"
           value={formdata.email}
           onChange={handleChange}
           placeholder="Enter your email id"
           aria-describedby="emailHelp" />
         <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
       </div>

       <div class="mb-3">
         <label for="password" class="form-label">Password</label>
         <input type="password"
           value={formdata.password}
           onChange={handleChange}
           class="form-control"
           placeholder="Enter your password"
           id="password" />
       </div>
        <i>{message}</i>  <br/>
       <button type="submit" class="btn btn-primary">Login</button>
     </form>
   )
 }

 export default Login;

// import { useState } from "react";
// import validate from './validator'
// //import {getLoggedIn} from './utilities'


// const Login = (props) => {
//   // state which takes care of email and password
//   const [formdata, setFormData] = useState({
//     email: 'youremail@domain.com',
//     password: ''
//   })

//   //handle the change
//   const handleChange = ce => {
//     //make a copy of the data
//     const copy_state = { ...formdata }
//     // manipulate the copy
//     copy_state[ce.target.id] = ce.target.value
//     // update the actual formdata using the copy
//     setFormData(copy_state)
//   }

//   // login 
//   const login = fse => {
//     //prevent the default action
//     fse.preventDefault()
//     //validate
//     const {validationStatus, validationMessage}=validate(formdata)
//     // only if validation passes only then do the signup
//     if(validationStatus){
//       //only then do the signup
//       // fetch : POST http://localhost:8888/users/login
     
//     }else{
//       alert(validationMessage)
//     }
//   }


//   return (
//     <form onSubmit={login}>

//       <div class="mb-3">
//         <label for="email" class="form-label">Email address</label>
//         <input type="email"
//           class="form-control"
//           id="email"
//           value={formdata.email}
//           onChange={handleChange}
//           placeholder="Enter your email id"
//           aria-describedby="emailHelp" />
//         <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//       </div>

//       <div class="mb-3">
//         <label for="password" class="form-label">Password</label>
//         <input type="password"
//           value={formdata.password}
//           onChange={handleChange}
//           class="form-control"
//           placeholder="Enter your password"
//           id="password" />
//       </div>

//       <button type="submit" class="btn btn-primary">Login</button>
//     </form>
//   )
// }

// export default Login;