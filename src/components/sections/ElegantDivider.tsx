const ElegantDivider = () => {
  return (
    <div className="flex items-center justify-center bg-transparent" style={{ paddingTop: "1.5rem", paddingBottom: "3rem" }}>
      <div className="flex items-center w-full max-w-[600px] px-6">
        {/* Left line */}
        <div
          className="flex-1 h-px"
          style={{
            background: "linear-gradient(to right, transparent, #C9A84C)",
          }}
        />
        {/* Diamond */}
        <div
          className="mx-4 h-[10px] w-[10px] rotate-45 shrink-0"
          style={{
            backgroundColor: "#C9A84C",
            boxShadow: "0 0 6px rgba(201,168,76,0.4)",
          }}
        />
        {/* Right line */}
        <div
          className="flex-1 h-px"
          style={{
            background: "linear-gradient(to left, transparent, #C9A84C)",
          }}
        />
      </div>
    </div>
  );
};

export default ElegantDivider;
