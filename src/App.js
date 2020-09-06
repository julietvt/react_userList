import React, { Component } from 'react';
import Carousel from './components/Carousel';
import { slidesCollection } from './components/Carousel/config';
import UserLoader from './components/UserLoader';
import Counter from './components/Counter';

const App = () => {
  //return <UserLoader />;
  //return <Carousel width={800} height={400} slides={slidesCollection} />;
  return <Counter step={2} />;
};
export default App;
