import { SearchWrap, SearchInput, CancelButton, SearchButton } from "./styled";
import useSearchBar from "./useSearchBar";
const SearchBar = () => {
  const { search, handleSearch, handleCancel, handleSearchButton } =
    useSearchBar();

  return (
    <SearchWrap>
      <SearchInput type="text" value={search} onChange={handleSearch} />
      <CancelButton onClick={handleCancel}>X</CancelButton>
      <SearchButton onClick={handleSearchButton}>🔍</SearchButton>
    </SearchWrap>
  );
};

export default SearchBar;
