import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiX } from 'react-icons/fi';

import { clearError } from '../../../../../store/modules/error/actions';

import { Colors } from '../../../../../styles/colors';
import { Container, Header, Content } from './styles';
import { State } from '../../../../../store';

export const Error: React.FC = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: State) => state.error);

  const handleClose = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return error ? (
    <Container>
      <Header>
        <p>{error.title}</p>
        <button type="button" title="Fechar" onClick={handleClose}>
          <FiX size={16} color={Colors.textIcons} />
        </button>
      </Header>
      <Content>
        {error.messages.map(m => (
          <p>{m}</p>
        ))}
      </Content>
    </Container>
  ) : null;
};
