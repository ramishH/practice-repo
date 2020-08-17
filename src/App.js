import React,{useEffect,useState,Component,PureComponent} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {moivesList} from './Actions'
import Home from './Components/Home/Home'

const App=()=>{
  // const reduxState=useSelector(reduxState=>reduxState)
  // const dispatch=useDispatch()
  // const [init,setInit]=useState(false)

  // useEffect(()=>{
  //   if(!init){
  //     dispatch(moivesList())
  //     setInit(true)
  //   }
  // },[init])

  return(
    <div>
        <Home/>     
    </div>
  )
}



export default App