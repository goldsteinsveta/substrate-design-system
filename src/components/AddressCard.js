import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';
import { Identicon } from './Identicon';

const Box = tachyons('div')`
  inline-flex items-center mv2
`;
const InfoBox = tachyons('div')`
  ml2
`;
const AddressTitle = tachyons('div')`
  f5 fw6
`;
const Address = tachyons('div')`
  f7 code
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
    // TODO name is read or generated? where does networkd data is coming from?
    name: PropTypes.string,
    address: PropTypes.string,
    network: PropTypes.string,
    isLoading: PropTypes.bool,
  }),
};

AddressCard.defaultProps = {
  accountData: { name: 'N4m3', address: '4ddR355', network: 'network', isLoading: false },
};
