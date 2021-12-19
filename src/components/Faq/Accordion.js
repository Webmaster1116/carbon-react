import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CustomLink } from "../CustomCss";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className="faq-font"
            variant="h6"
            sx={{ width: "80%", flexShrink: 0, color: "#808080" }}
          >
            Is a Carbon Collectible NFT a Carbon Credit
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No. We use a portion of the price you pay for your Carbon
            Collectible NFT to sponsor 1 hectare of trees. According to remote
            satellite data, the carbon sequestered by one hectare of mature
            trees, in the Volta Region of Ghana, is equivalent to 4 carbon
            offsets.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className="faq-font"
            variant="h6"
            sx={{ width: "80%", flexShrink: 0, color: "#808080" }}
          >
            Is satellite imagery accurate enough for traditional carbon offsets
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No. You typically need to supplement satellite imagery with manual
            measurements on the ground for traditional carbon offsets. However,
            this is not possible for inaccessible forestry areas and not
            advisable for areas that may be harmed by human activity. Rather,
            digital carbon offsets form a new category of offsets that offers
            equal access to revenue for excluded forests that are very efficient
            carbon sinks.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className="faq-font"
            variant="h6"
            sx={{ width: "100%", flexShrink: 0, color: "#808080" }}
          >
            Does “additionality” exclude some mature forests from traditional
            carbon offset programs?
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. The carbon sequestered by many mature forests does not qualify
            for traditional carbon offset programs. It is regarded as “existing”
            carbon sequestration rather than “Additional”. Traditional carbon
            offset programs are designed to reward additional carbon
            sequestration not business-as-usual.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className="faq-font"
            variant="h6"
            sx={{ width: "100%", flexShrink: 0, color: "#808080" }}
          >
            What problem is solved by Carbon Collectible NFTs?
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The objective of Carbon Collectible NFTs is to provide equity and
            inclusion for climate finance.
            <br />
            The carbon sequestered by many mature forests is excluded from
            traditional carbon offset programs because it is not “additional”.
            Conversely, Carbon Collectible NFTs provide inclusive funding for
            mature forests, which are Earth’s best carbon sink.
            <br />
            Carbon Collectible NFTs also provide equal access to climate finance
            by eliminating certification costs. Now, even low-income, remote
            forestry communities can monetize their carbon sequestration. We
            eliminate certification costs by using carbon sequestration rates
            that are calculated by an independent third party, based on
            satellite imagery and artificial intelligence algorithms. While this
            reduces accuracy, it eliminates the high cost of manual
            measurements. In addition, a SEC/FINRA registered Broker Dealer
            validates the forestry community’s right-of-sale.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className="faq-font"
            variant="h6"
            sx={{ width: "80%", flexShrink: 0, color: "#808080" }}
          >
            Will 1 NFT offset my carbon footprint
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can use a third party calculator to estimate your personal
            carbon footprint. Then you can decide how many Carbon Collectible
            NFTs you should buy to offset your personal carbon footprint.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className="faq-font"
            variant="h6"
            sx={{ width: "80%", flexShrink: 0, color: "#808080" }}
          >
            Do I own the graphical rights to my NFT?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The artwork for your NFT is licensed under a{" "}
            <CustomLink href="https://creativecommons.org/licenses/by-sa/4.0/">
              CC BY-SA 4.0 license.
            </CustomLink>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
