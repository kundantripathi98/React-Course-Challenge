import Skill from "./Skill";
const skillData = [
  {
    skill: "Html5",
    bgColor: "red",
    emoji: "👍",
  },
  {
    skill: "CSS3",
    bgColor: "#93a832",
    emoji: "✌️",
  },
  {
    skill: "JavaScript",
    bgColor: "green",
    emoji: "😎",
  },
  {
    skill: "GSAP",
    bgColor: "purple",
    emoji: "🦾",
  },
  {
    skill: "Tailwind CSS",
    bgColor: "orange",
    emoji: "🤘",
  },
];

const SkillList = () => {
  return (
    <>
      <div className="skill-list">
        {skillData.map((item) => (
          <Skill skillData={item} />
        ))}
      </div>
    </>
  );
};

export default SkillList;
