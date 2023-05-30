#!/usr/bin/env ts-node

// These are helper scripts to make development a little bit easier.

import { ChainID, TransactionVersion } from '@stacks/common';
import { Wallet } from '@stacks/keychain';
import {
  generateWallet,
  restoreWalletAccounts,
  getStxAddress,
} from '@stacks/wallet-sdk';
import { StacksMocknet, StacksMainnet } from '@stacks/network';
import { pubKeyfromPrivKey } from '@stacks/transactions';

if (process.argv.length !== 4) {
  console.log(`Usage: ts-node generate-private-key "<index>" "<seed phrase>"`);
  process.exit(0);
}

const index = Number(process.argv[2]);

generateWallet({
  secretKey: process.argv[3],
  password: 'test',
}).then(wallet => {
  restoreWalletAccounts({
    wallet: wallet,
    gaiaHubUrl: 'https://hub.blockstack.org',
    network: new StacksMainnet(),
  }).then(restored => {
    console.log('Seed phrase:     ' + process.argv[3]);
    console.log('private key:     ' + restored.accounts[index].stxPrivateKey);
    console.log(
      'Mainnet address: ' +
        getStxAddress({
          account: restored.accounts[index],
          transactionVersion: TransactionVersion.Mainnet,
        }),
    );
    console.log(
      'Testnet address: ' +
        getStxAddress({
          account: restored.accounts[index],
          transactionVersion: TransactionVersion.Testnet,
        }),
    );
    const pubkey = pubKeyfromPrivKey(
      restored.accounts[index].stxPrivateKey,
    ).data;
    console.log(
      'Public key:      ' +
        Buffer.from(pubkey, pubkey.byteOffset, pubkey.byteLength).toString(
          'hex',
        ),
    );
  });
});
