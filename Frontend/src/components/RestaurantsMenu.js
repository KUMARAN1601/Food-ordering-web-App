import "./RestaurantMenu.css";
const RestaurantMenu =()=>{
    return(
        <div className="container">

    <div className="row">
      <div className="col-md-12">
        <h2>
          Menu
          <button className="btn btn-outline-danger float-end">X</button>
        </h2>
        <h3> copperkitchen</h3>
      </div>

      <div className="row">
        <div className="col-md-12">
          <hr/>
          <ul>
            <li>
              <div className="row">
                <div className="col-10">
                  <div className="text-success fs-6">Veg</div>
                  <div className="cuisines">Lassi</div>
                  <div className="cuisines">&#8377; 30</div>
                  <div className="cuisines">Yummy lassi</div>
                </div>
                <div className="col-2">
                  <button className="btn btn-light addButton">Add</button>
                </div>
              </div>
            </li>

            <li>
              <div className="row">
                <div className="col-10">
                  <div className="text-danger fs-6">Non-Veg</div>
                  <div className="cuisines">Boiled Egg</div>
                  <div className="cuisines">&#8377; 45</div>
                  <div className="cuisines">Properly boiled egg</div>
                </div>
                <div className="col-2">
                  <button className="btn btn-light addButton">Add</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div col="col-12">
          <hr/>
          <div className="mt-3 restName fs-4">
            Subtotal <span className="m-4">&#8377; 699</span>
            <button className="btn btn-danger float-end">Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default RestaurantMenu;