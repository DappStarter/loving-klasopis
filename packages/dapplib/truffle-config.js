require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index remember ranch common hunt local fresh genuine'; 
let testAccounts = [
"0xb8055c01159e1026da0d90264efa252f03572be0ad2520ccd9a0d5570754f7d4",
"0x1cfacf47c7f3b817bb5dd734810c480137c14c97a15cee933caf2f1b1ac3a568",
"0x7b1c2c229f2d2e7147aafb93205f823d1ad203bf2d2d79a1e89d05d52a137725",
"0xc1e5fc0cd77110851fc175f3f39d823beb93723525f1f90a7a5cbd0349944a4f",
"0xf97d353de1d58e6de01699a47628ea57f3ddc8afb905e8b0bb04cf878b568f21",
"0x304197b2abfe0ca8fcdf86d33c4a78b38031b67f6274fc47ee676155a6070bad",
"0x508d64efa47176dc7c6fd6426002112efc6cd2aa81fdc8df4312c9869267b895",
"0x7814a9bb1eeed37bb40985fef36f4f9c35cf993320afa2110fb60254e194d40d",
"0x255f691113c5198de80971725ed3359957cab5bd7dcbe8c48556b5bbb5e80c5c",
"0x477a73e566d3401ba50f28c889397d8ab195f57ba74e0d544f460cd969d4629e"
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
            version: '^0.5.11'
        }
    }
};
