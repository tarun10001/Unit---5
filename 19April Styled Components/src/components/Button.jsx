import styled from 'styled-components';

const Button = styled.button`
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    padding: ${(props) => props.padding};
    border: ${(props) => props.border};
`

export default Button;