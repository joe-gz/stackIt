import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class QuestionResponse extends Component {

  createTableRows = (row) => {
    return (
      <TableRow key={row.link}>
        <TableRowColumn><a href={row.link} target='_blank'>{row.title}</a></TableRowColumn>
        <TableRowColumn>{row.answer_count}</TableRowColumn>
        <TableRowColumn>here, are, some, tags</TableRowColumn>
      </TableRow>
    );
  }

  render() {

    console.log(this);
    const tableRows = this.props.data.map(this.createTableRows);
    const height = window.innerHeight - (8 * 16) + 'px';

    return (
      <div className={`question-answer-wrap ${this.props.visible ? 'showing-answer' : ''}`}>
        <Table
          fixedHeader={true}
          height={height}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
          >
            <TableRow>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Answers</TableHeaderColumn>
              <TableHeaderColumn>Tags</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
            {tableRows}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default QuestionResponse;
