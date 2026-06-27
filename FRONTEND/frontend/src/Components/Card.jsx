import React from "react";

const Card = (props) => {
  return (
    <>
      <div
        style={{ backgroundColor: props.bgcolor }}
        className="px-10 py-5 border rounded-md text-center flex-grow"
      >
        <h1 className="font-medium text-2xl">{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </>
  );
};

export default Card;

//   <div style={{backgroundColor:'#FD6663'}} className='px-10 py-5 border rounded-md text-center flex-grow' >
//              <h1 className='font-medium text-2xl'>December 28</h1>
//              <p>14:23:08</p>
//            </div>

//             <div style={{backgroundColor:'#FCA201'}} className='px-10 py-5 border rounded-md text-center flex-grow' >
//              <h1 className='font-medium text-2xl'>Build using</h1>
//              <p>React</p>
//            </div>
