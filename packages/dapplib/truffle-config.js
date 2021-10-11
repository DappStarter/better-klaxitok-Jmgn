require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet remember ranch congress harvest pet suspect gaze'; 
let testAccounts = [
"0x88eb8baffbff844bf9b2ff51b2b3891929b90cb42f2376da0e17a191492ad6e3",
"0xd18771656f7790a19ce63d9ead2a0fb06a54b21152b92360359c02665fcc1cd7",
"0x6eec8ff27a862b7bffd7af6ae1dc502e95f88b34c495b6d279283f844392905a",
"0xb0aa11048a200d7841e9d75a56fbfe394e55245d47bc5e0b1275143d34a13c3e",
"0x9b045efe2b939929e5b23fa9653bd9fa31adcb2867fcfe5937477d271db415e6",
"0x350eeaf8ddb3ca29e3b036483de48206a9b416403c546fbfe4a5382894d5523c",
"0x086e1686024332b8098f8e0a1785c437b3d7c34d2233ee714c9256f0528c59d3",
"0xab5e0a86d7c6c1fce86c9d6ba802f7c9b07f981fa779f7cb1b334accd9bcc109",
"0xcfe997d3c66858ac482618762cac6f6389215afc8ab7e12cee958dab2cd38d63",
"0x15a19ed237af5dbb4e30a6fa66d000489922f6f3d387e8ff453cf268a885f784"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

