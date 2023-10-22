export interface IMultisig {
    get address(): string;

    new(multisigContract: { abi: any[] }, address: string, rpcConfig: any);

    /**
     * @description Function submitTransaction in Smart Contract
     * @param amount Amount of ETH to transfer (e.g. 0.01)
     * @param signerSecretKey Secret key of account from owners accounts list
     * @return Integer id of partially signed transaction
     */
    initETHTransaction(destination: string, amount: number, signerSecretKey: string): Promise<number>;

    /**
     * @description Function submitTransaction in Smart Contract.
     * This function uses abi/BEP20.json as ERC20 ABI.
     * @param amount Amount of token to transfer (e.g. 0.1, 15)
     * @param signerSecretKey Secret key of account from owners accounts list
     * @return Integer id of partially signed transaction
     */
    initERC20Transaction(destination: string, amount: number, tokenAddress: string, signerSecretKey: string): Promise<number>;

    /**
     * @description Function confirmTransaction in Smart Contract.
     * @param signerSecretKey Secret key of account from owners accounts list
     */
    signTransaction(transaction_id: number, signerSecretKey: string): Promise<any>;

    /**
     * @description In Smart Contract exists mapping "confirmations" to count signs of each tranaction
     */
    getTransactionSignsLeftToBroadcast(transaction_id: number): Promise<number>;
}