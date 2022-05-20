import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {

        // ****** colors ******
        --clr-violet: 252 82% 56%;
        --clr-light-violet: 235 82% 77%;
        --clr-dark-blue: 219 29% 14%;
        --clr-midnight: 220 29% 10%;
        --clr-white: 0 0% 100%;
        --clr-light-grey: 210 22% 96%;
        --clr-grey: 212 23% 69%;
        --clr-dark-grey: 214 17% 51%;
    }


    // *************** // 
    //      Resets     //
    // *************** //

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    picture,
    blockquite,
    figure {
        margin: 0;
    }

    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }



    html {
        font-size: 62.5%;
    }

    body {
        font-size: 16px;
        min-height: 100vh;
        font-family: 'Kumbh Sans', sans-serif;
        margin: 0;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }

    select,
    input,
    button,
    textarea {
        font: inherit;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        font-weight: 400;
    }

    [data-sr-only] {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap; /* added line */
        border: 0;
    }

    [data-flow="1"] {
        >*:where(:not(:first-child)) {
            margin-top: 1rem;
        }
    }
    [data-flow="2"] {
        >*:where(:not(:first-child)) {
            margin-top: 2rem;
        }
    }
    [data-flow="3"] {
        >*:where(:not(:first-child)) {
            margin-top: 3rem;
        }
    }
    [data-flow="4"] {
        >*:where(:not(:first-child)) {
            margin-top: 4rem;
        }
    }
    [data-flow="10"] {
        >*:where(:not(:first-child)) {
            margin-top: 10rem;
        }
    }

    @keyframes fade_in_show {
        0% {
             opacity: 0;
             transform: scale(0)
        }
   
        100% {
             opacity: 1;
             transform: scale(1)
        }
   }


//    ****** switch ******  //
.switch,
.hover-switch {
    position: relative;
    display: inline-block;
    width: 70px;
    height: 28px;
}

.switch input,
.hover-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider,
.hover-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: white;
    transition: .4s;
}

.slider::before,
.hover-slider::before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: #5964E0;
    transition: .4s;
}

.slider:hover::before,
.hover-slider:hover::before {
    background-color: red;
}


input:checked + .slider::before,
input:checked + .hover-slider::before {
    transform: translateX(40px);
}

.slider.round,
.hover-slider.hover-round {
    border-radius: 34px;
}

.slider.round::before,
.hover-slider.hover-round::before {
    border-radius: 50%;
}
// ************************ 
// ****** checkboxes ******
// ************************

// ****** customize checkbox ******
.container {
    display: block;
    position: relative;
    cursor: pointer;
    font-weight: bold;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    width: 200px;
}

// ****** hide default checkbox ******
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

// ****** create custom checkbox ******
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    background-color: #eee;
    border-radius: 5px;
}


// ****** hover effect ******
.container:hover input ~ .checkmark {
    background-color: hsl(var(--clr-light-violet));
}

// ****** background effect when checked ******
.container input:checked ~ .checkmark {
    background-color: #2196F3;
}

// ****** hide custom checkmark ******
.checkmark::after {
    content: "";
    position: absolute;
    display: none;
    

}

//  ****** show custom checkmark ******
.container input:checked ~ .checkmark::after{
    display: block;
}

// ****** style checkmark ******
.container .checkmark::after {
    width: 8px;
    height: 16px;
    left: 38%;
    top: 15%;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);    
}

`