interface MultiselectProperties {
    availableOptions: SimpleOption[],
    selectedOptions: SimpleOption[],
    onSelect: (selectionDifference: OnSelectDiff) => void,
    onRemove: (selectionDifference: OnRemoveDiff) => void,
    isMultiSelect: boolean
}

type AfterChangeState = { selectedOptions: SimpleOption[], remainingOptions: SimpleOption[] }
type OnSelectDiff = AfterChangeState & { selectedOption?: SimpleOption }
type OnRemoveDiff = AfterChangeState & { removedOption?: SimpleOption }
type SimpleOption = Option<number, string, string>
type Option<K, V, L> = { id: K, label: L, value: V }

export {MultiselectProperties, SimpleOption, OnSelectDiff, OnRemoveDiff}