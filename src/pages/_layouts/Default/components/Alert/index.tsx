import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiX } from 'react-icons/fi';

import { State } from '../../../../../store';
import { clearAlert } from '../../../../../store/modules/alert/actions';

import { Colors } from '../../../../../styles/colors';
import { Container, Header, Content } from './styles';

export const Alert: React.FC = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: State) => state.alert);

  const handleClose = useCallback(() => {
    dispatch(clearAlert());
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
