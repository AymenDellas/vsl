import Cta from "../lib/Cta";

const WYG = () => {
  const features = [
    {
      title: "12 Weeks of Intensive Coaching",
      description:
        "Live group calls and personalized audits to keep you executing, not overthinking.",
      highlight: "executing",
    },
    {
      title: "Offer & Funnel Redesign",
      description:
        "Clear positioning, pricing, and client journey built for consistent premium conversions.",
      highlight: "premium conversions",
    },
    {
      title: "Automated Delivery Templates",
      description:
        "The same frameworks used by 7-figure coaches to streamline onboarding and fulfillment.",
      highlight: "7-figure coaches",
    },
    {
      title: "Sales Process Playbook",
      description:
        "Proven scripts, DM flows, and objection frameworks that convert without pressure or sleaze.",
      highlight: "frameworks",
    },
    {
      title: "Private Support Community",
      description:
        "Direct feedback from our expert team and access to past client wins and templates.",
      highlight: "access to past client wins and templates",
    },
  ];

  return (
    <section className="w-full my-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-linear-to-br from-lime-50 to-lime-200 from-60% rounded-2xl shadow-xl overflow-hidden px-8 pb-8 md:px-12 md:pb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white bg-linear-to-t from-zinc-800 to-95% to-black rounded-b-lg w-fit mx-auto px-8 py-4 mb-10">
            What Do You Get?
          </h2>

          <ul className="space-y-6 ml-6">
            {features.map((feature, index) => (
              <li key={index} className="leading-relaxed">
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-2">
                  ∙ {feature.title}
                </h3>
                <p className="text-zinc-700 text-base md:text-lg">
                  {feature.description.split(feature.highlight)[0]}
                  <span className="bg-lime-300 px-1 font-semibold text-zinc-900">
                    {feature.highlight}
                  </span>
                  {feature.description.split(feature.highlight)[1]}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <Cta text="Book Your Free Growth Call to Unlock All the Program Details" />
      </div>
    </section>
  );
};

export default WYG;
