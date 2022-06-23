export const getLoggedIn = (username) => {
  //i will save the first name 
        //localStorage.section('loggedInUsername',data.firstname)
        localStorage.setItem('loggedInUsername',username)
        //refresh
        window.location = window.location.href
}

export const getLoggedOut = () => {
  //clear your local storage
  localStorage.clear()
  //refresh
  window.location = window.location.href
}