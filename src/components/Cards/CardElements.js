import styled from "@emotion/styled";

export const Card = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  padding-bottom: 2rem;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  @media (min-width: 992px) {
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

export const CardLeft = styled.div`
  justify-self: left;
  height: 100%;
  img {
    object-fit: cover;
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    font-size: 1.5rem;
    padding-right: 5px;
    font-weight: 500;
  }
  
  h5 {
    padding-bottom: 0.5rem;
  }

  h6 {
    padding-bottom: 1rem;
  }

  .experience-pin {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  p {
    font-weight: 400;
    max-width: 95%;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.815);
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

export const TechCard = styled.div`
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 5px 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.815);
  cursor: default;
  box-shadow: 0px 2px 5px rgba(160, 170, 180, 0.6);
`;
