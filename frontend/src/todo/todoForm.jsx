import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
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
          onChange={props.handleChange}
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
