const MarqueeText = () => {
  const text = "YOUR GAME IS LOADING \u00A0\u00A0\u00A0 CRIMSON RP \u00A0\u00A0\u00A0 YOUR GAME IS LOADING \u00A0\u00A0\u00A0 CRIMSON RP \u00A0\u00A0\u00A0 ";
  const repeated = text.repeat(6);

  return (
    <div className="fixed bottom-8 left-0 right-0 z-40 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap font-display text-sm uppercase tracking-[0.3em] text-primary/30">
        {repeated}
      </div>
    </div>
  );
};

export default MarqueeText;
