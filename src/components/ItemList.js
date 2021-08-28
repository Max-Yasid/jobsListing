import styled, { css } from "styled-components";
import './ItemList.css';

const Container = styled.li`
    width: 100%;
    max-width: 90vw;
    background-color: white;
    display: grid;
    grid-template-columns: .01fr 1fr;
    padding: 0;
    box-shadow: 0px 1px 20px var(--dark-cyan-shadow);
    border-radius: 3px;
`;

const LeftCyanLine = styled.div`
    width: 3px;
    border-radius: 3px 0px 0px 3px;
    ${props => props.colored && css`
        background-color: var(--Desaturated-Dark-Cyan);`
    }
`;

const ImageContainer = styled.section`
    display: grid;
    place-items: center;
    width: 100px;
    position: relative;
    @media only screen and (max-width: 400px){
        margin-top: -50px;
        display: inline-block;
        padding-left: 10px;
    }
`;

const Badge = styled.span`
    color: white;
    padding: 6px 8px 4px 8px;
    font-size: .5em;
    border-radius: 30px;
    font-family: var(--main-font);
    text-align: center;
    margin: 0 4px 0 0;
    vertical-align: auto;
    ${props => props.new && css`
        background-color: var(--Desaturated-Dark-Cyan);
    `}
    ${props => props.featured && css`
        background-color: var(--Very-Dark-Grayish-Cyan);
    `}
`;

const GreyCircle = styled.span`
    width: 3px;
    height: 3px;
    border-radius: 100px;
    background-color: var(--Dark-Grayish-Cyan);
    margin-top: 1px;
`;

const FilterBadge = styled.span`
    background-color: var(--Light-Grayish-Cyan);
    color: var(--Desaturated-Dark-Cyan);
    font-family: var(--main-font);
    font-weight: 700;
    font-size: .7em;
    padding: 7px;
    cursor: pointer;
    :hover{
        background-color: var(--Desaturated-Dark-Cyan);
        color: var(--Light-Grayish-Cyan);
    }
`;

    export default function ItemList({ addFilter, jobInfo }){
    const logoSrc = jobInfo.logo.replace("./", "/");
    return (
        <>
            <br />
            <br />
            <Container>
                { (jobInfo.id === 1 || jobInfo.id === 2) ? <LeftCyanLine colored/> : <LeftCyanLine />}
                
                <div className="content">
                    <ImageContainer>
                        <img className="entreprise-logo" src={logoSrc} width={80} height={80} alt="enterprise"/>
                    </ImageContainer>
                    <section className="job-info">
                        <div className="enterprise-badges">
                            <span className="enterprise-name">{jobInfo.company}</span>
                            <div className="badges">
                                {jobInfo.new && 
                                    <Badge new>NEW!</Badge>
                                }
                                {jobInfo.featured && 
                                    <Badge featured>FEATURED</Badge>
                                }
                            </div>
                        </div>
                        <div className="job-title">
                            {jobInfo.position}
                        </div>
                        <div className="secondary-info">
                            <span>{jobInfo.postedAt}</span>
                                <GreyCircle />
                            <span>{jobInfo.contract}</span>
                                <GreyCircle />
                            <span>{jobInfo.location}</span>
                        </div>
                    </section>
                    {window.screen.width < 700 && (<section className="mobile-line-separator"><hr /></section>)}
                    <section className="filter-badges">
                        {jobInfo.role && <FilterBadge onClick={() => addFilter(jobInfo.role)}>{jobInfo.role}</FilterBadge>}
                        {jobInfo.level && <FilterBadge onClick={() => addFilter(jobInfo.level)}>{jobInfo.level}</FilterBadge>}
                        {jobInfo.tools.map((tool, i) => {
                            return (<FilterBadge onClick={() => addFilter(tool)} key={i}>{tool}</FilterBadge>)
                        })}
                        {jobInfo.languages.map((language, i) => {
                            return (<FilterBadge onClick={() => addFilter(language)} key={i}>{language}</FilterBadge>)
                        })}
                    </section>
                </div>
            </Container>
        </>
    );
}