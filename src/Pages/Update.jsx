import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = ({ id }) => {
  const navigate = useNavigate();

  // State to manage the form data for editing
  const [editdata, setEditdata] = useState({
    username: "",
    name: "",
    email: "",
    address: {
      suite: "",
      street: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  // Fetch user data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://66cd978d8ca9aa6c8ccaea26.mockapi.io/api/users/${id}`
      );
      setEditdata(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle input changes for nested objects like address and company
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("address.geo.")) {
      const geoPropertyName = name.split("address.geo.")[1];
      setEditdata((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          geo: {
            ...prevData.address.geo,
            [geoPropertyName]: value,
          },
        },
      }));
    } else if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setEditdata((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      setEditdata((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form submission and API call for updating the user data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `https://66cd978d8ca9aa6c8ccaea26.mockapi.io/api/users/${id}`,
        editdata
      );
      console.log(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="update" className="update">
      <div className="d-flex align-items-center min-vh-100 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-lg">
                <div className="card-body p-4 p-md-5">
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-center mb-4">Edit User</h2>

                    {/* Company Name */}
                    <label htmlFor="companyName">
                      Company Name:{" "}
                      <span className="text-danger fw-bold">*</span>
                    </label>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        id="companyName"
                        name="company.name"
                        className="form-control"
                        value={editdata.company.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Company catchPhrase */}
                    <label htmlFor="catchPhrase">
                      Company catchPhrase:{" "}
                      <span className="text-danger fw-bold">*</span>
                    </label>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        id="catchPhrase"
                        name="company.catchPhrase"
                        className="form-control"
                        value={editdata.company.catchPhrase}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Name */}
                    <label htmlFor="name">
                      Name: <span className="text-danger fw-bold">*</span>
                    </label>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={editdata.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* UserName */}
                    <label htmlFor="username">
                      User Name: <span className="text-danger fw-bold">*</span>
                    </label>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        value={editdata.username}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Email */}
                    <label htmlFor="email">
                      Email: <span className="text-danger fw-bold">*</span>
                    </label>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={editdata.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Address */}
                    <div className="row mb-4">
                      <label className="mb-3 fw-semibold text-center">
                        Address <span className="text-danger fw-bold">*</span>
                      </label>
                      <div className="col">
                        <div data-mdb-input-init className="form-outline">
                          <input
                            type="text"
                            name="address.suite"
                            className="form-control"
                            value={editdata.address.suite}
                            onChange={handleChange}
                            required
                          />
                          <label className="form-label">Suite</label>
                        </div>
                      </div>
                      <div className="col">
                        <div data-mdb-input-init className="form-outline">
                          <input
                            type="text"
                            name="address.street"
                            className="form-control"
                            value={editdata.address.street}
                            onChange={handleChange}
                          />
                          <label className="form-label">Street</label>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div className="col">
                        <div data-mdb-input-init className="form-outline">
                          <input
                            type="text"
                            name="address.city"
                            className="form-control"
                            value={editdata.address.city}
                            onChange={handleChange}
                          />
                          <label className="form-label">City</label>
                        </div>
                      </div>
                      <div className="col">
                        <div data-mdb-input-init className="form-outline">
                          <input
                            type="text"
                            name="address.zipcode"
                            className="form-control"
                            value={editdata.address.zipcode}
                            onChange={handleChange}
                          />
                          <label className="form-label">Zip Code</label>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="row mb-4">
                      <label htmlFor="location">Location:</label>
                      <div className="col">
                        <div data-mdb-input-init className="form-outline">
                          <input
                            type="text"
                            id="lat"
                            name="address.geo.lat"
                            className="form-control"
                            value={editdata.address.geo.lat}
                            onChange={handleChange}
                          />
                          <label className="form-label">Latitude</label>
                        </div>
                      </div>
                      <div className="col">
                        <div data-mdb-input-init className="form-outline">
                          <input
                            type="text"
                            id="lng"
                            name="address.geo.lng"
                            className="form-control"
                            value={editdata.address.geo.lng}
                            onChange={handleChange}
                          />
                          <label className="form-label">Longitude</label>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <label htmlFor="phone">
                      Phone: <span className="text-danger fw-bold">*</span>
                    </label>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        value={editdata.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Website */}
                    <label htmlFor="website">
                      Website: <span className="text-danger fw-bold">*</span>
                    </label>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        id="website"
                        name="website"
                        className="form-control"
                        value={editdata.website}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Company bs */}
                    <label htmlFor="companyBs">Company bs:</label>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="text"
                        id="companyBs"
                        name="company.bs"
                        className="form-control"
                        value={editdata.company.bs}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <button
                        className="btn btn-success btn-lg rounded-pill p-2 m-2"
                        type="submit"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Update;
