import React, { useContext, useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import rigoImage from "../../../img/rigo-baby.jpg";
import { Context } from "../../store/appContext";
import { useParams } from "react-router";


export const CharacterDetail= () =>{


    const params = useParams()
    const [ dataCharacter, setDataCharacter ] = useState({})
    const {store} = useContext(Context)
    
    
    useEffect(()=>{
        store.dataCharacter.forEach(el=>{
            if(el.result.uid == params.id){
                setDataCharacter(el.result.properties)
            }
        })
    },[])


    return(<>
        <Container className="detail p-5">
      <Row>
        <Col className="d-flex justify-content-center"><img variant="top" src={rigoImage} /></Col>
        <Col className="d-flex justify-content-center">
            <div className="text-center">
                <h2>{dataCharacter.name}</h2>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum,
                 y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
            
        </Col>
      </Row>
      <Row  className="border-danger border-top mt-5 pt-4">
        <Col className="d-flex justify-content-center text-center text-danger">
            <div>
            <h5>Name</h5>
            <p>{dataCharacter.name}</p>
            </div>
        </Col>
        <Col className="d-flex justify-content-center text-center text-danger">            
        <div>
            <h5>Birth Year</h5>
            <p>{dataCharacter.birth_year}</p>
            </div>
            </Col>
        <Col className="d-flex justify-content-center text-center text-danger">            
        <div>
            <h5>Gender</h5>
            <p>{dataCharacter.gender}</p>
            </div>
            </Col>
        <Col className="d-flex justify-content-center text-center text-danger">            
        <div>
            <h5>Height</h5>
            <p>{dataCharacter.height}</p>
            </div>
            </Col>
        <Col className="d-flex justify-content-center text-center text-danger">            
        <div>
            <h5>Skin Color</h5>
            <p>{dataCharacter.skin_color}</p>
            </div>
        </Col>
        <Col className="d-flex justify-content-center text-center text-danger">            
        <div>
            <h5>Eye Color</h5>
            <p>{dataCharacter.eye_color}</p>
            </div>
        </Col>
      </Row>
    </Container>
    </>)
}