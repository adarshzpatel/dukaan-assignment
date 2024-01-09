import ChevronDownIcon from "../assets/icons/ChevronDownIcon";
import Button from "./Button";
import Navbar from "./Navbar";
import Transactions from "./Transactions";

const Stats = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 shadow-custom space-y-4 bg-white rounded-lg ">
        <p className="text-gray-500 ">Online orders</p>
        <p className="text-4xl">231</p>
      </div>
      <div className="p-4 shadow-custom space-y-4 bg-white rounded-lg">
        <p className="text-gray-500 mb-4">Amounts Received</p>
        <p className="text-4xl">₹ 23,92,312.19</p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex-1 bg-[#FAFAFA]">
      <Navbar />
      <div className="p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium mb-6">Overview</h1>
          <Button
            rightIcon={<ChevronDownIcon className="text-black" />}
            className="bg-white"
          >
            Last Month
          </Button>
        </div>
        <Stats />
        <Transactions />
      </div>
    </div>
  );
};
export default Dashboard;
