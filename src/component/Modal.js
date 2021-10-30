import { AiFillCloseCircle } from 'react-icons/ai';

const Modal = (props) => {

    return (
        <div className='modal'>

            <div className='close' onClick={() => props.setShowModal(false)}> <AiFillCloseCircle size="25" style={{color: "red"}}/>  </div>

            <hr />

            <form>

                <label className="control"> Name: </label>

                <input className="control" type="text"  />

                <label className="control"> Name: </label>

                <input type="text" className="control" />
                
                <button className="control-1" >Submit</button>

          </form>

        </div>
    )
}

export default Modal;