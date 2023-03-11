import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Dog.scss";

const baseURL = "https://random.dog/woof.json";

const Dog = () => {
  const [post, setPost] = useState();
  const [img, setImg] = useState();
  const [fileSize, setFileSize] = useState();

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        console.log(response, "Dog API");
        let POST = response.data;
        setImg(POST.url);
        setFileSize(POST.fileSizeBytes);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="wrap-dog d-flex justify-content-center">
        <div className="card text-bg-dark">
          <img src={img} className="card-img " alt="DOG IMAGE IS HERE" />
          <div className="card-img-overlay">
            <p className="card-text text-danger">
              <small>FileSize: {fileSize} Bytes</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dog;
