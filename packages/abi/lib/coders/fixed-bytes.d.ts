import { Typed } from "../typed.js";
import { Coder } from "./abstract-coder.js";
import type { BytesLike } from "@ethersproject/bytes";
import type { Reader, Writer } from "./abstract-coder.js";
export declare class FixedBytesCoder extends Coder {
    readonly size: number;
    constructor(size: number, localName: string);
    defaultValue(): string;
    encode(writer: Writer, _value: BytesLike | Typed): number;
    decode(reader: Reader): any;
}
//# sourceMappingURL=fixed-bytes.d.ts.map