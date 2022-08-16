import React, {useState} from "react"
import {MultiselectAdapterProperties} from "./MultiselectTypes"
import Multiselect from "./Multiselect"

const MultiselectAdapter = (props: Readonly<MultiselectAdapterProperties>) => {
    const [availableOptions, setAvailableOptions] = useState(props.availableOptions.filter(option => props.selectedOptions.every(selectedOption => selectedOption.id !== option.id)).sort((first, second) => first.label.localeCompare(second.label)))
    const [selectedOptions, setSelectedOptions] = useState(props.selectedOptions)
    return (<><Multiselect
            availableOptions={[...availableOptions]}
            selectedOptions={[...selectedOptions]}
            onSelect={selectDiff => {
                setSelectedOptions(selectDiff.selectedOptions)
                setAvailableOptions(selectDiff.remainingOptions)
            }}
            onRemove={removeDiff => {
                setSelectedOptions(removeDiff.selectedOptions)
                setAvailableOptions(removeDiff.remainingOptions)
            }}
            isMultiSelect={props.isMultiSelect}/>
            <div>{props.children}</div>
        </>
    )
}

export default MultiselectAdapter;