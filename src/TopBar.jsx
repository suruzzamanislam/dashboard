import { RiHandbagLine } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { CiSearch } from 'react-icons/ci';
import { PiMonitor } from 'react-icons/pi';
import { TfiEmail } from 'react-icons/tfi';
import { GrNotification } from 'react-icons/gr';
import usaFlag from './assets/usa.webp';
import user from './assets/user.jpeg';

const TopBar = () => {
  const shadow = {
    boxShadow: '0px 0px 20px 3px blue',
  };
  return (
    <div className="border-b shadow-md py-3 px-4 flex justify-between">
      <div className="flex gap-x-5 items-center">
        <div className=" bg-slate-300  rounded-full p-2">
          <RiHandbagLine className=" text-2xl"></RiHandbagLine>
        </div>
        <div className=" bg-slate-300 rounded-full p-2">
          <FaRegEdit className=" text-2xl"></FaRegEdit>
        </div>
        <div className=" bg-slate-300 rounded-full p-2">
          <FiMessageCircle className=" text-2xl"></FiMessageCircle>
        </div>
        <div className="relative">
          <input
            placeholder="Search.."
            className="border border-gray-500 pl-8 py-2"
            type="text"
            name=""
            id=""
          />
          <CiSearch className="absolute top-3 left-2 text-xl"></CiSearch>
        </div>
      </div>
      <div className="flex gap-x-3 items-center">
        <div className=" bg-slate-300  rounded-full p-2">
          <PiMonitor className=" text-2xl"></PiMonitor>
        </div>
        <div className="bg-slate-300 rounded-full p-2">
          <img className="w-7 h-7 rounded-full" src={usaFlag} alt="" />
        </div>
        <div className=" bg-slate-300  rounded-full p-2">
          <TfiEmail className=" text-2xl"></TfiEmail>
        </div>
        <div className=" bg-slate-300  rounded-full p-2 relative">
          <GrNotification className=" text-2xl"></GrNotification>
          <div
            style={shadow}
            className="w-3 h-3 rounded-full bg-blue-500 absolute top-0 right-0"
          ></div>
        </div>
        <div className="bg-slate-300 rounded-full">
          <img className="w-10 h-10 rounded-full" src={user} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
