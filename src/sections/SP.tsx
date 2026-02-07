import { Testimonial } from "../../components/ui/testimonial-card";

const SP = () => {
  const testimonials = [
    {
      name: "Sarah T.",
      role: "Executive Coach",
      company: "Amazun",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=sarah",
      testimonial:
        "I went from sporadic $8k months to $28k consistently in 10 weeks, without more ads.",
    },
    {
      name: "Daniel M.",
      role: "Business Coach",
      company: "Goggle",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=john",
      testimonial:
        "Finally a program that gave me structure and results. Booked 5 high-ticket clients in my first month.",
    },
  ];

  return (
    <section className="w-full px-4">
      <div className="z-10 flex flex-col items-center w-full max-w-5xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center leading-tight">
          This is what my clients say about{" "}
          <span className="px-4 py-2 bg-lime-400 text-lime-950 shadow-2xl shadow-lime-900/80 rounded-lg ">
            Momentum Mastery.
          </span>
        </h2>
        <div className="w-full py-6 sm:py-10">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 ">
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SP;
