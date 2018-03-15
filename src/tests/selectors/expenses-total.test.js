import moment from 'moment';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test('should return 0 if no expenses', () => {
  const total = selectExpensesTotal([]);
  expect(total).toBe(0);
});


test('should correctly add up a single expense', () => {
  const oneExpense = [expenses[0]];
  const result = selectExpensesTotal(oneExpense);
  expect(result).toBe(expenses[0].amount);
});

test('should correctly add multiple expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(114195);
});