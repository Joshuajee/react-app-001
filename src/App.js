import React, { useState } from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import Modal from './component/Modal';
import './App.css';

function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      
      <h1> <b> Business Listings </b> </h1>

      <div className="first-div">
        <button className="control-1" onClick={()=> setShowModal(true)}> Add a business </button>
        <input className="control-2" type="text" placeholder="Search a business"/>
        <button className="control-3"> Search </button>
      </div>

      <div className="second-div">

        <div className="left">

          <h1>CAKE DELIVERY</h1>  
          <p> <cake className="info-text"> cake making </cake>  <b> WE ARE THE BEST </b> </p>

          <span>
            <button className="control-1"><BsGlobe /> Website</button>
            <button className="control-1"><FaEnvelope /> Email</button>
            <button className="control-1"><AiFillPhone /> Phone</button>
          </span>

          <p className="info-text"> JKSJDKL | IEIEK | 09988277 </p>

          <p> <b> YA </b> </p>

        </div>

        <div className="vl"></div>

        <div className="right">

          <div className="comment">

            <p>Hi</p>
            <p>No</p>
            <p>go</p>
            <p>Hi</p>
            <p>No</p>
            <p>go</p>
            <p>Hi</p>
            <p>No</p>
            <p>go</p>

          </div>

          <form className="">

            <textarea className="comment-textarea"></textarea>
            <br/>
            <button>Submit</button>
          </form>

        </div>
       
      </div>

      { (showModal) && <div onClick={() => setShowModal(false)} className="modal-background"></div> }

      { (showModal) && <Modal setShowModal={setShowModal} /> }

    </div>
  );
}

export default App;
