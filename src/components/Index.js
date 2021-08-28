import styled from "styled-components";
import Filters from "./../containers/Filters";
import JobsList from "./../containers/JobsList";

import jobsData from './../utils/data.json';

const IndexContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: var( --Light-Grayish-Cyan);
    min-height: (100vh -130px);
`;

const FiltersContainer = styled.div`
    width: fit-content;
    max-width: 90vw;
    margin: 0 auto;
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    margin-top: -32px;
`;

export default function Index({ fillJobsList, filters }){
    fillJobsList(jobsData);
    console.log(filters);
    return (
        <IndexContainer>
            { filters[0] &&
                <FiltersContainer>
                    <Filters />
                </FiltersContainer>
            }
            <JobsList />
        </IndexContainer>
    );
}

