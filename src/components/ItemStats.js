import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, typography } from './shared/styles';
import { inlineGlow } from './shared/animation';

const Value = styled.span``;
const Subtitle = styled.span``;
const Title = styled.span`
  font-weight: ${typography.weight.bold};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemWrapper = styled.li`
  list-style: none;
  border-top: 1px solid ${color.mediumlight};
  width: 100%;
  &:not(:last-child) {
    border-right: 1px solid ${color.mediumlight};
  }
`;

const ItemInner = styled.span`
  /* Layout */
  display: block;
  padding: 7px 15px;

  ${Title}, ${Value}, ${Subtitle} {
    display: block;
    flex: 0 1 auto;
    margin-right: auto;
  }
`;

const linkStyles = css`
  transition: all 150ms ease-out;
  color: ${color.black};
  text-decoration: none;
  display: block;

  ${props =>
    props.isLoading &&
    css`
      ${Title} {
        ${inlineGlow};
        flex: 0 1 auto;
        display: inline-block;
      }
    `};
`;

// eslint-disable-next-line jsx-a11y/anchor-has-content
const Item = styled(({ activeColor, isLoading, ...rest }) => <a {...rest} />)`
  ${linkStyles}
`;

const buildStyledLinkWrapper = LinkWrapper => styled(
  ({ isLoading, activeColor, ...linkWrapperRest }) => <LinkWrapper {...linkWrapperRest} />
)`
  ${linkStyles}
`;

export function ItemStats({ title, value, subtitle, onClick, LinkWrapper, ...rest }) {
  const linkInner = (
    <ItemInner onClick={onClick} role="presentation">
      <Title>{title}</Title>
      <Value>{value}</Value>
      <Subtitle>{subtitle}</Subtitle>
    </ItemInner>
  );

  if (LinkWrapper) {
    const StyledLinkWrapper = buildStyledLinkWrapper(LinkWrapper);

    return (
      <ItemWrapper>
        <Item>
          <StyledLinkWrapper {...rest}>{linkInner}</StyledLinkWrapper>
        </Item>
      </ItemWrapper>
    );
  }

  return <ItemWrapper>{linkInner}</ItemWrapper>;
}

ItemStats.propTypes = {
  isLoading: PropTypes.bool,
  title: PropTypes.node,
  value: PropTypes.string,
  subtitle: PropTypes.string,
  LinkWrapper: PropTypes.func,
  onClick: PropTypes.func,
};

ItemStats.defaultProps = {
  isLoading: false,
  title: <span>Loading</span>,
  value: 'item value',
  subtitle: 'item subtitle',
  LinkWrapper: undefined,
  onClick: undefined,
};
