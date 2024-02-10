import { Outlet, useNavigation } from "react-router-dom";
import { Footer, Loading , Filters} from "../Components";

const Pokedex = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      {isPageLoading ? (
        <Loading />
      ) : (
        <section>
          <Outlet />
        </section>
      )}
      <Footer />
    </>
  );
};
export default Pokedex;
