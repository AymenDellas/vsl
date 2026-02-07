import { AuroraBackground } from "../../components/ui/aurora-background";
import { BorderTrail } from "../../components/ui/border-trail";
import { Play } from "lucide-react";
import Cta from "../lib/Cta";
export default function Hero() {
  return (
    <AuroraBackground className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 z-1" />
      <div className="z-10 flex flex-col items-center max-w-4xl text-center px-4 sm:px-6 py-16 sm:py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-headingC mb-4 leading-tight">
          Turn Your Coaching Business into a Predictable{" "}
          <span className="inline-block px-4 py-1 bg-primaryC text-zinc-800 rounded-lg">
            $30K/Month Machine
          </span>{" "}
          — Without Burning Out or Relying on Luck.
        </h1>
        <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-2xl">
          Join 100+ coaches who used Momentum Mastery to systemize their offers,
          attract premium clients, and regain control of their time.
        </p>

        <div className="relative aspect-video bg-zinc-800 w-full max-w-3xl mb-8 rounded-lg overflow-hidden">
          <span className="flex justify-center items-center h-full w-full text-zinc-800   ">
            <Play
              size={55}
              className="w-fit h-fit bg-zinc-700 p-4  rounded-full cursor-pointer hover:bg-zinc-600 transition-colors duration-100 ease-out"
            />
          </span>
          <BorderTrail
            style={{
              boxShadow:
                "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
            }}
            size={200}
          />
        </div>

        <Cta text="Book Your Free Funnel Growth Call" />
      </div>
    </AuroraBackground>
  );
}
