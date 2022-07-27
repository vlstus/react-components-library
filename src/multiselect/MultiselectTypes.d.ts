interface MultiselectProperties {
    availableOptions: SimpleOption[],
    selectedOptions: SimpleOption[],
    onSelect: (selectionDifference: OnSelectDiff) => void,
    onRemove: (selectionDifference: OnRemoveDiff) => void
}

type OnSelectDiff = { selectedOptions: SimpleOption[], selectedOption: SimpleOption }
type OnRemoveDiff = { selectedOptions: SimpleOption, removedOption: SimpleOption }
type SimpleOption = Option<number, string, string>
type Option<K, V, L> = { id: K, label: L, value: V }

export {MultiselectProperties, SimpleOption, OnSelectDiff, OnRemoveDiff}