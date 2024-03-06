import React from 'react'
import { ProductContext } from '../../ProductContext';
import { ContextType } from '../../types/types';

interface BackgroundOpacityProps {
children: React.ReactNode
}

export default function BackgroundOpacity({children}:BackgroundOpacityProps):JSX.Element {
    const { loginVisible, registerVisible, adminVisible } = React.useContext(ProductContext)! as ContextType;
  return (
    <>
     <div className={`z-10 ${adminVisible && 'bg-customBeige opacity-60'} ${loginVisible && 'bg-customBeige opacity-60'} ${registerVisible && 'bg-customBeige opacity-60'}`}>
      {children}
    </div>
    </>
    
  )
}
