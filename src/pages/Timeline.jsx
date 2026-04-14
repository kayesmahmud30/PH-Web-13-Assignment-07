import { useContext, useMemo, useState } from "react";
import { ActionContext } from "../context/actionContext/ActionContext";
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
              className="mt-6 w-60 border border-gray-300 border- shadow py-2 rounded-sm text-[#64748B] ring-inset hover:cursor-pointer bg-white outline-0 "
            >
              <option>Filter timeline</option>
              <option value="call">Call</option>
              <option value="text">Text</option>
              <option value="video">Video</option>
            </select>
          </div>
        </div>
      )}

      {filteredAction.map((actionData, ind) => (
        <ActionCard
          key={ind}
          type={actionData.type}
          icon={actionData.icon}
          name={actionData.name}
          date={actionData.date}
        />
      ))}
    </div>
  );
};

export default Timeline;
