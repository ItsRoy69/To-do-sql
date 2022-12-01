import React from 'react'
import axios from 'axios'

class TaskList extends React.Component {
  state = {
    task: ""
  }

  onDeleteClick = () => {
    console.log (' Inside Delete')
  }

  onSubmitClick = () => {
    axios.post('http://localhost:4000/addTask', {
      task: this.state.task
    })
  }

  render() {

    return (

      <div>
        <h3>
          TaskList
        </h3>
        <div className='ui input'>
          <input value={this.state.task} onChange={e => this.setState ({
            task: e.target.value
          })}  placeholder='Your task........' />
        </div>        
        <button className='ui primary button basic'>
          Submit
        </button>
        <hr />
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="meta">
                New Member
              </div>
              <div className="extra content">
                <div className="ui two buttons">
                  <div className="ui basic green button">Done</div>
                  <div className="ui basic red button">Delete</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
    
  }
}

export default TaskList