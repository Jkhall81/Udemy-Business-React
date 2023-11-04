import Skill from "./Skill.jsx";

const SkillList = () => {
  return (
    <div>
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="Django" emoji="👌" color="red" />
      <Skill skill="flask" emoji="🗾" color="green" />
      <Skill skill="SQL" emoji="🎑" color="orange" />
    </div>
  );
};

export default SkillList;
