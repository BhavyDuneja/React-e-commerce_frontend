import React from 'react'
import styled from 'styled-components'
import SearchRounded from '@mui/icons-material/SearchRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`
const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
border: none;
`

const Center = styled.div`
flex:1;
text-align: center;
`
const Logo = styled.h1`
 font-weight: bold;
 font-family: cursive;
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin: 25px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    EN
                </Language>
                <SearchContainer>
                    <Input/> 
                    <SearchRounded style={{color:"grey", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>
                Fit-First
            </Logo></Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>SigIn</MenuItem>
                <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlinedIcon/>  
                </Badge>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar