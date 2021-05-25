import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiRefreshCw, FiStar } from 'react-icons/fi';

import { Button } from '../../../../../components/Button';
import { SelectCityAsync } from '../../../../../components/SelectCityAsync';
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
  const favorites = useSelector((state: State) => state.manager.favorites);

  const isFavorite = useMemo(() => {
    return current ? favorites.find(i => i.id === current.city.id) : false;
  }, [current, favorites]);

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
        fillIcon={isFavorite ? Colors.textIcons : 'none'}
        title={`${isFavorite ? 'Remove' : 'Add'} from favourites`}
        onClick={handleFavoriteToggle}
      >
        favourite
      </Button>
      <SelectCityAsync />
    </Container>
  );
};
