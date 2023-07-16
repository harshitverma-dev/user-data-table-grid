import React, { createContext, useState } from 'react'

export const UserDataContext = createContext();

const ContextData = ({ children }) => {
    const [querySearch, setquerySearch ] = useState('');
    const [userFormData, setUserFormData] = useState({
        fullName: "",
        jobTitle: "",
        companyName: "",
        emailAddress: "",
        password: "",
        confirmPassword: ""
    });

    const onChangeFun = (e) => {
        const { name, value } = e.target;
        setUserFormData({
            ...userFormData,
            [name]: value
        })

    }

    return (
        <UserDataContext.Provider value={{ userFormData, setUserFormData, onChangeFun, querySearch, setquerySearch }}>
            {children}
        </UserDataContext.Provider>
    )
}

export default ContextData;
