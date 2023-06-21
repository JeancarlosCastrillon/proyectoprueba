import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 160px;
    margin: 0 30px;
    background-color: #fff;
    border: 1px solid #0000003b;
    border-radius: 5px;
`

export const CardValue = styled.p`
    display: flex;
    flex-direction: row-reverse;
    padding-right: 50px;
    width: 100%;
    color: ${props => props.Porcentage < 0 ? 'red' : 'green'};;
`

export const CardLabel = styled.p`
    font-size: 30px;
    text-align: center;
    height: 100px;
    margin: 0;
`

export const CardDescription = styled.p`
    font-size: 16px;
    text-align: center;
    height: 100px;
`