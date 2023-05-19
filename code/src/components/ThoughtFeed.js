/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { formatDistance } from 'date-fns';
import { NewThought } from './NewThought';
import { Loading } from './Loading'

const API = 'https://project-happy-thoughts-api-rg22bvxr4q-lz.a.run.app/thoughts'

export const ThoughtFeed = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setThoughtsList(data)
      })
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, []);

  const HandleLike = (_id) => {
    fetch(`${API}/${_id}/like`, { method: 'PATCH' })
      .then((res) => res.json())
      .then((data) => {
        const updatedThoughts = thoughtsList.map((thought) => {
          if (thought._id === data.response._id) {
            thought.heart += 1;
            return thought;
          } else {
            return thought;
          }
        });
        setThoughtsList(updatedThoughts);
      });
  };

  return (
    <>
      <section>
        <NewThought />
      </section>
      <section className="mainContainer">
        {!loading && thoughtsList.map((thought) => {
          return (
            <div key={thought._id} className="card">
              <p className="postText">{thought.message}</p>
              <button
                type="button"
                className={thought.heart === 0 ? 'noLikesBtn' : 'likesBtn'}
                onClick={() => HandleLike(thought._id)}>

                <span
                  role="img"
                  className="heartEmo"
                  aria-label="Like this post">
                    🖤
                </span>
              </button>
              <span className="sumHearts">x {thought.heart}</span>
              <p className="date"> {formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>
            </div>
          )
        })}
      </section>
      {loading && (<Loading />)}
    </>
  )
};