import React from "react"
import {MultiselectProperties} from "./MultiselectTypes"
import './Multiselect.css'

const Multiselect = (props: Readonly<MultiselectProperties>) => {

    function handleRemove(removeEvent: React.SyntheticEvent<HTMLButtonElement>) {
        const removedOption = props.selectedOptions.find(option => option.id === Number(removeEvent.currentTarget.dataset.id))
        const selectedOptions = props.selectedOptions.filter(selectedOption => selectedOption.id !== removedOption?.id)
        const remainingOptions = [...props.availableOptions.filter(availableOption => availableOption.id !== removedOption?.id), ...removedOption ? Array.of(removedOption) : []]
        props.onRemove?.({
            selectedOptions: selectedOptions,
            removedOption: removedOption,
            remainingOptions: remainingOptions
        })
    }

    function handleSelect(selectEvent: React.SyntheticEvent<HTMLSelectElement>) {
        const selectedOption = props.availableOptions.find(option => option.id === Number(selectEvent.currentTarget.selectedOptions[0].dataset.id))
        const selectedOptions = [...props.selectedOptions.filter(option => option.id !== selectedOption?.id), ...selectedOption ? Array.of(selectedOption) : []]
        const remainingOptions = props.availableOptions.filter(availableOption => selectedOptions.every(selectedOption => selectedOption.id !== availableOption.id))
        props.onSelect?.({
            selectedOptions: selectedOptions,
            selectedOption: selectedOption,
            remainingOptions: remainingOptions
        })
    }

    return (
        <div className='multiselect-container'>
            <div className='selected-container'>
                <label>Selected: </label>
                {props.selectedOptions.map(option => {
                    return <span className='selected-button-container' key={option.id}>
                            <button className='selected-button'
                                    data-id={option.id} key={option.id}
                                    onClick={handleRemove}>{`${option.label} X`}</button></span>
                })}</div>
            <div className='available-container'>
                    <span className='available-select-container'>
                        <select className='available-select' multiple={props.isMultiSelect}
                                onChange={handleSelect}>
                        {props.isMultiSelect ? <option>Available:</option> : <option>---SELECT--</option>}
                            {props.availableOptions.map(option => {
                                return <option className='available-option' data-id={option.id} key={option.id}
                                               value={option.value}>{option.label}</option>
                            })}
                    </select></span></div>
        </div>
    )

}

export default Multiselect