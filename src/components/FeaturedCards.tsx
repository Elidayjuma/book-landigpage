import React from "react";

const features = [
    {
        title: "Mindset Over Hype",
        description: "Learn why grit, discipline, and honest self-assessment matter more than buzzwords or funding rounds.",
        icon: "🧠",
    },
    {
        title: "Spot Real Pain",
        description: "Discover how to identify urgent, real-world problems that people will actually pay to solve.",
        icon: "🔥",
    },
    {
        title: "Test Before You Build",
        description: "Master the $0 prototype method and validate demand before investing time or money.",
        icon: "🛠️",
    },
    {
        title: "No-Code, No Excuses",
        description: "Use no-code tools and simple hacks to launch fast, even if you can't code.",
        icon: "⚡",
    },
    {
        title: "Distribution First",
        description: "Find and reach your first customers using channels you already have access to.",
        icon: "📣",
    },
    {
        title: "Monetize Early",
        description: "Learn how to ask for money early, pre-sell ideas, and prove value before scaling.",
        icon: "💸",
    },
    {
        title: "Operate Lean",
        description: "Understand the basics of unit economics and how to survive when resources are scarce.",
        icon: "📉",
    },
    {
        title: "Momentum, Not Magic",
        description: "Build consistency, document your journey, and keep moving even when traction is slow.",
        icon: "🚀",
    },
    {
        title: "Stoic Survival",
        description: "Apply stoic principles to stay focused, resilient, and in control—no matter what.",
        icon: "🏛️",
    },
];

const FeatureCards: React.FC = () => (
    <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">What You&apos;ll Learn</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
                    >
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default FeatureCards;