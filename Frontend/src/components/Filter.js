import { useEffect, useState } from 'react';
import './Filter.css'

const Filter = (props) => {
   // need a state to hold the addresses
   const [locs, setLocs] = useState([])
  // on the component load
  const getAddressForCity = async () => {
      //get the current city value from the local storage
      const city = localStorage.getItem('currentCity')
      // make an api call 
      const res = await fetch(`http://localhost:8888/restaurants/locations/${city}`)
      const locationsData = await res.json()
      // get all the addresses from the q
      const addreses = locationsData.map(i=>i.address)
      //set the state
      setLocs(addreses)
  }

  // on the load of the component!
  useEffect(()=>{
    getAddressForCity()
  },[])

  // generic handle change
  const handleChange = ce => {
    //select
    if(ce.target.type==='select-one'){
       // make a copy of the state
       const copy_state = {...props.filterData}
       copy_state.address = ce.target.value
     //  console.log(copy_state)
       props.setFilterData(copy_state)
    }

    //check
    if(ce.target.type==='checkbox'){
      // console.log('checkbox changed!')
     // console.log(ce.target.value)
     // console.log(ce.target.checked)
      // my making copies if state and the array
      const copy_state = {...props.filterData}

      if(ce.target.checked){
        if('cuisines' in copy_state){
          //there is an array into it
          copy_state.cuisines.push(ce.target.value)
        }else{
          //cold start array is missing
          copy_state.cuisines=[ce.target.value]
       }
      }else{
        //the person has unticked
        copy_state.cuisines = copy_state.cuisines.filter(i=>i!==ce.target.value)
      }
     // console.log(copy_state)
      props.setFilterData(copy_state)
    }

     //check
     if(ce.target.type==='radio'){
      // console.log('radio button changed!')
      if(ce.target.name==="sort"){
        //sort radio buttons were clicked
        const copy_state = {...props.filterData}
        copy_state.order = ce.target.value
       // console.log(copy_state)
        props.setFilterData(copy_state)

      }else{
        //cost radio buttons were clicked
        const copy_state = {...props.filterData}
        const minVal = Number(ce.target.value.split('-')[0].trim())
        const maxVal = Number(ce.target.value.split('-')[1].trim())
        copy_state.costfortwo  = {"min": minVal,"max":maxVal}
        props.setFilterData(copy_state)
      }
    }
  }



  
  return (
        <div className="col-md-3 card">
          <span className="subheading"> Filters</span>
          <span className="text-muted"> Select Location</span>
          <select defaultValue="Choose your area" className="form-select" id="dpLocations" aria-label="Default select example" 
          onChange={handleChange}>
            <option>Choose your area</option>
            {locs.map((i,index)=><option key={index} value={i}>{i}</option>)}
          </select>
          <br />

          <span className="text-muted"> Cuisine</span>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" onChange={handleChange} 
            value="North Indian" id="chbNorthIndian" />
            <label className="form-check-label" htmlFor="chbNorthIndian">
              North Indian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={handleChange}  type="checkbox" value="South Indian" id="chbSouthIndian" />
            <label className="form-check-label" htmlFor="chbSouthIndian">
              South Indian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={handleChange}  type="checkbox" value="Chinese" id="chbChinese" />
            <label className="form-check-label" htmlFor="chbChinese">
              Chinese
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" onChange={handleChange}  value="Fast Food" id="chbFastFood" />
            <label className="form-check-label" htmlFor="chbFastFood">
              Fast Food
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" onChange={handleChange}  value="Drinks" id="chbDrinks" />
            <label className="form-check-label" htmlFor="chbDrinks">
              Drinks
            </label>
          </div>
          <br />

          <span className="text-muted"> Cost for two (In Rupees)</span>
          <div className="form-check">
            <input className="form-check-input" onChange={handleChange}  type="radio" name="cost" id="rblt0.5" value="0 - 500" />
            <label className="form-check-label" htmlFor="rblt0.5">
              Less than 500
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={handleChange}  type="radio" name="cost" id="rb0.5kto1k" value="500 - 1000" />
            <label className="form-check-label" htmlFor="rb0.5kto1k">
              500 - 1000
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={handleChange}  type="radio" name="cost" id="rb1kto1.5k" value="1000 - 1500" />
            <label className="form-check-label" htmlFor="rb1kto1.5k">
              1000 - 1500
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={handleChange}  type="radio" name="cost" id="rb1.5kto2k" value="1500 - 2000" />
            <label className="form-check-label" htmlFor="rb1.5kto2k">
              1500 - 2000
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={handleChange}  type="radio" name="cost" id="rb2k+" value="2000 - 10000" />
            <label className="form-check-label" htmlFor="rb2k+">
              More than 2000
            </label>
          </div>
          <span className="subheading"> Sort</span>
          <div className="form-check">
            <input className="form-check-input" onChange={handleChange}  type="radio" name="sort" id="rbPriceLowToHigh" value="1" />
            <label className="form-check-label"   htmlFor="rbPriceLowToHigh">
              Price - Low to High
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={handleChange} type="radio" name="sort" id="rbPriceHighToLow" value="-1" />
            <label className="form-check-label" htmlFor="rbPriceHighToLow">
              Price - High to Low
            </label>
          </div>
          <br />
        </div>
  )
}

export default Filter;