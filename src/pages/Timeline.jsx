import { useContext, useMemo, useState } from "react";
import { ActionContext } from "../context/actioncontext/ActionContext";
import ActionCard from "../components/ui/ActionCard";
import Empty from "../components/ui/Empty";

const Timeline = () => {
  const { action } = useContext(ActionContext);
  const [filterType, setFilterType] = useState();

  const filteredAction = useMemo(() => {
    if (filterType) {
      return action.filter((a) => a.type === filterType);
    }
    return action;
  }, [filterType, action]);

  return (
    <div className="min-h-screen max-w-325 mx-auto py-20 px-5">
      {action.length === 0 ? (
        <Empty children="Nothing Added in The Status Yet" />
      ) : (
        <div>
          <h2 className="text-5xl font-bold">Timeline</h2>
          <div className="flex justify-between items-center gap-5">
            <select
              onChange={(e) => setFilterType(e.target.value)}
              className="mt-6 w-30 lg:w-60 border border-gray-300 border- shadow py-2 rounded-sm text-[#64748B] ring-inset hover:cursor-pointer bg-white outline-0 "
            >
              <option>Filter timeline</option>
              <option value="call">Call</option>
              <option value="text">Text</option>
              <option value="video">Video</option>
            </select>
          </div>
        </div>
      )}

      {filteredAction.length ? (
        filteredAction.map((actionData, ind) => (
          <ActionCard
            key={ind}
            type={actionData.type}
            icon={actionData.icon}
            name={actionData.name}
            date={actionData.date}
          />
        ))
      ) : (
        <div className="flex items-center justify-center w-full h-75 rounded-2xl border-2 border-gray-300 my-10">
          <h2 className="mx-auto text-gray-600 text-center text-3xl font-bold">
            No Data Added!
          </h2>
        </div>
      )}
    </div>
  );
};

export default Timeline;
