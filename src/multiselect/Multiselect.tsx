import React from "react";
import {MultiselectProperties} from "./MultiselectTypes";
import './Multiselect.css';

class Multiselect extends React.Component<Readonly<MultiselectProperties>> {

    constructor(props: Readonly<MultiselectProperties>) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    private handleRemove(removeEvent: React.SyntheticEvent<HTMLButtonElement>) {
        const removedOption = this.props.selectedOptions.find(option => option.id === Number(removeEvent.currentTarget.dataset.id));
        const selectedOptions = this.props.selectedOptions.filter(selectedOption => selectedOption.id !== removedOption?.id);
        const remainingOptions = [...this.props.availableOptions.filter(availableOption => availableOption.id !== removedOption?.id), ...removedOption ? Array.of(removedOption) : []];
        this.props.onRemove({
            selectedOptions: selectedOptions,
            removedOption: removedOption,
            remainingOptions: remainingOptions
        })
    }

    private handleSelect(selectEvent: React.SyntheticEvent<HTMLSelectElement>) {
        const selectedOption = this.props.availableOptions.find(option => option.id === Number(selectEvent.currentTarget.selectedOptions[0].dataset.id));
        const selectedOptions = [...this.props.selectedOptions.filter(option => option.id !== selectedOption?.id), ...selectedOption ? Array.of(selectedOption) : []];
        const remainingOptions = this.props.availableOptions.filter(availableOption => selectedOptions.every(selectedOption => selectedOption.id !== availableOption.id));
        this.props.onSelect({
            selectedOptions: selectedOptions,
            selectedOption: selectedOption,
            remainingOptions: remainingOptions
        })
    }

    render() {
        return (
            <div className='multiselect-container'>
                <div className='selected-container'>
                    <label>Selected: </label>
                    {this.props.selectedOptions.map(option => {
                        return <span className='selected-button-container' key={option.id}>
                            <button className='selected-button'
                                    data-id={option.id} key={option.id}
                                    onClick={this.handleRemove}>{`${option.label} X`}</button></span>
                    })}</div>
                <div className='available-container'>
                    <span className='available-select-container'>
                        <select className='available-select' multiple={this.props.isMultiSelect}
                                onChange={this.handleSelect}>
                        {this.props.isMultiSelect ? <option>Available:</option> : <option>---SELECT--</option>}
                            {this.props.availableOptions.map(option => {
                                return <option className='available-option' data-id={option.id} key={option.id}
                                               value={option.value}>{option.label}</option>
                            })}
                    </select></span></div>
            </div>
        );
    }

}

export default Multiselect;