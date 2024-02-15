import React,{useState,useEffect, Children} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button ,Form ,Dropdown } from 'react-bootstrap';
import { generateRandomId } from '../../util/randomGenerator';

export default function LargeModal({show,onHide,title,blogDetails,children}) {

  return (
    <Modal
        size="lg"
        show={show}
        onHide={onHide}
        aria-labelledby="example-modal-sizes-title-lg"
    >
        <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
            {title}
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
    </Modal>
  )
}
