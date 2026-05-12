export default function StatsStrip() {
  const stats = [
    { value: "5,000+", label: "Learners Trained" },
    { value: "12+", label: "Industry Mentors" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "25+", label: "Live Workshops" },
  ];

  return (
    <section className="bg-cream border-y border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="font-display text-2xl sm:text-3xl text-navy-700">{stat.value}</div>
            <div className="text-xs sm:text-sm text-navy-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
