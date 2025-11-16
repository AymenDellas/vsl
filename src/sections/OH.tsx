import { useState } from "react";
const ObjectionHandling = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const objections = [
    {
      question:
        "I've already taken other business coaching programs — how is this different?",
      answer:
        "Most programs teach strategy in isolation. Momentum Mastery installs systems — the operational backbone that makes strategy stick.",
    },
    {
      question: "I don't have time for another 12-week program.",
      answer:
        "You don't need more time — you need leverage. Our frameworks cut wasted effort by up to 40%, freeing time while you scale.",
    },
    {
      question: "What if it doesn't work for me?",
      answer:
        "If you show up and implement, it will. But even if you don't enroll, your free Funnel Growth Call gives you a full audit and 3 growth levers you can act on immediately — no risk, no fluff.",
    },
    {
      question: "$5,000 is a big investment.",
      answer:
        "Yes, and that's intentional. The program pays for itself if it helps you land just one $5K client. Most clients recover their investment within the first 30 days.",
    },
  ];

  return (
    <section className="w-full my-20">
      <div className="z-10 flex flex-col items-center w-1/2 mx-auto px-6 space-y-8">
        <h2 className="text-5xl font-bold relative text-center">
          <span className="absolute w-full h-1/2 bg-lime-400/30 bottom-0 -z-10" />
          But...
        </h2>

        <div className="w-full space-y-4">
          {objections.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="relative p-6 bg-zinc-900 text-white rounded-xl cursor-pointer hover:bg-zinc-800 transition-all duration-300"
              >
                <div className="absolute inset-0 -z-10 bg-lime-400 rounded-xl translate-x-1 translate-y-1" />

                <div className="flex items-start justify-between gap-4">
                  <p className="text-xl font-bold flex-1">{item.question}</p>
                  <span className="text-lime-400 text-2xl font-bold shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-zinc-700">
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ObjectionHandling;
