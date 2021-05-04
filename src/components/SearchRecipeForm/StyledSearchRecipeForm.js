import styled from "styled-components";

export const FormWrapper = styled.form`
  width: 50%;
  height: 300px;
  background-color: #fff;
  margin-top: 50px;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: -2px 4px 10px 0px #737c8e17;
  text-align: center;
`;

export const InputWrapper = styled.div`
  display: flex;
`;

export const StyledInput = styled.input`
  padding: 10px 25px;
  border-radius: 25px 0 0 25px;
  color: #fff;
  border: none;
  outline: none;
  background-color: #111;

  &::placeholder {
    color: #fff;
    font-family: "Montserrat";
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 0 25px 25px 0;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #ffc107;
  color: #fff;
  width: 100px;
  font-weight: 700;
`;
export const StyledLabel = styled.label`
  padding: 20px 0;
  font-size: 1.5rem;
  font-weight: 700;
`;
export const StyledSelect = styled.select`
  border: none;
  outline: none;
  font-family: "Open Sans";
  font-size: 1rem;
  padding: 5px 10px;
  background-color: #ffc107;
  border-radius: 10px;
  &:focus {
    background-color: #ffc107;
  }
`;
