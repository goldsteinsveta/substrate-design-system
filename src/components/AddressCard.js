import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Identicon } from './Identicon';

const Box = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  vertical-align: top;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const InfoBox = styled.div`
  margin-left: 8px;
`;
const AddressTitle = styled.h3``;
const Address = styled.code`
  display: block;
  margin-top: -2px;
`;

// Either pass the full list of users, or a userCount if known
export function AddressCard({ accountData, ...props }) {
  return (
    <Box aria-label="users" {...props}>
      <Identicon {...accountData} />
      <InfoBox>
        <AddressTitle>{accountData.name}</AddressTitle>
        <Address>{accountData.address}</Address>
      </InfoBox>
    </Box>
  );
}

AddressCard.propTypes = {
  accountData: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    network: PropTypes.string,
    isLoading: PropTypes.bool,
  }),
};

AddressCard.defaultProps = {
  accountData: { name: 'N4m3', address: '4ddR355', network: 'network', isLoading: true },
};
