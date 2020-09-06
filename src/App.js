import React, { Component } from 'react';
import Carousel from './components/Carousel';
import { slidesCollection } from './components/Carousel/config';
import UserLoader from './components/UserLoader';
import Chat from './components/Chat';

const App = () => {
  //return <UserLoader />;
  //return <Carousel width={800} height={400} slides={slidesCollection} />;
  //return <Counter step={2} />;
  return <Chat />;
};
export default App;
