import * as React from 'react';
import styled from 'styled-components/macro';
// import { ReactComponent as DocumentationIcon } from './assets/documentation-icon.svg';
// import { ReactComponent as GithubIcon } from './assets/github-icon.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export function Nav() {
  return (
    <Wrapper>
      <Item>
        <Link to={process.env.PUBLIC_URL + '/'}>Rates</Link>
      </Item>
      <Item>
        <Link to={process.env.PUBLIC_URL + '/calculate'}>Calculate</Link>
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Item = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;
