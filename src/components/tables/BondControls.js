import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';

import { IconFont } from '../IconFont';
import { Button } from '../Button';
import { Input } from '../Input';

const MODES = {
  idle: '',
  edit: '',
};

const ControlsWrap = tachyons('span')`hide-child`;
const RowEdit = tachyons('div')`
  flex justify-end
  w-100 
  h2
`;
const RowBond = tachyons('div')`
  flex justify-between items-center
  w-100 h-100
`;
const RowSum = tachyons('div')`
  flex w-100 justify-center items-center
  h2
`;

export function BondControls({ mode, value, onChange }) {
  const controlsEdit = () => {
    if (mode === 'edit') {
      return (
        <>
          <Button size="tiny" shape="pill">
            <IconFont icon="times" size="tiny" />
          </Button>
          <Button size="tiny" shape="pill">
            <IconFont icon="check" size="tiny" />
          </Button>
        </>
      );
    }
    return (
      <Button size="small" shape="pill" appearance="none" wrapProps={{ className: 'child' }}>
        <IconFont icon="edit" size="small" />
      </Button>
    );
  };

  const controlsBond = () => {
    if (mode === 'edit') {
      return (
        <>
          <div />
          <Input
            center
            value={value}
            label="Input with value"
            hideLabel
            onChange={onChange}
            wrapClass="mb0"
          />
          <div />
        </>
      );
    }
    return (
      <>
        <Button
          shape="pill"
          size="small"
          toggleTo={<IconFont icon="circle" size="small" />}
          appearance="secondary"
        >
          <IconFont icon="hand-scissors-o" aria-label="identicon" size="small" />
        </Button>
        {value}
        <Button
          shape="pill"
          size="small"
          toggleTo={<IconFont icon="hand-paper-o" size="small" />}
          appearance="secondary"
        >
          <IconFont icon="hand-rock-o" aria-label="identicon" size="small" />
        </Button>
      </>
    );
  };

  const controlsSum = () => {
    if (mode !== 'edit') {
      return null;
    }
    return (
      <>
        <Button appearance="outlineColor" size="tiny">
          25%
        </Button>
        <Button appearance="outlineColor" size="tiny">
          50%
        </Button>
        <Button appearance="outlineColor" size="tiny">
          75%
        </Button>
        <Button appearance="outlineColor" size="tiny">
          100%
        </Button>
      </>
    );
  };
  return (
    <ControlsWrap>
      <RowEdit>{controlsEdit()}</RowEdit>
      <RowBond>{controlsBond()}</RowBond>
      <RowSum>{controlsSum()}</RowSum>
    </ControlsWrap>
  );
}

BondControls.propTypes = {
  value: PropTypes.string,
  mode: PropTypes.oneOf(Object.keys(MODES)),
  onChange: PropTypes.func,
};

BondControls.defaultProps = {
  value: 'fetching value',
  mode: 'idle',
  onChange: null,
};
