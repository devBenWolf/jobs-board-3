import {useState, createContext} from "react"
import {nanoid} from "nanoid"

export const InputContext = createContext()

const initialState = {
    company: "",
    description: "",
    logo: "",
    logoBackground: "",
    position: "",
    postedAt: "",
    contract: "",
    location: "",
    website: "",
    apply: "",
    requirementContent: "",
    requirementSkillsInput: "",
    roleContent: "",
    roleItemsInput: "",
    requirementSkillsArray: [],
    roleItemsArray: []
}

const InputContextProvider = ({children}) => {
    const [values, setValues] = useState(initialState)
    const [inputFilter, setInputFilter] = useState(1)
    const [timeFilter, setTimeFilter] = useState(false)
    const [inputFocus, setInputFocus] = useState(true)
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

    const handleChange = (event) => {
        const {name, value} = event.target
        setValues({
            ...values,
            [name]: value
        })
        console.log(name)
        localStorage.setItem(name.charAt(0).toUpperCase() + name.slice(1), value)
    }

    

        // add to individual skills array , and bullet points next to input
        const addToSkills = () => {
            const newSkill = [...values.requirementSkillsArray, {id: nanoid(), name: values.requirementSkillsInput}]
            setValues(prevState => ({...prevState, requirementSkillsArray: newSkill}))
            setValues(prevState => ({...prevState, requirementSkillsInput: ""}))
            localStorage.removeItem("RequirementSkillsInput")    
        }

        // add to individual role array, and bullet points next to input
        const addToRoleItems = () => {
            const newItem = [...values.roleItemsArray, {id: nanoid(), name: values.roleItemsInput}]
            setValues(prevState => ({...prevState, roleItemsArray: newItem}))
            setValues(prevState => ({...prevState, roleItemsInput: ""}))
            localStorage.removeItem("RoleItems")
            console.log(values.roleItemsArray)
        }
    
        // remove from individual skills array
        const removeFromSkills = index => {
            const updateSkills = [...values.requirementSkillsArray]
            updateSkills.splice(index, 1)       
            setValues(prevState => ({...prevState, requirementSkillsArray: updateSkills}))
        }

        // remove from individual roles array
        const removeFromRoleItems = index => {
            const updateItems = [...values.roleItemsArray]
            updateItems.splice(index, 1)
            setValues(prevState => ({...prevState, roleItemsArray: updateItems}))
        }


      

        //****** clear state ******
        const clearAllInputs = () => {
            setValues({
                company: "",
                description: "",
                logo: "",
                logoBackground: "",
                position: "",
                postedAt: "",
                contract: "",
                location: "",
                website: "",
                apply: "",
                requirementContent: "",
                requirementSkillsInput: "",
                roleContent: "",
                roleItemsInput: "",
                requirementSkillsArray: [],
                roleItemsArray: []
            })
        }



    return ( 
        <InputContext.Provider value={{setInputFilter, setTimeFilter, setInputFocus, clearAllInputs,
            setDesktopInputFocus, addToSkills, addToRoleItems, removeFromSkills, removeFromRoleItems, handleChange, values, inputFilter, timeFilter, inputFocus

        }}
        >
            {children}
        </InputContext.Provider>

     );
}
 
export default InputContextProvider;