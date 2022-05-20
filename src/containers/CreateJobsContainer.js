import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import CreateJobs from "../components/CreateJobsComponent/CreateJobs";
import { CreateJobsMain } from "../components/CreateJobsComponent/CreateJobs/style/createJobsStyles";
import TextInput from "../components/CreateJobsComponent/TextInput";
import { TextInputSection } from "../components/CreateJobsComponent/TextInput/style/textInputStyles";
import { TextAreaSection } from "../components/CreateJobsComponent/TextArea/style/textAreaStyles";
import TextArea from "../components/CreateJobsComponent/TextArea";
import { ListDisplaySection } from "../components/CreateJobsComponent/ListDisplay/style/ListDisplayStyles";
import ListDisplay from "../components/CreateJobsComponent/ListDisplay";
import { InputContext } from "../contexts/InputContext";



const CreateJobsContainer = () => {

    // functions
    const {addToSkills, addToRoleItems, removeFromSkills, clearAllInputs, handleCompany, handleDescription, handleLogo,handleLogoBackground, handlePosition, handlePostedAt, handleContract,
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
            contract, location, website, apply, requirementContent, requirementSkillsArray, roleItemsArray, 
            author: {name:  auth.currentUser.displayName, id: auth.currentUser.uid}})
            localStorage.clear()
            navigate("/create-jobs")
            clearAllInputs()
    }

    return ( 
        <CreateJobsMain data-flow="10">
            <CreateJobs.PageTitle themeBoolean = {themeBoolean}>enter jobs data</CreateJobs.PageTitle>
            {/* TextInput info */}
            <CreateJobs.TopSubDiv>
            <TextInputSection>
                <TextInput.Title themeBoolean={themeBoolean}>company name</TextInput.Title>
                <TextInput.Input 
                    value    = {localStorage.getItem("TextInput") || company} 
                    onChange = {handleCompany}
                    required    
                />
            </TextInputSection>
            
            {/* Logo info */}
            <TextInputSection>
                <TextInput.Title themeBoolean={themeBoolean}>logo path</TextInput.Title>
                <TextInput.Input 
                    value    = {localStorage.getItem("Logo") || logo}
                    onChange = {handleLogo}
                />
            </TextInputSection>

            {/* Logo Background info */}
            <TextInputSection>
                <TextInput.Title themeBoolean={themeBoolean}>logo background color</TextInput.Title>
                <TextInput.Input 
                    value = {localStorage.getItem("LogoBackground") || logoBackground}
                    onChange = {handleLogoBackground}
                />
            </TextInputSection>

            {/* position info */}
            <TextInputSection>
                <TextInput.Title themeBoolean={themeBoolean}>position</TextInput.Title>
                <TextInput.Input
                    value = {localStorage.getItem("Position") || position}
                    onChange = {handlePosition}
                />
            </TextInputSection>

            {/* Time Posted info */}
            <TextInputSection>
                <TextInput.Title themeBoolean={themeBoolean}>posted at:</TextInput.Title>
                <TextInput.Input
                    value = {localStorage.getItem("PostedAt") || postedAt}
                    onChange = {handlePostedAt}                    
                />
            </TextInputSection>

            {/* Contract info */}
            <TextInputSection>
                <TextInput.Title themeBoolean={themeBoolean}>contract type</TextInput.Title>
                <TextInput.Input 
                    value = {localStorage.getItem("Contract") || contract}
                    onChange = {handleContract}                  
                />
            </TextInputSection>

            {/* Location info */}
            <TextInputSection>
                <TextInput.Title themeBoolean={themeBoolean}>job location</TextInput.Title>
                <TextInput.Input 
                    value = {localStorage.getItem("Location") || location}
                    onChange = {handleLocation}                
                />
            </TextInputSection>

            {/* Website info */}
            <TextInputSection>
                <TextInput.Title themeBoolean={themeBoolean}>website</TextInput.Title>
                <TextInput.Input 
                    value = {localStorage.getItem("Website") || website}
                    onChange = {handleWebsite}                
                />
            </TextInputSection>

            {/* Application link */}
            <TextInputSection>
                <TextInput.Title themeBoolean={themeBoolean}>application link</TextInput.Title>
                <TextInput.Input 
                    value = {localStorage.getItem("Apply") || apply}
                    onChange = {handleApply}                  
                />
            </TextInputSection>
            </CreateJobs.TopSubDiv>

            <CreateJobs.BottomSubDiv>
            {/* Description info */}
            <TextAreaSection>
                <TextArea.Title themeBoolean={themeBoolean}>description</TextArea.Title>
                <TextArea.Input 
                    value    = {localStorage.getItem("Description") || description} 
                    onChange = {handleDescription}
                />
            </TextAreaSection>

            {/* Requirement summary */}
            <TextAreaSection>
                <TextArea.Title themeBoolean={themeBoolean}>requirement summary</TextArea.Title>
                <TextArea.Input 
                    value = {localStorage.getItem("RequirementContent") || requirementContent}
                    onChange = {handleRequirementContent}                   
                />
            </TextAreaSection>

            {/* Required Skills */}
            <ListDisplaySection>
                <TextArea.InputDiv data-flow="2">
                    <TextArea.Title themeBoolean={themeBoolean}>specific skills</TextArea.Title>
                    <TextArea.Input 
                        value = {localStorage.getItem("RequirementSkillsInput") || requirementSkillsInput}
                        onChange = {handleRequirementSkillsInput}                        
                    />
                    <ListDisplay.PushButton onClick = {addToSkills}>add to skills</ListDisplay.PushButton>
                </TextArea.InputDiv>
                    <ListDisplay.UL data-flow="2">
                        {requirementSkillsArray.map((item, index) => (
                            <ListDisplay.SkillDiv key = {item.id}>
                                <ListDisplay.LI>{item.requirementSkillsInput}</ListDisplay.LI>
                                <ListDisplay.DeleteButton onClick = {() => removeFromSkills(index)}>delete</ListDisplay.DeleteButton>
                            </ListDisplay.SkillDiv>
                        ))}                      
                    </ListDisplay.UL>                      
            </ListDisplaySection>

            {/* Role Summary */}
            <TextAreaSection data-flow="2">
                <TextArea.Title themeBoolean={themeBoolean}>role summary</TextArea.Title>
                <TextArea.Input 
                    value = {localStorage.getItem("RoleContent") || roleContent}
                    onChange = {handleRoleContent}                
                />
            </TextAreaSection>

            {/* Role specifics */}
            <ListDisplaySection>
                <TextArea.InputDiv>
                    <TextArea.Title>specific roles</TextArea.Title>
                    <TextArea.Input 
                        value = {localStorage.getItem("RoleItemsInput") || roleItemsInput}
                        onChange = {handleRoleItemsInput}                     
                    />
                    <ListDisplay.PushButton onClick = {addToRoleItems}>add to roles</ListDisplay.PushButton>
                </TextArea.InputDiv>
                <ListDisplay.UL data-flow="2">
                        {roleItemsArray.map((item, index) => (
                            <ListDisplay.RoleDiv key = {item.id}>
                            <ListDisplay.LI>{item.roleItemsInput}</ListDisplay.LI>
                            <ListDisplay.DeleteButton onClick = {() => removeFromRoleItems(index)}>delete</ListDisplay.DeleteButton>
                            </ListDisplay.RoleDiv>
                        ))}                      
                    </ListDisplay.UL> 
            </ListDisplaySection>
            </CreateJobs.BottomSubDiv>
            <CreateJobs.Submit onClick = {createJob}>submit</CreateJobs.Submit>
        </CreateJobsMain>
     );
}
 
export default CreateJobsContainer;