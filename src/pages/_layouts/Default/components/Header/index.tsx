import React from 'react';
import { FiRefreshCw, FiStar, FiSearch } from 'react-icons/fi';

import { Button } from '../../../../../components/Button';
import { Input } from '../../../../../components/Input';
import { Colors } from '../../../../../styles/colors';

import { Container } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Button icon={FiRefreshCw} title="Refresh">
        refresh
      </Button>
      <Button icon={FiStar} title="Add/Remove from favourites">
        favourite
      </Button>
      <Input
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
