import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './pricing.css'

const Pricing = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className="pricing-pricing23 thq-section-padding">
      <div className="pricing-max-width thq-section-max-width">
        <div className="pricing-section-title">
          <span className="thq-body-small">{props.content1}</span>
          <div className="pricing-content">
            <h2 className="pricing-text11 thq-heading-2">{props.heading1}</h2>
            <p className="pricing-text12 thq-body-large">{props.content2}</p>
          </div>
        </div>
        <div className="pricing-tabs">
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing-button1 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Price</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing-button2 thq-button-outline thq-button-animated"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing-button3 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
        </div>
        {isMonthly && (
          <div className="pricing-container1">
            <div className="pricing-column1 thq-card">
              <div className="pricing-price10">
                <div className="pricing-price11">
                  <p className="pricing-text16 thq-body-large">{props.plan1}</p>
                  <h3 className="pricing-text17 thq-heading-3">
                    {props.plan1Price}
                  </h3>
                  <p className="thq-body-large">{props.plan1Yearly}</p>
                </div>
                <div className="pricing-list1">
                  <div className="pricing-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1}
                    </span>
                  </div>
                  <div className="pricing-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2}
                    </span>
                  </div>
                  <div className="pricing-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature3}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button4 thq-button-outline thq-button-animated">
                <span className="thq-body-small">{props.plan1Action}</span>
              </button>
            </div>
            <div className="pricing-column2 thq-card">
              <div className="pricing-price12">
                <div className="pricing-price13">
                  <p className="pricing-text23 thq-body-large">{props.plan2}</p>
                  <h3 className="pricing-text24 thq-heading-3">
                    {props.plan2Price}
                  </h3>
                  <p className="thq-body-large">{props.plan2Yearly}</p>
                </div>
                <div className="pricing-list2">
                  <div className="pricing-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature1}
                    </span>
                  </div>
                  <div className="pricing-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature2}
                    </span>
                  </div>
                  <div className="pricing-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature3}
                    </span>
                  </div>
                  <div className="pricing-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature4}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button5 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan2Action}</span>
              </button>
            </div>
            <div className="pricing-column3 thq-card">
              <div className="pricing-price14">
                <div className="pricing-price15">
                  <p className="pricing-text31 thq-body-large">{props.plan3}</p>
                  <h3 className="pricing-text32 thq-heading-3">
                    {props.plan3Price}
                  </h3>
                  <p className="thq-body-large">{props.plan3Yearly}</p>
                </div>
                <div className="pricing-list3">
                  <div className="pricing-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature1}
                    </span>
                  </div>
                  <div className="pricing-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature2}
                    </span>
                  </div>
                  <div className="pricing-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature3}
                    </span>
                  </div>
                  <div className="pricing-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature4}
                    </span>
                  </div>
                  <div className="pricing-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature5}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button6 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan3Action}</span>
              </button>
            </div>
          </div>
        )}
        {!isMonthly && (
          <div className="pricing-container2">
            <div className="pricing-column4 thq-card">
              <div className="pricing-price16">
                <div className="pricing-price17">
                  <span className="pricing-text40 thq-body-large">
                    {props.plan11}
                  </span>
                  <h3 className="pricing-text41 thq-heading-3">
                    {props.plan1Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan1Yearly1}</span>
                </div>
                <div className="pricing-list4">
                  <div className="pricing-list-item22">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11}
                    </span>
                  </div>
                  <div className="pricing-list-item23">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21}
                    </span>
                  </div>
                  <div className="pricing-list-item24">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button7 thq-button-outline thq-button-animated">
                <span className="thq-body-small">{props.plan1Action1}</span>
              </button>
            </div>
            <div className="pricing-column5 thq-card">
              <div className="pricing-price18">
                <div className="pricing-price19">
                  <span className="pricing-text47 thq-body-large">
                    {props.plan21}
                  </span>
                  <h3 className="pricing-text48 thq-heading-3">
                    {props.plan2Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan2Yearly1}</span>
                </div>
                <div className="pricing-list5">
                  <div className="pricing-list-item25">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11}
                    </span>
                  </div>
                  <div className="pricing-list-item26">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21}
                    </span>
                  </div>
                  <div className="pricing-list-item27">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31}
                    </span>
                  </div>
                  <div className="pricing-list-item28">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button8 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan2Action1}</span>
              </button>
            </div>
            <div className="pricing-column6 thq-card">
              <div className="pricing-price20">
                <div className="pricing-price21">
                  <span className="pricing-text55 thq-body-large">
                    {props.plan31}
                  </span>
                  <h3 className="pricing-text56 thq-heading-3">
                    {props.plan3Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan3Yearly1}</span>
                </div>
                <div className="pricing-list6">
                  <div className="pricing-list-item29">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11}
                    </span>
                  </div>
                  <div className="pricing-list-item30">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21}
                    </span>
                  </div>
                  <div className="pricing-list-item31">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31}
                    </span>
                  </div>
                  <div className="pricing-list-item32">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41}
                    </span>
                  </div>
                  <div className="pricing-list-item33">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing-button9 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan3Action1}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing.defaultProps = {
  plan3Feature31: 'Feature text goes here',
  plan2Feature4: 'Feature text goes here',
  plan2Price1: '$299/yr',
  plan1Feature21: 'Feature text goes here',
  plan1: 'Basic plan',
  plan3Action1: 'Get started',
  plan11: 'Basic plan',
  plan3Price1: '$499/yr',
  plan1Price1: '$200/yr',
  plan1Feature3: '4 biscuits',
  plan2Feature2: '4 large sides',
  plan2Yearly: '$199.99',
  plan3Feature2: '6 large sides',
  plan1Feature31: 'Feature text goes here',
  plan1Action1: 'Get started',
  plan1Feature11: 'Feature text goes here',
  plan3Feature41: 'Feature text goes here',
  plan2Feature1: '12 pieces of fried chicken',
  plan3: 'Enterprise plan',
  plan1Price: '$9.99',
  plan1Yearly: '$99.99',
  plan3Action: 'Order Now',
  plan3Yearly1: 'or $49 monthly',
  heading1: 'Pricing plan',
  plan1Action: 'Order Now',
  plan3Feature4: 'Feature text goes here',
  plan21: 'Business plan',
  plan3Feature5: 'Feature text goes here',
  plan3Feature3: '12 biscuits',
  plan3Feature51: 'Feature text goes here',
  plan31: 'Enterprise plan',
  plan3Yearly: '$299.99',
  plan2Price: '$19.99',
  plan2Action1: 'Get started',
  plan1Feature2: '2 large sides',
  plan3Feature1: '20 pieces of fried chicken',
  plan2Yearly1: 'or $29 monthly',
  plan3Feature11: 'Feature text goes here',
  plan1Yearly1: 'or $20 monthly',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  plan2: 'Business plan',
  plan2Action: 'Order Now',
  plan2Feature3: '8 biscuits',
  content1: 'Choose the perfect plan for you',
  plan2Feature21: 'Feature text goes here',
  plan3Feature21: 'Feature text goes here',
  plan2Feature11: 'Feature text goes here',
  plan2Feature41: 'Feature text goes here',
  plan2Feature31: 'Feature text goes here',
  plan1Feature1: '6 pieces of fried chicken',
  plan3Price: '$29.99',
}

