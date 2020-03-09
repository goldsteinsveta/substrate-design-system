import React from 'react';
import tachyons from 'tachyons-components';

import { Button } from '../../Button';
import { IconFont } from '../../IconFont';
import WithModal from '../../modal/WithModal';
import { Identicon } from '../../Identicon';
import { Input } from '../../Input';

import { FundsControlsInContext as FundsTable } from '../../tables/FundsControls.stories';
import { ContentAndTabsLichen as MainMenu } from '../../MainMenu.stories';
import { FormFrameNewMnemonic, FormFrameTransfer } from '../../FormFrame.stories';

export default {
  title: 'Apps/Lichen',
  component: MainMenu,
  excludeStories: /.*Data$/,
};

// TODO: component
// eslint-disable-next-line react/prop-types
const ModalContents = ({ onClose }) => (
  <>
    <h2>
      <span className="mr2">
        <Identicon />
      </span>
      Add Account
    </h2>

    <Input appearance="underline" label="name" />

    <Button appearance="none">New Account</Button>
    <Button appearance="none">JSON</Button>
    <Button appearance="none">Signer</Button>
    <Button appearance="none">Mnemonic</Button>

    <div className="mt2 mb4">
      <FormFrameNewMnemonic />
    </div>

    <Button
      appearance="primary"
      size="large"
      onClick={onClose}
      role="button"
      tabIndex="0"
      shape="pill"
      wrapClass="flex w-100 justify-center"
    >
      Next
    </Button>
  </>
);

// TODO: components for this kind of things
const LayoutBox = tachyons('div')`center flex box1000 flex-column mv4`;

export const start = () => (
  <>
    <MainMenu />
    <LayoutBox>
      <h3 className="mb3">
        Your Accounts
        <WithModal modal={ModalContents}>
          {({ onOpen }) => (
            <Button appearance="color" size="inherit" onClick={onOpen} role="button" tabIndex="0">
              Add
            </Button>
          )}
        </WithModal>
      </h3>
      <FundsTable />
    </LayoutBox>
    <Button shape="pill" wrapClass="absolute right-2 bottom-2">
      <IconFont icon="space-shuttle" size="medium" />
    </Button>
  </>
);

export const transfer = () => (
  <>
    <MainMenu />
    <LayoutBox>
      <h3>Transfer Funds</h3>

      <div className="flex">
        <div className="w-100">
          <p className="f6 mw6 code mb4">
            Copy Your Mnemonic Somewhere Safe. If someone gets hold of this mnemonic they could
            drain your account
          </p>
          <Input appearance="underline" label="sum" center />
          <Input appearance="underline" label="from" />
          <Input appearance="underline" label="to" />
          <Input appearance="underline" label="fee" center />
        </div>
        <div className="w-70 pl4">
          <FormFrameTransfer />
        </div>
      </div>
    </LayoutBox>
    <Button shape="pill" wrapClass="absolute right-2 bottom-2">
      <IconFont icon="space-shuttle" size="medium" />
    </Button>
  </>
);
