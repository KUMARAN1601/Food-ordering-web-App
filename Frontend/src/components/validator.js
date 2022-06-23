 //validate email and password
 const validate = ({email,password}) => {
  //keeping 2 fileds to track validation status, validation message
  let validationStatus = true
  let validationMessage = ''

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  // validate the email
  if(!emailRegex.test(email)){
      //if the validation is falining
      validationStatus = false
      validationMessage = 'Your email is not in correct format'
  }

  // validate the passowrd to be of 6 chars long
  if(password.length<7){
      //if the validation is falining
      validationStatus = false
      validationMessage +=' Your password needs to be atleast 8 character long!'
  }

  return { validationStatus, validationMessage}

}
export default validate

