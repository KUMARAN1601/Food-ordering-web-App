import "./RestaurantInfo.css";
const RestaurantInfo = (props) => {
  const JSX = () => {
    if('name' in props.details){
      return (     
      <>
        <ul className="nav nav-pills mb-3 tabborder" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
              type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
              type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  
            <div className="about my-5">About this place</div>
            <div className="cuisine">Cuisine</div>
            <div className="cuisines"><span>{props.details.cuisines.join(', ')}</span></div>
            <div className="cuisine mt-3">Average Cost</div>
            <div className="cuisines"> {props.details.costfortwo.min} - {props.details.costfortwo.max} </div>
  
          </div>
          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div className="cuisine my-5">Phone Number<div className="text-danger">{props.details.contact}</div>
            </div>
            <div className="cuisine mt-4">{props.details.name}</div>
            <div className="text-muted mt-2">{props.details.address} <br />{props.details.city}</div>
          </div>
        </div>
      </>)
    }else{
      console.log(props)
      return null
    }
  }
  return JSX()
}

export default RestaurantInfo;


 

// import "./RestaurantInfo.css";
// const RestaurantInfo =(props)=>{
//   console.log(props)
//     return(
//       //<div className="container">
//       props.details && <>
//         <ul className="nav nav-pills mb-3 tabborder" id="pills-tab" role="tablist">
//           <li className="nav-item" role="presentation">
//             <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
//               type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
//               type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
//           </li>
//         </ul>
//         <div className="tab-content" id="pills-tabContent">
//           <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    
//             <div className="about my-5">About this place</div>
//             <div className="cuisine">Cuisine</div>
//             <div className="cuisines"><span>South Indian,</span><span>Fast Food,</span></div>
//             <div className="cuisine mt-3">Average Cost</div>
//             {/* <div className="cuisines"> {props.details.costfortwo.min} - {props.details.costfortwo.max} </div> */}
    
//           </div>
//           <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
//             <div className="cuisine my-5">Phone Number<div className="text-danger">{props.details.contact}</div>
//             </div>
//             <div className="cuisine mt-4">{props.details.name}</div>
//             <div className="text-muted mt-2">{props.details.address}<br/>{props.details.city}</div>
//           </div>
//         </div>
    
//       </>
//     )
// }

// export default RestaurantInfo;
