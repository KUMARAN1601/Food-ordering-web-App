import { useEffect, useState } from 'react';
import './FilterResults.css';
const FilterResults = (props) => {
  //state to save the values
  const [restaurants, setRestaurants] = useState([])

  // getRestaurantsBasedOnQuery
  const getRestaurantsBasedOnQuery = async fo =>{
       // tune the object by making acopy
       const myFilterObject = {...fo}
       // delete the pg and order
       delete myFilterObject.pg
       delete myFilterObject.order
      //check if cuisines proper is present in fo
      if('cuisines' in myFilterObject){
        myFilterObject.cuisines = {"$in":myFilterObject.cuisines}
      }
       console.log(myFilterObject)
       const url =`http://localhost:8888/restaurants/filters/${fo.order}/${fo.pg}`
       const res= await fetch(url,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(myFilterObject)
        })
      const restaurants = await res.json()
      console.log(restaurants)
      setRestaurants(restaurants)
      
  }

  // need to create a query based on the filter object
  
  useEffect(()=>{
   getRestaurantsBasedOnQuery(props.filterData)
  },[props.filterData])
  

  return (    
        <div className="col-md-9">
          {restaurants.map(i=><div key={i._id} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={i.thumbnail} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title heading">{i.name}</h5>
                  <p className="card-text subheading"> {i.address}, {i.city} </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <hr />
                <p className="res-info">
                  <span className="text-muted"> Cuisines :{i.cuisines.join(',')} </span><br />
                  <span className="text-muted"> Cost for two : INR {i.costfortwo.min} - {i.costfortwo.max}</span>
                </p>
              </div>
            </div>
          </div>)}
        </div>
   
  )
}

export default FilterResults;




// import { useEffect, useState } from 'react';
// import './FilterResults.css';
// const FilterResults = (props) => {
//   //state to save the values
//   const [restaurants, setRestaurants] = useState([])
//   // copy of the filter object
//   const filterObject = {...props.filterData}

//   // getRestaurantsBasedOnQuery
//   const getRestaurantsBasedOnQuery = async fo =>{
//        // tune the object by making acopy
//        const myFilterObject = {...fo}
//        // delete the pg and order
//        delete myFilterObject.pg
//        delete myFilterObject.order
//       //check if cuisines proper is present in fo
//       if('cuisines' in myFilterObject){
//         myFilterObject.cuisines = {"$in":myFilterObject.cuisines}
//       }
//        console.log(myFilterObject)
//        const url =`http://localhost:8888/restaurants/filters/${fo.order}/${fo.pg}`
//        const res= await fetch(url,{
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(myFilterObject)
//         })
//       const restaurants = await res.json()
//       console.log(restaurants)
//       setRestaurants(restaurants)
      
//   }

//   // need to create a query based on the filter object
  
//   useEffect(()=>{
//    getRestaurantsBasedOnQuery(props.filterData)
//   },[props.filterData])
  

//   return (    
//         <div className="col-md-9">
//           {restaurants.map(i=><div key={i._id} className="card mb-3">
//             <div className="row g-0">
//               <div className="col-md-4">
//                 <img src="Assets/images/copperkitchen.jpg" className="img-fluid rounded-start" alt="..." />
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <h5 className="card-title heading">{i.name}</h5>
//                   <p className="card-text subheading"> {i.address}, {i.city} </p>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-md-12">
//                 <hr />
//                 <p className="res-info">
//                   <span className="text-muted"> Cuisines : </span><br />
//                   <span className="text-muted"> Cost for two : INR 999</span>
//                 </p>
//               </div>
//             </div>
//           </div>)}
//         </div>
   
//   )
// }

// export default FilterResults;