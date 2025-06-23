import React, { useState } from 'react';
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer
} from './ProjectsStyle';

import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  // Only show filtered projects when toggle !== 'all'
  const filteredProjects =
    toggle === 'all'
      ? projects
      : projects.filter((item) => item.category === toggle);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Here are some of the projects I’ve worked on. These projects showcase the skills I’ve developed in full-stack development.
        </Desc>

        {/* You can re-add the toggle buttons later if needed */}

        <CardContainer>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
