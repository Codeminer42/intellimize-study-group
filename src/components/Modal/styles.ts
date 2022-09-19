import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #1E1E1E;
  opacity: 0.6;
`

export const Content = styled.div`
  position: relative;
  min-height: 500px;
  min-width: 45%;
  background-color: #F8F8F8;
  border-radius: 20px;
  padding: 50px;
  z-index: 1;
`