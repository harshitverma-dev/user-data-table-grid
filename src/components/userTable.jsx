import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
// import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../store/actions/userActions';
import UpdatePop from './updatePop';
import { UserDataContext } from '../context/context';

const UserTable = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const TableHeader = ["Full Name", "Job Title", "Company Name", "Email Address", "Password", "Actions"];
    const tableData = useSelector((state) => state.userReducers.allUserData);
    const [idGet, setIdGet] = useState();
    const { querySearch, setquerySearch } = useContext(UserDataContext)
    const dispatch = useDispatch()
    const [updateData, setUpdateData] = useState({
        fullName: "",
        jobTitle: "",
        companyName: "",
        emailAddress: "",
        password: "",
        confirmPassword: ""
    });
    const updateFun = (id) => {
        let getData = tableData.filter((items) => items.id === id);
        setUpdateData({
            fullName: getData[0].data.fullName,
            jobTitle: getData[0].data.jobTitle,
            companyName: getData[0].data.companyName,
            emailAddress: getData[0].data.emailAddress,
            password: getData[0].data.password,
            confirmPassword: getData[0].data.confirmPassword
        })
        setIdGet(getData[0].id)
        setShow(true)
    }

    return (
        <>
            <Table responsive bordered>
                <thead>
                    <tr>
                        {
                            TableHeader?.map((items, index) => <th key={index}>{items}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData?.filter((items) => {
                            if (querySearch) {
                                return items?.data?.fullName.includes(querySearch)
                            } else {
                                return tableData;
                            }
                        }).map((items, index) => {
                            return (
                                <tr className='align-middle' key={index}>
                                    <td>{items?.data.fullName}</td>
                                    <td>{items?.data.jobTitle}</td>
                                    <td>{items?.data.companyName}</td>
                                    <td>{items?.data.emailAddress}</td>
                                    <td>{items?.data.password}</td>
                                    <td>
                                        <Button variant="outline-primary" className='me-2 py-1 px-2' onClick={() => updateFun(items.id)}><AiOutlineEdit size={18} /></Button>
                                        <Button variant="outline-danger" className='me-2 py-1 px-2' onClick={() => { dispatch(deleteUser(items.id)) }}><AiOutlineDelete size={18} /></Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <UpdatePop id={idGet} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} updateData={updateData} setUpdateData={setUpdateData} />
        </>
    )
}

export default UserTable
