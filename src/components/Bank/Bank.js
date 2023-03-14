import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Bank.scss";
import ClipLoader from "react-spinners/ClipLoader";
import { toast, ToastContainer } from "react-toastify";

const Bank = () => {
  const [myIfsc, setMyIfsc] = useState("YESB0DNB002");
  const [post, setPost] = useState();
  const [bankName, setBankName] = useState();
  const [branchName, setBranchName] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [center, setCenter] = useState();
  const [district, setDistrict] = useState();
  const [state, setState] = useState();
  const [imps, setImps] = useState();
  const [city, setCity] = useState();
  const [upi, setUpi] = useState();
  const [micr, setMicr] = useState();
  const [rtgs, setRtgs] = useState();
  const [neft, setNeft] = useState();
  const [swift, setSwift] = useState();
  const [iso, setIso] = useState();
  const [bankcd, setBankcd] = useState();
  const [ifsc, setIfsc] = useState();
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#e84118");

  const fetchDetails = () => {
    if (myIfsc === "" || myIfsc === null || myIfsc === undefined) {
      debugger;
      toast.error("Please Enter Valid IFSC", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      onClear();
    } else {
      let url = `https://ifsc.razorpay.com/${myIfsc}`;
      setLoading(true);
      axios
        .get(url)
        .then((response) => {
          console.log(response.data, "IFSC Details");
          setPost(response.data);
          let POST = response.data;
          let impsStatus = POST.IMPS === true ? "Available" : "Not Available";
          let upiStatus = POST.UPI === true ? "Available" : "Not Available";
          let rtgsStatus = POST.RTGS === true ? "Available" : "Not Available";
          let neftStatus = POST.NEFT === true ? "Available" : "Not Available";
          let swiftStatus = POST.SWIFT === null ? "Not Available" : POST.SWIFT;
          let bankName = POST.BANK;
          if (bankName != null || bankName != undefined) {
            let newBank = bankName.toUpperCase();
            setBankName(newBank);
          } else {
            setBankName(bankName);
          }
          setBranchName(POST.BRANCH);
          setAddress(POST.ADDRESS);
          setContact(POST.CONTACT);
          setCenter(POST.CENTRE);
          setDistrict(POST.DISTRICT);
          setState(POST.STATE);
          setImps(impsStatus);
          setCity(POST.CITY);
          setUpi(upiStatus);
          setMicr(POST.MICR);
          setRtgs(rtgsStatus);
          setNeft(neftStatus);
          setSwift(swiftStatus);
          setIso(POST.ISO3166);
          setBankcd(POST.BANKCODE);
          setIfsc(POST.IFSC);
          toast.success("Record Found", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setLoading(false);
        })
        .catch((error) => {
          toast.error(error.response.data, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          onClear();
          setLoading(false);
        });
    }
  };
  const onClear = () => {
    setBankName(null);
    setBranchName(null);
    setAddress(null);
    setContact(null);
    setCenter(null);
    setDistrict(null);
    setState(null);
    setImps(null);
    setCity(null);
    setUpi(null);
    setMicr(null);
    setRtgs(null);
    setNeft(null);
    setSwift(null);
    setIso(null);
    setBankcd(null);
    setIfsc(null);
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    // {
    //     loading === true ? <></> : <></>
    // }
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
          <div className="mb-3">
            <h1 className="display-6 text-center">Bank Details Using IFSC</h1>
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
                <input
                  value={myIfsc}
                  onChange={(e) => setMyIfsc(e.target.value)}
                  type="text"
                  className="form-control shadow"
                  placeholder="Please Enter Your IFSC Code"
                />
              </div>
              <div className="col-4"></div>
            </div>
            <div className="text-center">
              <button
                className="btn mat-balck-btn my-4 shadow"
                onClick={fetchDetails}
              >
                Get Deatils
              </button>
            </div>
          </div>
          <div className="output-card">
            <div className="container">
              <div className="card shadow">
                <div className="card-body">
                  <div className="bank-basic-contain ">
                    <h5 className="card-title text-danger mb-2">{bankName}</h5>
                    <h6 className="card-subtitle text-muted mb-2">
                      <span className="text-dark fw-bold">BRANCH: </span>
                      {branchName}
                    </h6>
                    <h6 className="card-text mb-0 text-muted mb-2">
                      <span className="text-dark fw-bold">ADDRESS: </span>
                      {address}
                    </h6>
                    <h6 className="card-text mb-0 text-muted mb-2">
                      <span className="text-dark fw-bold">CONTACT: </span>
                      {contact}
                    </h6>
                  </div>

                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                      <div className="card my-2">
                        <div className="card-header fw-bold">Location</div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <span className="fw-bold text-muted">CENTRE: </span>
                            <span>{center}</span>
                          </li>
                          <li className="list-group-item">
                            <span className="fw-bold text-muted">CITY: </span>
                            {city}
                          </li>
                          <li className="list-group-item">
                            <span className="fw-bold text-muted">
                              DISTRICT:{" "}
                            </span>
                            <span>{district}</span>
                          </li>
                          <li className="list-group-item">
                            <span className="fw-bold text-muted">STATE: </span>
                            <span className="">{state}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                      <div className="card my-2">
                        <div className="card-header fw-bold">Other</div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <span className="fw-bold text-muted">
                              ISO3166:{" "}
                            </span>
                            <span>{iso}</span>
                          </li>
                          <li className="list-group-item">
                            <span className="fw-bold text-muted">MICR:</span>
                            <span>{micr}</span>
                          </li>
                          <li className="list-group-item">
                            <span className="fw-bold text-muted">
                              BANKCODE:{" "}
                            </span>
                            <span>{bankcd}</span>
                          </li>
                          <li className="list-group-item">
                            <span className="fw-bold text-muted">IFSC: </span>
                            <span>{ifsc}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                      <div className="card my-2">
                        <div className="card-header fw-bold">
                          Mode Of Payment
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <span className="fw-bold text-muted">IMPS: </span>
                            <span>{imps}</span>
                          </li>
                          <li className="list-group-item">
                            <span className="fw-bold text-muted">UPI: </span>
                            <span>{upi}</span>
                          </li>
                          <li className="list-group-item">
                            <span className="fw-bold text-muted">RTGS: </span>
                            <span>{rtgs}</span>
                          </li>
                          <li className="list-group-item">
                            <span className="fw-bold text-muted">NEFT: </span>
                            <span>{neft}</span>
                          </li>
                          <li className="list-group-item">
                            <span className="fw-bold text-muted">SWIFT: </span>
                            <span>{swift}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default Bank;