Pricing.propTypes = {
  plan3Feature31: PropTypes.string,
  plan2Feature4: PropTypes.string,
  plan2Price1: PropTypes.string,
  plan1Feature21: PropTypes.string,
  plan1: PropTypes.string,
  plan3Action1: PropTypes.string,
  plan11: PropTypes.string,
  plan3Price1: PropTypes.string,
  plan1Price1: PropTypes.string,
  plan1Feature3: PropTypes.string,
  plan2Feature2: PropTypes.string,
  plan2Yearly: PropTypes.string,
  plan3Feature2: PropTypes.string,
  plan1Feature31: PropTypes.string,
  plan1Action1: PropTypes.string,
  plan1Feature11: PropTypes.string,
  plan3Feature41: PropTypes.string,
  plan2Feature1: PropTypes.string,
  plan3: PropTypes.string,
  plan1Price: PropTypes.string,
  plan1Yearly: PropTypes.string,
  plan3Action: PropTypes.string,
  plan3Yearly1: PropTypes.string,
  heading1: PropTypes.string,
  plan1Action: PropTypes.string,
  plan3Feature4: PropTypes.string,
  plan21: PropTypes.string,
  plan3Feature5: PropTypes.string,
  plan3Feature3: PropTypes.string,
  plan3Feature51: PropTypes.string,
  plan31: PropTypes.string,
  plan3Yearly: PropTypes.string,
  plan2Price: PropTypes.string,
  plan2Action1: PropTypes.string,
  plan1Feature2: PropTypes.string,
  plan3Feature1: PropTypes.string,
  plan2Yearly1: PropTypes.string,
  plan3Feature11: PropTypes.string,
  plan1Yearly1: PropTypes.string,
  content2: PropTypes.string,
  plan2: PropTypes.string,
  plan2Action: PropTypes.string,
  plan2Feature3: PropTypes.string,
  content1: PropTypes.string,
  plan2Feature21: PropTypes.string,
  plan3Feature21: PropTypes.string,
  plan2Feature11: PropTypes.string,
  plan2Feature41: PropTypes.string,
  plan2Feature31: PropTypes.string,
  plan1Feature1: PropTypes.string,
  plan3Price: PropTypes.string,
}

export default Pricing
