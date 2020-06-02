import styled from 'styled-components';
import { darken } from 'polished';

const Primary = '#fe5c9f';
const Secundary = '#f0a6ca';

export const Container = styled.div`
  padding: 0 30px;
  background: #fff;
`;

export const Loc = styled.div`
  margin-right: 0px;
  display: flex;
  align-items: center;
  margin-right: 50px;
  a {
    max-height: 32px;
    border: 1px solid red;
    justify-content: center;
    width: 150px;
    border: red;
    img {
      border-right: 0;
      max-height: 25px;
      margin-right: 5px;
    }
    strong {
      color: black;
    }
  }
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    img {
      max-height: 32px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid black;
      color: #fff;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid black;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: ${Primary};
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: ${Secundary};
      font-weight: bold;
    }
  }
  img {
    height: 32px;
    border-radius: 50%;
  }
`;

export const Mid = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    max-height: 32px;
    align-items: center;
    border: 2px solid;
    padding: 6px;
    border-radius: 10px;
    margin-right: 20px;
    justify-content: center;
    width: 150px;
    background: ${Primary};
    color: #fff;

    strong {
      margin-right: 5px;
    }
    img {
      margin: 0;
      padding:0;
      padding-right: 5px;
      max-height: 20px;
      border: 0;
    }

  }

  button {
    padding: 5px;
    height: 32px;
    width: 150px;
    background: none;
    font-weight: bold;
    color: ${Primary};
    border: 2px solid ${Primary};
    border-radius: 10px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      /* background: ${darken(0.1, 'rgba(0, 0, 0, 0.4)')}; */
    }
  }
`;
