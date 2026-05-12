export default function Logo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" aria-label="Avatar logo">
      <polygon points="60,10 110,80 80,80 30,150 0,150 60,10" fill="#1e3a5f"/>
      <polygon points="55,75 95,75 75,40" fill="#1e3a5f"/>
      <polygon points="95,55 145,150 65,150 95,55" fill="#8e9eb0"/>
    </svg>
  );
}
