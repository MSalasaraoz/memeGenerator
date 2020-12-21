import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import Formulario from '../../Forms/CategoriesForm';

function MyVerticallyCenteredModal(props) {
    return (        
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Crear Categoria
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formulario/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default MyVerticallyCenteredModal;