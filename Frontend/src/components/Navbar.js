import './Navbar.css';
const Navbar =(props)=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light" 
        style={{backgroundColor: '#eb2929'}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <label className="elogo">e!</label>
      </a>
      <button className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse"
       data-bs-target="#navbarSupportedContent" 
       aria-controls="navbarSupportedContent"
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Logout</a>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-light" type="submit">Create Account</button>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav>
    )
}

export default Navbar;