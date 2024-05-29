const gradeMathPhysicsChemistry = (score) => {
  if (score >= 70) return "A";
  if (score >= 60) return "B";
  if (score >= 50) return "C";
  if (score >= 40) return "Pass";
  return "Supp";
};

const gradeReligiousEducation = (score) => {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "Pass";
  return "Supp";
};

const gradeEnglishSwahiliComputer = (score) => {
  if (score >= 75) return "A";
  if (score >= 60) return "B";
  if (score >= 50) return "C";
  if (score >= 40) return "Pass";
  return "Supp";
};

const calculateGradesAndAverage = (student) => {
  const { name, math, eng, kis, phy, che, re, comp } = student;

  const mathGrade = gradeMathPhysicsChemistry(math);
  const engGrade = gradeEnglishSwahiliComputer(eng);
  const kisGrade = gradeEnglishSwahiliComputer(kis);  // Assuming Kiswahili uses the same table as English and Computer
  const phyGrade = gradeMathPhysicsChemistry(phy);
  const cheGrade = gradeMathPhysicsChemistry(che);
  const reGrade = gradeReligiousEducation(re);
  const compGrade = gradeEnglishSwahiliComputer(comp);

  const avgPts = Math.floor((math + eng + kis + phy + che + re + comp) / 7);

  return {
      name,
      math: mathGrade,
      eng: engGrade,
      kis: kisGrade,
      phy: phyGrade,
      che: cheGrade,
      re: reGrade,
      comp: compGrade,
      avgPts
  };
};

// console.log( calculateGradesAndAverage({name: "Yvonne Mbithe", math: 70, eng: 75, kis: 55, phy: 87, che: 60, re: 89, comp: 92}));
module.exports = { gradeMathPhysicsChemistry, gradeReligiousEducation, gradeEnglishSwahiliComputer, calculateGradesAndAverage };
