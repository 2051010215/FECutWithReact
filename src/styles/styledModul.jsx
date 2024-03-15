import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-left: 160px;
  padding-right: 160px;
` 

export const Button = styled.button`
  font-family: ${props => props.theme.fontFamilys.fontInter};
  background: ${props => props.theme.colors.gradientPink};
  padding: 10px;
  box-shadow: 0px 0px 50px 0px #BB4BFF52;
  border: 0;
  border-radius: 6px;
  height: 50%;
  margin-top: 20px;
  color: white;
  border-radius: 8px;
  user-select: none;
  cursor: pointer;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  &:hover::before {
    left: auto;
    right: 0;
    width: 100%;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: auto;
    top: 0;
    height: 100%;
    width: 0;
    background-color: #fff;
    opacity: 0.1;
    z-index: -1;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

`
