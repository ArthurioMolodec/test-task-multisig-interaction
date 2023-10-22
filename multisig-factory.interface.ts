import { IMultisig } from "./multisig.interface";

export interface IMultisigFactory {
    new(multisigContract: { abi: any[], bytecode: string }, rpcConfig: any);

    /**
     * 
     * @param owners Public keys of the future multisig account signers
     * @param threshold Minimal signs amount to broadcast transaction ("required" field in smart contract)
     * @return Deployed multisig
     */
    deployNewMultisig(owners: string[], threshold: number, deployerSecretKey: string): Promise<IMultisig>;
}