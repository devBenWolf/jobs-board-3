import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import CreateJobs from "../components/CreateJobsComponent/CreateJobs";
import { CreateJobsMain } from "../components/CreateJobsComponent/CreateJobs/style/createJobsStyles";
import Company from "../components/CreateJobsComponent/Company";
import { CompanySection } from "../components/CreateJobsComponent/Company/style/companyStyles";
import { DescriptionSection } from "../components/CreateJobsComponent/Description/style/descriptionStyles";
import Description from "../components/CreateJobsComponent/Description";
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
import { InputContext } from "../contexts/InputContext";
import { RoleContentSection } from "../components/CreateJobsComponent/RoleContent/style/roleContentStyles";
import RoleContent from "../components/CreateJobsComponent/RoleContent";

const CreateJobsContainer = () => {
    // functions
    const {addToSkills, removeFromSkills, handleCompany, handleDescription, handleLogo,handleLogoBackground, handlePosition, handlePostedAt, handleContract,
        handleLocation, handleWebsite, handleApply, handleRequirementContent, handleRequirementSkillsInput, handleRoleContent, handleRoleItems,
        // state hooks
        requirementSkillsArray, company, description, logo, logoBackground, position, postedAt, roleContent, roleItems, roleItemsArray, 
        contract, location, website, apply, requirementContent, requirementSkillsInput    
    } = useContext(InputContext)


    const {themeBoolean} = useContext(ThemeContext)

            // database and collection to which we add the jobs
            const jobsCollectionRef = collection(db, "jobs")

            // navigate to homepage after submitting job data
            const navigate = useNavigate()
    
    const createJob = async () => {
        // add document to the collection along with with author id object
        await addDoc(jobsCollectionRef, {
            company, description, logo, logoBackground, position, postedAt, 
            contract, location, website, apply, requirementContent, requirementSkillsArray, author: 
            {name:  auth.currentUser.displayName, id: auth.currentUser.uid}})
            localStorage.clear()
            navigate("/create-jobs")
    }

    return ( 
        <CreateJobsMain data-flow="2">
            <CreateJobs.PageTitle themeBoolean = {themeBoolean}>enter jobs data</CreateJobs.PageTitle>
            {/* Company info */}
            <CompanySection>
                <Company.CompanyTitle themeBoolean={themeBoolean}>company</Company.CompanyTitle>
                <Company.CompanyInput 
                    value    = {localStorage.getItem("Company") || company} 
                    onChange = {handleCompany}    
                />
            </CompanySection>

            {/* Description info */}
            <DescriptionSection>
                <Description.Title themeBoolean={themeBoolean}>description</Description.Title>
                <Description.Input 
                    value    = {localStorage.getItem("Description") || description} 
                    onChange = {handleDescription}
                />
            </DescriptionSection>
            
            {/* Logo info */}
            <LogoSection>
                <Logo.Title themeBoolean={themeBoolean}>Logo path</Logo.Title>
                <Logo.Input 
                    value    = {localStorage.getItem("Logo") || logo}
                    onChange = {handleLogo}
                />
            </LogoSection>

            {/* Logo Background info */}
            <LogoBackgroundSection>
                <LogoBackground.Title themeBoolean={themeBoolean}>Logo background color</LogoBackground.Title>
                <LogoBackground.Input 
                    value = {localStorage.getItem("LogoBackground") || logoBackground}
                    onChange = {handleLogoBackground}
                />
            </LogoBackgroundSection>

            {/* Position info */}
            <PositionSection>
                <Position.Title themeBoolean={themeBoolean}>Position</Position.Title>
                <Position.Input
                    value = {localStorage.getItem("Position") || position}
                    onChange = {handlePosition}
                />
            </PositionSection>

            {/* Time Posted info */}
            <PostedAtSection>
                <PostedAt.Title themeBoolean={themeBoolean}>Posted At:</PostedAt.Title>
                <PostedAt.Input
                    value = {localStorage.getItem("PostedAt") || postedAt}
                    onChange = {handlePostedAt}                    
                />
            </PostedAtSection>

            {/* Contract info */}
            <ContractSection>
                <Contract.Title themeBoolean={themeBoolean}>Contract Type</Contract.Title>
                <Contract.Input 
                    value = {localStorage.getItem("Contract") || contract}
                    onChange = {handleContract}                  
                />
            </ContractSection>

            {/* Location info */}
            <LocationSection>
                <Location.Title themeBoolean={themeBoolean}>Job Location</Location.Title>
                <Location.Input 
                    value = {localStorage.getItem("Location") || location}
                    onChange = {handleLocation}                
                />
            </LocationSection>

            {/* Website info */}
            <WebsiteSection>
                <Website.Title themeBoolean={themeBoolean}>Website</Website.Title>
                <Website.Input 
                    value = {localStorage.getItem("Website") || website}
                    onChange = {handleWebsite}                
                />
            </WebsiteSection>

            {/* Application link */}
            <ApplySection>
                <Apply.Title themeBoolean={themeBoolean}>Application Link</Apply.Title>
                <Apply.Input 
                    value = {localStorage.getItem("Apply") || apply}
                    onChange = {handleApply}                  
                />
            </ApplySection>

            {/* Requirement content */}
            <RequirementContentSection>
                <RequirementContent.Title themeBoolean={themeBoolean}>Requirement Content</RequirementContent.Title>
                <RequirementContent.Input 
                    value = {localStorage.getItem("RequirementContent") || requirementContent}
                    onChange = {handleRequirementContent}                   
                />
            </RequirementContentSection>

            {/* Required Skills */}
            <RequirementSkillsSection>
                <RequirementSkills.InputDiv data-flow="2">
                    <RequirementSkills.Title themeBoolean={themeBoolean}>Required Skills</RequirementSkills.Title>
                    <RequirementSkills.Input 
                        value = {localStorage.getItem("RequirementSkillsInput") || requirementSkillsInput}
                        onChange = {handleRequirementSkillsInput}                        
                    />
                    <RequirementSkills.PushButton onClick = {addToSkills}>Add to skills</RequirementSkills.PushButton>
                </RequirementSkills.InputDiv>
                    <RequirementSkills.UL>
                        {requirementSkillsArray.map((item, index) => (
                            <RequirementSkills.SkillDiv key = {item.id}>
                            <RequirementSkills.LI>{item.requirementSkillsInput}</RequirementSkills.LI>
                            <RequirementSkills.DeleteButton onClick = {() => removeFromSkills(index)}>Delete</RequirementSkills.DeleteButton>
                            </RequirementSkills.SkillDiv>
                        ))}                      
                    </RequirementSkills.UL>        
            </RequirementSkillsSection>
            <RoleContentSection data-flow="2">
                <RoleContent.Title themeBoolean={themeBoolean}>Role Summary</RoleContent.Title>
                <RoleContent.Input 
                    value = {localStorage.getItem("RoleContentContent") || roleContentContent}
                    onChange = {handleRoleContent}                
                />
            </RoleContentSection>
            <CreateJobs.Submit onClick = {createJob}>Submit</CreateJobs.Submit>
        </CreateJobsMain>
     );
}
 
export default CreateJobsContainer;