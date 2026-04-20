const HoriLine = () => {
  return (
    <div className="h-full overflow-hidden w-0.5 relative">
      <div
        className="flex flex-col w-full"
        style={{ height: "200%", animation: "horiLightSlide 2s linear infinite" }}
      >
        {[0, 1].map((i) => (
          <div key={i} className="flex flex-col w-full" style={{ height: "50%" }}>
            <div className="flex-1 w-full bg-linear-to-b from-fm-yellow/0 to-fm-yellow" />
            <div className="flex-1 w-full bg-linear-to-b from-fm-yellow to-fm-yellow/0" />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes horiLightSlide {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  );
};

export default HoriLine;
