import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiRefreshCw, FiStar, FiSearch } from 'react-icons/fi';

import { Button } from '../../../../../components/Button';
import { InputDebounced } from '../../../../../components/InputDebounced';
import { Colors } from '../../../../../styles/colors';

import { Container } from './styles';
import {
  refresh,
  toggleFavoritesRequest,
} from '../../../../../store/modules/manager/actions';
import { State } from '../../../../../store';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const current = useSelector((state: State) => state.currentForecast);

  const handleRefresh = useCallback(() => {
    dispatch(refresh());
  }, [dispatch]);

  const handleFavoriteToggle = useCallback(() => {
    dispatch(toggleFavoritesRequest());
  }, [dispatch]);

  return (
    <Container>
      <Button icon={FiRefreshCw} title="Refresh" onClick={handleRefresh}>
        refresh
      </Button>
      <Button
        icon={FiStar}
        fillIcon={current?.city.isFavorite ? Colors.textIcons : 'none'}
        title={`${current?.city.isFavorite ? 'Remove' : 'Add'} from favourites`}
        onClick={handleFavoriteToggle}
      >
        favourite
      </Button>
      <InputDebounced
        icon={FiSearch}
        valueChange={e => console.log(e)}
        iconColor={Colors.textIcons}
        borderColor={Colors.accent}
        color={Colors.textIcons}
        title="start typing the city name"
      />
    </Container>
  );
};
