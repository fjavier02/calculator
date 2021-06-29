import styled from 'styled-components';

export const BtnForm = styled.button`
  border: none;
  width: 50px;
  height: 50px;
  margin: 10px ;
  margin-left: ${(props)=> props.className === 'purple'? '82px': '10px'};
  border-radius: 50%;
  font-size: 20px;
  color: ${(props)=> props.className === 'light-gray' ? '#7c5efe': '#f1f0f5'};


`;