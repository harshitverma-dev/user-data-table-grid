import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'
import { UserDataContext } from '../context/context'

const SearchData = (props) => {
    // console.log(props?.tableData?.length)
    const {querySearch, setquerySearch} = useContext(UserDataContext)
    return (
        <>
            <Form.Control
                placeholder='Search name'
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                value={querySearch}
                disabled={props?.tableData?.length > 0 ? false : true}
                onChange={(e)=> setquerySearch(e.target.value)}
            />
        </>
    )
}

export default SearchData
