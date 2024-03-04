import { Outlet, useNavigation } from "react-router-dom";
import { Footer, Loading , Navbar} from "../Components";

const Pokedex = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <main>
    <Navbar/>
      {isPageLoading ? (
        <Loading />
      ) : (
        <section>
          <Outlet />
        </section>
      )}
      <Footer />
    </main>
  );
};
export default Pokedex;
