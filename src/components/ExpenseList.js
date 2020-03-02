import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h2>Lista delle spese</h2>
    <ul>
      {props.expenses.map((expense) => {
        return (
          <li key={expense.id}>
            <ExpenseListItem {...expense} />
          </li>
        );
      })}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
