const { gradeMathPhysicsChemistry, gradeReligiousEducation, gradeEnglishSwahiliComputer,
     calculateGradesAndAverage } = require('../gradeFunctions');

test('gradeMathPhysicsChemistry function', () => {
    expect(gradeMathPhysicsChemistry(75)).toBe("A");
    expect(gradeMathPhysicsChemistry(65)).toBe("B");
    expect(gradeMathPhysicsChemistry(55)).toBe("C");
    expect(gradeMathPhysicsChemistry(45)).toBe("Pass");
    expect(gradeMathPhysicsChemistry(35)).toBe("Supp");
});

test('gradeReligiousEducation function', () => {
    expect(gradeReligiousEducation(85)).toBe("A");
    expect(gradeReligiousEducation(75)).toBe("B");
    expect(gradeReligiousEducation(65)).toBe("C");
    expect(gradeReligiousEducation(55)).toBe("Pass");
    expect(gradeReligiousEducation(45)).toBe("Supp");
});

test('gradeEnglishSwahiliComputer function', () => {
    expect(gradeEnglishSwahiliComputer(80)).toBe("A");
    expect(gradeEnglishSwahiliComputer(65)).toBe("B");
    expect(gradeEnglishSwahiliComputer(55)).toBe("C");
    expect(gradeEnglishSwahiliComputer(45)).toBe("Pass");
    expect(gradeEnglishSwahiliComputer(35)).toBe("Supp");
});

test('calculateGradesAndAverage function', () => {
    const studentScore = {name: "Yvonne Mbithe", math: 70, eng: 75, kis: 55, phy: 87, che: 60, re: 89, comp: 92};
    const expectedOutput = {
        name: 'Yvonne Mbithe',
        math: 'A',
        eng: 'A',
        kis: 'C',
        phy: 'A',
        che: 'B',
        re: 'A',
        comp: 'A',
        avgPts: 75
    };
    expect(calculateGradesAndAverage(studentScore)).toEqual(expectedOutput);
});
