import React from 'react';
import {useState,useContext,useEffect,createContext,FC} from 'react';




const AppContext = createContext<any>(null);

const ContextProvider:FC = ({children}) =>{
  const [width,setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  }
  
  useEffect(()=>{
    window.addEventListener('resize', updateWidth);
    return ()=>{
      window.removeEventListener('resize',updateWidth);
    }
  },[])

  const contextValues = {
    width,
    setWidth,
    updateWidth
  }

  return (
    <AppContext.Provider value = {contextValues}>
      {children}
    </AppContext.Provider>
  )
}


export default ContextProvider;

export const useAppContext = ()=>{
  return useContext(AppContext);
}