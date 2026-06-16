function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Employee"
      className="form-control mb-4"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;