import { useState } from 'react'
import validate from './validator'

const CreateAccount = (props) => {
  // state which takes care of email and password
  const [formdata, setFormData] = useState({
    firstname: 'Ravi',
    lastname: 'Raj',
    email: 'youremail@domain.com',
    password: ''
  })
  //mesage state
  const [message, setMessage]= useState('')

  //onchange event to allow ppl to change those values
  //handle the change
  const handleChange = ce => {
    //make a copy of the data
    const copy_state = { ...formdata }
    // manipulate the copy
    copy_state[ce.target.id] = ce.target.value //state.field=value
    // update the actual formdata using the copy
    setFormData(copy_state)
  }

  // signup 
  const signup = async fse => {
    //prevent the default action
    fse.preventDefault()
    // validate your signup info
    const { validationStatus, validationMessage } = validate(formdata)
    // only if validation passes only then do the signup
    if (validationStatus) {
      try {
        //only then do the signup
        // fetch : API => http://localhost:8888/user/register   POST
        const response = await fetch('http://localhost:8888/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formdata)
        })
        const data = await response.json()
        console.log(data)
        // success message
        setMessage('You have successfully signed up and you may now proceed to login!')

      } catch (error) {
        setMessage('Sorry! something went wrong!')
      }
    } else {
      alert(validationMessage)
    }

  }

  return (
    <form onSubmit={signup}>

      <div class="mb-3">
        <label for="firstname" class="form-label">First Name</label>
        <input type="text"
          class="form-control"
          value={formdata.firstname}
          onChange={handleChange}
          id="firstname"
          placeholder="Enter your first name" />
      </div>

      <div class="mb-3">
        <label for="lastname" class="form-label">Last Name</label>
        <input type="text"
          class="form-control"
          value={formdata.lastname}
          onChange={handleChange}
          id="lastname"
          placeholder="Enter your first name" />
      </div>


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
         <i>{message}</i>
      <button type="submit" class="btn btn-primary">Signup</button>
    </form>
  )
}
export default CreateAccount;