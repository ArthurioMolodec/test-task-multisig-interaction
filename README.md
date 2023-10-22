<p>Create classes to interact with contracts.</p>
<p><b>Classes must implement multisig-factory.interface.ts, multisig.interface.ts</b></p>
<p>Multisig wallet contract data located in abi/MultiSigWallet.json</p>

<h3>Criteria of completion:</h3>
Confirmed transaction on the blockchain which is signed minimum with 2 owners of the smart contract

<h3>Contract interaction example:</h3>

1. Multisig deployment: https://bscscan.com/tx/0x4961891951f42b532dc5446779bc95a7a6dad750454d9aca6e6193e3816c357b
2. 0.001 BNB sent to the newly created multisig: https://bscscan.com/tx/0x661460402b1f02cf91553d491cb9f0ba8cf75177a535b25a65d93c337ae29678
3. Initialising new transaction: https://bscscan.com/tx/0xd0ae851fed6ee30b3042c5fa2c6c9cfe174ed8af273f40135797b7b21b068f03 (after initializing new transaction, account-initializer also confirms it, so after this step, newly created transaction has 1 confirmation).
4. Confirming (signing) transaction and executing (because minimal signs count is 2): https://bscscan.com/tx/0x56bac3ae9c4ef61bf80167264a8547cc53feafe9f58044759c28af0c3fff7137
5. Internal transaction with BNB transfer after multisig transaction execution: https://bscscan.com/tx/0x56bac3ae9c4ef61bf80167264a8547cc53feafe9f58044759c28af0c3fff7137#internal
