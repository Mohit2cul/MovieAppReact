import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";

const Home = () => {
  document.title = "Home Page";
  return (
    <>
      <Sidenav />
      <div className="w-[60%] h-full">
        <Topnav />
      </div>
    </>
  );
};

export default Home;
