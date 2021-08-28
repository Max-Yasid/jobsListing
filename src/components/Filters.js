import styled from "styled-components";
import "./Filters.css";

const Container = styled.section`
    width: 1000px;
    max-width: 90vw;
    background-color: white;
    margin: 0 auto;
    font-family: var(--main-font);
    padding: 18px 30px;
    border-radius: 5px;
    box-shadow: 0px 1px 20px var(--dark-cyan-shadow);
    display: grid;
    grid-template-columns: 3fr .25fr;
`;

const Badge = styled.span`
    display:flex;
    flex-wrap: no-wrap;
    border-radius: 3px;
    overflow: hidden;
`;

const TextBadgeSection = styled.span`
    background-color: var(--Light-Grayish-Cyan);
    color: var(--Desaturated-Dark-Cyan);
    font-family: var(--main-font);
    font-weight: 700;
    font-size: .7em;
    padding: 7px;
`;
const RemoveBadgeSection = styled.span`
    height: 100%;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--Desaturated-Dark-Cyan);
    cursor: pointer;
`;

export default function Filters({ filters, removeAllFilters, removeFilter}){
    return (
        <Container>
            <div className="filters">
                {filters.map((filter, i) => 
                    <Badge key={i}>
                        <TextBadgeSection >{filter}</TextBadgeSection>
                        <RemoveBadgeSection onClick={() => removeFilter(filter)}>
                            <img src="/images/icon-remove.svg" width="13" height="13" alt="remove icon" />
                        </RemoveBadgeSection>
                    </Badge>
                )}
            </div>
            <div className="clear-filters">
                <button onClick={() => removeAllFilters()} className="btn-clear">Clear</button>
            </div>
        </Container>
    );
}