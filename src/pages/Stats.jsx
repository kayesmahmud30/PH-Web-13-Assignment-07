import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { ActionContext } from "../context/actionContext/ActionContext";
import { useContext } from "react";
import Empty from "../components/ui/Empty";

const Stats = () => {
  const { action } = useContext(ActionContext);

  const callData = action.filter((actionData) => actionData.type === "call");
  const textData = action.filter((actionData) => actionData.type === "text");
  const videoData = action.filter((actionData) => actionData.type === "video");

  const data = [
    { name: "Call", value: callData.length, fill: "#244d3f" },
    { name: "Text", value: textData.length, fill: "#7f37f5" },
    { name: "video", value: videoData.length, fill: "#37a163" },
  ];

  return (
    <>
      {!action.length ? (
        <Empty children="Nothing Added in The Status Yet" />
      ) : (
        <div className="min-h-screen max-w-325 mx-auto py-20 px-5">
          <h2 className="text-4xl md:text-5xl font-bold">
            Friendship Analytics
          </h2>

          <div className="px-5 py-9 bg-white shadow-sm rounded-sm mt-6">
            <h3 className="text-[#244D3F] text-xl font-medium">
              By Interaction Type
            </h3>

            <div className="flex justify-center items-center mt-10">
              <PieChart
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  maxHeight: "80vh",
                  aspectRatio: 1,
                }}
              >
                <Pie
                  data={data}
                  innerRadius="76%"
                  outerRadius="100%"
                  cornerRadius="5%"
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive
                />
                <Tooltip />
                <Legend iconType="circle" />
              </PieChart>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Stats;
