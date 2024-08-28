import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setId }) => {
  const [data, setData] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, [deleteData]);
  const fetchData = async () => {
    await axios
      .get("https://66cd978d8ca9aa6c8ccaea26.mockapi.io/api/users")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };
  const handleEdit = (id) => {
    setId(id);
    navigate(`/update/${id}`);
  };
  const handleDelete = async (id) => {
    await axios
      .delete(`https://66cd978d8ca9aa6c8ccaea26.mockapi.io/api/users/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <main id="home" className="container my-5">
      {data.length > 0 ? (
        <div className="row gx-3 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
          {data.map((element, index) => {
            return (
              <div key={index} className="col mb-5">
                <div className="card h-100 shadow-lg border border-primary">
                  <div
                    className="card-header bg-primary text-white text-center rounded-top d-flex flex-column justify-content-center align-items-center"
                    style={{ height: "150px" }}
                  >
                    <figure className="mb-0">
                      <blockquote className="h3 mb-1">
                        <p className="mb-1">{element.company.name}</p>
                      </blockquote>
                      <figcaption className="lead">
                        {element.company.catchPhrase}
                      </figcaption>
                    </figure>
                  </div>
                  <img
                    src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5150068.jpg"
                    className="card-img-top img-fluid rounded-circle mx-auto mt-3"
                    alt="..."
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body text-center">
                    <h3 className="card-title mb-2">{element.name}</h3>
                    <h5 className="text-muted">@{element.username}</h5>
                    <hr />
                    <div className="card-text">
                      <div className="email mb-2">
                        <span className="fw-bold">E-mail: </span>
                        <span>{element.email}</span>
                      </div>
                      <div className="address mb-2">
                        <span className="fw-bold">Address: </span>
                        <span>
                        {element.address.suite}, {element.address.street}, {" "}
                          {element.address.city}
                        </span>
                      </div>
                      <div className="contact-info mb-2">
                        <span className="fw-bold">Contact No: </span>
                        <span>{element.phone}</span>
                      </div>
                      <div className="website">
                        <span className="fw-bold">Website: </span>
                        <span>{element.website}</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-info bg-opacity-10 border border-info  rounded py-2 d-flex justify-content-center align-items-center" style={{ height: "75px" }}>
                    <button
                      className="btn btn-warning btn-md rounded-pill me-3 border border-dark"
                      onClick={() => {
                        handleEdit(element.id);
                      }}
                    >
                      Edit User
                    </button>
                    <button
                      className="btn btn-danger btn-md rounded-pill border border-dark"
                      onClick={() => {
                        handleDelete(element.id);
                      }}
                    >
                      Delete User
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center my-5">
          <h3>No user details found.</h3>
          <p>Please add user data.</p>
        </div>
      )}
      <div className="text-center">
        <button
          className="btn btn-success btn-lg p-3 rounded-pill"
          onClick={() => {
            navigate("/create");
          }}
        >
          Create New User
        </button>
      </div>
    </main>
  );
};

export default Home;
