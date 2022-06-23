import { useEffect, useRef, useState } from "react";
import Modal from './Modal'
import Login from './Login'
import CreateAccount from './CreateAccount'
import QuickSearch from './QuickSearch'
import {getLoggedOut} from './utilities'
import { useNavigate } from "react-router-dom";

import "./Banner.css";

const Banner =(props)=>{
    const navigate = useNavigate()
    //useststate => locations
    const [locationsData, setLocationsData] = useState([])
    const  mySavedRestaurants = useRef([]) //way to save value, UI refresh contrainst
    const [suggestions, setSuggestions] = useState([])

    // get the loggedin user from local storage
    const activeUser = localStorage.getItem('loggedInUsername')
    

    //moved from the css to JS due to css issues
    const bannerStyle ={
        backgroundImage: 'url(Assets/images/shutterstock_348320018.png)'
    }

    //fetch the locations
    const getLocations = async () =>{
       const res = await fetch(`http://localhost:8888/restaurants/locations`)
       const data = await res.json()
       const formattedLocationsData = data.map(i=>`${i.city} - ${i.address}`) 
       //the formated data is saved to the state
       setLocationsData(formattedLocationsData)
       console.log('set the state!!')
    }
    
    //only on the first nload
    useEffect(()=>{
        getLocations()
    },[])


    // impln :   getRestaurantsBasedOnCityAndAdress(city,address)
    const  getRestaurantsBasedOnCityAndAdress = async (city,address)=>{
      //make a call to the api to find resuatnats with city and address
            const res= await  fetch(`http://localhost:8888/restaurants?city=${city}&address=${address}`)
            const localRestaurants = await res.json()
            console.log(localRestaurants)
            //i will save these res info for suggestions
            mySavedRestaurants.current= localRestaurants
    }


    //updateLocation : this will be invoked when location dropdown value changes
    const updateLocation= ce => {
        //get the updated location
        const newLocation= ce.target.value
        if(newLocation.indexOf('-')>-1){
            //make a query to fetch the restaruants
           // Pune - Wakad   ===> [Pune, Wakad]
            const city = newLocation.split('-')[0].trim()
            const address = newLocation.split('-')[1].trim() 
           
            //save these values in the LC
            localStorage.setItem('currentCity',city)
            localStorage.setItem('currentAddress',address)

            // get the restaurtants belonging to given city and address
            getRestaurantsBasedOnCityAndAdress(city,address)

        }
    }

    // Apply suggesstion => filter some from full set of res(Ref)
    const applySuggestions = ce => {
        if(ce.target.value){
            // few chars that the person is typing
            const fewCharsFromRest = ce.target.value.toLowerCase()
            //let the person atleast tye 3 chars
            if(fewCharsFromRest.length>2){
                //this gives you the master set of the restaurants based on location
                const allRestaurants = mySavedRestaurants.current
                //filter the restaurants based on what use has typed
                const filteredResForSuggestion= allRestaurants.filter(i=>i.name
                                                  .toLowerCase()
                                                  .indexOf(fewCharsFromRest)>-1)
                console.log(filteredResForSuggestion)
                //set my ssuggestions
                if(filteredResForSuggestion.length>0){
                    setSuggestions(filteredResForSuggestion) 
                }else{
                    // what if we don't ahve anything to suggest!!!
                    // TODO : need to cover
                    setSuggestions([{
                        name : 'Not found!',
                        address : '',
                        thumbnail : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbrzDV2-qejjYuIc9o2pRL05AbcA4wrVSerg&usqp=CAU`
                    }])
                }
                
                
            }
            //if the person has types less than 3 chars
            if(fewCharsFromRest.length<3)
                {
                    // what if we don't ahve anything to suggest!!!
                    // TODO : need to cover
                    setSuggestions([{
                        name : 'Not found!',
                        address : '',
                        thumbnail : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbrzDV2-qejjYuIc9o2pRL05AbcA4wrVSerg&usqp=CAU`
                    }])
            }

        }
    }

    // logout





    return (
        <>
             <div className="container-fluid">
        {/* data lists stores the auto suggestion data */}
        <datalist id="locationsData">
            {locationsData.map((i,index)=><option key={index}>{i}</option>)}
        </datalist>
            <datalist id="restaurantsData"></datalist>

        <div className="row banner" style={bannerStyle}>
            {/* create acc and login */}
            <div className="col-md-12"></div>
            <div className="col-md-12 offset-md-9">
               { activeUser? 
               <>
                <span className="text-light">Hello {activeUser}, &nbsp;</span>  
                <button className="btn btn-outline-light" onClick={getLoggedOut}> Logout</button>
               </> 
               :  
               <>
                <button className="btn btn-outline-light"  
                        data-bs-toggle="modal"
                        data-bs-target="#mdllogin" >Login</button>
                
                <button className="btn btn-outline-light ms-1"
                        data-bs-toggle="modal"
                        data-bs-target="#mdlcreateacc">Create an account</button>
                       
             </>}
            </div>

            {/* logo */}
            <div className="col-md-12"></div>
            <div className="col-md-12 offset-md-5">
                <div className="circle">
                    <span className="logo">
                        e!
                      </span>
                </div>
            </div>



            <div className="col-md-12 col-sm-12 offset-md-2">
                <span className="bigtext">
                    Find the best restaurants, cafés, and bars
                  </span>
            </div>


            <div className="col-md-3 offset-md-2">
                    <input type="text"
                    id ="tbLocations"
                    list="locationsData"
                    autoComplete="off"
                    onChange={updateLocation}
                    placeholder="Please type a location" 
                    className="form-control find"/> 
            </div>
            
            <div className="col-md-4">
                  <input type="text" 
                  id="tbRestaurants"
                  autoComplete="off"
                  onChange={applySuggestions}
                  placeholder="Search for restaurants"
                  className="form-control 
                  find"/>
                  <ul className="suggestionsBox">
                        {
                            suggestions.map(s=>
                        <li className="suggestionItem">
                            <div className="suggestionImage">
                            {/* <img  style={{maxWidth:'40px',maxHeight:'40px',borderRadius:'50%'}} 
                            src={s.thumbnail}/> */}
                            </div>
                            <div className="suggestionText">
                                <div className="suggestionTextName">
                                   {s.name}
                                </div>
                                <div className="suggestionTextLocality">
                                    {s.address}
                                </div>
                            </div>
                            <div className="orderButton text-danger" onClick={e => navigate(`/restaurants/${s._id}`)}>
                               {s.name==='Not found!'?'':'Order Now'}
                            </div>
                          </li>)
                        }
                      
                            {/* li's will repeat */}
                  </ul>
            </div>
        </div>
        {/* put your modals deep down */}
        
             </div>
             <Modal modalid="mdllogin" modaltitle="Login">
                            <Login/>
                         </Modal>

                        <Modal modalid="mdlcreateacc" modaltitle="Create Account">
                            <CreateAccount/>
                        </Modal>
             <QuickSearch/>
                
        </>
   )
}

export default Banner;


// import { useEffect, useRef, useState } from "react";
// import Modal from './Modal'
// import Login from './Login'
// import CreateAccount from './CreateAccount'
// import QuickSearch from './QuickSearch'
// import {getLoggedOut} from './utilities'
// import { useNavigate } from "react-router-dom";

// import "./Banner.css";

// const Banner =(props)=>{
//     const navigate = useNavigate()
//     //useststate => locations
//     const [locationsData, setLocationsData] = useState([])
//     const  mySavedRestaurants = useRef([]) //way to save value, UI refresh contrainst
//     const [suggestions, setSuggestions] = useState([])

//     // get the loggedin user from local storage
//     const activeUser = localStorage.getItem('loggedInUsername')
    

//     //moved from the css to JS due to css issues
//     const bannerStyle ={
//         backgroundImage: 'url(Assets/images/shutterstock_348320018.png)'
//     }

//     //fetch the locations
//     const getLocations = async () =>{
//        const res = await fetch(`http://localhost:8888/restaurants/locations`)
//        const data = await res.json()
//        const formattedLocationsData = data.map(i=>`${i.city} - ${i.address}`) 
//        //the formated data is saved to the state
//        setLocationsData(formattedLocationsData)
//        console.log('set the state!!')
//     }
    
//     //only on the first nload
//     useEffect(()=>{
//         getLocations()
//     },[])


//     // impln :   getRestaurantsBasedOnCityAndAdress(city,address)
//     const  getRestaurantsBasedOnCityAndAdress = async (city,address)=>{
//       //make a call to the api to find resuatnats with city and address
//             const res= await  fetch(`http://localhost:8888/restaurants?city=${city}&address=${address}`)
//             const localRestaurants = await res.json()
//             console.log(localRestaurants)
//             //i will save these res info for suggestions
//             mySavedRestaurants.current= localRestaurants
//     }


//     //updateLocation : this will be invoked when location dropdown value changes
//     const updateLocation= ce => {
//         //get the updated location
//         const newLocation= ce.target.value
//         if(newLocation.indexOf('-')>-1){
//             //make a query to fetch the restaruants
//            // Pune - Wakad   ===> [Pune, Wakad]
//             const city = newLocation.split('-')[0].trim()
//             const address = newLocation.split('-')[1].trim() 
           
//             //save these values in the LC
//             localStorage.setItem('currentCity',city)
//             localStorage.setItem('currentAddress',address)

//             // get the restaurtants belonging to given city and address
//             getRestaurantsBasedOnCityAndAdress(city,address)

//         }
//     }

//     // Apply suggesstion => filter some from full set of res(Ref)
//     const applySuggestions = ce => {
//         if(ce.target.value){
//             // few chars that the person is typing
//             const fewCharsFromRest = ce.target.value.toLowerCase()
//             //let the person atleast tye 3 chars
//             if(fewCharsFromRest.length>2){
//                 //this gives you the master set of the restaurants based on location
//                 const allRestaurants = mySavedRestaurants.current
//                 //filter the restaurants based on what use has typed
//                 const filteredResForSuggestion= allRestaurants.filter(i=>i.name
//                                                   .toLowerCase()
//                                                   .indexOf(fewCharsFromRest)>-1)
//                 console.log(filteredResForSuggestion)
//                 //set my ssuggestions
//                 if(filteredResForSuggestion.length>0){
//                     setSuggestions(filteredResForSuggestion) 
//                 }else{
//                     // what if we don't ahve anything to suggest!!!
//                     // TODO : need to cover
//                     setSuggestions([{
//                         name : 'Not found!',
//                         address : '',
//                         thumbnail : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbrzDV2-qejjYuIc9o2pRL05AbcA4wrVSerg&usqp=CAU`
//                     }])
//                 }
                
                
//             }
//             //if the person has types less than 3 chars
//             if(fewCharsFromRest.length<3)
//                 {
//                     // what if we don't ahve anything to suggest!!!
//                     // TODO : need to cover
//                     setSuggestions([{
//                         name : 'Not found!',
//                         address : '',
//                         thumbnail : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbrzDV2-qejjYuIc9o2pRL05AbcA4wrVSerg&usqp=CAU`
//                     }])
//             }

//         }
//     }

//     // logout





//     return (
//         <>
//              <div className="container-fluid">
//         {/* data lists stores the auto suggestion data */}
//         <datalist id="locationsData">
//             {locationsData.map((i,index)=><option key={index}>{i}</option>)}
//         </datalist>
//             <datalist id="restaurantsData"></datalist>

//         <div className="row banner" style={bannerStyle}>
//             {/* create acc and login */}
//             <div className="col-md-12"></div>
//             <div className="col-md-12 offset-md-9">
//                { activeUser? 
//                <>
//                 <span className="text-light">Hello {activeUser}, &nbsp;</span>  
//                 <button className="btn btn-outline-light" onClick={getLoggedOut}> Logout</button>
//                </> 
//                :  
//                <>
//                 <button className="btn btn-outline-light"  
//                         data-bs-toggle="modal"
//                         data-bs-target="#mdllogin" >Login</button>
                
//                 <button className="btn btn-outline-light ms-1"
//                         data-bs-toggle="modal"
//                         data-bs-target="#mdlcreateacc">Create an account</button>
                       
//              </>}
//             </div>

//             {/* logo */}
//             <div className="col-md-12"></div>
//             <div className="col-md-12 offset-md-5">
//                 <div className="circle">
//                     <span className="logo">
//                         e!
//                       </span>
//                 </div>
//             </div>



//             <div className="col-md-12 col-sm-12 offset-md-2">
//                 <span className="bigtext">
//                     Find the best restaurants, cafés, and bars
//                   </span>
//             </div>


//             <div className="col-md-3 offset-md-2">
//                     <input type="text"
//                     id ="tbLocations"
//                     list="locationsData"
//                     autoComplete="off"
//                     onChange={updateLocation}
//                     placeholder="Please type a location" 
//                     className="form-control find"/> 
//             </div>
            
//             <div className="col-md-4">
//                   <input type="text" 
//                   id="tbRestaurants"
//                   autoComplete="off"
//                   onChange={applySuggestions}
//                   placeholder="Search for restaurants"
//                   className="form-control 
//                   find"/>
//                   <ul className="suggestionsBox">
//                         {
//                             suggestions.map(s=>
//                         <li className="suggestionItem">
//                             <div className="suggestionImage">
//                                 {/* <img src="Assets/images/shutterstock_348320018.png"/> */}
//                              {/* <img  style={{maxWidth:'40px',maxHeight:'40px',borderRadius:'50%'}} 
//                             src=""/>  */}
//                             </div>
//                             <div className="suggestionText">
//                                 <div className="suggestionTextName">
//                                    {s.name}
//                                 </div>
//                                 <div className="suggestionTextLocality">
//                                     {s.address}
//                                 </div>
//                             </div>
//                             <div className="orderButton text-danger">
//                                {s.name==='Not found!'?'':'Order Now'}
//                             </div>
//                           </li>)
//                         }
                      
//                             {/* li's will repeat */}
//                   </ul>
//             </div>
//         </div>
//         {/* put your modals deep down */}
        
//              </div>
//              <QuickSearch/>
//              <Modal modalid="mdllogin" modaltitle="Login">
//                             <Login/>
//                          </Modal>

//                         <Modal modalid="mdlcreateacc" modaltitle="Create Account">
//                             <CreateAccount/>
//                         </Modal>
//         </>
//    )
// }

// export default Banner;