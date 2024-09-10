import React from 'react'
import { Element } from 'react-scroll';
import Topcontent from '../topcontent/topcontent';
import "./topcontainer.css"

const Topcontainer = () => {
  return (
<Element id='home' className='topcontainer'>
   <Topcontent/>
</Element>
  )
}

export default Topcontainer;
