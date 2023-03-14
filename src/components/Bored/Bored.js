import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Bored.scss";
import ClipLoader from "react-spinners/ClipLoader";

const baseURL = "https://www.boredapi.com/api/activity";

const Bored = () => {
  const [post, setPost] = useState();
  const [actType, setActType] = useState();
  const [todoAct, setTodoAct] = useState();
  const [participants, setParticipants] = useState();
  const [price, setPrice] = useState();
  const [accessibility, setAccessibility] = useState();
  const [key, setKey] = useState();
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#e84118");

  const primaryFunction = () => {
    setLoading(true);
    axios
      .get(baseURL)
      .then((response) => {
        console.log(response.data, "API Response From bored");
        setPost(response.data);
        debugger;
        let POST = response.data;
        let getAct = POST.type;
        let actTypeOf = getAct.toUpperCase();
        setActType(actTypeOf);
        setTodoAct(POST.activity);
        setParticipants(POST.participants);
        setPrice(POST.price);
        setAccessibility(POST.accessibility);
        setKey(POST.key);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    primaryFunction();
  }, []);
  return (
    <div>
      {loading === true ? (
        <>
          <div className="myLoader">
            <ClipLoader
              className="myLoader"
              color={color}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </>
      ) : (
        <>
          <div className="wrap-whole-card">
            <div className="card shadow">
              <div className="card-header">
                <span className="">Type: </span>
                <span className="text-danger fw-bold">{actType}</span>
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p className="display-4">{todoAct}</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <span className="">Participants: </span>
                      <span className="text-danger fw-bold">
                        {participants}
                      </span>
                    </li>
                    <li className="list-group-item">
                      <span className="">Accessibility: </span>
                      <span className="text-danger fw-bold">
                        {accessibility}
                      </span>
                    </li>
                    <li className="list-group-item">
                      <span>Price: </span>
                      <span className="text-danger fw-bold">{price} Token</span>
                    </li>
                    <li className="list-group-item">
                      <span className="">Activity Number: </span>
                      <span className="text-danger fw-bold">{key}</span>
                    </li>
                  </ul>
                </blockquote>
              </div>
            </div>
            <div className="my-4">
              <small class="text-muted">
                👉 Please Not Down Activity Number And Price Token.
              </small>
            </div>
            <div className="text-center my-4">
              <button
                type="button"
                className="btn mat-balck-btn"
                onClick={primaryFunction}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Bored;
