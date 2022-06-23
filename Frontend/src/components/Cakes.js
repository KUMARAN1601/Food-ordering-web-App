import {useState} from 'react'
import OneCake from './OneCake'
const Cakes =()=>{
  const [myCakes,setMyCakes] = useState([
    {
      name:'Vanilla',
      id:0,
      qty:1,
      isAvailable:true
    },{
      name:'Butterscotch',
      id:1,
      qty:1,
      isAvailable:true
    },{
      name:'chocolate',
      id:2,
      qty:1,
      isAvailable:false
    }
  ])
  return(
  <div>
   {myCakes.map(eachCake=>
   <OneCake key={eachCake.id} { ...eachCake}/>)}
   </div>)
}
  //   {/*  qty ={eachCake.qty}
  //    isAvailable = {eachCake.isAvailable}
  //    name={eachCake.name}/>)}
  // </div>) */}



export default Cakes                                                                         


//variables : non reactive ==> reactive
//let totalCustomers = 100
//const[totalCustomers,setTotalCustomers] = useState(100)
//function to increment the count
//const incCustomers =()=>{
  //setTotalCustomers(totalCustomers+1)
  //increment the customers
  //totalCustomers++
  //console.log(totalCustomers)
//}
//return(
// <div>
//   Cakes here!
//  Total customers {totalCustomers}
//<button onClick={incCustomers}>Inc Customers</button>
//  </div>
//) 
