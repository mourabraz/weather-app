import React, { useCallback, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { apiGeo } from '../../services/api';
import { Location } from '../../models/Location';
import { LocationResponse } from '../../interfaces';

import { InputDebounced } from '../InputDebounced';

import { Colors } from '../../styles/colors';
import { Container, List, ScrollList, ListItem } from './styles';

export const SelectCityAsync: React.FC = () => {
  const [open, setOpen] = useState(true);

  const [query, setQuery] = useState<string>();
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    console.log(query);
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
          console.error(error);
          setOpen(true);
        });
    } else {
      setOpen(false);
      setLocations([]);
    }
  }, [query]);

  useEffect(() => {
    console.log(locations);
  }, [locations]);

  const handleClickToSelect = useCallback((item: Location): void => {
    console.log(item);
  }, []);

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
