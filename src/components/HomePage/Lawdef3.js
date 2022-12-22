import React from "react";
import './Lawdef3.css';
import {BsCircleFill} from 'react-icons/bs'
import {AiFillDownCircle} from 'react-icons/ai'
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"
import img4 from "./img/img4.png"
import img5 from "./img/img5.png"
import img6 from "./img/img6.png"
import img8 from "./img/img8.jpg"





const Lawdef3 = () => {
    return (
 <>                                                  
         <div className="body1">
            <h1 className="text2">Why Choose Lawdef Legal<br/>Service</h1><br />
        <hr className="hrline" />
        <div className="icon2"> <h2><BsCircleFill /></h2><h5 className="icon3"><AiFillDownCircle /></h5></div>
        
        <br />
        <br />
        <div className="l3card">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-101">
              <div class="card-body">
                <img src={img1} className="img5" /><br /><br />
                <h5 class="card-title1">Clear Pricing</h5>
                <p class="card-text1">We offer transparent pricing for all our services to our clients without any hidden charges. Thus with Lawdef you don’t have to worry about the extra costs.</p>
                <br/>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-101">
              <div class="card-body">
                <img src={img2} className="img6" /><br /><br />
                <h5 class="card-title1">On time delivery</h5>
                <p class="card-text1">We believe in delivering the optimum services within the specified time. Thus we ensure you the timely delivery of your projects</p>
                <br/>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-101">
              <div class="card-body">
                <img src={img3} className="img7" /><br /><br />
                <h5 class="card-title1">Expert Team</h5>
                <p class="card-text1">At Lawdef the team of experienced and professional personnel will be employed to make the registration faultless and swift for you.</p>
                <br/>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* _____________________________________ */}
        <div className="l3card">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-101">
              <div class="card-body">
                <img src={img4} className="img5" /><br /><br />
                <h5 class="card-title1">Tech-driven Platform</h5>
                <p class="card-text1">Get all your work done while sitting in the comfort of your home with the tech driven platform of lawdef. You can be assured of the authenticity as there is no spamming no sharing and 100% confidentiality..</p>
                <br/>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-101">
              <div class="card-body">
                <img src={img5} className="img6" /><br /><br />
                <h5 class="card-title1">24/7 Customer support</h5>
                <p class="card-text1">The humble and knowledgeable team of lawdef is always there to support and guide you at every step. Our after sale support is equally efficient so you can get in touch with the team anytime.</p>
                <br/>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-101">
              <div class="card-body">
                <img src={img6} className="img7" /><br /><br />
                <h5 class="card-title1">Refund Policy</h5>
                <p class="card-text1">Lawdef guarantee you a smooth refund policy with which you can get the refund within the stipulated time in case of work not performed.</p>
                <br/>
              </div>
            </div>
          </div>
        </div>
        </div>
        <img src={img8} className="img9" />
        <button className="btn">Contact us</button>
        </div>
        </>
    )
}
export default Lawdef3;
