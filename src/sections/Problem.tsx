const Problem = () => {
  return (
    <section className="w-full my-20 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Stronger headline with visual emphasis */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight">
          You're great at coaching —{" "}
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-red-400/20 -rotate-1"></span>
            <span className="relative">but your business feels stuck.</span>
          </span>
        </h2>

        {/* Pain points with visual hierarchy */}
        <ul className="space-y-8 mt-12">
          <li className="flex gap-4 items-start group">
            <div className="shrink-0 w-3 h-3 bg-red-500 rounded-full mt-3 group-hover:scale-125 transition-transform"></div>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
              You've got the expertise, you've got the drive — but{" "}
              <span className="font-bold text-red-600">
                the leads are inconsistent.
              </span>
            </p>
          </li>

          <li className="flex gap-4 items-start group">
            <div className="shrink-0 w-3 h-3 bg-red-500 rounded-full mt-3 group-hover:scale-125 transition-transform"></div>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
              Some months you're thriving, others you're wondering{" "}
              <span className="font-bold text-red-600">
                where the next client will come from.
              </span>
            </p>
          </li>

          <li className="flex gap-4 items-start group">
            <div className="shrink-0 w-3 h-3 bg-red-500 rounded-full mt-3 group-hover:scale-125 transition-transform"></div>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
              You're constantly tweaking offers, playing with pricing, and
              burning hours in DMs — yet{" "}
              <span className="font-bold text-red-600">
                still not seeing predictable growth.
              </span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Problem;
