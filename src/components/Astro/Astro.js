import React, { useState, useEffect } from "react";
import "./Astro.css";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const baseURL = "https://go-apod.herokuapp.com/apod";

const Astro = () => {
  const [img, setImg] = useState(null);
  const [hdURL, setHdURL] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [cardTitle, setCardTitle] = useState(null);
  const [cardDis, setCardDis] = useState(null);
  const [cardDate, setCardDate] = useState(null);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#e84118");

  useEffect(() => {
    debugger;
    setLoading(true);
    axios.get(baseURL).then((response) => {
      // debugger;
      console.log(response, "Response");
      setPost(response.data);
      setLoading(false);
      let POST = response.data;
      console.log(POST, "setPOST");
      // SetState Here
      setCardTitle(POST.title);
      setCardDis(POST.explanation);
      setCardDate(POST.date);
      setImg(POST.url);
      setMediaType(POST.media_type);
      setHdURL(POST.hdurl);
    });
  }, []);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  if (!post) return null;
  return (
    <div>
      {loading === true ? (
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
      ) : (
        <div className="card mb-3 shadow">
          <img
            src={img}
            className="card-img-top my-astro-img"
            alt={mediaType}
          />
          <div className="card-body text-center">
            <h5 className="card-title display-6">{cardTitle}</h5>
            <p className="card-text">{cardDis}</p>
            <button
              className="btn mat-balck-btn my-2"
              role="link"
              onClick={() => openInNewTab(hdURL)}
            >
              ???? Click Here To Open HD Image ????
            </button>
            <p className="card-text">
              <small className="text-muted">{cardDate}</small>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Astro;
