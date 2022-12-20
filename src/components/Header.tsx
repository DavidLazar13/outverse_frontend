import React from "react";
import styled from "styled-components";
import outverse from "../assets/outverse_1.png";

export default function Header() {
    return(
        <HeaderContainer>
            <Logo src={outverse}></Logo>
        </HeaderContainer>
    )
}

const Logo = styled.img`
  width: 250px;  
`

const HeaderContainer = styled.div`
  height: 300px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background: black;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;
