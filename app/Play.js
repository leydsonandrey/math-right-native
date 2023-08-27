import React from 'react';
import { Game } from '../components/Game'

export const Play = ({ route }) => {
  const { maximo } = route.params;
  return (
    <Game maximo={maximo} />
  );
}

export default Play;
