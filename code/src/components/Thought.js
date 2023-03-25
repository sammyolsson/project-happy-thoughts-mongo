import React, { useState } from 'react';
import { Send } from './Send';

export const Thought = (props) => {
  const [message, setMessage] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    props.submitHandler(message)
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="inputBox">
        <p>What&apos;s making you happy right now? 🖤</p>
        <textarea
          className="inputfield"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Write your happy thought here.." />
        <div className="inputbottom">
          <Send message={message} />
          <div className="lengthdisplay">{message.length < 5 || message.length > 140 ? (
            <p className="errortext">{message.length}/140</p>
          ) : (
            <p className="legittext">{message.length}/140</p>
          )}
          </div>
        </div>
      </div>
    </form>
  )
}