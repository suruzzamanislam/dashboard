import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { RiShoppingBag2Line } from 'react-icons/ri';
import { FaProductHunt } from 'react-icons/fa';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FaArrowRightLong } from 'react-icons/fa6';

const DBody = () => {
  const data = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Aug',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Sep',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Oct',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Nov',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Dec',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];
  return (
    <div className="px-4 py-3 bg-gray-100">
      <p>
        <span className="text-blue-400">Dashboard</span> / Sales
      </p>
      <div className="grid grid-cols-12 mt-3">
        {/* revenue */}
        <div className="col-span-8">
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium">Revenue</p>
            <div className="flex items-center gap-x-1">
              <div className="w-2 h-2 rounded-full border-blue-500 border-2"></div>
              <div className="w-2 h-2 rounded-full border-blue-500 border-2"></div>
              <div className="w-2 h-2 rounded-full border-blue-500 border-2"></div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-5">
            <p>
              Total Profit: <span className="text-blue-500">$ 10.84</span>
            </p>
            <div className="flex items-center gap-x-3">
              <div className="flex items-center gap-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <p>Income</p>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <p>Expences</p>
              </div>
            </div>
          </div>
          <ResponsiveContainer width={850} height={300} className="mt-5">
            <AreaChart
              width={300}
              height={40}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="pv"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="amt"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="mt-10 gap-x-10 flex">
            <div className="rounded-md w-1/2 bg-white   px-4 py-9">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-medium">Daily Sales</p>
                  <p className="text-sm text-gray-400">
                    Go to columns for details
                  </p>
                </div>
                <div className="text-xl bg-amber-200 rounded-full p-2">
                  <BsCurrencyDollar></BsCurrencyDollar>
                </div>
              </div>
              <div className="flex gap-x-12 mt-8">
                <div className="w-4 h-60 bg-gray-400 relative">
                  <div className="w-4 h-44 absolute bottom-0 bg-amber-600"></div>
                </div>
                <div className="w-4 h-60 bg-gray-400 relative">
                  <div className="w-4 h-40 absolute bottom-0 bg-amber-600"></div>
                </div>
                <div className="w-4 h-60 bg-gray-400 relative">
                  <div className="w-4 h-48 absolute bottom-0 bg-amber-600"></div>
                </div>
                <div className="w-4 h-60 bg-gray-400 relative">
                  <div className="w-4 h-36 absolute bottom-0 bg-amber-600"></div>
                </div>
                <div className="w-4 h-60 bg-gray-400 relative">
                  <div className="w-4 h-52 absolute bottom-0 bg-amber-600"></div>
                </div>
                <div className="w-4 h-60 bg-gray-400 relative">
                  <div className="w-4 h-32 absolute bottom-0 bg-amber-600"></div>
                </div>
              </div>
            </div>
            <div className="rounded-md w-1/2 bg-white   px-4 py-9">
              <p className="text-lg font-medium">Summary</p>
              <div className="flex gap-x-10 mt-8">
                <div className="space-y-14">
                  <div className="flex items-center gap-x-2">
                    <div className="p-2 bg-blue-300 rounded-full text-xl">
                      <RiShoppingBag2Line></RiShoppingBag2Line>
                    </div>
                    <div className="text-gray-400">
                      <div className="flex justify-between items-center mb-2">
                        <p>Income</p>
                        <p>$ 92,600</p>
                      </div>
                      <div>
                        <div className="w-80 h-3 rounded-lg bg-gray-300">
                          <div className="w-60 h-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="p-2 bg-orange-300 rounded-full text-xl">
                      <FaProductHunt></FaProductHunt>
                    </div>
                    <div className="text-gray-400">
                      <div className="flex justify-between items-center mb-2">
                        <p>Profit</p>
                        <p>$ 37,515</p>
                      </div>
                      <div>
                        <div className="w-80 h-3 rounded-lg bg-gray-300">
                          <div className="w-72 h-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="p-2 bg-fuchsia-400 rounded-full text-xl">
                      <FaProductHunt></FaProductHunt>
                    </div>
                    <div className="text-gray-400">
                      <div className="flex justify-between items-center mb-2">
                        <p>Expenses</p>
                        <p>$ 55,085</p>
                      </div>
                      <div>
                        <div className="w-80 h-3 rounded-lg bg-gray-300">
                          <div className="w-60 h-3 rounded-lg bg-gradient-to-r from-blue-500 to-fuchsia-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-10 mt-10">
            <div className="w-1/2 bg-white px-4 py-8 rounded-md">
              <p className="font-medium">Recent Activities</p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mr-2"></div>
                  <p>Updated Server Logs</p>
                  <p className="text-gray-500 ml-auto">Just Now</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
                  <p>Send Mail to HR and Admin</p>
                  <p className="text-gray-500 ml-auto">2 min ago</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                  <p>Backup Files EOD</p>
                  <p className="text-gray-500 ml-auto">14:00</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                  <p>Send Mail to HR and Admin</p>
                  <p className="text-gray-500 ml-auto">15:00</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-800 mr-2"></div>
                  <p>Rebooted Server</p>
                  <p className="text-gray-500 ml-auto">22:00</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mr-2"></div>
                  <p>Updated Server Logs</p>
                  <p className="text-gray-500 ml-auto">23:00</p>
                </div>
                <div className="border-t-2 pt-2 flex items-center justify-center">
                  <p className="flex items-center gap-x-2 text-gray-500 cursor-pointer">
                    View All{' '}
                    <FaArrowRightLong className="text-xs"></FaArrowRightLong>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-white px-4 py-8 rounded-md">
              <div className="flex justify-between items-center">
                <p className="font-medium">Transactions</p>
                <div className="flex gap-x-1 items-center">
                  <div className="w-2 h-2 rounded-full border border-blue-500"></div>
                  <div className="w-2 h-2 rounded-full border border-blue-500"></div>
                  <div className="w-2 h-2 rounded-full border border-blue-500"></div>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between ">
                  <div>
                    <p className="font-medium">Shank Prank</p>
                    <p className="text-xs">10 Jan 1:00PM</p>
                  </div>
                  <p className="text-blue-500">+$60.00</p>
                </div>
                <div className="flex items-center justify-between ">
                  <div>
                    <p className="font-medium">Cash Withdrawal</p>
                    <p className="text-xs">4 Jan 1:00PM</p>
                  </div>
                  <p className="text-red-500">-$16.44</p>
                </div>
                <div className="flex items-center justify-between ">
                  <div>
                    <p className="font-medium">Amy Dias</p>
                    <p className="text-xs">18 Jan 1:00PM</p>
                  </div>
                  <p className="text-blue-500">+$60.00</p>
                </div>
                <div className="flex items-center justify-between ">
                  <div>
                    <p className="font-medium">Netflix</p>
                    <p className="text-xs">11 Jan 1:00PM</p>
                  </div>
                  <p className="text-red-500">-$40.00</p>
                </div>
                <div className="flex items-center justify-between ">
                  <div>
                    <p className="font-medium">Electricity Bill</p>
                    <p className="text-xs">19 Jan 1:00PM</p>
                  </div>
                  <p className="text-red-500">-$30.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBody;
