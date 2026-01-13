import Categories from "@/Components/Home/Categories/Categories";
import Cta from "@/Components/Home/CTA/Cta";
import Hero from "@/Components/Home/Hero/Hero";
import HowItWorks from "@/Components/Home/HowItWorks/HowItWorks";
import WhatIsSkillSprint from "@/Components/Home/WhatIsSkillSprint/WhatIsSkillSprint";
import WhySkillSprint from "@/Components/Home/WhySkillSprint/WhySkillSprint";

export default function Home() {
  return <div>
    <Hero />
    <WhatIsSkillSprint />
    <Categories />
    <HowItWorks />
    <WhySkillSprint />
    <Cta />
  </div>;
}
