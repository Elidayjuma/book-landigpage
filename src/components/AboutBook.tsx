import React from "react";
import { bookDetails } from "@/data/bookDetails"
import BuyButton from '@/components/PaystackButton';

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
            This playbook is my answer to that question.It&apos;s for anyone who&apos;s trying to build from the ground up — not with millions of dollars or a famous co-founder, but with grit, clarity, and a bias toward action. It&apos;s for the founder with no safety net. For the one who&apos;s figuring out what works while trying not to break. For the builder in the mud, not the one trending on tech blogs.
        </p>
        <p className="mb-4">
            If that&apos;s you, you&apos;re not alone. And you don&apos;t need to wait for validation, funding, or permission to start.
        </p>
        <h3 className="text-xl font-semibold mt-8 mb-2">Why I&apos;m Writing This</h3>
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
            I also learned how lonely it is to rebuild in silence. Everyone roots for the comeback story after it works, but no one gives you the map while you&apos;re still crawling through the mud.
        </p>
        <p className="mb-4">
            <strong>This is that map.</strong> It&apos;s not glossy. It&apos;s not cute. It won&apos;t win you likes. But it will help you find traction, clarity, and the courage to keep moving.
        </p>
        <h3 className="text-xl font-semibold mt-8 mb-2">Why Most Startup Advice Fails Founders Like You</h3>
        <p className="mb-4">
            Here&apos;s what no one tells you: Most startup playbooks are written from the top down. They assume you have one or more of the following:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
            <li>A product already built</li>
            <li>A team of engineers or co-founders</li>
            <li>Access to investors or wealthy networks</li>
            <li>6+ months of runway</li>
            <li>A personal brand that opens doors</li>
        </ul>
        <p className="mb-4">
            But what if you don&apos;t have any of that? What if you&apos;re working from a dusty room, paying bills with side gigs, raising a family, and trying to figure this all out in between? That was me.
        </p>
        <p className="mb-4">
            I wasn&apos;t &ldquo;launching a startup.&rdquo; I was trying to eat. And I realized — the advice for people on the main stage rarely helps the ones backstage.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
            <li>You don&apos;t need to &ldquo;scale.&rdquo; You need to sell.</li>
            <li>You don&apos;t need to &ldquo;go viral.&rdquo; You need five people to pay.</li>
            <li>You don&apos;t need a &ldquo;north star metric.&rdquo; You need to break even.</li>
        </ul>
        <p className="mb-4">
            This playbook is for that version of you. The version that can&apos;t afford to lie to yourself anymore.
        </p>
        <h3 className="text-xl font-semibold mt-8 mb-2">What This Guide Is (And Isn&apos;t)</h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
            <li>✅ It&apos;s honest.</li>
            <li>✅ It&apos;s based on lived experience, not recycled theory.</li>
            <li>✅ It&apos;s simple because survival doesn&apos;t allow for complexity.</li>
            <li>✅ It&apos;s built to be read and applied, not just bookmarked.</li>
            <li>❌ It&apos;s not a replacement for deep mentorship.</li>
            <li>❌ It&apos;s not &ldquo;how to raise $1M&rdquo; in 90 days.</li>
            <li>❌ It&apos;s not romantic about hustle culture or overnight wins.</li>
        </ul>
        <p className="mb-4">
            This is a survival guide for founders who are tired of pretending and ready to build, sell, and learn by doing.
        </p>
        <h3 className="text-xl font-semibold mt-8 mb-2">Why Stoicism?</h3>
        <p className="mb-4">
            Because when the hype fades, only discipline remains. Stoicism teaches that we should focus only on what we can control: our actions, our thoughts, our intentions. That&apos;s all founders really have — especially when money is low, morale is thin, and doubt creeps in.
        </p>
        <p className="mb-4">
            I&apos;ve leaned on Stoic principles more in the last year than ever before:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Control what you can.</li>
            <li>Detach from outcomes.</li>
            <li>Accept hard truths.</li>
            <li>Act anyway.</li>
        </ul>
        <p className="mb-4">
            When you&apos;re in the mud, it&apos;s easy to romanticize how things used to be — or spiral over how far you&apos;ve fallen. But neither changes the fact that the only way out is forward.
        </p>
        <blockquote className="italic border-l-4 border-gray-400 pl-4 mb-4">
            &ldquo;Waste no more time arguing what a good man should be. Be one.&rdquo; — Marcus Aurelius<br />
            <span className="block mt-2">For us: Waste no more time overthinking what a real startup is. Build one.</span>
        </blockquote>
        <p>
            This book won&apos;t give you all the answers. But it will give you a compass. I&apos;ve lived what I&apos;m writing. I&apos;ve sold before building. I&apos;ve failed in public. I&apos;ve rebuilt without applause. And I&apos;ve learned how to move forward even when clarity is blurry and cash is low.<br />
        </p>
        <div className="mt-6 text-center">
            <BuyButton />
        </div>
    </section>
);

export default AboutBook;