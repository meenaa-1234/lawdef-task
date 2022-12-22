import React from "react"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Lawdef1.css'
import {BsCircleFill} from 'react-icons/bs'
import {AiFillDownCircle} from 'react-icons/ai'
import {FaTrademark} from 'react-icons/fa'
import {BiRestaurant} from 'react-icons/bi'
import {FaBriefcase} from 'react-icons/fa'
import {HiChevronRight} from 'react-icons/hi'

const Lawdef = () => {
    return (
        <>
        <h1 className="text2">Lawdef Legal Service</h1><br/>
        <hr className="hrline" />
        <div className="icon2"> <h2><BsCircleFill /></h2><h5 className="icon3"><AiFillDownCircle /></h5></div>
        <div>
    
      <Card  className="cardg1">
        <h2><BsCircleFill  className="icon4" /></h2>  
        <h1><FaTrademark className="icon7" /></h1> 
        <Card.Body>
          <Card.Title className="c1">Trademark Registaration</Card.Title>
          <Card.Text>
            <br/>
            Add a shield to your brand or logo by obtaining the trademark registration for it from the most trusted legal service provider, Lawdef. We comprise a team of high skilled professionals. We assist you at every single step and let you to complete trademark registration in India.<br/>
          <br/>
          <p className="ptext">Read More <i><HiChevronRight/></i></p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card  className="cardg2">
        <h2><BsCircleFill  className="icon5"/></h2>
        <h2><BiRestaurant className="icon8" /></h2> 
        <Card.Body>
          <Card.Title className="c1">Fssai Liscense</Card.Title>
          <Card.Text>
            <br/>
          Lawdef is one of the leading legal service provider in India offering FSSAI license services. We let you to get the mandatory FSSAI license for your food related businesses and add value to your business. So, if you are a Food Business Operating firm, get your FSSAI License now.
          <br/>
          <br/>
          <p className="ptext">Read More <i><HiChevronRight/></i></p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card  className="cardg3">
        <h2 ><BsCircleFill className="icon6" /></h2>
        <h2><FaBriefcase className="icon9" /></h2> 
        <Card.Body>
          <Card.Title className="c1">Compant incorporation</Card.Title>
          <Card.Text>
            <br/>
          No more wait now, become an entrepreneur and start your own company today. Register it now with the most reliable legal service provider, Lawdef. We provide the best company incorporation assistance and let you to transform your ideas into your desired company.
          <br/>
          <br/>
          <p className="ptext">Read More <i><HiChevronRight/></i></p>
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
        </>
    )
}
export default Lawdef
