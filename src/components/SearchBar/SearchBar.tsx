import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBarWrapper}>
      <input
        className={styles.searchBarInput}
        type="text"
        placeholder="Search for cities"
      />
    </div>
  );
};

export default SearchBar;
