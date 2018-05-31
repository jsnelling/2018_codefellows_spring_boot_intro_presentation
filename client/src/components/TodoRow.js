import React, { Component } from 'react';
import { Button, Input, Table } from 'semantic-ui-react';

import { deleteTodo, updateTodo } from '../lib/daos/TodoDao';

class TodoRow extends Component {
    constructor(props) {
        super(props);

        this.state = this.updateState(props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(this.updateState(nextProps));
    }

    render() {
        const { completed, todo } = this.state;

        return (
            <Table.Row>
                <Table.Cell collapsing>
                    <Input
                        checked={ completed || false }
                        name="completed"
                        onChange={ this.handleCompletedClick }
                        type="checkbox"
                    />
                </Table.Cell>
                <Table.Cell>
                    <Input
                        fluid
                        name="todo"
                        onBlur={ this.handleNameBlur }
                        onChange={ this.handleNameChange }
                        value={ todo }
                    />
                </Table.Cell>
                <Table.Cell collapsing>
                    <Button
                        circular
                        icon="delete"
                        onClick={ this.handleDeleteClick }
                    />
                </Table.Cell>
            </Table.Row>
        );
    }

    handleCompletedClick = ({ target: { checked: completed } }) => {
        const { id } = this.props;

        this.setState({ completed });

        updateTodo(id, { completed });
    };

    handleDeleteClick = (evt) => {
        const { id, onDelete } = this.props;

        deleteTodo(id).then(() => {
            onDelete && onDelete();
        });
    };

    handleNameBlur = () => {
        const { id } = this.props;
        const { todo } = this.state;

        updateTodo(id, { todo });
    };

    handleNameChange = ({target: { value: todo }}) => this.setState({ todo });

    updateState({ completed, todo }) {
        return { completed, todo };
    }
}

export default TodoRow;