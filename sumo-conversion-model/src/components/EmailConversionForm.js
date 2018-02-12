import React, { Component } from 'react';

class EmailConversionForm extends Component {
  constructor() {
    super();

    this.state = {
      websiteTraffic: 5000,
      conversionRate: 3,
      emailsSentPerMonth: 2,
      emailListSize: 5000,
      bounceRate: 5,
      openRate: 16,
      clickThroughRate: 2.31,
      clickToPurchase: 4,
      averageOrder: 50,
      emailValue: 1
    };

    this.labels = {
      websiteTraffic: 'Website Traffic',
      conversionRate: 'Converion Rate %',
      emailsSentPerMonth: 'Emails Sent Per Month',
      emailListSize: 'Email List Per Size',
      bounceRate: 'Bounce Rate %',
      openRate: 'Open Rate %',
      clickThroughRate: 'Click Through Rate %',
      clickToPurchase: 'Click To Purchase %',
      averageOrder: 'Average Order',
      emailValue: 'Email Value $'
    };
  }

  getMetrics() {
    // state //
    const data = this.state;

    // calculating campaign data //
    const deliveredSubs = data.emailListSize - data.emailListSize * (data.bounceRate / 100);
    const monthlyEmailsSent = deliveredSubs * data.emailsSentPerMonth;
    const emailsClicked = monthlyEmailsSent * (data.clickThroughRate / 100);
    const numOfPurchases = emailsClicked * (data.clickToPurchase / 100);

    // calculating campaign metrics //
    const monthlyEmailRevenue = numOfPurchases * data.averageOrder;
    const annualEmailRevenue = monthlyEmailRevenue * 12;
    const annualRevenuePerSubscriber = annualEmailRevenue / deliveredSubs;

    // return metrics for consumption in render method //

    return (
      <div>
        <p>Monthly Email Revenue: ${monthlyEmailRevenue.toLocaleString()}</p>
        <p>Annual Email Revenue: ${annualEmailRevenue.toLocaleString()}</p>
        <p>Annual Revenue Per Subscriber: ${annualRevenuePerSubscriber.toLocaleString()}</p>
      </div>
    );
  }

  // form input handler. identifies the field and sets state on new value
  handleChange(event) {
    const field = event.target.id;
    const value = event.target.value;
    const obj = {};
    obj[field] = value;
    this.setState(obj);
  }

  // render method for all Input fields.
  // uses state.labels to pass in labels. couldn't think of a better way
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
    return (
      <div className="email-conversion-form">
        <div className="email-converion-header">
          <h2>Email Conversion Form</h2>
        </div>
        <div>
          <form className="pure-form pure-form-aligned">
            <fieldset>{this.renderInputFields()}</fieldset>
          </form>
        </div>
        <div className="metrics" />
        {this.getMetrics()}
      </div>
    );
  }
}

export default EmailConversionForm;
