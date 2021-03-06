import React from 'react';
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Logo from '../Logo';

import LandingData from '../../../content/landing.json';

const RHalfCircle = styled.div`
  position: absolute;
  right: 0;
  overflow: hidden;
  transform-origin: 0% 0%;
  transform: scale(10) translateX(-45%) translateY(35%);
  z-index: 1;
  opacity: .4;

  @media (max-width: 834px) {
    transform: scale(10) translateX(-43%) translateY(85%);
    opacity: .5;
  }

  @media (max-width: 600px) {
    transform: scale(8) translateX(-40%) translateY(135%);
    opacity: .5;
  }

  @media (max-width: 412px) {
    transform: scale(6) translateX(-35%) translateY(200%);
    opacity: .2;
  }

  @media (max-width: 375px) {
    transform: scale(6) translateX(-35%) translateY(200%);
    opacity: .2;
  }
`;

const LogoWrap = styled(Logo)`
  filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .3));
  clip-path: inset(0 0 20% 0);
  width: 30px;
  height: 40px;
  opacity: .4;
`;

const Glowstick = styled.div`
  width: 1px;
  height: 4px;
  border: 1px solid #ee5622;
  background: #ee5622;
  box-shadow: 0 0 16px 2px #ee5622;
  position: absolute;
  z-index: 1;
  opacity: .2;
`;

const WorkDiv = styled.div`
  background: linear-gradient(to bottom, rgba(68,53,91,1) 0%, rgba(49,38,62,1) 100%);
  min-height: 50vh; 
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const WWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 6vh 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;

  h1 {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 2rem;
  }

  p {
    font-family: "Montserrat";
  }
`

const WTitle = styled.div`
  flex-grow: 2;
  width: 70vw;
  padding-left: 3vw;

  h1::after {
    width: 5vw;
    min-width: 74px;
    height: 1.3vh;
    background: #f7931e;;
    position: relative;
    margin-top: 1vh;
    display: block;
    content: ' ';
  }
`;

const Projects = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80vw;
  }

  @media (min-width: 1440px) {
    width: 70vw;
  }

  @media (min-width: 1920px) {
    width: 55vw;
  }
`;

const AniLinkWrap = styled(AniLink)`
  transition: all .3s ease-out;
  text-decoration: none;
  color: transparent;

  &:hover {
    box-shadow: 0 0 12px #ee5622;
  }

  @media (max-width: 834px) {
    margin-bottom: 5vh;
  }

  @media (max-width: 600px) {
    margin-bottom: 5vh;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ProjectSquare = styled.div`
  width: 320px;
  height: 320px;
  border: 1px solid #f7931e;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 1.5rem;
  background: url(
    data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAGElEQVQImWMwVLP7z4AN4JQgHRiq2f0HABy3BL2YaDYEAAAAAElFTkSuQmCC
  ) repeat;

  &:hover {
    background: url(
      data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAGElEQVQImWP4GiErxYAN4JQgHXyNkJUCABlEBI3kGfjaAAAAAElFTkSuQmCC
    ) repeat;
  }

  h2 {
    color: #f7931e;
    font-family: 'Inter';
    margin: 0 0 1rem 0;
    font-weight: 600;
  }

  p {
    font-family: 'Montserrat';
    font-size: .9rem;
    color: #fff;
  }

  &.fill {
    background-color: #f7931e;

    h2 {
      color: #fff;
    }
  }
`;

export const Work = ({ projects }) => {
  console.log(projects);

  return (
    <WorkDiv>
      <Glowstick style={{ height: '80px', width: '2px', left: `2.4vw`, transform: `translateY(-7vh)` }} />
      <Glowstick style={{ height: '140px', width: '2px', left: `8.3vw`, transform: `translateY(11vh)` }} />
      <WWrap>
        <WTitle>
          <h1>our latest work</h1>
          <p>{LandingData.work_section_subtitle}</p>
        </WTitle>
        <Projects>
        { 
          projects.map(p => {
            return (
              <AniLinkWrap paintDrip hex="#f7931e" to={`project/${p.node.fields.slug}`} >
                <ProjectSquare className={p.node.frontmatter.highlight ? 'fill' : ''}>
                  <h2>{p.node.frontmatter.title}</h2>
                  <p>{p.node.frontmatter.description}</p>
                </ProjectSquare>
              </AniLinkWrap>
            );
          }) 
        }
        </Projects>
      </WWrap>
      <Glowstick style={{ height: '40px', width: '2px', left: `90vw`, transform: `translateY(15vh)` }} />
      <Glowstick style={{ height: '120px', width: '2px', left: `80vw`, transform: `translateY(36vh)` }} />
      <Glowstick style={{ height: '60px', width: '2px', left: `25vw`, transform: `translateY(34vh)` }} />
      <RHalfCircle>
        <LogoWrap />
      </RHalfCircle>
    </WorkDiv>
  );
};