import React, { useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("shrathi414@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)", // 2 columns to fit 4 cards
              gap: "40px"
            }}
          >
            {/* Email Card */}
            <div className="Card" style={{ padding: "20px", textAlign: "center", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
              <Email>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <img 
                  src="mail-logo.png" 
                  alt="Email" 
                  style={{ width: "40px", height: "40px", marginRight: "20px" }} 
                />
                  <span>shrathi414@gmail.com</span>
                  <div style={{ display: "flex", alignItems: "center", fontSize: '1.5rem'}}>
                    <Tooltip
                      PopperProps={{
                        disablePortal: true,
                      }}
                      open={showTooltip}
                      onClose={() => setShowTooltip(false)}
                      title="Copied!"
                      TransitionComponent={Zoom}
                      disableFocusListener
                      disableHoverListener
                      disableTouchListener
                      placement="bottom"
                    >
                      <IconButton onClick={copyToClipboard}>
                        <MdContentCopy size={15} style={{ cursor: "pointer", color: "#151418"}} />
                      </IconButton>
                    </Tooltip>
                    {/* <a
                      className="btn PrimaryBtn btn-shadow"
                      href="mailto:shrathi414@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginLeft: "10px" }}
                    >
                      Send Email
                    </a> */}
                  </div>
                </div>
              </Email>
            </div>

            {/* LinkedIn Card */}
            <div 
              className="Card" 
              style={{
                padding: "20px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                cursor: "pointer",
                size: "80px"
              }}
              onClick={() => window.open("https://www.linkedin.com/in/shreyarathi03", "_blank")}
            >
              <img 
                src="linkedin-logo.png" 
                alt="LinkedIn" 
                style={{ width: "40px", height: "40px", marginRight: "20px" }} 
              />
              <span style={{ size: '40px'}}>
                shreyarathi03
              </span>
            </div>

            {/* GitHub Card */}
            <div 
              className="Card" 
              style={{
                padding: "20px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                cursor: "pointer",
                size: "80px"
              }}
              onClick={() => window.open("https://github.com/shreya-rathi", "_blank")}
            >
              <img 
                src="github-logo.png" 
                alt="GitHub" 
                style={{ width: "40px", height: "40px", marginRight: "20px" }} 
              />
              <span style={{ size: '40px'}}>
                shreya-rathi
              </span>
            </div>

            {/* Behance Card */}
            <div 
              className="Card" 
              style={{
                padding: "20px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                cursor: "pointer",
                size: "80px"
              }}
              onClick={() => window.open("https://www.behance.net/shreyarathii", "_blank")}
            >
              <img 
                src="adobe-logo.png" 
                alt="Behance" 
                style={{ width: "40px", height: "40px", marginRight: "20px" }} 
              />
              <span style={{ size: '40px'}}>
                shreyarathii
              </span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
