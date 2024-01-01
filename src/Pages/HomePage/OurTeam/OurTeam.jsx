import { useEffect, useState } from "react";
import TeamMember from "./TeamMember";
import SectionIntro from "../SectionIntro/SectionIntro";

const OurTeam = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("/data/team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);
  // console.log(team);
  return (
    <section id="outTeam" className="my-40">
      <SectionIntro
        sectionCategory="Team"
        sectionTitle="Meet Our Team"
        sectionDescription="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {team.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
