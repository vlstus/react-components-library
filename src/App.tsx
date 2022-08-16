import React, {useEffect, useState} from 'react'
import './App.css'
import MultiselectAdapter from "./multiselect/MultiselectAdapter"
import {SimpleOption} from "./multiselect/MultiselectTypes"
import Modal from "./modal/Modal"

const OPTIONS_URL = 'https://62ceb184826a88972d00f351.mockapi.io/api/config'

function App() {
    const [options, setOptions] = useState<SimpleOption[]>()
    const [isLoaded, setIsLoaded] = useState<boolean>()
    useEffect(() => {
        (!isLoaded) && fetch(OPTIONS_URL)
            .then(response => response.json())
            .then(options => options.map((option: any) => {
                    return {id: Number(option.id), label: option.label, value: option.value}
                })
            )
            .then(options => {
                setOptions(options);
                setIsLoaded(true);
            })
            .catch(error => console.log(error));
    })
    const [selection, setSelection] = useState<SimpleOption[]>([])
    const [isModalOpen, setModalOpen] = useState(false)

    return (
        <>
            <Modal isOpen={isModalOpen}>
                <div>
                    {isLoaded ? <MultiselectAdapter
                        availableOptions={options ? options : []}
                        selectedOptions={selection}
                        onSelectionSubmit={(selection) => setSelection(selection)}
                        isMultiSelect={true}>
                        <button onClick={() => setModalOpen(false)}>Close Modal</button>
                    </MultiselectAdapter> : <label>Loading...</label>}
                </div>
            </Modal>
            {!isModalOpen && <button onClick={() => setModalOpen(true)}>Open Modal</button>}
        </>
    )

}

export default App
