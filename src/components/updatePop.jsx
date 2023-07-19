import React, { useContext, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { UserDataContext } from '../context/context';
import { useDispatch } from 'react-redux';
import { userUpdated } from '../store/actions/userActions';

const UpdatePop = (props) => {
    // console.log(props)
    const { id, show, setShow, handleClose, handleShow, updateData, setUpdateData } = props
    // console.log(updateData)
    const jobOptions = ['Front-end Developer', 'Software Developer', 'Back-end Developer', 'Process Manager', , 'UI/UX Designer', 'Graphic Designer'];
    const dispatch = useDispatch();
    const { userFormData, setUserFormData, onChangeFun } = useContext(UserDataContext);
    const onChangeFunNew = (e) => {
        const { name, value } = e.target;
        setUpdateData({
            ...updateData,
            [name]: value
        })
    }
    const updateDataFun = () => {
        dispatch(userUpdated(id, updateData))
        setShow(false)
        dispatch()
    }
    return (
        <Modal show={show} onHide={handleClose} animation={false} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Update user data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Full name"
                            // defaultValue="Mark"
                            name='fullName'
                            onChange={onChangeFunNew}
                            value={updateData?.fullName}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Select name='jobTitle'
                            onChange={onChangeFunNew}
                            value={updateData?.jobTitle}
                        >
                            {!userFormData?.jobTitle && <option>select...</option>}
                            {
                                jobOptions.map((values) => <option value={values} key={values}>{values}</option>)
                            }
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom01" className='mt-3'>
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Company name"
                            // defaultValue="Mark"
                            name='companyName'
                            onChange={onChangeFunNew}
                            value={updateData?.companyName}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom01" className='mt-3'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email address"
                            // defaultValue="Mark"
                            name='emailAddress'
                            onChange={onChangeFunNew}
                            value={updateData?.emailAddress}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom01" className='mt-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password.."
                            onChange={onChangeFunNew}
                            name='password'

                            value={updateData?.password}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom01" className='mt-3'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Confirm password.."
                            name='confirmPassword'
                            onChange={onChangeFunNew}
                            value={updateData?.confirmPassword}
                        />
                    </Form.Group>
                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={updateDataFun}>
                    Update user
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UpdatePop
