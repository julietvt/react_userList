import React, { Component } from 'react';
import Carousel from './components/Carousel';
import { slidesCollection } from './components/Carousel/config';

const App = () => {
  return <Carousel width={800} height={400} slides={slidesCollection} />;
};
export default App;
