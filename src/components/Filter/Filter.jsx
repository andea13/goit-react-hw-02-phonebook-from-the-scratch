import React, { Component } from 'react';
import { FilterLabel, FilterInput } from './Filter.styled';

class Filter extends Component {
  render() {
    return (
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" />
      </FilterLabel>
    );
  }
}

export default Filter;
