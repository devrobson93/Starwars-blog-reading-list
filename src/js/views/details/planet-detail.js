import React,{ useState, useContext, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router";

import rigoImage from "../../../img/rigo-baby.jpg";
import { Context } from "../../store/appContext";

export const PlanetDetail= () =>{

    const params = useParams()
    const [ dataPlanet, setDataPlanet ] = useState({})
    const {store} = useContext(Context)
    
    
    useEffect(()=>{
        store.dataPlanet.forEach(el=>{
            if(el.result.uid == params.id){
                setDataPlanet(el.result.properties)
            }
        })
    },[])


    return(
    <Container  className="detail p-5">
      <Row>
        <Col className="d-flex justify-content-center"><img variant="top" src={rigoImage} /></Col>
        <Col className="d-flex justify-content-center">
            <div className="text-center">
                <h2>{dataPlanet.name}</h2>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum,
                 y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
            
        </Col>
      </Row>
      <Row className="border-danger border-top mt-5 pt-4">
        <Col className="d-flex justify-content-center text-center text-danger">
            <div>
            <h5>Name</h5>
            <p>{dataPlanet.name}</p>
            </div>
        </Col>
        <Col className="d-flex justify-content-center text-center text-danger">
            <div>
            <h5>Climate</h5>
            <p>{dataPlanet.climate}</p>
            </div>
        </Col>
        <Col className="d-flex justify-content-center text-center text-danger">            
        <div>
            <h5>Population</h5>
            <p>{dataPlanet.population}</p>
            </div>
            </Col>
        <Col className="d-flex justify-content-center text-center text-danger">            
        <div>
            <h5>Orbital Period</h5>
            <p>{dataPlanet.orbital_period}</p>
            </div>
            </Col>
        <Col className="d-flex justify-content-center text-center text-danger">            
        <div>
            <h5>Rotation Period</h5>
            <p>{dataPlanet.rotation_period}</p>
            </div>
            </Col>
        <Col className="d-flex justify-content-center text-center text-danger">            
        <div>
            <h5>Diameter</h5>
            <p>{dataPlanet.diameter}</p>
            </div>
        </Col>
      </Row>
    </Container>
    )
}