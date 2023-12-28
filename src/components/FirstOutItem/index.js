const FirstOutItem = props => {
  const {queueDetails} = props
  const {inputText} = queueDetails

  return (
    <div>
      <li className="table-row">
        <div className="table-cell name-column">
          <p>{inputText}</p>
        </div>
      </li>
    </div>
  )
}

export default FirstOutItem
