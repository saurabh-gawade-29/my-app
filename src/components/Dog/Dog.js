import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Dog.scss";
import ClipLoader from "react-spinners/ClipLoader";

const baseURL = "https://random.dog/woof.json";

const Dog = () => {
  const [post, setPost] = useState();
  const [img, setImg] = useState();
  const [fileSize, setFileSize] = useState();
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#e84118");

  const getDog = () => {
    setLoading(true);
    axios
      .get(baseURL)
      .then((response) => {
        console.log(response, "Dog API");
        let POST = response.data;
        setImg(POST.url);
        setFileSize(POST.fileSizeBytes);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getDog();
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
          <div className="wrap-dog">
            <div className="card text-bg-dark my-dog-card">
              <img
                src={img}
                className="card-img my-dog-img"
                alt="DOG_IMAGE_IS_HERE"
              />
              <div className="card-img-overlay">
                <p className="card-text text-danger">
                  <small>FileSize: {fileSize} Bytes</small>
                </p>
              </div>
            </div>
          </div>
          <div className="text-center my-4">
            <button
              type="button"
              className="btn mat-balck-btn"
              onClick={getDog}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Dog;
