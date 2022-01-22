import * as React from 'react';
import styled from 'styled-components/macro';
import { Rates } from './Rates';

export function Features() {
  return (
    <List>
      <Group>
        <Content>
          <Rates />
        </Content>
      </Group>
    </List>
  );
}

const Group = styled.li`
  display: flex;
  margin: 6.25rem 0 6.25rem 2.25rem;

  .feature-icon {
    width: 6.25rem;
    height: 6.25rem;
    margin-right: 2.25rem;
    flex-shrink: 0;
  }
`;
const Content = styled.div`
  flex: 1;
`;

const List = styled.ul`
  padding: 0;
  margin: 6.25rem 0 0 0;
`;
