const marqueeItems = [
  "AUTHENTIC Pakistani CUISINE",
  "FRESH INGREDIENTS DAILY",
  "ONLINE ORDERING AVAILABLE",
  "CATERING SERVICES",
  "DOHA QATAR LOCATION",
  "PICKUP IN 15 MINUTES",
];

export default function Marquee() {
  const content = marqueeItems.join(" \u2022 ");

  return (
    <div className="bg-charcoal py-3 overflow-hidden marquee-container">
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        <span className="font-label font-medium text-xs tracking-[0.15em] text-ivory/80 mr-8">
          {content} \u2026 {content} \u2026
        </span>
        <span className="font-label font-medium text-xs tracking-[0.15em] text-ivory/80 mr-8">
          {content} \u2026 {content} \u2026
        </span>
      </div>
    </div>
  );
}
