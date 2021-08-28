import styled from "styled-components";
import ItemList from "./../containers/ItemList";

const Container = styled.ul`
    list-style: none;
    margin: 0 auto;
    width: 1000px;
    max-width: 90vw;
    padding: 0;
`; 

export default function JobsList({ jobsList, filters }){
    let jobListFiltered = jobsList.filter((job) => {
        for(let i = 0; i < filters.length; i++){
            let isJobValid = false;
            if(filters[i] === job.role){
                console.log("role");
                isJobValid = true;
                continue;
            }
            if(filters[i] === job.level){
                console.log("level");
                isJobValid = true;
                continue;
            }
            if(job.languages.some((language => language === filters[i]))){
                isJobValid = true;
                console.log("language");
                continue;
            }
            if(job.tools.some((tool => tool === filters[i]))){
                isJobValid = true;
                console.log("tool");
                continue;
            }
            if(!isJobValid)
                return false;
        }
        return true;
    });
    return (
        <Container>
            {
                jobListFiltered.map(job =>
                    <ItemList key={job.id} jobInfo={job} />
                )
            }
        </Container>
    );
}