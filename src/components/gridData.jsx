import React, { useContext, useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { BsPlus } from "react-icons/bs";
import SearchData from './search';
import UserTable from './userTable';
import { UserDataContext } from '../context/context';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../store/actions/userActions';

const GridData = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { userFormData, setUserFormData, onChangeFun } = useContext(UserDataContext);
    const tableData = useSelector((state) => state.userReducers.allUserData);
    const [showError, setShowError] = useState();
    const jobOptions = ['Front-end Developer', 'Software Developer', 'Back-end Developer', 'Process Manager', , 'UI/UX Designer', 'Graphic Designer'];
    const dispatch = useDispatch();

    const addUserData = () => {
        const { fullName, jobTitle, companyName, emailAddress, password, confirmPassword } = userFormData;
        if (fullName && jobTitle && companyName && emailAddress && password && confirmPassword) {
            dispatch(addUser(userFormData))
            setUserFormData({
                fullName: "",
                jobTitle: "",
                companyName: "",
                emailAddress: "",
                password: "",
                confirmPassword: ""
            })
            setShow(false);
        } else {

            setShowError('All details are required !')
            setTimeout(() => {
                setShowError('')
            }, 5000)
        }

    }
    return (
        <Container className='mt-5'>
            <Card>
                <Card.Header>
                    <Row>
                        <Col md={6}>
                            <SearchData tableData={tableData} />
                        </Col>
                        <Col md={6} className='d-flex justify-content-end'>
                            <Button variant="outline-primary" onClick={handleShow}><BsPlus size={25} />Add New</Button>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    {
                        tableData?.length > 0 ? (
                            <UserTable />
                        ) : (
                            <div className='d-flex justify-content-center'>
                                <img src="https://learncab.com/assets/images/no-data-found.png" alt="no-data-found" style={{ width: '40%' }} />
                            </div>
                        )
                    }


                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} animation={false} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
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
                                onChange={onChangeFun}
                                value={userFormData?.fullName}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Select name='jobTitle'
                                onChange={onChangeFun}
                                value={userFormData?.jobTitle}>
                                ['Front-end Developer', 'Software Developer', 'Back-end Developer', 'Process Manager', ,'UI/UX Designer', 'Graphic Designer']
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
                                onChange={onChangeFun}
                                value={userFormData?.companyName}
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
                                onChange={onChangeFun}
                                value={userFormData?.emailAddress}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom01" className='mt-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password.."
                                // defaultValue="Mark"
                                name='password'
                                onChange={onChangeFun}
                                value={userFormData?.password}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom01" className='mt-3'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Confirm password.."
                                // defaultValue="Mark"
                                name='confirmPassword'
                                onChange={onChangeFun}
                                value={userFormData?.confirmPassword}
                            />
                        </Form.Group>
                    </Row>
                    {
                        showError && <Row>
                            <Col style={{color: 'red', border: '1px solid red', margin: '20px 15px 10px 15px' , borderRadius: '5px', padding:'5px'}}>{showError}</Col>
                        </Row>
                    }


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addUserData}>
                        Save User
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>

    )
}

export default GridData
