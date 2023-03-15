import { Component } from 'react';
import PropTypes from 'prop-types';

import { Title, SectionContainer } from './Section.styled';

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <SectionContainer>
        <Title>{title}</Title>
        {children}
      </SectionContainer>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
