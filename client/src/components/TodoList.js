import React, { Component } from 'react';
import { Button, Input, Segment, Table } from 'semantic-ui-react';

import TodoRow from './TodoRow';
import { createTodo, getTodos } from '../lib/daos/TodoDao';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTodoName: '',
            loading: false,
            todos: undefined,
        };
    }

    componentWillMount() {
        this.loadTodos();
    }

    render() {
        const { loading, newTodoName, todos } = this.state;

        return (
            <Segment loading={ loading }>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell collapsing> √ </Table.HeaderCell>
                            <Table.HeaderCell> Todo </Table.HeaderCell>
                            <Table.HeaderCell collapsing />
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        { todos && todos.map(todo => (
                            <TodoRow
                                key={ todo.id }
                                onDelete={ this.handleDelete }
                                { ...todo }
                            />
                        )) }
                    </Table.Body>
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell>
                                <Button icon="add" onClick={ this.handleAddClick } />
                            </Table.HeaderCell>
                            <Table.HeaderCell colSpan="2">
                                <Input
                                    fluid
                                    name="todo"
                                    onChange={ this.handleNameChange }
                                    value={ newTodoName }
                                />
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </Segment>
        );
    }

    handleAddClick = (evt) => {
        const { newTodoName: todo } = this.state;
        this.setState({ loading: true });

        createTodo({ todo }).then(() => {
            this.setState({ newTodoName: '' });
            this.loadTodos();
        });
    };

    handleDelete = () => this.loadTodos();

    handleNameChange = ({target: { value: newTodoName }}) => this.setState({ newTodoName });

    loadTodos() {
        this.setState({ loading: true });
        getTodos().then(todos => { this.setState({ loading: false, todos }) });
    }
}

export default TodoList;