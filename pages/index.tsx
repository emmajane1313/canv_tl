import DrawHome from "../components/draw";
const Home = () => {
  return typeof document !== "undefined" ? (
    <div className="relative w-full h-full grid grid-flow-row auto-rows-auto">
      <DrawHome />
    </div>
  ) : (
    <div></div>
  );
};

export default Home;
