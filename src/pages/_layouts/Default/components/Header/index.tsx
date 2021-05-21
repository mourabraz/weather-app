import React from 'react';
import { FiRefreshCw, FiStar, FiSearch } from 'react-icons/fi';

import { Button } from '../../../../../components/Button';

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
      <div>
        <input type="text" />
        <FiSearch size={20} color="white" />
      </div>
    </Container>
  );
};
