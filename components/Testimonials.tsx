import Image from "next/image";

const testimonials = [
  {
    rating: 5,
    text: "The ChatGPT for Students module changed how I research and write. I save 5+ hours every week.",
    name: "Aarav S.",
    role: "Class 12 Student",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
  },
  {
    rating: 5,
    text: "Avatar's AI for HR course helped me automate resume screening. I now do in 30 minutes what used to take a full day.",
    name: "Sneha M.",
    role: "HR Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
  },
  {
    rating: 5,
    text: "I was scared of AI. Avatar made it feel friendly and useful. Now I use it every day for my small business.",
    name: "Rajesh K.",
    role: "Shop Owner, 52",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&q=80",
  },
  {
    rating: 5,
    text: "AI image generation, prompt engineering, and design workflows — Avatar covered it all in a way that actually made sense.",
    name: "Priya V.",
    role: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&q=80",
  },
  {
    rating: 5,
    text: "Learning ethical hacking with real labs felt like being inside a movie. The mentors were brilliant.",
    name: "Karan T.",
    role: "College Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-14">
        <span className="tag">Testimonials</span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy-800 mt-5 mb-4">
          Loved by Learners Across India
        </h2>
        <p className="text-navy-600 text-sm sm:text-base">Stories from students, professionals, and lifelong learners.</p>
      </div>

      <div className="relative">
        <div className="testimonial-track">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="min-w-[280px] sm:min-w-[340px] max-w-[340px] bg-cream p-5 sm:p-7 rounded-2xl border border-navy-100">
              <div className="flex gap-1 text-amber-500 mb-3 text-sm">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-navy-700 leading-relaxed mb-5 text-sm">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={44}
                  height={44}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-navy-800 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-navy-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
