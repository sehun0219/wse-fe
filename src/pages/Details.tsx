import BaseLayout from "@/components/common/BaseLayout";
import Navbar from "@/components/common/Navbar";
import DetailForm from "@/components/features/DetailForm";
import { SearchProvider } from "@/store/SearchContext";
import { UserProvider } from "@/store/UserContext";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();

  return (
    <BaseLayout>
      <SearchProvider>
        <UserProvider>
          <Navbar />
          <DetailForm data={location.state.data} />
        </UserProvider>
      </SearchProvider>
    </BaseLayout>
  );
};

export default Details;
