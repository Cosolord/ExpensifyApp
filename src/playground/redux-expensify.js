import store from '../store/configureStore';
import { addExpense, removeExpense, editExpense } from '../actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import getVisibleExpenses from '../selectors/expenses';

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: -86700 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 111, note: 'iced', createdAt: -1000 }));
// store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 230 }));

// store.dispatch(setTextFilter('fEE'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));
