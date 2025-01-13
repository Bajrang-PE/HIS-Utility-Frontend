import React, { createContext } from 'react'

export const HISContext = createContext();

const HISContextData = ({children}) => {
  return (
    <HISContext.Provider value={{

    }}>
      {children}
    </HISContext.Provider>
  )
}

export default HISContextData
