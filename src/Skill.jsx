const Skill = ({ skillData }) => {
  const { skill, bgColor, emoji } = skillData;
  return (
    <>
      <div className="skill" style={{ backgroundColor: bgColor }}>
        <p>
          {skill} {emoji}
        </p>
      </div>
    </>
  );
};

export default Skill;
