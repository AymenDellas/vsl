import Cta from "../lib/Cta";

const FinalCta = () => {
  return (
    <section className="w-full my-16 sm:my-20 px-4">
      <div className="z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
          Don’t Let Another Week Slip By Without{" "}
          <span className=" text-primaryC underline">Predictable Growth.</span>
        </h2>
        <div className="space-y-4 text-base sm:text-xl">
          <p className=" font-bold">
            Your next breakthrough client could already be watching your
            competitors’ funnel.
          </p>
          <p className="">
            Book a{" "}
            <span className="px-2 py-1 inline-block font-bold bg-lime-400 text-lime-950 shadow-2xl shadow-lime-900/80 rounded-lg">
              free Funnel Growth Call
            </span>{" "}
            and uncover exactly what’s keeping your coaching business stuck
            under <span className="font-bold underline">$30K/month.</span>
          </p>
          <p className="border-l-4 my-8 border-primaryC pl-4 italic">
            If you don’t walk away with at least three growth blockers
            identified and a clear roadmap to fix them — you owe nothing, and
            you’ll still keep the full action plan.
          </p>
          <Cta text="Book Your Funnel Growth Call Before Enrollment Closes!!" />

          <p className="text-accentC-warning font-semibold text-xl sm:text-2xl leading-relaxed text-center">
            Enrollment for the next cohort closes in{" "}
            <span className="bg-accentC-error text-white px-2 inline-block">
              3 days
            </span>
            , and spots are capped at{" "}
            <span className="bg-accentC-error text-white px-2 inline-block">
              15 coaches
            </span>{" "}
            to ensure hands-on support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
