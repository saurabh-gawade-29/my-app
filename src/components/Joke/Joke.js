import axios from "axios";
import React, { useState, useEffect } from "react";

const baseURL = "https://v2.jokeapi.dev/joke/Any";

const Joke = () => {
  const [setup, setSetup] = useState(null);
  const [post, setPost] = useState(null);

  const getJoke = () => {
    axios
      .get(baseURL)
      .then((response) => {
        console.log(response);
        let POST = response.data;
        setPost(response.data);
        setSetup(POST.setup);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div>
      <h1>
        <div className="card">
          <div className="card-body">
            <p>{setup}</p>

            <button
              type="button"
              className="btn btn-secondary btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              WHY?
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Joke;
