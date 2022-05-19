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
import { RoleItemsSection } from "../components/CreateJobsComponent/RoleItems/style/roleItemsStyles";
import RoleItems from "../components/CreateJobsComponent/RoleItems";


const CreateJobsContainer = () => {

    // functions
    const {addToSkills, addToRoleItems, removeFromSkills, handleCompany, handleDescription, handleLogo,handleLogoBackground, handlePosition, handlePostedAt, handleContract,
        handleLocation, handleWebsite, handleApply, handleRequirementContent, handleRequirementSkillsInput, handleRoleContent, handleRoleItemsInput,
        removeFromRoleItems,
        // state hooks
        requirementSkillsArray, company, description, logo, logoBackground, position, postedAt, roleContent, roleItemsInput, 
        contract, location, website, apply, requirementContent, requirementSkillsInput, roleItemsArray    
    } = useContext(InputContext)

    console.log(roleItemsArray)
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
        <CreateJobsMain data-flow="10">
            <CreateJobs.PageTitle themeBoolean = {themeBoolean}>enter jobs data</CreateJobs.PageTitle>
            {/* Company info */}
            <CreateJobs.SubDiv>
            <CompanySection>
                <Company.CompanyTitle themeBoolean={themeBoolean}>company</Company.CompanyTitle>
                <Company.CompanyInput 
                    value    = {localStorage.getItem("Company") || company} 
                    onChange = {handleCompany}    
                />
            </CompanySection>
            
            {/* Logo info */}
            <LogoSection>
                <Logo.Title themeBoolean={themeBoolean}>logo path</Logo.Title>
                <Logo.Input 
                    value    = {localStorage.getItem("Logo") || logo}
                    onChange = {handleLogo}
                />
            </LogoSection>

            {/* Logo Background info */}
            <LogoBackgroundSection>
                <LogoBackground.Title themeBoolean={themeBoolean}>logo background color</LogoBackground.Title>
                <LogoBackground.Input 
                    value = {localStorage.getItem("LogoBackground") || logoBackground}
                    onChange = {handleLogoBackground}
                />
            </LogoBackgroundSection>

            {/* position info */}
            <PositionSection>
                <Position.Title themeBoolean={themeBoolean}>position</Position.Title>
                <Position.Input
                    value = {localStorage.getItem("Position") || position}
                    onChange = {handlePosition}
                />
            </PositionSection>

            {/* Time Posted info */}
            <PostedAtSection>
                <PostedAt.Title themeBoolean={themeBoolean}>posted at:</PostedAt.Title>
                <PostedAt.Input
                    value = {localStorage.getItem("PostedAt") || postedAt}
                    onChange = {handlePostedAt}                    
                />
            </PostedAtSection>

            {/* Contract info */}
            <ContractSection>
                <Contract.Title themeBoolean={themeBoolean}>contract type</Contract.Title>
                <Contract.Input 
                    value = {localStorage.getItem("Contract") || contract}
                    onChange = {handleContract}                  
                />
            </ContractSection>

            {/* Location info */}
            <LocationSection>
                <Location.Title themeBoolean={themeBoolean}>job location</Location.Title>
                <Location.Input 
                    value = {localStorage.getItem("Location") || location}
                    onChange = {handleLocation}                
                />
            </LocationSection>

            {/* Website info */}
            <WebsiteSection>
                <Website.Title themeBoolean={themeBoolean}>website</Website.Title>
                <Website.Input 
                    value = {localStorage.getItem("Website") || website}
                    onChange = {handleWebsite}                
                />
            </WebsiteSection>

            {/* Application link */}
            <ApplySection>
                <Apply.Title themeBoolean={themeBoolean}>application link</Apply.Title>
                <Apply.Input 
                    value = {localStorage.getItem("Apply") || apply}
                    onChange = {handleApply}                  
                />
            </ApplySection>
            </CreateJobs.SubDiv>
            <CreateJobs.SubDiv>
            {/* Description info */}
            <DescriptionSection>
                <Description.Title themeBoolean={themeBoolean}>description</Description.Title>
                <Description.Input 
                    value    = {localStorage.getItem("Description") || description} 
                    onChange = {handleDescription}
                />
            </DescriptionSection>

            {/* Requirement content */}
            <RequirementContentSection>
                <RequirementContent.Title themeBoolean={themeBoolean}>requirement summary</RequirementContent.Title>
                <RequirementContent.Input 
                    value = {localStorage.getItem("RequirementContent") || requirementContent}
                    onChange = {handleRequirementContent}                   
                />
            </RequirementContentSection>

            {/* Required Skills */}
            <RequirementSkillsSection>
                <RequirementSkills.InputDiv data-flow="2">
                    <RequirementSkills.Title themeBoolean={themeBoolean}>specific skills</RequirementSkills.Title>
                    <RequirementSkills.Input 
                        value = {localStorage.getItem("RequirementSkillsInput") || requirementSkillsInput}
                        onChange = {handleRequirementSkillsInput}                        
                    />
                    <RequirementSkills.PushButton onClick = {addToSkills}>add to skills</RequirementSkills.PushButton>
                </RequirementSkills.InputDiv>
                    <RequirementSkills.UL>
                        {requirementSkillsArray.map((item, index) => (
                            <RequirementSkills.SkillDiv key = {item.id}>
                            <RequirementSkills.LI>{item.requirementSkillsInput}</RequirementSkills.LI>
                            <RequirementSkills.DeleteButton onClick = {() => removeFromSkills(index)}>delete</RequirementSkills.DeleteButton>
                            </RequirementSkills.SkillDiv>
                        ))}                      
                    </RequirementSkills.UL>        
            </RequirementSkillsSection>

            {/* Role Summary */}
            <RoleContentSection data-flow="2">
                <RoleContent.Title themeBoolean={themeBoolean}>role summary</RoleContent.Title>
                <RoleContent.Input 
                    value = {localStorage.getItem("RoleContent") || roleContent}
                    onChange = {handleRoleContent}                
                />
            </RoleContentSection>

            {/* Role specifics */}
            <RoleItemsSection>
                <RoleItems.InputDiv>
                    <RoleItems.Title>specific roles</RoleItems.Title>
                    <RoleItems.Input 
                        value = {localStorage.getItem("RoleItemsInput") || roleItemsInput}
                        onChange = {handleRoleItemsInput}                     
                    />
                    <RoleItems.PushButton onClick = {addToRoleItems}>add to rolls</RoleItems.PushButton>
                </RoleItems.InputDiv>
                <RoleItems.UL>
                        {roleItemsArray.map((item, index) => (
                            <RoleItems.Div key = {item.id}>
                            <RoleItems.LI>{item.roleItemsInput}</RoleItems.LI>
                            <RoleItems.DeleteButton onClick = {() => removeFromRoleItems(index)}>delete</RoleItems.DeleteButton>
                            </RoleItems.Div>
                        ))}                      
                    </RoleItems.UL> 
            </RoleItemsSection>
            </CreateJobs.SubDiv>
            <CreateJobs.Submit onClick = {createJob}>submit</CreateJobs.Submit>
        </CreateJobsMain>
     );
}
 
export default CreateJobsContainer;