import React from 'react'
import UsersInfoContext from './UsersInfoContext'

const UsersInfoPovider = (props) => {



  return (
    <UsersInfoContext.Provider>
        {props.children}
    </UsersInfoContext.Provider>
  )

  
}

export default UsersInfoPovider