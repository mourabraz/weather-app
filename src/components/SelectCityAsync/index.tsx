import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';

import { apiGeo } from '../../services/api';
import { Location } from '../../models/Location';
import { LocationResponse } from '../../interfaces';

import { InputDebounced } from '../InputDebounced';

import { Colors } from '../../styles/colors';
import { Container, List, ScrollList, ListItem } from './styles';
import { setPositionRequest } from '../../store/modules/position/actions';

export const SelectCityAsync: React.FC = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const [query, setQuery] = useState<string>();
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    if (query) {
      apiGeo
        .get<LocationResponse[]>(
          `direct?appid=${process.env.REACT_APP_API_KEY}&q=${query}&limit=5`,
        )
        .then(res => {
          setLocations(res.data.map(i => Location.fromResponse(i)));
          setOpen(true);
        })
        .catch(error => {
          // console.error(error);
          setOpen(true);
        });
    } else {
      setOpen(false);
      setLocations([]);
    }
  }, [query]);

  const handleClickToSelect = useCallback(
    (item: Location): void => {
      dispatch(setPositionRequest(item.position));
      setOpen(false);
      setLocations([]);
    },
    [dispatch],
  );

  return (
    <Container>
      <InputDebounced
        icon={FiSearch}
        valueChange={setQuery}
        iconColor={Colors.textIcons}
        borderColor={Colors.accent}
        color={Colors.textIcons}
        title={!open ? 'start typing the city name' : ''}
      />

      {open && (
        <List>
          <ScrollList>
            {locations.length ? (
              locations.map(item => (
                <ListItem
                  key={item.uniqID}
                  onClick={() => handleClickToSelect(item)}
                >
                  {item.nameFormatted}
                </ListItem>
              ))
            ) : (
              <p>cidade não encontrada</p>
            )}
          </ScrollList>
        </List>
      )}
    </Container>
  );
};
