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
    let tagString = row.tags.join(', ');
    return (
      <TableRow key={row.link}>
        <TableRowColumn style={{width: '40%'}}><a href={row.link} target='_blank'>{row.title}</a></TableRowColumn>
        <TableRowColumn style={{width: '25%'}}>{row.answer_count}</TableRowColumn>
        <TableRowColumn style={{width: '35%'}}>{tagString}</TableRowColumn>
      </TableRow>
    );
  }

  render() {

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
              <TableHeaderColumn style={{width: '40%'}}>Title</TableHeaderColumn>
              <TableHeaderColumn style={{width: '25%'}}>Answers</TableHeaderColumn>
              <TableHeaderColumn style={{width: '35%'}}>Tags</TableHeaderColumn>
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
