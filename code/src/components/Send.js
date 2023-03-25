import React from 'react';

export const Send = (message) => {
  return (
    <button
      type="submit"
      className="sendButton"
      disabled={message.lenght < 5 || message.lenght > 140}>
    🖤 Shoot some happy thoughts!
    </button>
  )
}