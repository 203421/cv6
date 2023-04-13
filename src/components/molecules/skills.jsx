import React from 'react';
import SkillItem from '../atoms/SkillItem';

function Skills() {
  return (
    <div>
      <h2>Skills</h2>
      <SkillItem name="Skill A" level="Advanced" />
      <SkillItem name="Skill B" level="Intermediate" />
    </div>
  );
}

export default Skills;
