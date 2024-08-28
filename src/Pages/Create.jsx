import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [createdata, setcreatedat] = useState({
    username: "",
    name: "",
    email: "",
    address: {
      suite: "",
      street: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: { name: "", catchPhrase: "", bs: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("address.geo.")) {
      const geoPropertyName = name.split("address.geo.")[1];
      setcreatedat((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          geo: { ...prevData.address.geo, [geoPropertyName]: value },
        },
      }));
    } else if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setcreatedat((prevData) => ({
        ...prevData,
        [parent]: { ...prevData[parent], [child]: value },
      }));
    } else {
      setcreatedat((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://66cd978d8ca9aa6c8ccaea26.mockapi.io/api/users",
        createdata
      );
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="create" className="create py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow">
              <div className="card-body p-4 p-md-5">
                <form onSubmit={handleSubmit}>
                  <h2 className="text-center mb-4">Create User</h2>

                  {/* Company Name */}
                  <div className="mb-4">
                    <label className="form-label">
                      Company Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="company.name"
                      className="form-control"
                      value={createdata.company.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Company CatchPhrase */}
                  <div className="mb-4">
                    <label className="form-label">
                      Company CatchPhrase <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="company.catchPhrase"
                      className="form-control"
                      value={createdata.company.catchPhrase}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Name */}
                  <div className="mb-4">
                    <label className="form-label">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={createdata.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* UserName */}
                  <div className="mb-4">
                    <label className="form-label">
                      User Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      value={createdata.username}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <label className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={createdata.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Address */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      Address <span className="text-danger">*</span>
                    </label>
                    <div className="row">
                      <div className="col">
                        <input
                          type="text"
                          name="address.suite"
                          className="form-control"
                          value={createdata.address.suite}
                          onChange={handleChange}
                          placeholder="Suite"
                          required
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          name="address.street"
                          className="form-control"
                          value={createdata.address.street}
                          onChange={handleChange}
                          placeholder="Street"
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col">
                        <input
                          type="text"
                          name="address.city"
                          className="form-control"
                          value={createdata.address.city}
                          onChange={handleChange}
                          placeholder="City"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          name="address.zipcode"
                          className="form-control"
                          value={createdata.address.zipcode}
                          onChange={handleChange}
                          placeholder="Zip Code"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mb-4">
                    <label className="form-label">Location</label>
                    <div className="row">
                      <div className="col">
                        <input
                          type="text"
                          name="address.geo.lat"
                          className="form-control"
                          value={createdata.address.geo.lat}
                          onChange={handleChange}
                          placeholder="Latitude"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          name="address.geo.lng"
                          className="form-control"
                          value={createdata.address.geo.lng}
                          onChange={handleChange}
                          placeholder="Longitude"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="mb-4">
                    <label className="form-label">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      value={createdata.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Website */}
                  <div className="mb-4">
                    <label className="form-label">
                      Website <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="website"
                      className="form-control"
                      value={createdata.website}
                      onChange={handleChange}
                      required
                    />
                  </div>


                  {/* Company bs */}
                  <div className="mb-4">
                    <label className="form-label">Company bs</label>
                    <input
                      type="text"
                      name="company.bs"
                      className="form-control"
                      value={createdata.company.bs}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Buttons */}
                  <div className="text-center">
                    <button
                      className="btn btn-success btn-lg rounded-pill p-3 mx-2"
                      type="submit"
                    >
                      Create
                    </button>
                    <button
                      className="btn btn-danger btn-lg rounded-pill p-3 mx-2"
                      type="button"
                      onClick={() => navigate("/")}
                    >
                      Go Back
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Create;
