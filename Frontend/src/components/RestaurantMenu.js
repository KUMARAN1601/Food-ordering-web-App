import { useEffect, useState } from "react";
import "./RestaurantMenu.css";
const RestaurantMenu =(props)=>{

  //save those menus
  const [menu, setMenu] = useState([])
  const [userSelection, setUserSelection] = useState([])

  //method to upate the selection based on removal or addition of the dish
  const addToSelection =(id)=>{
    //get the dish from the menu
    const selectedDish = (menu.filter(i=>i._id===id))[0]
      // make the copy the state'
      const copy_userSelection = [...userSelection]
      copy_userSelection.push(selectedDish)
      console.log(copy_userSelection)
      setUserSelection(copy_userSelection)
  }

  // pay now

  //  const paynow =()=>{
  //    //make an api call to place the order => Paytm, wallet, card payment
  //    console.log('Order placed!!')
  //  }


  const recalculate =() =>{
    if(userSelection.length===0){
      //if nothing is bought
      return 0
    }else{
      const totalCost = userSelection.map(i=>i.price)
                                     .reduce((a,b)=>a+b,0)
      console.log(totalCost)
      return totalCost
    }
  }

  const subToSelection =(id)=>{
    //make the copy of state
    const copy_state = [...userSelection]
    const allDishesExceptThisOne = copy_state.filter(i=>i._id!==id)
    setUserSelection(allDishesExceptThisOne)
  }

   const getMenu = async (name)=>{
     const url = `http://localhost:8888/restaurants/orders/${name}`
     const res = await fetch(url)
     const data = await res.json()
     setMenu(data)
   }

    useEffect(()=>{
      if('name' in props.details){
        getMenu(props.details.name)
      }
    },[props])

    return(
        <div className="container">
    <div className="row">
      <div className="row">
        <div className="col-md-12">
          <ul>
          {menu.map(i=><li>
              <div className="row" key={i._id}>
                <div className="col-10">
                  <div className="text-success fs-6">{i.isveg?'Yes':'No'}</div>
                  <div className="cuisines">{i.dish}</div>
                  <div className="cuisines">&#8377; {i.price}</div>
                </div>
                <div className="col-2">
                  <button className="btn btn-light addButton" onClick={e=> addToSelection(i._id)}>Add</button>
                  <button className="btn btn-danger addButton" onClick={e=> subToSelection(i._id)}>Rem</button>
                </div>
              </div>
            </li>)}
          </ul>
        </div>
      </div>

      <div className="row">
        <div col="col-12">
          <hr/>
          <div className="mt-3 restName fs-4">
            Subtotal <span className="m-4">&#8377; {recalculate()}</span>
            <button className="btn btn-danger float-end">Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default RestaurantMenu;