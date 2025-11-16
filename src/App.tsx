import FinalCta from "./sections/FinalCta";
import Hero from "./sections/Hero";
import Problem from "./sections/Problem";
import Solution from "./sections/Solution";
import SP from "./sections/SP";

import WhatYouGet from "./sections/WYG";
import ObjectionHandling from "./sections/OH";
import FounderStory from "./sections/FounderStory";
const App = () => {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <SP />

      <WhatYouGet />
      <FounderStory />
      <ObjectionHandling />
      <FinalCta />
    </main>
  );
};

export default App;
