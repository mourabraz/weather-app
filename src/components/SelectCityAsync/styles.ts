import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const List = styled.div`
  position: absolute;
  top: 42px;
  z-index: 10;
  width: 100%;
  max-height: 215px;
  border: 1px solid ${Colors.accent};
  border-top: none;
  border-radius: 4px;
  background: ${Colors.textIcons};
  text-align: left;
  -webkit-overflow-scrolling: touch;
  font-size: 1.4rem;
`;

export const ScrollList = styled.div`
  overflow-y: auto;
  max-height: 250px;
  padding: 8px;

  p {
    color: ${Colors.accent};
    font-style: italic;
  }
`;

export const ListItem = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  background: transparent;
  text-align: left;
  overflow: hidden;
  width: 100%;
  padding: 8px 10px;
  font-size: 1.4rem;
  line-height: 1.4rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  border-radius: 4px;
  color: ${Colors.accent};

  &:hover {
    background-color: ${Colors.accent};
    color: ${Colors.textIcons};
  }
`;
