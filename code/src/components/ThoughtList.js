/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';
import { HeartButton } from './Heart';

export const ThoughtList = (props) => {
  return (
    props.map((thought) => {
      return (
        <div className="outputBox" key={thought._id}>
          <p className="thoughtListText">{thought.message}</p>
          <div className="outputBottom">
            <HeartButton id={thought._id} hearts={thought.hearts} />
            <div className="date-display">
              {formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}
            </div>
          </div>
        </div>
      )
    })
  )
}