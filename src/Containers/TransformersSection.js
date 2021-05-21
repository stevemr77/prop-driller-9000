import React, { Component } from 'react';

import Transformer from '../Components/Transformer'

class TransformersSection extends Component {

  renderTransformers = () => {
    return this.props.proptimii.map(transformer => {
      return <Transformer  
                key={transformer.id}
                name={transformer.name} 
                image={transformer.url}
              />      
    })
  }

  render() {
    return (
      <section className = "transformers-section">
        {this.renderTransformers()}
      </section>
    );
  }
}

export default TransformersSection;
