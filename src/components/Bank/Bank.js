import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Bank.scss";

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

  const fetchDetails = () => {
    let url = `https://ifsc.razorpay.com/${myIfsc}`;
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
        setBankName(POST.BANK);
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
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>
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
              <h5 className="card-title">BANK: {bankName}</h5>
              <h6 className="card-subtitle text-muted">BRANCH: {branchName}</h6>
              <h6 className="card-text mb-0 text-muted">ADDRESS: {address}</h6>
              <h6 className="card-text mb-0 text-muted">CONTACT: {contact}</h6>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="card my-2">
                    <div className="card-header fw-bold">Location</div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">CENTRE: {center}</li>
                      <li className="list-group-item">CITY: {city}</li>
                      <li className="list-group-item">DISTRICT: {district}</li>
                      <li className="list-group-item">STATE: {state}</li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="card my-2">
                    <div className="card-header fw-bold">Other</div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">ISO3166: {iso}</li>
                      <li className="list-group-item">MICR: {micr}</li>
                      <li className="list-group-item">BANKCODE: {bankcd}</li>
                      <li className="list-group-item">IFSC: {ifsc}</li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="card my-2">
                    <div className="card-header fw-bold">Mode Of Payment</div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">IMPS: {imps}</li>
                      <li className="list-group-item">UPI: {upi}</li>
                      <li className="list-group-item">RTGS: {rtgs}</li>
                      <li className="list-group-item">NEFT: {neft}</li>
                      <li className="list-group-item">SWIFT: {swift}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
