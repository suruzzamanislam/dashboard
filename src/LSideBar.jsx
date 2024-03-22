import icon from './assets/Png.png';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BsChatSquareTextFill } from 'react-icons/bs';
import { MdMarkEmailUnread } from 'react-icons/md';
import { FcTodoList } from 'react-icons/fc';
import { MdNotes } from 'react-icons/md';
import { BsClipboard2PlusFill } from 'react-icons/bs';
import { MdContactPhone } from 'react-icons/md';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { CgComponents } from 'react-icons/cg';
import { LiaElementor } from 'react-icons/lia';
import { FaChartPie } from 'react-icons/fa';
import { MdWidgets } from 'react-icons/md';
import { RiDragDropFill } from 'react-icons/ri';
import { CiViewTable } from 'react-icons/ci';
import { AiFillDatabase } from 'react-icons/ai';
import { LiaWpforms } from 'react-icons/lia';
import { FaRegUser } from 'react-icons/fa';
import { LiaPagerSolid } from 'react-icons/lia';
import { CiUnlock } from 'react-icons/ci';
import { TiDocumentText } from 'react-icons/ti';

const LSideBar = () => {
  return (
    <div className="px-6 py-2 pb-20 shadow-2xl">
      {/* icon and name */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-1">
          <img className="w-16" src={icon} alt="" />
          <p className="text-2xl font-light">VRISTO</p>
        </div>
        <MdKeyboardDoubleArrowLeft className="text-xl text-gray-600"></MdKeyboardDoubleArrowLeft>
      </div>
      {/* dashboard section */}
      <div className="mt-5">
        <p className="text-xl flex gap-x-2 items-center bg-gray-400 px-3 py-2 rounded-md ">
          <MdOutlineDashboardCustomize></MdOutlineDashboardCustomize> Dashboard{' '}
          <MdKeyboardArrowDown className="ml-auto"></MdKeyboardArrowDown>
        </p>
        <div className="text-lg text-gray-500 pl-6 space-y-3">
          <p>--Sales</p>
          <p>--Analytics</p>
          <p>--Finance</p>
          <p>--Crypto</p>
        </div>
      </div>
      {/* apps section */}
      <div className="mt-5">
        <p className="text-xl flex gap-x-2 items-center bg-gray-400 px-3 py-2 rounded-md ">
          Apps
        </p>
        <div className="text-lg text-gray-500 px-3 py-2 space-y-3">
          <p className="flex gap-x-2 items-center">
            <BsChatSquareTextFill></BsChatSquareTextFill>Chats
          </p>
          <p className="flex gap-x-2 items-center">
            <MdMarkEmailUnread></MdMarkEmailUnread>Mailbox
          </p>
          <p className="flex gap-x-2 items-center">
            <FcTodoList></FcTodoList>Todo List
          </p>
          <p className="flex gap-x-2 items-center">
            <MdNotes></MdNotes>Notes
          </p>
          <p className="flex gap-x-2 items-center">
            <BsClipboard2PlusFill></BsClipboard2PlusFill>Scrum board
          </p>
          <p className="flex gap-x-2 items-center">
            <MdContactPhone></MdContactPhone>Contacts
          </p>
          <p className="flex gap-x-2 items-center">
            <LiaFileInvoiceSolid></LiaFileInvoiceSolid>Invoice{' '}
            <MdKeyboardArrowRight className="ml-16"></MdKeyboardArrowRight>
          </p>
        </div>
      </div>
      {/* user interface */}
      <div className="mt-5">
        <p className="text-xl flex gap-x-2 items-center bg-gray-400 px-3 py-2 rounded-md ">
          User Interface
        </p>
        <div className="text-lg text-gray-500 px-3 py-2 space-y-3">
          <p className="flex gap-x-2 items-center">
            <CgComponents></CgComponents>Components{' '}
            <MdKeyboardArrowRight className="ml-8"></MdKeyboardArrowRight>
          </p>
          <p className="flex gap-x-2 items-center">
            <LiaElementor></LiaElementor>Elements{' '}
            <MdKeyboardArrowRight className="ml-16"></MdKeyboardArrowRight>
          </p>
          <p className="flex gap-x-2 items-center">
            <FaChartPie></FaChartPie>Charts
          </p>
          <p className="flex gap-x-2 items-center">
            <MdWidgets></MdWidgets>Widgets
          </p>
          <p className="flex gap-x-2 items-center">
            <RiDragDropFill></RiDragDropFill>Drag and Drop
          </p>
        </div>
      </div>
      {/* table and form */}
      <div className="mt-5">
        <p className="text-xl flex gap-x-2 items-center bg-gray-400 px-3 py-2 rounded-md ">
          Tables and Forms
        </p>
        <div className="text-lg text-gray-500 px-3 py-2 space-y-3">
          <p className="flex gap-x-2 items-center">
            <CiViewTable></CiViewTable>Tables{' '}
          </p>
          <p className="flex gap-x-2 items-center">
            <AiFillDatabase></AiFillDatabase>Data Tables{' '}
            <MdKeyboardArrowRight className="ml-5"></MdKeyboardArrowRight>
          </p>
          <p className="flex gap-x-2 items-center">
            <LiaWpforms></LiaWpforms>Forms{' '}
            <MdKeyboardArrowRight className="ml-16"></MdKeyboardArrowRight>
          </p>
        </div>
      </div>
      {/* USER AND PAGES */}
      <div className="mt-5">
        <p className="text-xl flex gap-x-2 items-center bg-gray-400 px-3 py-2 rounded-md ">
          User And Pages
        </p>
        <div className="text-lg text-gray-500 px-3 py-2 space-y-3">
          <p className="flex gap-x-2 items-center">
            <FaRegUser></FaRegUser>Users{' '}
            <MdKeyboardArrowRight className="ml-8"></MdKeyboardArrowRight>
          </p>
          <p className="flex gap-x-2 items-center">
            <LiaPagerSolid></LiaPagerSolid>Pages{' '}
            <MdKeyboardArrowRight className="ml-8"></MdKeyboardArrowRight>
          </p>
          <p className="flex gap-x-2 items-center">
            <CiUnlock></CiUnlock>Authentication{' '}
          </p>
        </div>
      </div>
      {/* SUPPORTS */}
      <div className="mt-5">
        <p className="text-xl flex gap-x-2 items-center bg-gray-400 px-3 py-2 rounded-md ">
          SUPPORTS
        </p>
        <div className="text-lg text-gray-500 px-3 py-2 space-y-3">
          <p className="flex gap-x-2 items-center">
            <TiDocumentText></TiDocumentText>Documentation
          </p>
        </div>
      </div>
    </div>
  );
};

export default LSideBar;
