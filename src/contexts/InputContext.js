import {useState, createContext} from "react"
import {nanoid} from "nanoid"

export const InputContext = createContext()

const InputContextProvider = ({children}) => {
    const [inputFilter, setInputFilter] = useState(1)
    const [timeFilter, setTimeFilter] = useState(false)
    const [inputFocus, setInputFocus] = useState(1)
    const [desktopInputFocus, setDesktopInputFocus] = useState(true)
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
    const [requirementSkillsInput, setRequirementSkillsInput] = useState("")
    const [requirementSkillsArray, setRequirementSkillsArray] = useState([])
    const [roleContent, setRoleContent] = useState("")
    const [roleItemsInput, setRoleItemsInput] = useState("")
    const [roleItemsArray, setRoleItemsArray] = useState([])

        // create skills array in local and firebase
        const addToSkills = () => {
            const newSkill = [...requirementSkillsArray, {id: nanoid(), requirementSkillsInput}]
            setRequirementSkillsArray(newSkill)
            setRequirementSkillsInput("")
            localStorage.removeItem("RequirementSkillsInput")
        }

        // role bullet points
        const addToRoleItems = () => {
            const newItem = [...roleItemsArray, {id: nanoid(), roleItemsInput}]
            setRoleItemsArray(newItem)
            setRoleItemsInput("")
            localStorage.removeItem("RoleItems")
        }
    
        const removeFromSkills = index => {
            const updateSkills = [...requirementSkillsArray]
            updateSkills.splice(index, 1)
            setRequirementSkillsArray(updateSkills)
        }

        const removeFromRoleItems = index => {
            const updateItems = [...roleItemsArray]
            updateItems.splice(index, 1)
            setRoleItemsArray(updateItems)
        }

        const handleCompany = (event) => {
            localStorage.setItem(`Company`, event.target.value)
            setCompany(event.target.value)
            
        }
        const handleDescription = (event) => {
            localStorage.setItem(`Description`, event.target.value)
            setDescription(event.target.value)
        }
        const handleLogo = (event) => {
            localStorage.setItem(`Logo`, event.target.value)
            setLogo(event.target.value)
        }
        const handleLogoBackground = (event) => {
            localStorage.setItem(`LogoBackground`, event.target.value)
            setLogoBackground(event.target.value)
        }
        const handlePosition = (event) => {
            localStorage.setItem(`Position`, event.target.value)
            setPosition(event.target.value)
        }
        const handlePostedAt = (event) => {
            localStorage.setItem(`PostedAt`, event.target.value)
            setPostedAt(event.target.value)
        }
        const handleContract = (event) => {
            localStorage.setItem(`Contract`, event.target.value)
            setContract(event.target.value)
        }
        const handleLocation = (event) => {
            localStorage.setItem(`Location`, event.target.value)
            setLocation(event.target.value)
        }
        const handleWebsite = (event) => {
            localStorage.setItem(`Website`, event.target.value)
            setWebsite(event.target.value)
        }
        const handleApply = (event) => {
            localStorage.setItem(`Apply`, event.target.value)
            setApply(event.target.value)
        }
        const handleRequirementContent = (event) => {
            localStorage.setItem(`RequirementContent`, event.target.value)
            setRequirementContent(event.target.value)
        }
        const handleRequirementSkillsInput = (event) => {
            setRequirementSkillsInput(event.target.value)
            localStorage.setItem(`RequirementSkillsInput`, event.target.value)
        }

        const handleRoleContent = (event) => {
            setRoleContent(event.target.value)
            localStorage.setItem(`RoleContent`, event.target.value)
        }

        const handleRoleItemsInput = (event) => {
            setRoleItemsInput(event.target.value)
            localStorage.setItem(`RoleItems`, event.target.value)
        }



    return ( 
        <InputContext.Provider value={{setInputFilter, setTimeFilter, setInputFocus,
            setDesktopInputFocus, addToSkills, addToRoleItems, removeFromSkills, removeFromRoleItems, handleCompany, 
            handleDescription, handleLogo, handleLogoBackground, handlePosition, handlePostedAt, handleContract,
            handleLocation, handleWebsite, handleApply, handleRequirementContent, handleRequirementSkillsInput,
            handleRoleItemsInput, handleRoleContent,
            company, description, logo, logoBackground, position, postedAt, inputFilter, timeFilter, inputFocus,
            contract, location, website, apply, requirementContent, requirementSkillsArray, requirementSkillsInput,
            desktopInputFocus, roleContent, roleItemsInput, roleItemsArray

        }}
        >
            {children}
        </InputContext.Provider>

     );
}
 
export default InputContextProvider;