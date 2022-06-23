import "./QuickSearch.css"
import { useNavigate } from 'react-router-dom'

const QuickSearches = (props) => {
   //use that hook
   const navigate = useNavigate()

   // handle the navigation on the click => as a query string
   const goToFilterPage = mealtType => navigate(`/filters?mealtype=${mealtType}`)

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="heading">Quick Searches</h2>
                    <h4 className="subheading">Discover restaurants by type of meal</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">


                    <div className="card mb-3" style={{maxWidth:'540px'}} 
                    onClick={e=>goToFilterPage('Breakfast')} >
                        <div className="row g-0">
                            <div className="col-md-4 fill">
                                <img src="Assets/images/breakfast.png" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title heading">Breakfast</h5>
                                    <p className="card-text">Start your day with exclusive breakfast options</p>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
                <div className="col-md-4">



                    <div className="card mb-3" style={{maxWidth:'540px'}} onClick={e=>goToFilterPage('Lunch')}>
                        <div className="row g-0">
                            <div className="col-md-4 fill">
                                <img src="Assets/images/lunch.png" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title heading">Lunch</h5>
                                    <p className="card-text">Start your day with exclusive lunch options</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="col-md-4">



                    <div className="card mb-3" style={{maxWidth:'540px'}} onClick={e=>goToFilterPage('Dinner')}>
                        <div className="row g-0">
                            <div className="col-md-4 fill">
                                <img src="Assets/images/dinner.png" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title heading">Dinner</h5>
                                    <p className="card-text">Start your day with exclusive dinner options</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
            <div className="row">
                <div className="col-md-4">



                    <div className="card mb-3" style={{maxWidth:'540px'}} onClick={e=>goToFilterPage('Snacks')}>
                        <div className="row g-0">
                            <div className="col-md-4 fill">
                                <img src="Assets/images/snacks.png" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title heading">Snacks</h5>
                                    <p className="card-text">Start your day with exclusive snacks options</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="col-md-4">



                    <div className="card mb-3" style={{maxWidth:'540px'}} onClick={e=>goToFilterPage('Drinks')}>
                        <div className="row g-0">
                            <div className="col-md-4 fill">
                                <img src="assets/images/drinks.png" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title heading">Drinks</h5>
                                    <p className="card-text">Start your day with exclusive drinks options</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="col-md-4">



                    <div className="card mb-3" style={{maxWidth:'540px'}} onClick={e=>goToFilterPage('NightLife')}>
                        <div className="row g-0">
                            <div className="col-md-4 fill">
                                <img src="Assets/images/nightlife.png" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title heading">Nightlife</h5>
                                    <p className="card-text">Start your day with exclusive night life options</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickSearches;











// import './QuickSearch.css'
//  import { useNavigate } from 'react-router-dom'
//  const QuickSearch =(props)=>{
//    //use that hook
//    const navigate = useNavigate()

// //   // handle the navigation on the click => as a query string
//    const goToFilterPage = mealtType => navigate(`/filter?mealtype=${mealtType}`)
// return(
//   <div className="container-fluid">
//     <div className="row">
//       <div className="col-md-12">
//         <h2 className="heading">Quick Searches</h2>
//         <h4 className="subheading">Discover restaurants by type of meal</h4>
//       </div>
//     </div>

//     <div className="row">
//       <div class="col-md-4">
//         <div className="card mb-3" style={{"maxWidth": "540px"}}
//         onClick={e=>goToFilterPage('Breakfast')} >
//           <div className="row g-0">
//             <div className="col-md-4 fill">
//               <img src="/assets/images/breakfast.png" class="img-fluid rounded-start" alt="..."/>
//             </div>
//             <div className="col-md-8">
//               <div className="card-body">
//                 <h5 className="card-title heading">Breakfast</h5>
//                 <p className="card-text">Start your day with exclusive breakfast options</p>
//               </div>
//             </div>
//           </div>
//         </div>




//       </div>
//       <div className="col-md-4">
//         <div className="card mb-3" style={{"maxWidth": "540px"}} onClick={e=>goToFilterPage('Lunch')}>
//           <div className="row g-0">
//             <div className="col-md-4 fill">
//               <img src="/assets/images/lunch.png" class="img-fluid rounded-start" alt="..."/>
//             </div>
//             <div className="col-md-8">
//               <div className="card-body">
//                 <h5 className="card-title heading">Lunch</h5>
//                 <p className="card-text">Start your day with exclusive lunch options</p>
//               </div>
//             </div>
//           </div>
//         </div>



//       </div>
//       <div class="col-md-4">
//         <div className="card mb-3" style={{"maxWidth": "540px"}} onClick={e=>goToFilterPage('Dinner')}>
//           <div className="row g-0">
//             <div className="col-md-4 fill">
//               <img src="/assets/images/dinner.png" class="img-fluid rounded-start" alt="..."/>
//             </div>
//             <div className="col-md-8">
//               <div className="card-body">
//                 <h5 className="card-title heading">Dinner</h5>
//                 <p className="card-text">Start your day with exclusive dinner options</p>
//               </div>
//             </div>
//           </div>
//         </div>



//       </div>

//     </div>
//     <div className="row">
//       <div className="col-md-4">
//         <div className="card mb-3" style={{"maxWidth": "540px"}} onClick={e=>goToFilterPage('Snacks')}>
//           <div className="row g-0">
//             <div className="col-md-4 fill">
//               <img  src="/assets/images/snacks.png" class="img-fluid rounded-start" alt="..."/>
//             </div>
//             <div className="col-md-8">
//               <div className="card-body">
//                 <h5 className="card-title heading">Snacks</h5>
//                 <p className="card-text">Start your day with exclusive snacks options</p>
//               </div>
//             </div>
//           </div>
//         </div>



//       </div>
//       <div className="col-md-4">
//         <div className="card mb-3" style={{"maxWidth": "540px"}} onClick={e=>goToFilterPage('Drinks')}>
//           <div className="row g-0">
//             <div className="col-md-4 fill">
//               <img src="../assets/images/drinks.png" class="img-fluid rounded-start" alt="..."/>
//             </div>
//             <div className="col-md-8">
//               <div className="card-body">
//                 <h5 className="card-title heading">Drinks</h5>
//                 <p className="card-text">Start your day with exclusive drinks options</p>
//               </div>
//             </div>
//           </div>
//         </div>



//       </div>
//       <div className="col-md-4">
//         <div className="card mb-3" style={{"maxWidth": "540px"}} onClick={e=>goToFilterPage('NightLife')}>
//           <div className="row g-0">
//             <div className="col-md-4 fill">
//               <img src="/assets/images/nightlife.png" class="img-fluid rounded-start" alt="..."/>
//             </div>
//             <div className="col-md-8">
//               <div className="card-body">
//                 <h5 className="card-title heading">Nightlife</h5>
//                 <p className="card-text">Start your day with exclusive night life options</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//   );
// }
// export default QuickSearch