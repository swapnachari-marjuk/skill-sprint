import Categories from "@/Components/Home/Categories/Categories";
import Cta from "@/Components/Home/CTA/Cta";
import FeaturedChallenges from "@/Components/Home/FeaturedChallenges/FeaturedChallenges";
import Hero from "@/Components/Home/Hero/Hero";
import HowItWorks from "@/Components/Home/HowItWorks/HowItWorks";
import WhatIsSkillSprint from "@/Components/Home/WhatIsSkillSprint/WhatIsSkillSprint";
import WhySkillSprint from "@/Components/Home/WhySkillSprint/WhySkillSprint";
import Image from "next/image";

export default function Home() {
  return <div>
    <Hero />
    <WhatIsSkillSprint />
    <FeaturedChallenges />
    <Categories />
    <HowItWorks />
    <WhySkillSprint />
    <Cta />
  </div>;
}
