import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription } from './todoActions'

const TodoForm = props => {
  const keyHandler = (e) => {
    e.key === 'Enter' 
      ? (e.shiftKey ? props.handleSearch() : props.handleAdd()) 
        : (e.key === 'Escape' ? props.handleClear() : null)
  }

  return (
    <div role='form' className='todoForm'>
      <Grid cols='12 9 10'>
        <input
          type='text'
          id='description'
          className='form-control'
          placeholder='Add a todo'
          value={props.description}
          onKeyUp={keyHandler}
          onChange={props.changeDescription}
          />
      </Grid>
      <Grid cols='12 3 2'>
        <IconButton style='primary' onClick={props.handleAdd} icon='plus' />
        <IconButton style='info' onClick={props.handleSearch} icon='search' />
        <IconButton style='default' onClick={props.handleClear} icon='close' />
      </Grid>
    </div>
  )
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => 
  bindActionCreators({ changeDescription }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)