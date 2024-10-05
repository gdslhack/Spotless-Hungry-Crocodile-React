import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  content1:
    "The fried chicken at Franchise Fried Chicken is absolutely delicious! I can't get enough of it.",
  author1Name: 'John Smith',
  author4Name: 'Sarah Thompson',
  author4Src:
    'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODExOTc4NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Position: 'Food Blogger',
  author3Alt: 'Image of Michael Lee',
  author1Src:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODExOTc4NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: 'Food Critic',
  review1: '5 stars - Amazing taste and quality.',
  author4Alt: 'Image of Sarah Thompson',
  heading1: 'Testimonials',
  author3Position: 'Chicken Lover',
  author2Alt: 'Image of Emily Johnson',
  author3Src:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODExOTc4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  review4:
    '5 stars - The variety of flavors and spices used in the chicken make it a unique and delightful experience.',
  author2Name: 'Emily Johnson',
  author4Position: 'Food Enthusiast',
  review2:
    '4 stars - Great value for money and the chicken is always crispy and juicy.',
  author3Name: 'Michael Lee',
  author1Alt: 'Image of John Smith',
  author2Src:
    'https://images.unsplash.com/photo-1623085094152-489328c6e9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODExOTc4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  review3:
    "5 stars - The best fried chicken I've ever had. Will definitely be coming back for more.",
}

Testimonial.propTypes = {
  content1: PropTypes.string,
  author1Name: PropTypes.string,
  author4Name: PropTypes.string,
  author4Src: PropTypes.string,
  author2Position: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Src: PropTypes.string,
  author1Position: PropTypes.string,
  review1: PropTypes.string,
  author4Alt: PropTypes.string,
  heading1: PropTypes.string,
  author3Position: PropTypes.string,
  author2Alt: PropTypes.string,
  author3Src: PropTypes.string,
  review4: PropTypes.string,
  author2Name: PropTypes.string,
  author4Position: PropTypes.string,
  review2: PropTypes.string,
  author3Name: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Src: PropTypes.string,
  review3: PropTypes.string,
}

export default Testimonial
