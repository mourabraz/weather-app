import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

import { State } from '../../store';
import { City } from '../../models/City';
import { setPositionRequest } from '../../store/modules/position/actions';

import { Colors } from '../../styles/colors';
import { Container, Header, List, ScrollList, ListItem } from './styles';

export const SelectFavorite: React.FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: State) => state.manager.favorites);
  const [open, setOpen] = useState(false);

  const toggle = useCallback((): void => {
    setOpen(state => !state);
  }, []);

  const handleClickToSelect = useCallback(
    (item: City): void => {
      dispatch(setPositionRequest(item.position));
    },
    [dispatch],
  );

  return favorites.length > 0 ? (
    <Container>
      <Header type="button" onClick={toggle}>
        {open ? (
          <FiChevronUp size="20" color={Colors.textIcons} />
        ) : (
          <FiChevronDown size="20" color={Colors.textIcons} />
        )}
      </Header>

      {open && (
        <List>
          <ScrollList onMouseLeave={(): void => setOpen(false)}>
            {favorites.map(item => (
              <ListItem
                key={String(item.id)}
                onClick={() => handleClickToSelect(item)}
              >
                {item.localName}
              </ListItem>
            ))}
          </ScrollList>
        </List>
      )}
    </Container>
  ) : null;
};
