import React from 'react';
import {render} from '@testing-library/react';
import Multiselect from "./Multiselect";
import {OnRemoveDiff, OnSelectDiff} from "./MultiselectTypes";

test('renders learn react link', () => {
    const mockEventHandler = (diff: OnSelectDiff | OnRemoveDiff) => console.log(diff)
    const {container} = render(<Multiselect availableOptions={[]} selectedOptions={[]}
                                            onSelect={mockEventHandler}
                                            onRemove={mockEventHandler}/>)
    expect(container).toBeInTheDocument();
});
