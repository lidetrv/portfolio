const SkillCard = ({ title, level }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <div className="bg-gray-200 h-2 rounded mt-2">
        <div
          className="bg-blue-600 h-2 rounded transition-all duration-500 ease-in-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
