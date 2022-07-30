import React from "react";
import {MultiselectAdapterProperties, MultiselectAdapterState, MultiselectProperties} from "./MultiselectTypes";
import Multiselect from "./Multiselect";

class MultiselectAdapter extends React.Component<Readonly<MultiselectAdapterProperties>, MultiselectAdapterState> {

    constructor(props: Readonly<MultiselectProperties>) {
        super(props);
        this.state = {
            availableOptions: props.availableOptions,
            selectedOptions: props.selectedOptions
        }
    }

    render() {
        return (
            <Multiselect
                availableOptions={[...this.state.availableOptions]}
                selectedOptions={[...this.state.selectedOptions]}
                onSelect={selectDiff => {
                    this.setState({
                        selectedOptions: selectDiff.selectedOptions,
                        availableOptions: selectDiff.remainingOptions
                    });
                }}
                onRemove={removeDiff => {
                    this.setState({
                        selectedOptions: removeDiff.selectedOptions,
                        availableOptions: removeDiff.remainingOptions
                    })
                }}
                isMultiSelect={this.props.isMultiSelect}/>
        );
    }

}

export default MultiselectAdapter;