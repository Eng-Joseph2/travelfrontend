import React, { createContext } from 'react'

const AuthUsersContext = createContext({
    users : [],
    currentUser: {},
    login : null
})

export default AuthUsersContext