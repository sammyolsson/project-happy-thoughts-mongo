/* eslint-disable linebreak-style */
import React from 'react';

const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  const isSubmitButtonDisabled = newThought.length < 6 || newThought.length > 140;
  /* SHOWS CHARACTER-COUNT OR A WARNING MESSAGE DEPENDING ON NUMBER OF CHARACTERS */
  const characterWarning = () => {
    if (newThought.length > 140) {
      return (<p className="character-warning">Your thought can only be 140 characters long</p>)
    } else {
      return (<p className="character-count">{newThought.length} / 140, need atleast 6 characters.</p>)
    }
  }
  return (
    <section className="form-section">
      <form className="form" onSubmit={onFormSubmit}>
        <label className="label" htmlFor="thought-input">
          What&apos;s making you happy right now?
          <textarea
            className="thought-input"
            id="thought-input"
            placeholder="Enter the happy thought here..."
            value={newThought}
            onChange={onNewThoughtChange} />
        </label>
        {characterWarning()}
        <button
          className="submit-button"
          type="submit"
          disabled={isSubmitButtonDisabled}>
          🖤 Shoot a happy thought!
        </button>
      </form>
    </section>)
}

export default ThoughtForm