interface MultiselectProperties {
    availableOptions: SimpleOption[],
    selectedOptions: SimpleOption[],
    onSelect: (selectionDifference: OnSelectDiff) => void,
    onRemove: (selectionDifference: OnRemoveDiff) => void,
    isMultiSelect: boolean
}

interface MultiselectAdapterProperties {
    availableOptions: SimpleOption[],
    selectedOptions: SimpleOption[],
    isMultiSelect: boolean
}

type MultiselectAdapterState = { availableOptions: SimpleOption[], selectedOptions: SimpleOption[] }
type AfterChangeState = { selectedOptions: SimpleOption[], remainingOptions: SimpleOption[] }
type OnSelectDiff = AfterChangeState & { selectedOption?: SimpleOption }
type OnRemoveDiff = AfterChangeState & { removedOption?: SimpleOption }
type SimpleOption = Option<number, string, string>
type Option<K, V, L> = { id: K, label: L, value: V }

export {
    MultiselectProperties,
    MultiselectAdapterProperties,
    MultiselectAdapterState,
    SimpleOption,
    OnSelectDiff,
    OnRemoveDiff
}