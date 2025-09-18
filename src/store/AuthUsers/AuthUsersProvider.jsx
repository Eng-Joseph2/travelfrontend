import React, { useReducer, useState } from "react";
import AuthUsersContext from "./AuthUsersContext";

const authUsersReducer = (state, action) => {
    
  if (action.type === "Register") {

    return {

      users: [...state.users,action.value],
      currentUser: action.value,
      login: true,

    };

  }

  else if (action.type === "login") {

    return {

      users: state.users,
      currentUser: action.value,
      login: true,

    };

  } else {

    return state;

  }

};

const AuthUsersProvider = (props) => {

  const initialState = {

    users: [
        
      {
        id: 1,
        name: "cabdisamad",
        email: "cabdisamad@gmail.com",
        password: "cabdi12345",
      },

    ],

    currentUser: {

    },

    login: false,
  };

  const [InfoUsers, dispatch ] = useReducer(authUsersReducer,initialState);

  
//   console.log(InfoUsers.login);

  const registerNewUser = (newUser) => {

    dispatch({type: 'Register', value : newUser})

  }

  const valueProvider = {
    users : InfoUsers.users,
    currentUser : InfoUsers.currentUser,
    login : InfoUsers.login,
    registerNewUser
  }
  

  return (
    <AuthUsersContext.Provider value={valueProvider}>
        {props.children}
    </AuthUsersContext.Provider>
  );
};

export default AuthUsersProvider;
