import { getAddress } from "@ethersproject/address";
import { keccak256 } from "@ethersproject/crypto";
import { SigningKey } from "@ethersproject/signing-key";
export function computeAddress(key) {
    const publicKey = SigningKey.computePublicKey(key, false);
    return getAddress(keccak256("0x" + publicKey.substring(4)).substring(26));
}
//# sourceMappingURL=address.js.map