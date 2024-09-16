import React from "react";
import { ExperienceList } from "../../data/EducationData";
import {
    Card,
    CardLeft,
    CardRight,
    TechCardContainer,
    TechCard,
  } from "../Cards/CardElements";
import ScrollAnimation from "react-animate-on-scroll";

function ExperienceCard() {
    return(
        <>
            {ExperienceList.map((list, index) => (
                <ScrollAnimation animateIn="fadeIn" key={index}>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Card style={{"grid-template-columns" : "2fr 4.5fr"}}>
                        <CardLeft>
                            <img src={list.img} alt={list.institute} height="300px"></img>
                        </CardLeft>
                        <CardRight>
                            <h4>{list.institute}</h4>
                            <h5>{list.occupation} </h5> 
                            <h5>{list.year} </h5>
                            {/* <h6>
                                <div className="experience-pin">
                                    <img src="./pin.png" alt="Location Pin" height="18px"/>
                                {list.location} 
                                </div>
                            </h6> */}
                            <TechCardContainer>
                                {list.skills.map((course, index) => (
                                    <TechCard key={index}>{course}</TechCard>
                                ))}
                            </TechCardContainer>
                        </CardRight>
                    </Card>

                    </div>
                </ScrollAnimation>
            ))}
        </>
    )
}

export default ExperienceCard;
