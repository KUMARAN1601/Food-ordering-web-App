const OneCake =(props)=>{
 return(
   <div>
       Name : {props.name}<br/>
       Qty : {props.qty}<br/>
       In Stock : {props.isAvailable?'In-Stock':'out-of-Stock'}
      <hr/>
   </div>)

 }
export default OneCake