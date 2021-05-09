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
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px;
  border-radius: 25px;
`;

export const StyledInput = styled.input`
  padding: 10px 25px;
  border-radius: 25px 0 0 25px;
  color: #fff;
  border: none;
  outline: none;
  color: #111;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  &::placeholder {
    font-family: "Montserrat";
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 0 25px 25px 0;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #c1c1c1;
  color: #111;
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
  color: #111;
  padding: 5px 10px;
  background-color: #c1c1c1;
  border-radius: 10px;
  &:focus {
    background-color: #c1c1c1;
  }
`;
