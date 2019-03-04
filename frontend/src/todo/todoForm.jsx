import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search } from './todoActions'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }
  
  keyHandler(e) {
    e.key === 'Enter' 
      ? (e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()) 
        : (e.key === 'Escape' ? this.props.handleClear() : null)
  }

  componentWillMount() {
    this.props.search()
  }

  render() {
    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input
            type='text'
            id='description'
            className='form-control'
            placeholder='Add a todo'
            value={this.props.description}
            onKeyUp={this.keyHandler}
            onChange={this.props.changeDescription}
            />
        </Grid>
        <Grid cols='12 3 2'>
          <IconButton style='primary' onClick={this.props.handleAdd} icon='plus' />
          <IconButton style='info' onClick={this.props.handleSearch} icon='search' />
          <IconButton style='default' onClick={this.props.handleClear} icon='close' />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => 
  bindActionCreators({ changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)