import './index.css'

const QueueItem = props => {
  const {queueDetails} = props

  const {inputText} = queueDetails

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{inputText}</p>
      </div>
    </li>
  )
}

export default QueueItem
