import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="bg-navy-700 text-white text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-2 text-center">
        <span>🚀 New Batch Starting Soon — Enroll Today &amp; Get <strong>20% Off</strong> on All AI Workshops</span>
        <Link href="#programs" className="hidden md:inline-flex items-center gap-1 underline underline-offset-4 hover:text-slate2-400">
          Limited seats <span>→</span>
        </Link>
      </div>
    </div>
  );
}
