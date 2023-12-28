import {Component} from 'react'

import QueueItem from './components/QueueItem'

import FirstOutItem from './components/FirstOutItem'

import './App.css'

let firstOutList = []

class App extends Component {
  state = {
    QueueList: [],
    inputText: '',
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 10000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    const {QueueList} = this.state
    if (QueueList.length > 0) {
      const firstOut = QueueList.shift()
      console.log(firstOut)
      firstOutList.push(firstOut)

      this.setState(prevState => ({
        QueueList: [...prevState.QueueList],
      }))
    }
  }

  onSubmitEnd = () => {
    const {QueueList} = this.state
    if (QueueList.length === 0) {
      alert('Success! Queue is empty.')
    } else {
      alert('Waiting for the queue to be empty...')
    }
  }

  onSubmitReset = () => {
    this.setState({QueueList: []})
    firstOutList = []
  }

  onAddQueue = () => {
    const {inputText} = this.state
    if (inputText.trim() !== '') {
      const newQueue = {
        inputText,
      }
      this.setState(prevState => ({
        QueueList: [...prevState.QueueList, newQueue],
        inputText: '',
      }))
    }
  }

  onChangeText = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {QueueList, inputText} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Queue Manager</h1>
        <div className="responsive-container">
          <div className="task-container">
            <form className="form-container">
              <input
                className="input"
                value={inputText}
                placeholder="Enter Text"
                onChange={this.onChangeText}
              />
              <button
                className="button"
                onClick={this.onAddQueue}
                type="button"
              >
                Add
              </button>
            </form>

            <ul>
              {QueueList.map(eachQueue => (
                <QueueItem key={eachQueue.id} queueDetails={eachQueue} />
              ))}
            </ul>
          </div>
          <div className="task-container">
            <ul>
              {firstOutList.map(eachQueue => (
                <FirstOutItem key={eachQueue.id} queueDetails={eachQueue} />
              ))}
              <div className="button-container">
                <button
                  onClick={this.onSubmitEnd}
                  className="end-button"
                  type="button"
                >
                  End
                </button>
                <button
                  onClick={this.onSubmitReset}
                  className="reset-button"
                  type="button"
                >
                  Reset
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
