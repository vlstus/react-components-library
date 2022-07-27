import React from 'react';
import './App.css';
import Multiselect from "./multiselect/Multiselect";
import {OnRemoveDiff, OnSelectDiff} from "./multiselect/MultiselectTypes";

function App() {
    const mockEventHandler = (diff: OnSelectDiff | OnRemoveDiff) => console.log(diff)
    return (
        <Multiselect
            availableOptions={[]}
            selectedOptions={[]}
            onSelect={mockEventHandler}
            onRemove={mockEventHandler}/>
    );
}

export default App;
