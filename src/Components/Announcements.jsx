import styled from "styled-components"

const Container = styled.div`
    height: 55px;
    padding: 5px;
    background-color: #ead2d2;
    color: black;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    border-radius: 0px 0px 35px 35px;
    font-size: 10;
    font-weight: bold;
 `

const Announcements = () => {
  return (
    <Container>
        We are accepting orders from all across India. Your delivery will be made as per Government guidelines due to Lockdown restrictions.
    </Container>
  )
}

export default Announcements