import React from 'react';
import { ThoughtFeed } from 'components/ThoughtFeed';
import { Footer } from 'components/Footer'
import { Header } from 'components/Header';

export const App = () => {
  return (
    <>
      <Header />
      <ThoughtFeed />
      <Footer />
    </>
  )
}