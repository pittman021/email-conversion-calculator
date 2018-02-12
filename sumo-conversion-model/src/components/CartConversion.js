import React, { Component } from 'react';
import TableConversionFunnel from './table_conversion_funnel';
import TableLostSales from './table_lost_sales';
import TableSalesRecovered from './table_sales_recovered';

class CartConversionForm extends Component {
  constructor() {
    super();

    this.state = {
      shopifySiteData: 30,
      websiteTraffic: 10000,
      addedToCart: 100,
      reachedCheckout: 50,
      purchases: 30,
      avgOrderValue: 100,
      orderRecovery: 15,
      incentiveOffered: 5
    };

    this.labels = {
      shopifySiteData: 'Shopify Site Data',
      websiteTraffic: 'Website Traffic',
      addedToCart: 'Added To Cart',
      reachedCheckout: 'Reached Checkout',
      purchases: 'Purchases',
      avgOrderValue: 'Average Order Value $',
      orderRecovery: 'Order Recovery %',
      incentiveOffered: 'Incentive Offered (off purchase)'
    };

    this.industryAverage = {};
  }

  getConversionData() {
    const cartAvg = this.state.addedToCart / this.state.websiteTraffic * 100;
    const checkoutAvg = this.state.reachedCheckout / this.state.websiteTraffic * 100;
    const purchaseAvg = this.state.purchases / this.state.websiteTraffic * 100;

    return {
      traffic: this.state.websiteTraffic.toLocaleString(),
      data: [this.state.addedToCart.toLocaleString(), this.state.reachedCheckout.toLocaleString(), this.state.purchases.toLocaleString()],
      avgs: [cartAvg, checkoutAvg, purchaseAvg]
    };
  }

  getCartData() {
    const lostSales = this.state.addedToCart - this.state.purchases;
    const lostRevenue = lostSales * this.state.avgOrderValue;
    return {
      lostSales,
      lostRevenue
    };
  }

  getSalesRecovered() {
    const lostSales = this.state.addedToCart - this.state.purchases;
    const salesRecovered = Math.ceil(lostSales * (this.state.orderRecovery / 100));
    const recoveredRevenue = Math.ceil(salesRecovered * (this.state.avgOrderValue * (1 - this.state.incentiveOffered / 100)));

    return {
      salesRecovered,
      recoveredRevenue
    };
  }

  handleChange(event) {
    const field = event.target.id;
    const value = event.target.value;
    const obj = {};
    obj[field] = value.toLocaleString();
    this.setState(obj);
  }

  renderInputFields() {
    const state = Object.keys(this.state);
    return state.map(key => {
      const value = this.state[key];
      const label = this.labels[key];
      return (
        <div key={key} className="pure-control-group">
          <label htmlFor={key}>{label}</label>
          <input type="text" id={key} key={key} onChange={event => this.handleChange(event)} value={value} />
        </div>
      );
    });
  }

  render() {
    const lostSales = this.state.addedToCart - this.state.purchases;
    const salesRecovered = Math.floor(lostSales * (this.state.orderRecovery / 100));
    const ROI = Math.floor(salesRecovered * (this.state.avgOrderValue * (1 - this.state.incentiveOffered / 100))) / 332;
    return (
      <div className="cart-conversion-form">
        <h2>Cart Conversion Model</h2>
        <div>
          <div className="pure-u-1-3">
            <form className="pure-form pure-form-aligned cart-conversion-inputs">
              <fieldset>{this.renderInputFields()}</fieldset>
            </form>
          </div>
          <div className="pure-u-2-3">
            <div className="metrics">
              <TableConversionFunnel data={this.getConversionData()} />

              <TableLostSales data={this.getCartData()} />
              <TableSalesRecovered data={this.getSalesRecovered()} />
            </div>
          </div>
          <br />
        </div>
        <h3 className="cart-text">
          You could earn <span style={{ color: ROI > 0 ? 'green' : 'red' }}>${ROI.toFixed(2)}</span> in revenue for every $1 invested in Sumo
        </h3>
      </div>
    );
  }
}

export default CartConversionForm;
