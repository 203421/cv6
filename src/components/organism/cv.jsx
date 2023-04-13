import React from 'react';
import Experience from '../components/organisms/Experience';
import Education from '../components/organisms/Education';
import Skills from '../components/organisms/Skills';
import Navigation from '../components/molecules/Navigation';

function CV() {
  return (
    <div>
      <Navigation />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}

export default CV;
