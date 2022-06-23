import { Fragment } from "react";

const Modal = (props) => {
  return (
      <Fragment>

          {/* below is the invoking button, which
          you should create in any component

          <button type="button" 
          className="btn btn-primary" 
          data-bs-toggle="modal" 
          data-bs-target="#mymodal">
              Launch demo modal
          </button> 
          */}

         
          <div className="modal fade" 
               data-bs-backdrop="static" 
               data-bs-keyboard="false"
               id={props.modalid}
               tabindex="-1" 
               aria-labelledby={`lbl${props.modalid}`} 
               aria-hidden="true">

              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">

                          <h5 className="modal-title" 
                          id={`lbl${props.modalid}`} >{props.modaltitle}</h5>

                          <button type="button" 
                          className="btn-close" 
                          data-bs-dismiss="modal" 
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                          {props.children?props.children:'Body here'}
                      </div>
                      {/* <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary">Save changes</button>
                      </div> */}
                  </div>
              </div>
          </div>
      </Fragment>
  )
}

export default Modal;

//Suppose the component want to use this modal
// see this
/*

<button type="button" 
          className="btn btn-primary" 
          data-bs-toggle="modal" 
          data-bs-target="#xyz">
              Launch demo modal
      </button>
      <Modal modalid="xyz" modaltitle="Title here">
              body will go here
      </Modal>

*/