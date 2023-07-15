import { useState, MouseEvent, ChangeEvent } from "react";
import { getSearchList } from "@/apis/recipe";
import { useSearch } from "@/store/SearchContext";

const useSearchBar = () => {
  const [search, setSearch] = useState("");
  const { setSearchTerm } = useSearch();
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSearchButton = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await getSearchList(search);
      setSearchTerm(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setSearch("");
    setSearchTerm("");
  };

  return {
    search,
    handleSearch,
    handleCancel,
    handleSearchButton,
  };
};
export default useSearchBar;
