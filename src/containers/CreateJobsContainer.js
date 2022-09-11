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
    const {addToSkills, addToRoleItems, removeFromSkills, clearAllInputs,
        removeFromRoleItems, handleChange, values} = useContext(InputContext)
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
    
    const createJob = async () => {
        const {company, description, logo, logoBackground, position, 
            contract, location, website, apply, requirementContent, requirementSkillsArray, roleItemsArray} = values
            

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
                    value    = {localStorage.getItem("Company") || values.company} 
                    onChange = {handleChange}
                    background = "hsl(235, 69%, 91%)"
                    color = "hsl(235, 69%, 61%)"
                    placeholder = "company name"
                    name="company"
                    required    
                />
            </TextInputSection>
            
            {/* Logo info */}
            <TextInputSection>
                <TextInput.Input 
                    value    = {localStorage.getItem("Logo") || values.logo}
                    onChange = {handleChange}
                    background = "hsl(235, 69%, 91%)"
                    color = "hsl(235, 69%, 61%)"
                    placeholder = "logo path (optional)"
                    name="logo"
                />
            </TextInputSection>

            {/* Logo Background info */}
            <TextInputSection>
                <TextInput.Input 
                    value = {localStorage.getItem("LogoBackground") || values.logoBackground}
                    onChange = {handleChange}
                    background = "hsl(235, 69%, 91%)"
                    color = "hsl(235, 69%, 61%)"
                    placeholder = "logo background color (optional)"
                    name="logoBackground"
                />
            </TextInputSection>

            {/* position info */}
            <TextInputSection>
                <TextInput.Input
                    value = {localStorage.getItem("Position") || values.position}
                    onChange = {handleChange}
                    background = "hsl(235, 69%, 86%)"
                    color = "hsl(235, 69%, 61%)"
                    placeholder = "position"
                    name="position"
                    required
                />
            </TextInputSection>

            {/* Contract info */}
            <TextInputSection>
                <TextInput.Input 
                    value = {localStorage.getItem("Contract") || values.contract}
                    onChange = {handleChange}   
                    background = "hsl(235, 69%, 86%)"
                    color = "hsl(235, 69%, 61%)"
                    placeholder = "contract type"
                    name="contract"
                    required               
                />
            </TextInputSection>

            {/* Location info */}
            <TextInputSection>
                <TextInput.Input 
                    value = {localStorage.getItem("Location") || values.location}
                    onChange = {handleChange}                
                    background = "hsl(235, 69%, 79%)"
                    color = "white"
                    placeholder = "job location"
                    name="location"
                    required
                />
            </TextInputSection>

            {/* Website info */}
            <TextInputSection>
                <TextInput.Input 
                    value = {localStorage.getItem("Website") || values.website}
                    onChange = {handleChange} 
                    background = "hsl(235, 69%, 79%)"
                    color = "white"
                    placeholder = " company website"
                    name="website"
                    required              
                />
            </TextInputSection>

            {/* Application link */}
            <TextInputSection>
                <TextInput.Input 
                    value = {localStorage.getItem("Apply") || values.apply}
                    onChange = {handleChange}   
                    background = "hsl(235, 69%, 79%)"
                    color = "white"
                    placeholder = "apply at"
                    name="apply"
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
                        value    = {localStorage.getItem("Description") || values.description} 
                        onChange = {handleChange}
                        background = "hsl(235, 69%, 91%)"
                        color = "hsl(235, 69%, 61%)"
                        border = "hsl(235, 69%, 61%) solid"
                        borderBottom="none"
                        placeholder = "enter job description . . ."
                        name="description"
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
                        value    = {localStorage.getItem("RequirementContent") || values.requirementContent} 
                        onChange = {handleChange}
                        background = "hsl(235, 69%, 86%)"
                        color = "hsl(235, 69%, 61%)"
                        border = "hsl(235, 69%, 61%) solid"
                        borderBottom="none"
                        name="requirementContent"
                        placeholder = "enter required skills summary . . ."
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
                            value = {localStorage.getItem("RequirementSkillsInput") || values.requirementSkillsInput}
                            onChange = {handleChange}   
                            background = "hsl(235, 69%, 79%)"
                            color = "hsl(235, 69%, 61%)"
                            border = "hsl(235, 69%, 61%) solid"
                            borderBottom="none"
                            placeholder = "enter specific skills . . ."
                            name="requirementSkillsInput"
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
                        {values.requirementSkillsArray.map((item, index) => (
                            <ListDisplay.MapDiv key = {item.id}>
                                <ListDisplay.LI themeBoolean = {themeBoolean}>{item.name}</ListDisplay.LI>
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
                        value    = {localStorage.getItem("RoleContent") || values.roleContent} 
                        onChange = {handleChange}
                        background = "hsl(235, 69%, 71%)"
                        color = "white"
                        border = "hsl(235, 69%, 61%) solid"
                        borderBottom="none"
                        placeholder = "enter role summary . . ."
                        name="roleContent"
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
                            value = {localStorage.getItem("RoleItemsInput") || values.roleItemsInput}
                            onChange = {handleChange}   
                            background = "hsl(235, 69%, 61%)"
                            color = "white"
                            placeholder = "enter specific roles . . ."
                            border = "hsl(235, 69%, 61%) solid"
                            borderBottom = "none"
                            name="roleItemsInput"
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
                        {values.roleItemsArray.map((item, index) => (
                            <ListDisplay.MapDiv
                                themeBoolean = {themeBoolean} 
                                key = {item.id}>
                                <ListDisplay.LI  themeBoolean = {themeBoolean}>{item.name}</ListDisplay.LI>
                                
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