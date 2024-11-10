import { BLST_ERROR } from "./bindings";
export { BLST_ERROR };
export declare class ErrorBLST extends Error {
    constructor(blstError: BLST_ERROR);
}
declare const SkConstructor: import("./bindings").SecretKeyConstructor;
declare const PkConstructor: import("./bindings").P1Constructor;
declare const SigConstructor: import("./bindings").P2Constructor;
declare const PkAffineConstructor: import("./bindings").P1_AffineConstructor;
declare const SigAffineConstructor: import("./bindings").P2_AffineConstructor;
declare type Sk = InstanceType<typeof SkConstructor>;
declare type Pk = InstanceType<typeof PkConstructor>;
declare type Sig = InstanceType<typeof SigConstructor>;
declare type PkAffine = InstanceType<typeof PkAffineConstructor>;
declare type SigAffine = InstanceType<typeof SigAffineConstructor>;
/**
 * Points are represented in two ways in BLST:
 * - affine coordinates (x,y)
 * - jacobian coordinates (x,y,z)
 *
 * The jacobian coordinates allow to aggregate points more efficiently,
 * so if P1 points are aggregated often (Eth2.0) you want to keep the point
 * cached in jacobian coordinates.
 */
export declare enum CoordType {
    affine = 0,
    jacobian = 1
}
export declare class SecretKey {
    value: Sk;
    constructor(value: Sk);
    static fromKeygen(ikm: Uint8Array): SecretKey;
    static fromBytes(skBytes: Uint8Array): SecretKey;
    toPublicKey(): PublicKey;
    sign(msg: Uint8Array): Signature;
    toBytes(): Uint8Array;
}
/**
 * Wrapper for P1 points. Internal point may be represented
 * in affine or jacobian coordinates, @see CoordType
 * This approach allows to use this wrapper very flexibly while
 * minimizing the coordinate conversions if used properly.
 *
 * To force a instance of PublicKey to permanently switch its coordType
 * ```ts
 * const pkAsAffine = new PublicKey(pk.affine)
 * ```
 */
export declare class PublicKey {
    readonly value: PkAffine | Pk;
    constructor(value: PkAffine | Pk);
    /** Accepts both compressed and serialized */
    static fromBytes(pkBytes: Uint8Array, type?: CoordType): PublicKey;
    get affine(): PkAffine;
    get jacobian(): Pk;
    compress(): Uint8Array;
    serialize(): Uint8Array;
    toBytes(): Uint8Array;
    /** Validate pubkey is not infinity and is in group */
    keyValidate(): void;
}
/**
 * Wrapper for P2 points. @see PublicKey
 */
export declare class Signature {
    readonly value: SigAffine | Sig;
    constructor(value: SigAffine | Sig);
    /** Accepts both compressed and serialized */
    static fromBytes(sigBytes: Uint8Array, type?: CoordType): Signature;
    get affine(): SigAffine;
    get jacobian(): Sig;
    compress(): Uint8Array;
    serialize(): Uint8Array;
    toBytes(): Uint8Array;
    /** Validate sig is in group */
    sigValidate(): void;
}
/**
 * Aggregates all `pks` and returns a PublicKey containing a jacobian point
 */
export declare function aggregatePubkeys(pks: PublicKey[]): PublicKey;
/**
 * Aggregates all `sigs` and returns a Signature containing a jacobian point
 */
export declare function aggregateSignatures(sigs: Signature[]): Signature;
/**
 * Verify a single message from a single pubkey
 */
export declare function verify(msg: Uint8Array, pk: PublicKey, sig: Signature): boolean;
/**
 * Verify a single message from multiple pubkeys
 */
export declare function fastAggregateVerify(msg: Uint8Array, pks: PublicKey[], sig: Signature): boolean;
/**
 * Verify multiple messages from multiple pubkeys
 */
export declare function aggregateVerify(msgs: Uint8Array[], pks: PublicKey[], sig: Signature): boolean;
export declare type SignatureSet = {
    msg: Uint8Array;
    pk: PublicKey;
    sig: Signature;
};
/**
 * Batch verify groups of {msg, pk, sig}[]
 * https://ethresear.ch/t/fast-verification-of-multiple-bls-signatures/5407
 */
export declare function verifyMultipleAggregateSignatures(signatureSets: SignatureSet[]): boolean;
//# sourceMappingURL=lib.d.ts.map