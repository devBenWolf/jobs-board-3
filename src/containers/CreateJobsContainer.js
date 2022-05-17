

import { useContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { ThemeContext } from "../contexts/ThemeContext";
import CreateJobs from "../components/CreateJobsComponent/CreateJobs";
import { CreateJobsMain } from "../components/CreateJobsComponent/CreateJobs/style/createJobsStyles";
import Company from "../components/CreateJobsComponent/Company";
import { CompanySection } from "../components/CreateJobsComponent/Company/style/companyStyles";
import { DescriptionSection } from "../components/CreateJobsComponent/Description/style/descriptionStyles";
import Description from "../components/CreateJobsComponent/Description";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { LogoSection } from "../components/CreateJobsComponent/Logo/style/logoStyles";
import Logo from "../components/CreateJobsComponent/Logo";
import { LogoBackgroundSection } from "../components/CreateJobsComponent/LogoBackground/style/logoBackgroundStyles";
import LogoBackground from "../components/CreateJobsComponent/LogoBackground";
import { PositionSection } from "../components/CreateJobsComponent/Position/style/positionStyles";
import Position from "../components/CreateJobsComponent/Position";
import { PostedAtSection } from "../components/CreateJobsComponent/PostedAt/style/postedAtStyles";
import PostedAt from "../components/CreateJobsComponent/PostedAt";
import { ContractSection } from "../components/CreateJobsComponent/Contract/style/contractStyles";
import Contract from "../components/CreateJobsComponent/Contract";
import { LocationSection } from "../components/CreateJobsComponent/Location/style/locationStyles";
import Location from "../components/CreateJobsComponent/Location";
import { WebsiteSection } from "../components/CreateJobsComponent/Website/style/websiteStyles";
import Website from "../components/CreateJobsComponent/Website";
import { ApplySection } from "../components/CreateJobsComponent/Apply/style/applyStyles";
import Apply from "../components/CreateJobsComponent/Apply";
import { RequirementContentSection } from "../components/CreateJobsComponent/RequirementContent/style/requirementContentStyles";
import RequirementContent from "../components/CreateJobsComponent/RequirementContent";
import { RequirementSkillsSection } from "../components/CreateJobsComponent/RequirementSkills/style/requirementSkillsStyles";
import RequirementSkills from "../components/CreateJobsComponent/RequirementSkills";

const CreateJobsContainer = () => {
    const [company, setCompany] = useState("")
    const [description, setDescription] = useState("")
    const [logo, setLogo] = useState("")
    const [logoBackground, setLogoBackground] = useState("")
    const [position, setPosition] = useState("")
    const [postedAt, setPostedAt] = useState("")
    const [contract, setContract] = useState("")
    const [location, setLocation] = useState("")
    const [website, setWebsite] = useState("")
    const [apply, setApply] = useState("")
    const [requirementContent, setRequirementContent] = useState("")

    const {themeBoolean} = useContext(ThemeContext)

    // database and collection to which we add the jobs
    const jobsCollectionRef = collection(db, "jobs")

    // navigate to homepage after submitting job data
    const navigate = useNavigate()

    const createJob = async () => {
        // add document to the collection along with with author id object
        await addDoc(jobsCollectionRef, {company, description, logo, logoBackground, author: 
            {name:  auth.currentUser.displayName, id: auth.currentUser.uid}})
            navigate("/")
    }

    return ( 
        <CreateJobsMain data-flow="2">
            <CreateJobs.PageTitle themeBoolean = {themeBoolean}>enter jobs data</CreateJobs.PageTitle>
            {/* Company info */}
            <CompanySection>
                <Company.CompanyTitle themeBoolean={themeBoolean}>company</Company.CompanyTitle>
                <Company.CompanyInput 
                    value    = {company} 
                    onChange = {(event) => setCompany(event.target.value)}    
                />
            </CompanySection>

            {/* Description info */}
            <DescriptionSection>
                <Description.Title themeBoolean={themeBoolean}>description</Description.Title>
                <Description.Input 
                    value    = {description} 
                    onChange = {(event) => setDescription(event.target.value)}
                />
            </DescriptionSection>
            
            {/* Logo info */}
            <LogoSection>
                <Logo.Title themeBoolean={themeBoolean}>Logo path</Logo.Title>
                <Logo.Input 
                    value    = {logo}
                    onChange = {(event) => setLogo(event.target.value)}
                />
            </LogoSection>

            {/* Logo Background info */}
            <LogoBackgroundSection>
                <LogoBackground.Title themeBoolean={themeBoolean}>Logo background color</LogoBackground.Title>
                <LogoBackground.Input 
                    value = {logoBackground}
                    onChange = {(event) => setLogoBackground(event.target.value)}
                />
            </LogoBackgroundSection>

            {/* Position info */}
            <PositionSection>
                <Position.Title themeBoolean={themeBoolean}>Position</Position.Title>
                <Position.Input
                    value = {position}
                    onChange = {(event) => setPosition(event.target.value)}
                />
            </PositionSection>

            {/* Time Posted info */}
            <PostedAtSection>
                <PostedAt.Title themeBoolean={themeBoolean}>Posted At:</PostedAt.Title>
                <PostedAt.Input
                    value = {postedAt}
                    onChange = {(event) => setPostedAt(event.target.value)}                    
                />
            </PostedAtSection>

            {/* Contract info */}
            <ContractSection>
                <Contract.Title themeBoolean={themeBoolean}>Contract Type</Contract.Title>
                <Contract.Input 
                    value = {contract}
                    onChange = {(event) => setContract(event.target.value)}                  
                />
            </ContractSection>

            {/* Location info */}
            <LocationSection>
                <Location.Title themeBoolean={themeBoolean}>Job Location</Location.Title>
                <Location.Input 
                    value = {location}
                    onChange = {(event) => setLocation(event.target.value)}                
                />
            </LocationSection>

            {/* Website info */}
            <WebsiteSection>
                <Website.Title themeBoolean={themeBoolean}>Website</Website.Title>
                <Website.Input 
                    value = {website}
                    onChange = {(event) => setWebsite(event.target.value)}                
                />
            </WebsiteSection>

            {/* Application link */}
            <ApplySection>
                <Apply.Title themeBoolean={themeBoolean}>Application Link</Apply.Title>
                <Apply.Input 
                    value = {apply}
                    onChange = {(event) => setApply(event.target.value)}                  
                />
            </ApplySection>

            {/* Requirement content */}
            <RequirementContentSection>
                <RequirementContent.Title themeBoolean={themeBoolean}>Requirement Content</RequirementContent.Title>
                <RequirementContent.Input 
                    value = {requirementContent}
                    onChange = {(event) => setRequirementContent(event.target.value)}                   
                />
            </RequirementContentSection>

            {/* Required Skills */}
            <RequirementSkillsSection>
                <RequirementSkills.Title themeBoolean={themeBoolean}>Required Skills</RequirementSkills.Title>
                <RequirementSkills.Input 
                    value = {requirementContent}
                    onChange = {(event) => setRequirementContent(event.target.value)} 
                />
                <RequirementSkills.PushButton>Add to skills</RequirementSkills.PushButton>
            </RequirementSkillsSection>
            <CreateJobs.Submit onClick = {createJob}>Submit</CreateJobs.Submit>
        </CreateJobsMain>
     );
}
 
export default CreateJobsContainer;