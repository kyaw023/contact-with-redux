import React from 'react'

const ContainerComponent = ({children}) => {
  return (
    <div className=' max-w-screen-lg mx-auto px-4 py-3 min-h-screen'>
       {children}
    </div>
  )
}

export default ContainerComponent
