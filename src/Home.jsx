import DBody from './DBody';
import LSideBar from './LSideBar';
import TopBar from './TopBar';

const Home = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <LSideBar></LSideBar>
      </div>
      <div className="col-span-10 h-[100vh] overflow-auto no-scrollbar">
        <TopBar></TopBar>
        <DBody></DBody>
      </div>
    </div>
  );
};

export default Home;
