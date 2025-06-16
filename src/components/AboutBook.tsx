import React from "react";
import { bookDetails } from "@/data/bookDetails"


const AboutBook: React.FC = () => (
    <section className="max-w-3xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Why This Playbook Exists</h2>
        <p className="mb-4">
            I used to be the guy on the stage. Funded. Applauded. Wearing the CEO title like armor. We had a big office, a growing team, and real traction. From the outside, it looked like we were winning. From the inside, I was slowly learning how fragile hype can be.
        </p>
        <p className="mb-4">
            Then it all fell apart. The money dried up. The runway ended. The energy of the room changed. Investors stopped replying. The team dissolved. And I was left with silence, shame, and a heavy question: <strong>What now?</strong>
        </p>
        <p className="mb-4">
            This playbook is my answer to that question.It's for anyone who's trying to build from the ground up — not with millions of dollars or a famous co-founder, but with grit, clarity, and a bias toward action. It's for the founder with no safety net. For the one who's figuring out what works while trying not to break. For the builder in the mud, not the one trending on tech blogs.
        </p>
        <p className="mb-4">
            If that's you, you're not alone. And you don't need to wait for validation, funding, or permission to start.
        </p>
        <h3 className="text-xl font-semibold mt-8 mb-2">Why I'm Writing This</h3>
        <p className="mb-4">
            Because I wish I had it when I started over. After everything collapsed, I found myself broke but wiser. Not in theory — in muscle. I learned what it meant to:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Deliver value without a team</li>
            <li>Ship imperfect but real products</li>
            <li>Monetize before overbuilding</li>
            <li>Operate leaner than lean</li>
        </ul>
        <p className="mb-4">
            I also learned how lonely it is to rebuild in silence. Everyone roots for the comeback story after it works, but no one gives you the map while you're still crawling through the mud.
        </p>
        <p className="mb-4">
            <strong>This is that map.</strong> It's not glossy. It's not cute. It won't win you likes. But it will help you find traction, clarity, and the courage to keep moving.
        </p>
        <h3 className="text-xl font-semibold mt-8 mb-2">Why Most Startup Advice Fails Founders Like You</h3>
        <p className="mb-4">
            Here's what no one tells you: Most startup playbooks are written from the top down. They assume you have one or more of the following:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
            <li>A product already built</li>
            <li>A team of engineers or co-founders</li>
            <li>Access to investors or wealthy networks</li>
            <li>6+ months of runway</li>
            <li>A personal brand that opens doors</li>
        </ul>
        <p className="mb-4">
            But what if you don't have any of that? What if you're working from a dusty room, paying bills with side gigs, raising a family, and trying to figure this all out in between? That was me.
        </p>
        <p className="mb-4">
            I wasn't “launching a startup.” I was trying to eat. And I realized — the advice for people on the main stage rarely helps the ones backstage.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
            <li>You don't need to “scale.” You need to sell.</li>
            <li>You don't need to “go viral.” You need five people to pay.</li>
            <li>You don't need a “north star metric.” You need to break even.</li>
        </ul>
        <p className="mb-4">
            This playbook is for that version of you. The version that can't afford to lie to yourself anymore.
        </p>
        <h3 className="text-xl font-semibold mt-8 mb-2">What This Guide Is (And Isn't)</h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
            <li>✅ It's honest.</li>
            <li>✅ It's based on lived experience, not recycled theory.</li>
            <li>✅ It's simple because survival doesn't allow for complexity.</li>
            <li>✅ It's built to be read and applied, not just bookmarked.</li>
            <li>❌ It's not a replacement for deep mentorship.</li>
            <li>❌ It's not “how to raise $1M” in 90 days.</li>
            <li>❌ It's not romantic about hustle culture or overnight wins.</li>
        </ul>
        <p className="mb-4">
            This is a survival guide for founders who are tired of pretending and ready to build, sell, and learn by doing.
        </p>
        <h3 className="text-xl font-semibold mt-8 mb-2">Why Stoicism?</h3>
        <p className="mb-4">
            Because when the hype fades, only discipline remains. Stoicism teaches that we should focus only on what we can control: our actions, our thoughts, our intentions. That's all founders really have — especially when money is low, morale is thin, and doubt creeps in.
        </p>
        <p className="mb-4">
            I've leaned on Stoic principles more in the last year than ever before:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Control what you can.</li>
            <li>Detach from outcomes.</li>
            <li>Accept hard truths.</li>
            <li>Act anyway.</li>
        </ul>
        <p className="mb-4">
            When you're in the mud, it's easy to romanticize how things used to be — or spiral over how far you've fallen. But neither changes the fact that the only way out is forward.
        </p>
        <blockquote className="italic border-l-4 border-gray-400 pl-4 mb-4">
            "Waste no more time arguing what a good man should be. Be one." — Marcus Aurelius<br />
            <span className="block mt-2">For us: Waste no more time overthinking what a real startup is. Build one.</span>
        </blockquote>
        <p>
            This book won't give you all the answers. But it will give you a compass. I've lived what I'm writing. I've sold before building. I've failed in public. I've rebuilt without applause. And I've learned how to move forward even when clarity is blurry and cash is low.<br />
            <strong>
                <a href={bookDetails.buyUrl} className="text-blue-600 hover:underline">Get your copy</a>
            </strong>

        </p>
    </section>
);

export default AboutBook;