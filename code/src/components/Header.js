/* eslint-disable linebreak-style */
import React from 'react';
import logo from './assets/happy-logo.png'

export const Header = () => {
  return (
    <header>
      <div className="image-wrapper">
        <img className="logo" src={logo} alt="logo happy thoughts" />
      </div>
    </header>)
}