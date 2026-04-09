import YellowSpike from "../../../assets/icons/spike-yellow-2.svg";

const GroupOfSpikes = () => {
  return (
    <div className="flex items-end">
      <div className="w-10 h-auto translate-x-10">
        <div className="w-full h-auto">
          <img
            src={YellowSpike}
            alt="Yellow Spike"
            className="w-full h-auto animate-spike-wave opacity-30 xl:opacity-100"
          />
        </div>
      </div>
      <div className="w-25 h-auto">
        <div className="w-full h-auto">
          <img
            src={YellowSpike}
            alt="Yellow Spike"
            className="w-full h-auto animate-spike-wave opacity-30 xl:opacity-100"
          />
        </div>
      </div>
      <div className="w-13 h-auto -translate-x-8">
        <div className="w-full h-auto">
          <img
            src={YellowSpike}
            alt="Yellow Spike"
            className="w-full h-auto animate-spike-wave opacity-30 xl:opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupOfSpikes;
