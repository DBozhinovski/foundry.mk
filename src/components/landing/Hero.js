import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";

const LContents = styled.div`
  paddingTop: 7vh;
  flexGrow: 2;
  min-height: calc(100vh - 5vh - 6vh);
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LWrap = styled.div`
  // flex-grow: 2; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70vw;
  min-height: calc(100vh - 5vh - 6vh);

  @media (min-width: 375px) {
    width: 100vw;
  }

  @media (min-width: 600px) {
    width: 90vw;
  }

  @media (min-width: 1440px) {
    width: 70vw;
  }
`;

const Text = styled.div`
  flex-grow: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const BigText = styled.h1`
  font-family: Inter;
  font-weight: 300;
  margin-top: 0;
  font-size: 2.8rem;
  padding-left: 3vw;
  padding-right: 1vw;
`;

const SmallText = styled.p`
  font-family: Montserrat;
  padding-left: 3vw;
`;

const Orange = styled.span`
  color: #ee5622;
  word-spacing: 0;
  font-weight: 600;
  text-shadow: 0 0 4px #ee5622;
`;

const WWU = styled.div`
  background: #f7931e;
  color: #fff;
  font-family: Inter;
  text-transform: uppercase;
  width: 200px;
  height: 120px;
  // padding-top: 20px;
  margin-left: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
  align-self: flex-start;
  // justify-self: end;
  // margin: auto;
  transition: all .3s ease-out;
  
  &:hover {
    box-shadow: 0 0 12px #ee5622;
  }
`;

const LinkOverride = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Hero = () => {
  return (
    <LContents className='lcontents'>
      <LWrap>
        <Text>
          <BigText>
            <b>A group of professionals</b><br/>
            ready to help with the <br/> <Orange>toughest</Orange> technical <Orange>challenges</Orange>.
          </BigText>
          <SmallText>
            Whether it's a full project, some assistance or an extension to your team - we're your people.
            Web applications big and small, distributed systems, serverless solutions, offline-first and PWAs - all done with the latest industry standards, professionally and on time.
          </SmallText>
        </Text>
        <WWU>
          <LinkOverride>Work with us</LinkOverride>
        </WWU>
      </LWrap>
    </LContents>
  );
}