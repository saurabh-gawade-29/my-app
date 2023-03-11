import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Joke.css";

const baseURL = "https://v2.jokeapi.dev/joke/Any";

const Joke = () => {
  const [setup, setSetup] = useState(null);
  const [delivery, setDelivery] = useState(null);
  const [post, setPost] = useState(null);
  const [category, setCategory] = useState(null);
  const [type, setType] = useState(null);
  const [btn_check, setBtn_check] = useState(false);
  const [myChecked1, setMyChecked1] = useState(false);
  const [myChecked2, setMyChecked2] = useState(false);
  const [myChecked3, setMyChecked3] = useState(false);
  const [myChecked4, setMyChecked4] = useState(false);
  const [myChecked5, setMyChecked5] = useState(false);
  const [myChecked6, setMyChecked6] = useState(false);
  const [safe, setSafe] = useState(false);

  const getJoke = () => {
    axios
      .get(baseURL)
      .then((response) => {
        console.log(response);
        let POST = response.data;
        if (POST.type === "single") {
          debugger;
          setSetup(POST.joke);
          setBtn_check(true);
        } else {
          setSetup(POST.setup);
        }
        if (POST.flags) {
          setMyChecked1(POST.flags.nsfw);
          setMyChecked2(POST.flags.religious);
          setMyChecked3(POST.flags.political);
          setMyChecked4(POST.flags.racist);
          setMyChecked5(POST.flags.sexist);
          setMyChecked6(POST.flags.explicit);
        }
        setSafe(POST.safe);
        setCategory(POST.category);
        setType(POST.type);
        setDelivery(POST.delivery);
        setPost(response.data);
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
      <h1 className="text-center display-6">JOKE OF THE DAY</h1>
      <div>
        <div className="d-flex justify-content-between">
          <p className="text-end">
            <span className="joke-cat fw-bold">Category: </span>
            <span className="joke-sub-cat ">{category}</span>
          </p>
          <p className="text-end">
            <span className="joke-cat fw-bold">Type: </span>
            <span className="joke-sub-cat ">{type}</span>
          </p>
        </div>
        <div className="card shadow">
          <div className="card-body text-center">
            <h2 className="display-4">{setup}</h2>
            {/* Delivery */}
            <button
              disabled={btn_check}
              type="button"
              className="btn btn-secondary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              ANSWER
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
                  <div className="modal-body display-4">{delivery}</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4">
              <div className="d-flex justify-content-between">
                <div className="check-wrap">
                  <p className="joke-cat fw-bold">JOKE TYPE:</p>
                </div>
                <div className="check-wrap">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    onChange={() => {}}
                    id="flexCheckChecked"
                    checked={myChecked1}
                  />
                  <label
                    className="form-check-label px-1"
                    htmlFor="flexCheckChecked"
                  >
                    nsfw
                  </label>
                </div>
                <div className="check-wrap">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    onChange={() => {}}
                    id="flexCheckChecked"
                    checked={myChecked2}
                  />
                  <label
                    className="form-check-label px-1"
                    htmlFor="flexCheckChecked"
                  >
                    religious
                  </label>
                </div>
                <div className="check-wrap">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    onChange={() => {}}
                    id="flexCheckChecked"
                    checked={myChecked3}
                  />
                  <label
                    className="form-check-label px-1"
                    htmlFor="flexCheckChecked"
                  >
                    political
                  </label>
                </div>
                <div className="check-wrap">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    onChange={() => {}}
                    id="flexCheckChecked"
                    checked={myChecked4}
                  />
                  <label
                    className="form-check-label px-1"
                    htmlFor="flexCheckChecked"
                  >
                    racist
                  </label>
                </div>
                <div className="check-wrap">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    onChange={() => {}}
                    id="flexCheckChecked"
                    checked={myChecked5}
                  />
                  <label
                    className="form-check-label px-1"
                    htmlFor="flexCheckChecked"
                  >
                    sexist
                  </label>
                </div>
                <div className="check-wrap">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    onChange={() => {}}
                    id="flexCheckChecked"
                    checked={myChecked6}
                  />
                  <label
                    className="form-check-label px-1"
                    htmlFor="flexCheckChecked"
                  >
                    explicit
                  </label>
                </div>
              </div>
            </div>
            <div className="safeOrNot">
              <p className="text-cebter">
                <span className="joke-cat fw-bold">SAFE OR NOT: </span>
                <span className="joke-sub-cat ">
                  {safe === true ? "SAFE" : "NOT SAFE"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joke;
