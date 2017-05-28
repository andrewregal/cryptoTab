import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import * as coinSearchActions from '../../actions/coinSearchActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CoinSearch extends Component {

  componentWillMount() {
    this.props.getOptions();
  }

  render() {
    let coinPrice = this.props.coinPrice;
    let currentPrice = null;

    if (coinPrice) {
      currentPrice = <span className="current-price">${this.props.coinPrice}</span>
    }

    return (
      <div>
        <Select.Async
          name="form-field-name"
          loadOptions={this.props.options}
          onChange={this.props.handleCoinSelectionChange}
          value={this.props.coinSelected}
        />
        {currentPrice}
      </div>
    )
  }
}

const mapStateToProps = ({ coinSearchReducers }) => {
  const { options } = coinSearchReducers;

  return {
    options: options
  };
};

const bundledActionCreators = Object.assign({}, coinSearchActions);

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(bundledActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinSearch);
