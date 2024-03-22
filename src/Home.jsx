import LSideBar from './LSideBar';
import TopBar from './TopBar';

const Home = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <LSideBar></LSideBar>
      </div>
      <div className="col-span-10">
        <TopBar></TopBar>
      </div>
    </div>
  );
};

export default Home;
