import { FaPlus } from "react-icons/fa";
import StatCards from "../../components/ui/StatCards";

const HeroBanner = ({
  totalFriends,
  totalStatusOnTrack,
  totalStatusOverdue,
  totalStatusAlmostDue,
}) => {
  return (
    <div>
      <div className="flex flex-col justify-between items-center gap-4 mt-20">
        <h1 className="text-4xl text-center font-bold sm:text-5xl">
          Friends to keep close in your life
        </h1>
        <p className="text[#64748B] text-[16px] text-center text-gray-500 max-w-150">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="bg-[#244D3F] flex justify-center items-center gap-1 text-white font-semibold px-4 py-2 rounded-sm border-0 hover:cursor-pointer mt-4 ">
          <FaPlus />
          Add a Friend
        </button>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10 border-b pb-10 border-gray-200">
        <StatCards value={totalFriends} label="Total Friends" />
        <StatCards value={totalStatusOnTrack} label="On Track" />
        <StatCards value={totalStatusOverdue} label="Overdue" />
        <StatCards value={totalStatusAlmostDue} label="Almost Due" />
      </div>
    </div>
  );
};

export default HeroBanner;
