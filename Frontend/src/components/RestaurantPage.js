import Carousel  from "./Carousel"
import Modal from './Modal'
import RestaurantMenu from './RestaurantMenu'
import RestaurantInfo from './RestaurantInfo'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const RestaurantPage = props => {
    //get the id from from the params
    const {id} = useParams()
    const [restaurantDetails, setRestaurantDetails] = useState({})

    // api 
    const getRestaurantData = async ()=>{
        const res = await fetch(`http://localhost:8888/restaurants/${id}`)
        const resData =await res.json()
        //set the rest details
        setRestaurantDetails(resData[0])
    }

    useEffect(()=>{
        getRestaurantData()
    },[])


    return (
        <div className="containter">
            <div className="row">
                <div className="col-md-12">
                   <Carousel images={restaurantDetails.images}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-1 offset-md-10">
                    <button 
                        data-bs-toggle="modal"
                        data-bs-target="#mdlMenu" className="btn btn-danger"> Menu</button>
                    <Modal modalid="mdlMenu" modaltitle='Menu'>
                           <RestaurantMenu details={restaurantDetails}/>
                    </Modal>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 offset-md-1">
                    <RestaurantInfo details={restaurantDetails}/>
                </div>
            </div>
        </div>
    )
}

export default RestaurantPage

// accoridian
                                                    // menu
//restaurant info