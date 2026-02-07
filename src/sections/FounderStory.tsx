const FounderStory = () => {
  return (
    <section className="w-full my-16 sm:my-20 px-4">
      <div className="z-10 flex flex-col items-center w-full max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center leading-tight">
          I Built Momentum Mastery After{" "}
          <span className="text-lime-400">Hitting My Own Ceiling</span>
        </h2>
        <div className="space-y-6 text-base sm:text-lg bg-backgroundC-card ring-2 ring-zinc-700 rounded-lg p-4 sm:p-6">
          <p>
            A few years ago, I was in the same spot as most coaches I work with
            now — working 12-hour days, juggling clients, and still stuck around{" "}
            <span className="font-bold">$10–12K/month</span>.
          </p>
          <p>
            I realized my “hard work” wasn’t the problem — it was{" "}
            <span className="text-lime-400 font-bold">
              the lack of structure
            </span>
            . Once I built a repeatable system for delivery and a predictable
            sales process, my income tripled — without increasing workload.
          </p>
          <p>
            That became the foundation for Momentum Mastery: a coaching program
            that helps coaches scale by{" "}
            <span className="font-bold">doing less, not more</span>.
          </p>
          <hr className="w-[80%] mx-auto opacity-30" />
          <p className="font-bold text-lime-400">
            Now, after working with over 100+ coaches, we’ve refined every piece
            of this model into a repeatable engine for consistent growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
