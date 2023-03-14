import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./Ipaddress.scss";
import ClipLoader from "react-spinners/ClipLoader";

const baseURL = "https://api.ipify.org/?format=json";

const Ipaddress = () => {
  const [post, setPost] = useState(null);
  const [myAddress, setMyAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#e84118");

  const copyAddress = () => {
    navigator.clipboard.writeText(myAddress);
    toast.success(`Copy Successfully`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(baseURL)
      .then((response) => {
        console.log(response, "IP Resp");
        setPost(response.data);
        let POST = response.data;
        setMyAddress(POST.ip);
        setLoading(false);
      })
      .catch((error) => console.error(error));
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
          <div className="container">
            <div className="card text-center shadow">
              <div className="card-body">
                <h5 className="card-title display-4">Your Public IP Address</h5>
                <p className="display-1">
                  v4:
                  <span className="text-danger">{myAddress}</span>
                </p>
                <button class="btn mat-balck-btn" onClick={copyAddress}>
                  Copy
                </button>
              </div>
            </div>
          </div>
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default Ipaddress;
