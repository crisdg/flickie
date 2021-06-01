import { useState } from "react";
import "../styles/searbar.css";
import { withRouter, useHistory } from "react-router-dom";

function SearchBar(props) {
  const [busqueda, setBusqueda] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.history.push(`/search/${busqueda}`);
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };
  return (
    <div className="navbar navbar-expand-md">
      <div className="contianer-fluid">
        <a className="navbar-brand" href="/">
          Flickie
        </a>
      </div>
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default withRouter(SearchBar);
