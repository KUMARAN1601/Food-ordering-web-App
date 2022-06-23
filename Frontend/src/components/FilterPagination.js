 const FilterPagination =(props)=>{

   const handleChange = ce => {
     //get the page number
     const pageNumber = ce.target.innerText
     //get the state from the filterpage
     const copy_state={...props.filterData}
     if(pageNumber ==='Next'){
       copy_state.pg = copy_state.pg+1
     }
     else if(pageNumber === 'Previous'){
       copy_state.pg = copy_state.pg-1<1?1:copy_state.pg-1
     }
     else{
       copy_state.pg = Number(pageNumber)
     }
     //set the final state
     console.log(copy_state)
     props.setFilterData(copy_state)
   }
   return(
     <div className="col-md-9 offset-md-6">
      
       <nav aria-label="Page navigation">
         <ul class="pagination">
           <li class="page-item"><a className="page-link" onClick={handleChange}>Previous</a></li>
           <li class="page-item"><a className="page-link" onClick={handleChange}>1</a></li>
           <li class="page-item"><a className="page-link" onClick={handleChange}>2</a></li>
           <li class="page-item"><a className="page-link" onClick={handleChange}>3</a></li>
           <li class="page-item"><a className="page-link" onClick={handleChange}>Next</a></li>
         </ul>
       </nav>
     </div>

     )

 }

 export default FilterPagination;