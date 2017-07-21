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

  render() {

    console.log(this);

    return (
      <div className='question-answer-wrap'>
        <Table
          fixedHeader={true}
          selectable={false}
          multiSelectable={false}
          wrapperStyle='normal'
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
            <TableRow>
              <TableRowColumn><a href={this.props.data[0].link}>{this.props.data[0].title}</a></TableRowColumn>
              <TableRowColumn>{this.props.data[0].answer_count}</TableRowColumn>
              <TableRowColumn>here, are, some, tags</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default QuestionResponse;
