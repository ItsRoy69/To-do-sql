import React from 'react'

class TaskList extends React.Component {
  state = {
    task: ""
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
      </div>

    )
    
  }
}

export default TaskList