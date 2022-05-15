import {useContext, useEffect, useState} from "react"
import {Link, Outlet} from "react-router-dom"
import data from "../data"
import {ThemeContext} from "../contexts/ThemeContext"
import { DataContext } from "../contexts/DataContext"
import { InputContext } from "../contexts/InputContext"
import Jobs from "../components/HomeComponents/Jobs"
import Search from "../components/HomeComponents/Search"
import AltSearch from"../components/HomeComponents/AltSearch"
import {FaUndo} from "react-icons/fa"
import { SearchDiv } from "../components/HomeComponents/Search/styles/searchStyles"
import { JobsMain } from "../components/HomeComponents/Jobs/styles/jobsStyles"
import MainSearchContainer from "./MainSearchContainer"
import LocationSearchContainer from "./LocationSearchContainer"


const HomeContainer = () => {
    
    // Detect Chrome
    let browser = window.navigator.vendor
    let breakpoint

    browser === "Google Inc." ? breakpoint = 650 : breakpoint = 700
        const [width, setWidth] = useState(window.innerWidth)

    // data matching full-time filter
    const time = data.filter(datum => datum.contract === "Full Time")

    // contexts
    const {themeBoolean} = useContext(ThemeContext)
    const {setCurrentData, mainInputData, setMainInputData, 
            locationInputData, setLocationInputData} = useContext(DataContext)
    
    const {inputFilter, setInputFilter, timeFilter, setTimeFilter, 
            inputFocus, setInputFocus} = useContext(InputContext)

    
    // clear input on focus change
    const mainInput = () => {
        inputFocus > 2 || inputFocus < 1 ? setInputFocus(1) : setInputFocus(prevCount => prevCount + 1)
        setLocationInputData("")
    }

    const locationInput = () => {
        inputFocus > 2 || inputFocus < 1 ? setInputFocus(1) : setInputFocus(prevCount => prevCount - 1)
      setMainInputData("")
    }

    // set state for entries labelled "Full time"
    const fullTimeFilter = () => {
        timeFilter ? setCurrentData(data) : setCurrentData(time)
        setTimeFilter(prevState => !prevState)
      }
    
      const clearInput = () => {
        setMainInputData("")
        setLocationInputData("")
        setInputFilter(1)
      }
    

      const lowerCaseMainData = (event) => {
        setMainInputData(event.target.value.toLowerCase())            
      }
    
      const lowerCaseLocationData = (event) => {
        setLocationInputData(event.target.value.toLowerCase())
      }
    
      // handle layout of search bar on window resize
      useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
          window.addEventListener("resize", handleResize)
          return () => {
            window.removeEventListener("resize", handleResize)
          }
      }, [])

        // loop through filter variables (companies, titles, locations)
    const filterArray = [1, 2]
    const listLoop = () => {
        if (inputFilter === filterArray.length) {
      setInputFilter(1)
        } else {
            setInputFilter(prevState => prevState + 1)
    }
}

    // mobile searchbar layout
    const mobile = <Search.Wrapper
                        themeBoolean={themeBoolean}
                    >
                        {inputFilter === 1 ? (
                            <Search.Input 
                                type="text"
                                placeholder = "Enter company, job..."
                                value={mainInputData}
                                onChange = {lowerCaseMainData}
                                themeBoolean={themeBoolean}
                            />
                        ) : (
                            <Search.Input 
                                type = "text"
                                placeholder = "Enter location..."
                                value = {locationInputData}
                                onChange = {lowerCaseLocationData}
                                themeBoolean={themeBoolean}
                            />
                        )}
                        <Search.InputSwitch 
                            src={"/assets/mobile/icon-filter.svg"}
                            onClick = {listLoop}
                        />
                        <Search.Reset
                            onClick = {clearInput}                         
                        >
                        <FaUndo style={{color: "white"}} size="25" />
                        </Search.Reset>
                    </Search.Wrapper>

    // desktop searchbar layout
    const desktop = <Search.Wrapper
                            themeBoolean={themeBoolean}
                    >
                        <Search.Input 
                            type = "text"
                            placeholder = "Enter company, job..."
                            value = {mainInputData}
                            onChange = {lowerCaseMainData}
                            onFocus = {mainInput}
                            themeBoolean = {themeBoolean}
                        />
                        <Search.Input 
                            type = "text"
                            placeholder = "Enter location..."
                            value = {locationInputData}
                            onChange = {lowerCaseLocationData}
                            onFocus = {locationInput}
                            themeBoolean = {themeBoolean}
                        />
                        <Search.TimeFilterDiv
                            themeBoolean = {themeBoolean}
                        >
                            <Search.TimeFilterLabel
                                themeBoolean = {themeBoolean}
                            >
                                <Search.TimeFilterInput
                                    onClick = {fullTimeFilter}
                                />Full Time
                            </Search.TimeFilterLabel>
                            <Search.Reset
                            onClick = {clearInput}                         
                            >
                                <FaUndo style={{color: "white"}} size="15" />
                            </Search.Reset>
                        </Search.TimeFilterDiv>
                    </Search.Wrapper>  
             
    // desktop layout if using Chrome browser 
    const desktopChrome = <AltSearch.Wrapper
                              themeBoolean={themeBoolean}
                          >
                          <AltSearch.Input 
                              type = "text"
                              placeholder = "Enter company, job..."
                              value = {mainInputData}
                              onChange = {lowerCaseMainData}
                              onFocus = {mainInput}
                              themeBoolean = {themeBoolean}
                          />
                          <AltSearch.Input 
                              type = "text"
                              placeholder = "Enter location..."
                              value = {locationInputData}
                              onChange = {lowerCaseLocationData}
                              onFocus = {locationInput}
                              themeBoolean = {themeBoolean}
                          />
                          <AltSearch.TimeFilterDiv
                              themeBoolean = {themeBoolean}
                          >
                              <AltSearch.TimeFilterLabel
                                  themeBoolean = {themeBoolean}
                              >
                                  <AltSearch.TimeFilterInput
                                      onClick = {fullTimeFilter}
                                  />Full Time
                              </AltSearch.TimeFilterLabel>
                              <AltSearch.Reset
                              onClick = {clearInput}                         
                              >
                                  <FaUndo style={{color: "white"}} size="15" />
                              </AltSearch.Reset>
                          </AltSearch.TimeFilterDiv>
                          </AltSearch.Wrapper>  
                   
    // conditionally render main or location search results on mobile or desktop
    const mobileFilter = inputFilter === 1 ? <MainSearchContainer /> : <LocationSearchContainer />
    const desktopFilter = inputFocus === 2 ? <MainSearchContainer /> : <LocationSearchContainer />

    return (
        <> 
            <SearchDiv>
                {width <= breakpoint ? mobile : browser === "Google Inc." ? desktopChrome : desktop}
            </SearchDiv>
            <JobsMain>
                {width < breakpoint ? mobileFilter : desktopFilter}
            </JobsMain>
        </>
     );
}
 
export default HomeContainer;