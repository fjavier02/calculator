import React from 'react';
import '../../App.css';
import { BtnForm } from './style';

const Btn = ({cont, operator}) =>{
  return(
    <>
        {cont.map((btn, index) =>{
          return(
          <BtnForm className={btn[1]} value={btn[0]} onClick={(e) => operator(btn[2],e.target.value)}>
            {btn[0]}
          </BtnForm>
        )
        })}
    </>
  )
}

//onClick='inputNum(5)'

export default Btn;