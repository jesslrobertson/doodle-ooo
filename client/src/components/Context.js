import React,{useState, createContext } from 'react'

const Context = React.createContext()

function ContextProvider(props) {
  const [alert, setAlert] = useState(false)

  return (
    <Context.Provider
      value={{
        alert,
        setAlert
      }}>
      {props.children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}