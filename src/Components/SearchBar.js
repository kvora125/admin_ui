const SearchBar = ({ setQuery }) => (
  <input
    autocomplete
    placeholder="search by name email role"
    style={{
      margin: "30px 10px",
      width: "90%",
      lineHeight: "30px",
      borderRadius: "5px",
    }}
    onChange={(e) => {
      setQuery(e.target.value);
    }}
  />
);

export default SearchBar;
