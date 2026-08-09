const WaveDivider = ({ from = "navy", to = "red" }: { from?: string; to?: string }) => {
  return (
    <div className={`bg-${from} leading-[0] overflow-hidden`}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className={`block w-full h-[40px] sm:h-[50px] md:h-[60px] fill-${to}`}
      >
        <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,25 1440,30 L1440,60 L0,60 Z" />
      </svg>
    </div>
  );
};

export default WaveDivider;
