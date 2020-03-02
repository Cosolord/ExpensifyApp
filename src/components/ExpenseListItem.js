import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    {`${amount}€ (spesa effettuata: ${moment(createdAt).format('dddd D MMM YYYY')}) `}
  </div>
);

export default ExpenseListItem;
