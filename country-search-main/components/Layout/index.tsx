import styled from "styled-components";
import theme from "@theme/index";

export const Main = styled.main``;

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  max-width: 1200px;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  height: auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 15px;
  text-align: left;

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 3fr);
    text-align: center;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 4fr);
    text-align: center;
  }
`;

export const Hr = styled.hr`
  margin-top: 2rem;
  margin-bottom: 3rem;
  background-color: ${theme.colors.grey40};
  width: 100%;
  height: 1px;
  border: none;
`;

export const Spacer = styled.div<{ space?: string }>`
  margin-top: ${(props: any) => props.space || "0.5rem"};
  margin-bottom: ${(props: any) => props.space || "0.5rem"};
  display: inline-flex;
`;
