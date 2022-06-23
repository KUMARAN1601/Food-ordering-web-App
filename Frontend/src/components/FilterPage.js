import Navbar from "./Navbar"
import Filter from "./Filter"
import FilterResults from "./FilterResults"
import FilterPagination from "./FilterPagination"
import { useLocation} from 'react-router-dom'
import { useState } from "react"

//get mealType from url
const getMealType = (urlPortion)=> {
    return urlPortion.split('=')[1] // ?mealTypes=drinks
}

const FilterPage = props => {
    const myLocation = useLocation()
    const mealtypes = getMealType(myLocation.search)

    // get the data from the local storage
    const currCity = localStorage.getItem('currentCity')
    //i will store all my filter related data
    const [filterData, setFilterData]= useState({
        city : currCity,
        mealtypes,
        pg:1,
        order:1
   })
   
    // filter state 
    return (
        <div className="container">
            <div className="row">
                <Navbar />
            </div>

            <div className="row">
                <div className="col-md-12 heading">
                    Breakfast Places in {currCity}
                </div>
            </div>

            <div className="row">
                    <Filter setFilterData={setFilterData} filterData={filterData}/>
                    <FilterResults filterData={filterData}/>
            </div>

            <div className="row">
                <FilterPagination setFilterData={setFilterData} filterData={filterData}/>
            </div>

        </div>
    )
}

export default FilterPage