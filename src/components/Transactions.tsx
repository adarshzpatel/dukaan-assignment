import ArrowDownFilledIcon from "../assets/icons/ArrowDownFilledIcon";
import DownloadIcon from "../assets/icons/DownloadIcon";
import InfoIcon from "../assets/icons/InfoIcon";
import SearchIcon from "../assets/icons/SearchIcon";
import SortIcon from "../assets/icons/SortIcon";
import Button from "./Button";

const TransactionFilters = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="relative">
        <SearchIcon className="absolute h-3.5 w-3.75 left-4 top-3.5 " />
        <input
          type="text"
          placeholder="Search by order ID...  "
          className="border border-[#D9D9D9] flex items-center  rounded-md gap-2 pl-9 pr-4 py-2.5 placeholder:text-black/50  text-sm w-[200px] focus-within:outline-none   focus-within:border-gray-400"
        />
      </div>
      <div className="flex items-center gap-3">
        <Button rightIcon={<SortIcon />}>Sort</Button>
        <Button rightIcon={<DownloadIcon />} className="!p-2 " />
      </div>
    </div>
  );
};

const Pagination = () => {
  return (
    <div className="flex justify-center items-center mx-auto gap-6 my-8">
      <Button>Previous</Button>
      <div className="text-[#4D4D4D] text-center flex gap-2">
        <div className="px-3 w-10 py-1.5 hover:bg-gray-100 rounded">1</div>
        <div className="px-3 py-1.5">...</div>
        <div className="bg-[#146EB4] text-white rou px-3 py-1.5 rounded">
          10
        </div>
        {[11, 12, 13, 14, 15, 16, 17, 18].map((it) => (
          <button className="px-3 py-1.5 hover:bg-gray-100 rounded" key={`page-${it}`}>
            {it}
          </button>
        ))}
      </div>
      <Button>Next</Button>
    </div>
  );
};

const TransactionTable = () => {
  // TODO : Replace this with actual data
  const txns = Array.from(Array(20).keys());

  return (
  <div className="shadow-custom p-3 bg-white rounded">
      <TransactionFilters />
      <table className="text-center  w-full mt-3">
        <thead>
          <tr className="   ">
            <th className="rounded-l text-left bg-[#F2F2F2] font-medium p-2">OrderId</th>
            <th className="font-medium cursor-pointer bg-[#F2F2F2] p-2 flex items-center gap-0.5  justify-center">
              Order date
              <ArrowDownFilledIcon className="h-6 w-6 -translate-y-0.5" />
            </th>
            <th className="font-medium bg-[#F2F2F2]  p-2">Order amount</th>
            <th className="rounded-r bg-[#F2F2F2]  text-right font-medium  p-2 flex items-center justify-end gap-1 ">
              Transaction Fees
              <InfoIcon className="h-3.5 w-3.5" />
            </th>
          </tr>
        </thead>
        <tbody>
          {txns.map((_, index) => (
            <tr key={index} className="border-b ">
              <td className="text-left  p-2 text-[#146EB4]">#281209</td>
              <td className=" p-2">7 July, 2023</td>
              <td className=" p-2">₹ 1278.23 </td>
              <td className="text-right p-2">₹ 22</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

const Transactions = () => {
  return (
    <div>
      <h2 className="my-6 text-xl font-medium">Transactions | This month</h2>
      <TransactionTable />
    </div>
  );
};

export default Transactions;
