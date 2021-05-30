import "../styles/searbar.css";
function SearchBar(props) {
  return (
    <div className="navbar navbar-expand-md">
      <div className="contianer-fluid">
        <a className="navbar-brand" href="/">
          Flickie
        </a>
      </div>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={props.buscar}
        />
      </form>
    </div>
  );
}

export default SearchBar;
