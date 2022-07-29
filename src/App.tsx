import React, {useState} from 'react';
import './App.css';
import Multiselect from "./multiselect/Multiselect";
import {SimpleOption} from "./multiselect/MultiselectTypes";

function App() {
    const [availableOptions, setAvailableOptions] = useState<SimpleOption[]>([{
        id: 1,
        label: 'Option 1',
        value: 'optionOne'
    }, {id: 2, label: 'Option 2', value: 'optionTwo'}]);
    const [selectedOptions, setSelectedOptions] = useState<SimpleOption[]>([{
        id: 3,
        label: 'Option 3',
        value: 'optionThree'
    }]);
    return (
        <Multiselect
            availableOptions={[...availableOptions]}
            selectedOptions={[...selectedOptions]}
            onSelect={selectDiff => {
                setSelectedOptions(selectDiff.selectedOptions);
                setAvailableOptions(selectDiff.remainingOptions);
            }}
            onRemove={removeDiff => {
                setSelectedOptions(removeDiff.selectedOptions);
                setAvailableOptions(removeDiff.remainingOptions);
            }}
            isMultiSelect={true}/>
    );
}

export default App;
