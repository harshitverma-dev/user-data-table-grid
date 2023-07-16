export const addUser = (data) => {
    return {
        type: "addUser",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteUser = (id) => {
    return {
        type: "deleteUser",
        id
    }
}

export const userUpdated = (id, data) => {
    console.log(id, data)
    return {
        type: "userUpdated",
        payload :{
            id : id,
            data : data
        }
    }
}