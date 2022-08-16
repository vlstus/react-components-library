import {ReactElement} from "react"

interface OptionsAware {
    availableOptions: SimpleOption[],
    selectedOptions: SimpleOption[]
}

interface MultiselectRenderingParametersAware {
    isMultiSelect: boolean
}

interface MultiselectProperties extends OptionsAware, MultiselectRenderingParametersAware {
    onSelect?: (selectionDifference: OnSelectDiff) => void,
    onRemove?: (selectionDifference: OnRemoveDiff) => void,
}

interface MultiselectAdapterProperties extends OptionsAware, MultiselectRenderingParametersAware {
    onSelectionSubmit?: (selection: SimpleOption[]) => void,
    children?: ReactElement | ReactElement[]
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