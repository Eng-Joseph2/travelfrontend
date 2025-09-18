

import React, { useState } from 'react'

const useInput = (validate) => {

    const [ input , setInput] = useState('')

    const [touch , setTouch] = useState(false)


    const invalid = input.trim().length <=0 && touch === true 

    const Valid = validate(input)

    // console.log(Valid);
    

    const InputHandler = (e) => {
        setInput(e.target.value)
    }
    const blurHandler = () => {
        setTouch(true)
    }
    const ResetHandler = () => {
        setInput('')
    }


  return {
    input,
    touch,
    blurHandler,
    ResetHandler,
    InputHandler,
    Valid,
    invalid
  }
}

export default useInput