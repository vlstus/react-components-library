import React from 'react';
import './App.css';
import MultiselectAdapter from "./multiselect/MultiselectAdapter";

const availableOptions = [
    {
        id: 1,
        label: 'Option 1',
        value: 'optionOne'
    },
    {
        id: 2,
        label: 'Option 2',
        value: 'optionTwo'
    }];
const selectedOptions = [
    {
        id: 3,
        label: 'Option 3',
        value: 'optionThree'
    }];

function App() {
    return (
        <MultiselectAdapter
            availableOptions={availableOptions}
            selectedOptions={selectedOptions}
            isMultiSelect={true}/>
    );
}

export default App;
