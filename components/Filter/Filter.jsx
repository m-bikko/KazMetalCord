import React, { useState } from "react";
import './Filter.css'
import { countTwists } from '../Shared/CountOfTwist.js'
import { countStills } from '../Shared/CountOfStill.js'
import { marks } from '../Shared/Mark.js'
import { sizeBrushes } from "../Shared/SizeOfBrush.js";
import FilterAccordion from '../FilterAccordion/FilterAccordion.jsx'

function Filter() {
    const [isActive, setIsActive] = useState(false);

    const handleIsActive = () => {
        setIsActive(!isActive);
    }

    return (
        <div className={`filter`}>
            <button className={`filter-button ${isActive? 'active':''}`} onClick={handleIsActive}>
                {
                    isActive ?
                        (<svg className={`filter-icon`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6m0 12L6 6"/>
                        </svg>)
                        :
                        (<svg className={`filter-icon`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"/>
                        </svg>)
                }

                <span>Фильтры</span>
            </button>
            <div className={`filter-container ${isActive ? 'active' : ''}`}>

                <FilterAccordion type={`Количество скруток`} checkbox={countTwists}/>
                <FilterAccordion type={`Количество жил`} checkbox={countStills}/>
                <FilterAccordion type={`Марка`} checkbox={marks}/>
                <FilterAccordion type={`Размер сечения, мм2`} checkbox={sizeBrushes}/>

            </div>
        </div>
    )
}

export default Filter;
