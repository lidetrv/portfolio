const SkillCard = ({ title, level }) => {
  return (
    <div className="bg-white p-4 shadow-md">
      <h4 className="text-lg font-bold">{title}</h4>
      <div className="bg-gray-300 h-2 rounded mt-2">
        <div
          className="bg-blue-600 h-2 rounded transition-all"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
