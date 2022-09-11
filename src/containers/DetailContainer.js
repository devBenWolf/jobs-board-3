import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext"
import Company from "../components/DetailComponents/Company";
import { OuterDiv } from "../components/DetailComponents/Company/styles/companyStyles";
import { useParams } from "react-router-dom";
import { JobDiv } from "../components/DetailComponents/Job/styles/jobStyles";
import Job from "../components/DetailComponents/Job";
import { DataContext } from "../contexts/DataContext";
import LoadingContainer from "./LoadingContainer";

const DetailContainer = () => {
    const {themeBoolean} = useContext(ThemeContext)
    const {localJobs} = useContext(DataContext)

    const[isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    })


    // useParams to access id of the url
    const params = useParams()
    const findJob = (id) => {
        return localJobs.find((job) => job.id === id)
    }
    

    // store id integer
    const selectedJob = findJob(params.jobId, 10)
    return ( 
        <>
            <OuterDiv
                key={selectedJob.id}
                themeBoolean={themeBoolean}
            >
                <Company.InnerDiv themeBoolean={themeBoolean}>
                    <Company.IconBackground backgroundColor={selectedJob.logoBackground}>
                        <Company.Icon src={selectedJob.logo}/>
                    </Company.IconBackground>
                    <Company.InfoDiv>
                        <Company.Name themeBoolean={themeBoolean}>{selectedJob.company}</Company.Name>
                        
                        {/* Remove spaces in company name, convert to lower case, add ".com" suffix */}
                        <Company.URL>{`${selectedJob.company.split(" ").join("").toLowerCase()}.com`}</Company.URL>
                    </Company.InfoDiv>
                        <Company.Site href={selectedJob.website}>Company Site</Company.Site>
                </Company.InnerDiv>
            </OuterDiv>
            <JobDiv>
                <Job.InnerDiv themeBoolean={themeBoolean}>
                    <Job.HeadingDiv>
                        <Job.InfoDiv>
                            <Job.Heading>{selectedJob.postDate}<Job.HeadingSpan></Job.HeadingSpan>{selectedJob.contract}</Job.Heading>
                            <Job.Title themeBoolean={themeBoolean}>{selectedJob.position}</Job.Title>
                            <Job.Location>{selectedJob.location}</Job.Location>
                        </Job.InfoDiv>
                        <Job.ApplyDiv themeBoolean={themeBoolean}>
                            <Job.Apply href={selectedJob.apply}>Apply Now</Job.Apply>
                        </Job.ApplyDiv>
                    </Job.HeadingDiv>
                    <Job.BodyDiv>
                        <Job.BodyText>{selectedJob.description}</Job.BodyText>
                        <Job.SectionTitle>Requirements</Job.SectionTitle>
                        <Job.BodyText>{selectedJob.requirementContent}</Job.BodyText>
                        <Job.UList>
                            {selectedJob.requirementSkillsArray.map((item) => (
                                <Job.ListItem key={item.id}>{item.requirementSkillsInput || item.name}</Job.ListItem>
                            ))}
                        </Job.UList>
                        <Job.SectionTitle>What You Will Do</Job.SectionTitle>
                        <Job.BodyText>{selectedJob.requirementContent}</Job.BodyText>
                        <Job.OList>
                            {selectedJob.roleItemsArray.map((item) => (
                                <Job.ListItem key={item.id}>{item.roleItemsInput || item.name}</Job.ListItem>
                            ))}
                        </Job.OList>
                    </Job.BodyDiv>
                </Job.InnerDiv>
                <Job.Foot themeBoolean={themeBoolean}>
                    <Job.FootInfoDiv>
                        <Job.FootTitle themeBoolean={themeBoolean}>{selectedJob.position}</Job.FootTitle>
                        <Job.FootName>{selectedJob.company}</Job.FootName>
                    </Job.FootInfoDiv>
                    <Job.FootDiv>
                        <Job.FootApply>Apply Now</Job.FootApply>
                    </Job.FootDiv>
                </Job.Foot>
            </JobDiv>
            <LoadingContainer isLoading = {isLoading} />
        </>
     );
}
 
export default DetailContainer;