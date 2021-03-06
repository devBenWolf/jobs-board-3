import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useEffect } from "react";
import CreateJobs from "../components/CreateJobsComponents/CreateJobs";
import { CreateJobsMain } from "../components/CreateJobsComponents/CreateJobs/style/createJobsStyles";
import TextInput from "../components/CreateJobsComponents/TextInput";
import { TextInputSection } from "../components/CreateJobsComponents/TextInput/style/textInputStyles";
import { TextAreaSection } from "../components/CreateJobsComponents/TextArea/style/textAreaStyles";
import TextArea from "../components/CreateJobsComponents/TextArea";
import ListDisplay from "../components/CreateJobsComponents/ListDisplay";
import { InputContext } from "../contexts/InputContext";



const CreateJobsContainer = () => {
    // functions
    const {addToSkills, addToRoleItems, removeFromSkills, clearAllInputs, handleCompany, handleDescription, handleLogo,handleLogoBackground, handlePosition, handleContract,
        handleLocation, handleWebsite, handleApply, handleRequirementContent, handleRequirementSkillsInput, handleRoleContent, handleRoleItemsInput,
        removeFromRoleItems,
        // state hooks
        requirementSkillsArray, company, description, logo, logoBackground, position, roleContent, roleItemsInput, 
        contract, location, website, apply, requirementContent, requirementSkillsInput, roleItemsArray    
    } = useContext(InputContext)
    const {themeBoolean} = useContext(ThemeContext)

    // database and collection to which we add the jobs
    const jobsCollectionRef = collection(db, "jobs")
    // navigate to homepage after submitting job data
    const navigate = useNavigate()

    useEffect(() => {
        const local = localStorage.getItem("isAuth")
        if (!local) {
        navigate("/")
        alert("You must log in")
        }
    }, [])


    // get date and time of post
    let today = new Date()
    let postDate = today.toString().slice(0, -42)
    console.log(postDate)
    
    const createJob = async () => {
        // add document to the collection along with with author id object
        await addDoc(jobsCollectionRef, {
            company, description, logo, logoBackground, position, postDate, 
            contract, location, website, apply, requirementContent, requirementSkillsArray, roleItemsArray, 
            author: {name:  auth.currentUser.displayName, id: auth.currentUser.uid}})
            localStorage.clear()
            localStorage.setItem("isAuth", true)
            navigate("/create-jobs")
            clearAllInputs()
            alert("Job submitted!!")
    }

    return ( 
        <CreateJobsMain>
            <CreateJobs.PageTitle themeBoolean = {themeBoolean}>enter jobs data</CreateJobs.PageTitle>
            {/* TextInput info */}
            <CreateJobs.TopSubDiv>
            <TextInputSection>                   
                <TextInput.Input 
                    value    = {localStorage.getItem("Company") || company} 
                    onChange = {handleCompany}
                    background = "hsl(235, 69%, 91%)"
                    color = "hsl(235, 69%, 61%)"
                    placeholder = "company name"
                    required    
                />
            </TextInputSection>
            
            {/* Logo info */}
            <TextInputSection>
                <TextInput.Input 
                    value    = {localStorage.getItem("Logo") || logo}
                    onChange = {handleLogo}
                    background = "hsl(235, 69%, 91%)"
                    color = "hsl(235, 69%, 61%)"
                    placeholder = "logo path (optional)"
                    required
                />
            </TextInputSection>

            {/* Logo Background info */}
            <TextInputSection>
                <TextInput.Input 
                    value = {localStorage.getItem("LogoBackground") || logoBackground}
                    onChange = {handleLogoBackground}
                    background = "hsl(235, 69%, 91%)"
                    color = "hsl(235, 69%, 61%)"
                    placeholder = "logo background color (optional)"
                    required
                />
            </TextInputSection>

            {/* position info */}
            <TextInputSection>
                <TextInput.Input
                    value = {localStorage.getItem("Position") || position}
                    onChange = {handlePosition}
                    background = "hsl(235, 69%, 86%)"
                    color = "hsl(235, 69%, 61%)"
                    placeholder = "position"
                    required
                />
            </TextInputSection>

            {/* Contract info */}
            <TextInputSection>
                <TextInput.Input 
                    value = {localStorage.getItem("Contract") || contract}
                    onChange = {handleContract}   
                    background = "hsl(235, 69%, 86%)"
                    color = "hsl(235, 69%, 61%)"
                    placeholder = "contract type"
                    required               
                />
            </TextInputSection>

            {/* Location info */}
            <TextInputSection>
                <TextInput.Input 
                    value = {localStorage.getItem("Location") || location}
                    onChange = {handleLocation}                
                    background = "hsl(235, 69%, 79%)"
                    color = "white"
                    placeholder = "job location"
                    required
                />
            </TextInputSection>

            {/* Website info */}
            <TextInputSection>
                <TextInput.Input 
                    value = {localStorage.getItem("Website") || website}
                    onChange = {handleWebsite} 
                    background = "hsl(235, 69%, 79%)"
                    color = "white"
                    placeholder = "website"
                    required              
                />
            </TextInputSection>

            {/* Application link */}
            <TextInputSection>
                <TextInput.Input 
                    value = {localStorage.getItem("Apply") || apply}
                    onChange = {handleApply}   
                    background = "hsl(235, 69%, 79%)"
                    color = "white"
                    placeholder = "apply at"
                    required               
                />
            </TextInputSection>
            </CreateJobs.TopSubDiv>
            <CreateJobs.BottomSubDiv data-flow="3">
                <TextAreaSection>
                    <TextArea.InputDiv
                        background = "hsl(235, 69%, 91%)"
                    >
                    <TextArea.Input 
                        value    = {localStorage.getItem("Description") || description} 
                        onChange = {handleDescription}
                        background = "hsl(235, 69%, 91%)"
                        color = "hsl(235, 69%, 61%)"
                        border = "hsl(235, 69%, 61%) solid"
                        borderBottom="none"
                        placeholder = "enter job description . . ."
                        required
                    />
                    <ListDisplay.PseudoButton
                        background = "hsl(235, 69%, 91%)"
                        border = "hsl(235, 69%, 61%) solid"
                        borderTop = "none"
                    ></ListDisplay.PseudoButton>
                    </TextArea.InputDiv>
                </TextAreaSection>

                <TextAreaSection>
                    <TextArea.InputDiv
                        background = "hsl(235, 69%, 86%)"
                    >
                    <TextArea.Input 
                        value    = {localStorage.getItem("RequirementContent") || requirementContent} 
                        onChange = {handleRequirementContent}
                        background = "hsl(235, 69%, 86%)"
                        color = "hsl(235, 69%, 61%)"
                        border = "hsl(235, 69%, 61%) solid"
                        borderBottom="none"
                        placeholder = "enter requirements summary . . ."
                        required
                    />
                    <ListDisplay.PseudoButton
                        background = "hsl(235, 69%, 86%)"
                        border = "hsl(235, 69%, 61%) solid"
                        borderTop = "none"
                    ></ListDisplay.PseudoButton>
                    </TextArea.InputDiv>
                </TextAreaSection>
                <ListDisplay.TextAndListDiv>
                    <TextAreaSection>
                        <TextArea.InputDiv
                            background = "hsl(235, 69%, 79%)"
                        >                       
                        <TextArea.Input 
                            value = {localStorage.getItem("RequirementSkillsInput") || requirementSkillsInput}
                            onChange = {handleRequirementSkillsInput}   
                            background = "hsl(235, 69%, 79%)"
                            color = "hsl(235, 69%, 61%)"
                            border = "hsl(235, 69%, 61%) solid"
                            borderBottom="none"
                            placeholder = "enter specific requirements . . ."
                            required
                        />
                    <ListDisplay.AddButton 
                        background = "hsl(235, 69%, 79%)"
                        border = "hsl(235, 69%, 61%) solid"
                        borderTop = "none"
                        onClick = {addToSkills}
                    >Add to requirements</ListDisplay.AddButton>
                    </TextArea.InputDiv> 
                    </TextAreaSection>
                    <ListDisplay.UL>
                        {requirementSkillsArray.map((item, index) => (
                            <ListDisplay.MapDiv key = {item.id}>
                                <ListDisplay.LI themeBoolean = {themeBoolean}>{item.requirementSkillsInput}</ListDisplay.LI>
                                <ListDisplay.DeleteButton onClick = {() => removeFromSkills(index)}>delete</ListDisplay.DeleteButton>
                            </ListDisplay.MapDiv>
                        ))}                        
                    </ListDisplay.UL>
                </ListDisplay.TextAndListDiv>

                <TextAreaSection>
                        <TextArea.InputDiv
                    background = "hsl(235, 69%, 71%)"
                    >
                    <TextArea.Input 
                        value    = {localStorage.getItem("RoleContent") || roleContent} 
                        onChange = {handleRoleContent}
                        background = "hsl(235, 69%, 71%)"
                        color = "white"
                        border = "hsl(235, 69%, 61%) solid"
                        borderBottom="none"
                        placeholder = "enter role summary . . ."
                        required
                    />
                    <ListDisplay.PseudoButton
                        background = "hsl(235, 69%, 71%)"
                        border = "hsl(235, 69%, 61%) solid"
                        borderTop = "none"
                    ></ListDisplay.PseudoButton>
                    </TextArea.InputDiv>
                </TextAreaSection>

                <ListDisplay.TextAndListDiv>
                    <TextAreaSection>
                        <TextArea.InputDiv
                            background = "hsl(235, 69%, 61%)"
                        >                       
                        <TextArea.Input 
                            value = {localStorage.getItem("RoleItemsInput") || roleItemsInput}
                            onChange = {handleRoleItemsInput}   
                            background = "hsl(235, 69%, 61%)"
                            color = "white"
                            placeholder = "enter specific roles . . ."
                            border = "hsl(235, 69%, 61%) solid"
                            borderBottom = "none"
                            required
                        />
                    <ListDisplay.AddButton 
                        background = "hsl(235, 69%, 61%)"
                        onClick = {addToRoleItems}
                        borderTop = "none"
                        border = "hsl(235, 69%, 61%) solid"
                    >Add to skills</ListDisplay.AddButton>
                    </TextArea.InputDiv> 
                    </TextAreaSection>
                    <ListDisplay.UL>
                        {roleItemsArray.map((item, index) => (
                            <ListDisplay.MapDiv
                            themeBoolean = {themeBoolean} 
                                key = {item.id}>
                                <ListDisplay.LI  themeBoolean = {themeBoolean}>{item.roleItemsInput}</ListDisplay.LI>
                                <ListDisplay.DeleteButton onClick = {() => removeFromRoleItems(index)}>delete</ListDisplay.DeleteButton>
                            </ListDisplay.MapDiv>
                        ))}                        
                    </ListDisplay.UL>
                </ListDisplay.TextAndListDiv>
                <CreateJobs.Submit onClick = {createJob}>upload job</CreateJobs.Submit>
            </CreateJobs.BottomSubDiv>
            
        </CreateJobsMain>
     );
}
 
export default CreateJobsContainer;