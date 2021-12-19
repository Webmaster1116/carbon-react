import { Button } from "@mui/material";
import React from "react";
import {
  Column2,
  Img,
  Imgwrap,
  InfoContainer,
  InfoWrpper,
  Column1,
  InfoRow,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  TextWrapper,
} from "./InfoElements";
import img from "../../images/normal/svg1.svg";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  description,
  description2,
  description21,
  showButton,
  buttonLabel,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrpper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper data-aos="fade" data-aos-once="true">
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>Let&apos;s make a deal</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle darkText={darkText}>
                  {description2}
                  <br />
                  {description21}
                </Subtitle>
                <Subtitle darkText={darkText}>
                  Why not buy a carbon collectible NFT and obtain virtual and
                  digital rights to 1 hectare of our forest. <br />
                  This includes mixed reality rights for biodiversity, virtual
                  tourism and carbon sequestration. <br />
                  Just imagine the real world, metaverse and gaming
                  possibilities...... <br />
                  Let&apos;s make a win-win deal!
                </Subtitle>
                <BtnWrap showButton={showButton}>
                  <Button
                    size="medium"
                    to="home"
                    color="primary"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    variant="contained"
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <Imgwrap>
                <Img data-aos="fade" data-aos-once="true" src={img} alt={alt} />
              </Imgwrap>
            </Column2>
          </InfoRow>
        </InfoWrpper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
