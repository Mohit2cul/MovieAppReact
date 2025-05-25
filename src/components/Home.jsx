import Sidenav from "./partials/Sidenav";

const Home = () => {
  document.title = "Home Page";
  return (
    <>
      <Sidenav />
      <div className="w-[80%] h-full"></div>
    </>
  );
};

export default Home;
