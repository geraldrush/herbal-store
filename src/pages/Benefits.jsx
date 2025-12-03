import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function Benefits() {
  const benefits = [
    {
      title: "Pain & Inflammation Relief",
      desc: "Cannabinoids offer natural analgesic and anti-inflammatory effects that help reduce chronic pain, joint stiffness, and muscle soreness."
    },
    {
      title: "Anxiety & Stress Reduction",
      desc: "CBD supports calmness and promotes emotional balance by interacting with the body's endocannabinoid system."
    },
    {
      title: "Improved Sleep Quality",
      desc: "The relaxing effects of cannabis leaf can help you fall asleep faster, sleep longer, and improve overall sleep quality."
    },
    {
      title: "Digestive Health Support",
      desc: "Helps soothe the digestive system, offering relief from nausea, cramps, bloating, and gastrointestinal discomfort."
    },
    {
      title: "Antioxidant Properties",
      desc: "Cannabis contains natural antioxidants that help neutralize harmful free radicals and support cellular health."
    },
    {
      title: "Immune System Support",
      desc: "Traditionally used to help strengthen natural immune defenses and ease cold or flu symptoms."
    },
    {
      title: "Neuroprotective Potential",
      desc: "Certain compounds may protect nerve cells, supporting long-term brain health and cognitive function."
    }
  ];

  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-herbal-700 mb-6">
        Cannabis Leaf Benefits
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Cannabis leaf—especially hemp high in CBD and low in THC—offers 
        powerful natural wellness benefits from stress relief to improved sleep.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-soft-lg p-6 rounded-2xl hover:shadow-xl transition-all"
          >
            <CheckCircleIcon className="h-8 w-8 text-herbal-500 mb-4" />
            <h3 className="text-xl font-semibold text-herbal-700 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-herbal-50 p-6 rounded-xl border border-herbal-100">
        <h2 className="text-2xl font-bold text-herbal-700 mb-2">
          Important Considerations
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Always consult a healthcare professional before using cannabis leaf
          products. Cannabis may interact with medications and can cause mild
          side effects such as drowsiness or dizziness, especially for
          individuals with pre-existing conditions.
        </p>
      </div>
    </div>
  );
}
