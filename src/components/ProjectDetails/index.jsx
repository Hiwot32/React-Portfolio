// ProjectModal.jsx
import { CloseRounded } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';
import {
  Container,
  Wrapper,
  Image,
  Title,
  Tags,
  Tag,
  Desc,
  ButtonGroup,
  Button,
} from './ProjectModalStayle';

const ProjectModal = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project?.image} />
          <Title>{project?.title}</Title>

          <Tags>
            {project?.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>

          <Desc>{project?.description}</Desc>

          <ButtonGroup>
            <Button dull href={project?.github} target="_blank">View Code</Button>
            <Button href={project?.webapp} target="_blank">View Live App</Button>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectModal;
