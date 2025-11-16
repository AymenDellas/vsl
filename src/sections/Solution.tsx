import { FlickeringGrid } from "../../components/ui/flickering-grid";
import Cta from "../lib/Cta";

const Solution = () => {
  return (
    <section className="w-full py-12 px-4">
      <div className="relative max-w-4xl mx-auto">
        {/* Main card */}
        <div className="relative z-10 rounded-3xl overflow-hidden bg-linear-to-br from-lime-50 via-lime-50 to-lime-100 shadow-2xl shadow-lime-900/10">
          <FlickeringGrid
            className="z-0 absolute inset-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
          />

          <div className="relative z-10 p-8 md:p-12 lg:p-16 space-y-10">
            {/* Header badge */}
            <div className="flex justify-center -mt-4">
              <div className="inline-block px-8 py-3 rounded-full ">
                <h2 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">
                  That's exactly why I built{" "}
                  <span className="px-4 py-2 bg-lime-400 text-lime-950 shadow-2xl shadow-lime-900/80 rounded-lg ">
                    Momentum Mastery.
                  </span>
                </h2>
              </div>
            </div>

            {/* Main description */}
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <p className="text-4xl md:text-3xl  text-zinc-700 font-medium">
                A{" "}
                <span className="text-lime-700 font-bold">
                  12-week coaching accelerator
                </span>{" "}
                designed to help you scale sustainably — without the guesswork.
              </p>
              <p className="text-2xl md:text-xl text-zinc-600">
                We focus on clarity, systems, and sales psychology to help you
                book premium clients like clockwork.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 py-4">
              <div className="h-px w-24 bg-linear-to-r from-transparent to-lime-400"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900">
                But how?
              </h3>
              <div className="h-px w-24 bg-linear-to-l from-transparent to-lime-400"></div>
            </div>

            {/* Title for steps */}
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-zinc-900 leading-tight">
              The 3-Step Scaling Engine
              <br />
              <span className="text-lime-700">We'll Build Together</span>
            </h4>

            <ul className="text-zinc-900 text-lg md:text-xl list-disc space-y-6 max-w-3xl mx-auto">
              <li>
                <span className="font-bold ">Clarify & Reposition :</span> Nail
                your niche, redefine your messaging, and position yourself{" "}
                <span className="bg-lime-400 px-2">
                  as the only logical choice.
                </span>
              </li>
              <li>
                <span className="font-bold ">Systemize & Automate :</span>{" "}
                Replace chaos with structure using a{" "}
                <span className="font-semibold underline">
                  proven delivery system
                </span>{" "}
                that saves hours weekly.
              </li>
              <li>
                <span className="font-bold ">Scale & Multiply :</span> Implement
                our hybrid sales process to bring in{" "}
                <span className="bg-lime-400 px-2">
                  high-quality clients consistently.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-lime-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-lime-500/20 rounded-full blur-3xl -z-10"></div>
        <Cta text="Book Your Call to Build Your Own 3-Step Scaling Engine" />
      </div>
    </section>
  );
};

export default Solution;
