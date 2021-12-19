import React from "react";
import {
  TextAreaContainer,
  TextAreaWrapper,
  TextTopline,
  TextSubtitle,
  AreaWrapper,
  TextHeadline,
  BigStoryImgWrap,
  Img,
} from "./AnalysisElements";
import { CustomLink, CustomSub } from "../CustomCss";
import img from "../../images/Chart.png";

const AnalysisCarbonSection = () => {
  return (
    <>
      <TextAreaContainer>
        <TextAreaWrapper>
          <TextTopline data-aos="fade-down" data-aos-once="true">
            SITUATIONAL ANALYSIS FOR CARBON COLLECTIBLE NFTS
          </TextTopline>
          <AreaWrapper>
            <TextHeadline data-aos="fade-down" data-aos-once="true">
              Current State
            </TextHeadline>
            <div data-aos="fade" data-aos-once="true">
              <TextSubtitle>
                According to Wikipedia a{" "}
                <text style={{ fontWeight: "bold" }}>carbon offset</text> is a
                reduction in emissions of carbon dioxide or other{" "}
                <CustomLink
                  href="https://en.wikipedia.org/wiki/Greenhouse_gas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  greenhouse gases
                </CustomLink>{" "}
                made in order to compensate for emissions made elsewhere.
                <CustomLink
                  href="https://en.wikipedia.org/wiki/Carbon_offset#cite_note-wri-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [1][2][3]
                </CustomLink>{" "}
                <br />
                Offsets are measured in{" "}
                <CustomLink
                  href="https://en.wikipedia.org/wiki/Tonne"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tonnes
                </CustomLink>{" "}
                of{" "}
                <CustomLink
                  href="https://en.wikipedia.org/wiki/Global_warming_potential"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  carbon dioxide-equivalent
                </CustomLink>{" "}
                (CO<CustomSub>2</CustomSub>e).
              </TextSubtitle>
              <TextSubtitle>
                According to the{" "}
                <CustomLink
                  href="https://www.offsetguide.org/understanding-carbon-offsets/carbon-offset-programs/mandatory-voluntary-offset-markets/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Carbon Offset Guide
                </CustomLink>
                ,{" "}
                <text style={{ fontWeight: "bold" }}>
                  compliance carbon offset markets
                </text>{" "}
                are created and regulated by mandatory national, regional, or
                international carbon reduction regimes.{" "}
                <text style={{ fontWeight: "bold" }}>
                  <br />
                  Voluntary carbon offset markets
                </text>{" "}
                function outside of compliance markets and enable companies and
                individuals to purchase carbon offsets on a voluntary basis with
                no intended use for compliance purposes.
              </TextSubtitle>
              <TextSubtitle>
                The table below is an extract of some of the costs to establish
                a carbon forest project as determined by forest-trends.org -{" "}
                <CustomLink
                  href="https://www.forest-trends.org/wp-content/uploads/imported/building-forest-carbon-projects_business-guidance_9-13-11-pdf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Building Forest Carbon Projects Business Guidance"
                </CustomLink>
                . <br />
                Remote, disadvantaged forestry communities don't have the
                resources to comply with requirements for traditional carbon
                offsets.
              </TextSubtitle>
              <BigStoryImgWrap data-aos="fade-up" data-aos-once="true">
                <Img src={img} />
              </BigStoryImgWrap>
            </div>
            <TextHeadline data-aos="fade-down" data-aos-once="true">
              Gap
            </TextHeadline>
            <div data-aos="fade" data-aos-once="true">
              <TextSubtitle>
                Many mature forests are excluded from the traditional carbon
                offset industry for a number of reasons, including the fact that
                they are existing, and{" "}
                <text style={{ fontWeight: "bold" }}>not additional</text>, or
                because they cannot afford the high costs of compliance. <br />
                Many registries have complex and expensive{" "}
                <CustomLink
                  href="https://verra.org/project/vcs-program/rules-and-requirements/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  requirements
                </CustomLink>{" "}
                that crowd out poorer, disadvantaged forestry communities who
                cannot afford the very expensive fees charged by international{" "}
                <CustomLink
                  href="https://www.theguardian.com/environment/2010/aug/25/carbon-offset-consultancy-fees"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultants
                </CustomLink>
                . <br />
                Moreover, these registries will only certify projects that
                provide new or "additional" carbon sequestration. <br />
                This excludes many existing forests that have high carbon
                sequestration rates that are predictable but are regarded as
                "business as usual".
              </TextSubtitle>
              <TextSubtitle>
                Unfortunately, this creates a triple penalty for many
                disadvantaged forestry communities.
                <br />
                1. First, they chose to preserve their forests rather than
                leverage deforestation to trigger generations of compounded
                economic growth.
                <br />
                2. Then they were penalized by global warming, that was
                exacerbated by other communities who chose to cut down their
                forests to help fuel their industrial revolutions that
                dramatically increased CO2 pollution.
                <br />
                3. And now, the main registries, for traditional carbon offsets,
                will not certify these mature forests because their carbon
                sequestration is regarded as "business as usual" rather than
                additional. <br />
                Yet, if these disadvantaged communities had cut down their
                forests 200 years ago and benefited from generations of economic
                growth then started a reforestation program today, then these
                same registries would consider the reforestation project for
                certification. <br />
                Many people in these disadvantaged forestry communities are
                dismayed by these policies and see illegal logging as their only
                viable economic option.{" "}
                <text style={{ fontWeight: "bold" }}>
                  <br />
                  For disadvantaged forestry communities, "additionality"
                  appears to reward deforestation and encourage illegal logging.
                </text>
              </TextSubtitle>
              <TextSubtitle>
                Yet the literature supports the overwhelming value of mature
                forests as carbon sinks. <br />
                As an example,{" "}
                <CustomLink
                  href="https://www.globalforestwatch.org/blog/climate/forests-carbon-emissions-sink-flux/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Global Forest Watch
                </CustomLink>
                , who has no affiliation with this project but kindly makes
                satellite-based forestry data available for use, states the
                following....
              </TextSubtitle>
              <TextSubtitle>
                Overall, the data show that keeping existing forests standing
                remains our best hope for maintaining the vast amount of carbon
                that forests store and continuing the carbon sequestration that,
                if halted, will worsen the effects of climate change.
              </TextSubtitle>
              <TextSubtitle>
                While{" "}
                <CustomLink
                  href="https://www.wri.org/insights/want-grow-trees-consider-these-5-lessons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  planting new trees (the right way)
                </CustomLink>{" "}
                or{" "}
                <CustomLink
                  href="https://www.wri.org/insights/young-forests-capture-carbon-quicker-previously-thought"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  letting them regrow naturally
                </CustomLink>{" "}
                can play a role in mitigating climate change (and helping
                communities adapt to its effects), the new data show that
                forests that have sprouted up in the past 19 years represent
                less than 5% of the current global forest carbon sink.
              </TextSubtitle>
              <TextSubtitle>
                Although important to give these young forests the chance to
                grow into old ones,{" "}
                <text style={{ fontWeight: "bold" }}>
                  protecting primary and mature secondary forests today is most
                  important for curbing climate change.
                </text>
              </TextSubtitle>
              <TextSubtitle>
                <text style={{ fontWeight: "bold" }}>
                  We believe that disadvantaged communities who have healthy,
                  remote, mature forests that are existing and not additional,
                  should be celebrated not subjected to serial penalization.{" "}
                  <br />
                  Carbon Collectible NFTs are designed to right this wrong and
                  provide equal access to forestry revenue.
                </text>
              </TextSubtitle>
              <TextSubtitle>
                We therefore see a need to reward communities who chose the
                global benefits of forest preservation over the local benefits
                of generational economic growth, who also cannot afford to
                comply with current restrictive and excessively expensive carbon
                credit programs.
              </TextSubtitle>
            </div>
            <TextHeadline data-aos="fade-down" data-aos-once="true">
              Future State
            </TextHeadline>
            <div data-aos="fade-up" data-aos-once="true">
              <TextSubtitle>
                Our vision for the future state is a Carbon Collectible NFT that
                empowers you to mint a carbon allocation that gives you future
                rights to the carbon sequestration equivalent of approximately 5
                Metric Tonnes of CO<CustomSub>2</CustomSub> per year. <br />
                This carbon sequestration rate is equivalent to 5 digital carbon
                offsets per year.{" "}
                <text style={{ fontWeight: "bold" }}>
                  <br />A "digital" carbon offset is defined herein as 1 MT of
                  projected carbon sequestration estimated using remote digital
                  technology, such as satellite imagery
                </text>
                .{" "}
                <CustomLink
                  href="https://www.conservation.org/carbon-footprint-calculator#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br />
                  Calculate
                </CustomLink>{" "}
                your personal carbon footprint to determine how many Carbon
                Collectible NFTs you require to offset your carbon emissions.
              </TextSubtitle>
              <TextSubtitle>
                We use a portion of your NFT purchase price to sponsor 1 hectare
                of mature trees. <br />
                This enables the local forestry communities to:
                <br />
                1. Prevent illegal logging of trees,
                <br />
                2. Implement forest management activities that help the forest
                qualify for a certified carbon offset program and
                <br />
                3. Fund a social innovation studio (like a startup accelerator)
                that leverages innovations like the blockchain, DeFi, Stable
                Coins and DAOs to finance and grow businesses that reimagine
                profitable and sustainable solutions to local social challenges.
              </TextSubtitle>
            </div>
          </AreaWrapper>
        </TextAreaWrapper>
      </TextAreaContainer>
    </>
  );
};

export default AnalysisCarbonSection;
