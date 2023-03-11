import axios from "axios";
import { getName } from "country-list";
import moment from "moment/moment";
import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const baseURL = "https://randomuser.me/api/";

const User = () => {
  const [post, setPost] = useState();
  const [streetNumber, setStreetNumber] = useState(null);
  const [street, setStreet] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [country, setCountry] = useState(null);
  const [postcode, setPostCode] = useState(null);
  const [title, setTitle] = useState(null);
  const [first, setFirst] = useState(null);
  const [last, setLast] = useState(null);
  const [profile, setProfile] = useState(null);
  const [dob, setDob] = useState(null);
  const [age, setAge] = useState(null);
  const [phone, setPhone] = useState(null);
  const [cell, setCell] = useState(null);
  const [email, setEmail] = useState(null);
  const [gender, setGender] = useState(null);
  const [desc, setDesc] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [offset, setOffset] = useState(null);
  const [isoCode, setIsoCode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#e84118");

  const primaryFunction = () => {
    setLoading(true);
    axios
      .get(baseURL)
      .then((response) => {
        if (response) {
          debugger;
          console.log(response, "Resp==>");
          //TODO: Use Varaible to store a data
          let POST = response.data.results[0];
          let beforeFormat = response.data.results[0].dob.date;
          let afterFormat = moment(beforeFormat).format(
            "MMMM Do YYYY, h:mm:ss a"
          );
          let country = getName(POST.nat);
          setStreetNumber(POST.location.street.number);
          setStreet(POST.location.street.name);
          setCity(POST.location.city);
          setState(POST.location.state);
          setCountry(POST.location.country);
          setPostCode(POST.location.postcode);
          setTitle(POST.name.title);
          setFirst(POST.name.first);
          setLast(POST.name.last);
          setProfile(POST.picture.large);
          setDob(afterFormat);
          setAge(POST.dob.age);
          setPhone(POST.phone);
          setCell(POST.cell);
          setEmail(POST.email);
          setGender(POST.gender);
          setDesc(POST.location.timezone.description);
          setLatitude(POST.location.coordinates.latitude);
          setLongitude(POST.location.coordinates.longitude);
          setOffset(POST.location.timezone.offset);
          setIsoCode(country);
          setPost(POST);
          setLoading(false);
        } else {
          alert("hello");
        }
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    debugger;

    primaryFunction();
  }, []);
  console.log(post, "POST");
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
          <div className="text-center display-6 my-4">Random Fake Profile</div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="card shadow my-2">
                <div className="card-header display-6">Location</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-start">
                    <span className="fw-bold">Street: </span>
                    <span>
                      {streetNumber} {street}
                    </span>
                  </li>
                  <li className="list-group-item text-start">
                    <span className="fw-bold">City: </span>
                    <span>{city}</span>
                  </li>
                  <li className="list-group-item text-start">
                    <span className="fw-bold">State: </span>
                    <span>{state}</span>
                  </li>
                  <li className="list-group-item text-start">
                    <span className="fw-bold">Country: </span>
                    <span>{country}</span>
                  </li>
                  <li className="list-group-item text-start">
                    <span className="fw-bold">Postcode: </span>
                    <span>{postcode}</span>
                  </li>
                  <li className="list-group-item text-start">
                    <span className="fw-bold">Latitude: </span>
                    <span>{latitude}</span>
                  </li>
                  <li className="list-group-item text-start">
                    <span className="fw-bold">longitude: </span>
                    <span>{longitude}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="card shadow my-2">
                <img
                  src={profile}
                  className="card-img-top img-fluid"
                  alt="Profile_Picture"
                />
                <div className="card-body">
                  <h5 className="card-title display-6">
                    {title} {first} {last}
                  </h5>
                  <p className="card-text">
                    <span className="fw-bold">Timezone: </span>
                    <span>{desc}</span>
                  </p>
                  <p className="card-text">
                    <span className="fw-bold">Timezone Offset: </span>
                    {offset}
                  </p>
                  <p className="card-text">
                    <span className="fw-bold">Country: </span>
                    <span>{isoCode}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="card shadow my-2">
                <div className="card-header display-6">Personal Details</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-start">
                    <span className="fw-bold">DOB: </span>
                    <span>{dob}</span>
                  </li>
                  <li className="list-group-item text-start">
                    <span className="fw-bold">Age: </span>
                    <span>{age}</span>
                  </li>
                  <li className="list-group-item text-start">
                    <span className="fw-bold">Phone: </span>
                    <span>{phone}</span>
                  </li>
                  <li className="list-group-item text-start">
                    <span className="fw-bold">Cell: </span>
                    <span>{cell}</span>
                  </li>
                  <li className="list-group-item text-start">
                    <span className="fw-bold">Email: </span>
                    {email}
                  </li>
                  <li className="list-group-item text-start">
                    <span className="fw-bold">Gender: </span>
                    <span>{gender}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
