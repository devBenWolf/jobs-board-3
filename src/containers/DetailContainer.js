import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext"
import Company from "../components/DetailComponents/Company";
import { OuterDiv } from "../components/DetailComponents/Company/styles/companyStyles";
import { useParams } from "react-router-dom";
import data from "../data.json"
import { JobDiv } from "../components/DetailComponents/Job/styles/jobStyles";
import Job from "../components/DetailComponents/Job";

const DetailContainer = () => {
    const {themeBoolean} = useContext(ThemeContext)

    // useParams to access id of the url
    const params = useParams()
    const findJob = (id) => {
        return data.find((job) => job.id === id)
    }

    // store id integer
    const selectedJob = findJob(parseInt(params.jobId, 10))

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
                            <Job.Heading>{selectedJob.postedAt}<Job.HeadingSpan></Job.HeadingSpan>{selectedJob.contract}</Job.Heading>
                            <Job.Title themeBoolean={themeBoolean}>{selectedJob.position}</Job.Title>
                            <Job.Location>{selectedJob.location}</Job.Location>
                        </Job.InfoDiv>
                        <Job.ApplyDiv themeBoolean={themeBoolean}>
                            <Job.Apply>Apply Now</Job.Apply>
                        </Job.ApplyDiv>
                    </Job.HeadingDiv>
                    <Job.BodyDiv>
                        <Job.BodyText>{selectedJob.description}</Job.BodyText>
                        <Job.SectionTitle>Requirements</Job.SectionTitle>
                        <Job.BodyText>{selectedJob.requirements.content}</Job.BodyText>
                        <Job.UList>
                            {selectedJob.requirements.items.map((item) => (
                                <Job.ListItem key={item.length}>{item}</Job.ListItem>
                            ))}
                        </Job.UList>
                        <Job.SectionTitle>What You Will Do</Job.SectionTitle>
                        <Job.BodyText>{selectedJob.role.content}</Job.BodyText>
                        <Job.OList>
                            {selectedJob.role.items.map((item) => (
                                <Job.ListItem key={item.length}>{item}</Job.ListItem>
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
        </>
     );
}
 
export default DetailContainer;