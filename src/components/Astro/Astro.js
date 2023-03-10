import React, { useState, useEffect } from "react";
import "./Astro.css";
import axios from "axios";

const baseURL = "https://go-apod.herokuapp.com/apod";

const Astro = () => {
  const [img, setImg] = useState(null);
  const [hdURL, setHdURL] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [cardTitle, setCardTitle] = useState(null);
  const [cardDis, setCardDis] = useState(null);
  const [cardDate, setCardDate] = useState(null);
  const [post, setPost] = useState([]);

  useEffect(() => {
    debugger;
    axios.get(baseURL).then((response) => {
      // debugger;
      console.log(response, "Response");
      setPost(response.data);
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
      <div className="card mb-3 ">
        <img src={img} className="card-img-top my-astro-img " alt={mediaType} />
        <div className="card-body text-center">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cardDis}</p>
          <button
            className="btn btn-sm btn-secondary my-2"
            role="link"
            onClick={() => openInNewTab(hdURL)}
          >
            👉 Click Here To Open HD Image 👈
          </button>
          <p className="card-text">
            <small className="text-muted">{cardDate}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Astro;
