import React from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default prop => (
  <div>
    <PageHeader name='Todo' small='Register' />
    <TodoForm />
    <TodoList />
  </div>
)
