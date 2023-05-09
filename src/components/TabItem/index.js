import './index.css'

const TabItem = props => {
  const {tabDetails, updateValue, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  const ChangeUpdate = () => {
    updateValue(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={ChangeUpdate}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
