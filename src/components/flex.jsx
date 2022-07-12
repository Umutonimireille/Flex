import React from 'react'

function Flex (props) {
  const { boxes } = props;
return (
  <div className='container'>
    {boxes.map(box =>(

    
<div className="box">
     
     <h1 className="font-bold text-2xl mt-[10px]">{box.name}</h1>
     <img src={`${box.image}`} alt="" />
     <p className="pt-[5px] font-normal text-1.5xl">{box.type}</p>

   </div>))}

   </div>
 )
}
export default Flex;
