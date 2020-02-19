import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Identicon, sizes } from './Identicon';
import WithTooltip from './tooltip/WithTooltip';
import { TooltipNote } from './tooltip/TooltipNote';
import { color, typography } from './shared/styles';

const UserIdenticon = styled(Identicon)`
  box-shadow: ${color.lightest} 0 0 0 2px;
  display: block;
`;

const UserTooltipWrapper = styled(WithTooltip)``;

const UserEllipses = styled.li`
  display: inline-flex;
  font-size: ${typography.size.s1}px;
  color: ${color.mediumdark};
  margin-left: 6px;
  white-space: nowrap;
`;

const User = styled.li`
  display: inline-flex;
`;

const Users = styled.ul`
  display: inline-flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  vertical-align: top;
  margin: 0;
  padding: 0;
  list-style: none;

  ${User} {
    position: relative;

    &:not(:first-of-type) {
      margin-left: -6px;
    }
    &:nth-child(1) {
      z-index: 3;
    }
    &:nth-child(2) {
      z-index: 2;
    }
    &:nth-child(3) {
      z-index: 1;
    }
  }
`;

// Either pass the full list of users, or a userCount if known
export function IdenticonList({ isLoading, users, userCount, size, ...props }) {
  const count = userCount || users.length;
  return (
    <Users aria-label="users" {...props}>
      {users.slice(0, 3).map(({ id, name, identiconUrl }) => (
        <User key={id}>
          <UserTooltipWrapper
            hasChrome={false}
            placement="bottom"
            trigger="hover"
            tooltip={<TooltipNote note={name} />}
          >
            <UserIdenticon size={size} username={name} src={identiconUrl} isLoading={isLoading} />
          </UserTooltipWrapper>
        </User>
      ))}
      {count > 3 && (
        <UserEllipses aria-label={`${count - 3} more user(s)`}> &#43; {count - 3} </UserEllipses>
      )}
    </Users>
  );
}

IdenticonList.propTypes = {
  isLoading: PropTypes.bool,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      identiconUrl: PropTypes.string,
    })
  ),
  /**
   * Total number of users in the list.
   */
  userCount: PropTypes.number,
  size: PropTypes.oneOf(Object.keys(sizes)),
};

IdenticonList.defaultProps = {
  isLoading: false,
  users: [
    { id: 'loading', identiconUrl: null, name: 'loading' },
    { id: 'loading2', identiconUrl: null, name: 'loading' },
    { id: 'loading3', identiconUrl: null, name: 'loading' },
  ],
  userCount: null,
  size: 'medium',
};
