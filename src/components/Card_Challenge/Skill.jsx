const Skill = ({ skill, emoji, color }) => {
  return (
    <div style={{ backgroundColor: color }}>
      <span>{skill}</span> <span>{emoji}</span>
    </div>
  );
};

export default Skill;
