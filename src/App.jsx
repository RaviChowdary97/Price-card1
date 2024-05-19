import React from 'react';
import './App.css';

const plans = [
  {
    name: "FREE",
    price: "$0/month",
    features: [
      { name: "Single User", available: true },
      { name: "50GB Storage", available: true },
      { name: "Unlimited Public Projects", available: true },
      { name: "Community Access", available: true },
      { name: "Unlimited Private Projects", available: false },
      { name: "Dedicated Phone Support", available: false },
      { name: "Free Subdomain", available: false },
      { name: "Monthly Status Reports", available: false }
    ]
  },
  {
    name: "PLUS",
    price: "$9/month",
    features: [
      { name: "5 Users", available: true },
      { name: "50GB Storage", available: true },
      { name: "Unlimited Public Projects", available: true },
      { name: "Community Access", available: true },
      { name: "Unlimited Private Projects", available: true },
      { name: "Dedicated Phone Support", available: true },
      { name: "Free Subdomain", available: true },
      { name: "Monthly Status Reports", available: false }
    ]
  },
  {
    name: "PRO",
    price: "$49/month",
    features: [
      { name: "Unlimited Users", available: true },
      { name: "50GB Storage", available: true },
      { name: "Unlimited Public Projects", available: true },
      { name: "Community Access", available: true },
      { name: "Unlimited Private Projects", available: true },
      { name: "Dedicated Phone Support", available: true },
      { name: "Free Subdomain", available: true },
      { name: "Monthly Status Reports", available: true }
    ]
  }
];

const PricingCard = ({ plan }) => (
  <div className="card">
    <div className="card-header">
      <h3>{plan.name}</h3>
      <h4>{plan.price}</h4>
    </div>
    <div className="card-body">
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index} className={feature.available ? "" : "text-muted"}>
            <i className={`fas ${feature.available ? "fa-check" : "fa-times"}`}></i> {feature.name}
          </li>
        ))}
      </ul>
    </div>
    <div className="card-footer">
      <button className="btn">BUTTON</button>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <div className="pricing-table">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
}

export default App;
