import React from 'react';

const Btn = ({cont, operator}) =>{
  return(
    <>
        {cont.map((btn, index) =>{
          //return(<div className={btn[1]} onClick='{btn[2]}({btn[0]})'>{btn[0]}</div>)
          return(<button className={btn[1]} value={btn[0]} onClick={(e) => operator(btn[2],e.target.value)}>
          {btn[0]}
        </button>)
//console.log(btn[2]+'('+e.target.value+')')
        })}
    </>
  )
}

//onClick='inputNum(5)'

export default Btn;