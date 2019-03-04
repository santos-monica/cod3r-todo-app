import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search, clear } from './todoActions'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }
  
  keyHandler(e) {
    const { add, search, clear, description } = this.props
    e.key === 'Enter' 
      ? (e.shiftKey ? search() : add(description)) 
        : (e.key === 'Escape' ? clear() : null)
  }

  componentWillMount() {
    this.props.search()
  }

  render() {
    const { add, changeDescription, search, clear, description } = this.props

    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input
            type='text'
            id='description'
            className='form-control'
            placeholder='Add a todo'
            value={description}
            onKeyUp={this.keyHandler}
            onChange={changeDescription}
            />
        </Grid>
        <Grid cols='12 3 2'>
          <IconButton style='primary' onClick={() => add(description)} icon='plus' />
          <IconButton style='info' onClick={search} icon='search' />
          <IconButton style='default' onClick={clear} icon='close' />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => 
  bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)