export function addBox(data: any): void;
export function addActor(id: any, name: any, description: any, type: any): void;
export function addMessage(idFrom: any, idTo: any, message: any, answer: any): void;
export function addSignal(idFrom: any, idTo: any, message: {
    text: undefined;
    wrap: undefined;
} | undefined, messageType: any, activate?: boolean): boolean;
export function hasAtLeastOneBox(): boolean;
export function hasAtLeastOneBoxWithTitle(): boolean;
export function getMessages(): never[];
export function getBoxes(): never[];
export function getActors(): {};
export function getCreatedActors(): {};
export function getDestroyedActors(): {};
export function getActor(id: any): any;
export function getActorKeys(): string[];
export function enableSequenceNumbers(): void;
export function disableSequenceNumbers(): void;
export function showSequenceNumbers(): boolean;
export function setWrap(wrapSetting: any): void;
export function autoWrap(): boolean | undefined;
export function clear(): void;
export function parseMessage(str: any): {
    text: any;
    wrap: boolean | undefined;
};
export function parseBoxData(str: any): {
    color: any;
    text: string | undefined;
    wrap: boolean | undefined;
};
export namespace LINETYPE {
    let SOLID: number;
    let DOTTED: number;
    let NOTE: number;
    let SOLID_CROSS: number;
    let DOTTED_CROSS: number;
    let SOLID_OPEN: number;
    let DOTTED_OPEN: number;
    let LOOP_START: number;
    let LOOP_END: number;
    let ALT_START: number;
    let ALT_ELSE: number;
    let ALT_END: number;
    let OPT_START: number;
    let OPT_END: number;
    let ACTIVE_START: number;
    let ACTIVE_END: number;
    let PAR_START: number;
    let PAR_AND: number;
    let PAR_END: number;
    let RECT_START: number;
    let RECT_END: number;
    let SOLID_POINT: number;
    let DOTTED_POINT: number;
    let AUTONUMBER: number;
    let CRITICAL_START: number;
    let CRITICAL_OPTION: number;
    let CRITICAL_END: number;
    let BREAK_START: number;
    let BREAK_END: number;
    let PAR_OVER_START: number;
}
export namespace ARROWTYPE {
    let FILLED: number;
    let OPEN: number;
}
export namespace PLACEMENT {
    let LEFTOF: number;
    let RIGHTOF: number;
    let OVER: number;
}
export function addNote(actor: any, placement: any, message: any): void;
export function addLinks(actorId: any, text: any): void;
export function addALink(actorId: any, text: any): void;
export function addProperties(actorId: any, text: any): void;
export function addDetails(actorId: any, text: any): void;
export function getActorProperty(actor: any, key: any): any;
export function apply(param: object | object[] | AddMessageParams): void;
declare namespace _default {
    export { addActor };
    export { addMessage };
    export { addSignal };
    export { addLinks };
    export { addDetails };
    export { addProperties };
    export { autoWrap };
    export { setWrap };
    export { enableSequenceNumbers };
    export { disableSequenceNumbers };
    export { showSequenceNumbers };
    export { getMessages };
    export { getActors };
    export { getCreatedActors };
    export { getDestroyedActors };
    export { getActor };
    export { getActorKeys };
    export { getActorProperty };
    export { getAccTitle };
    export { getBoxes };
    export { getDiagramTitle };
    export { setDiagramTitle };
    export function getConfig(): import("../../config.type.js").SequenceDiagramConfig | undefined;
    export { clear };
    export { parseMessage };
    export { parseBoxData };
    export { LINETYPE };
    export { ARROWTYPE };
    export { PLACEMENT };
    export { addNote };
    export { setAccTitle };
    export { apply };
    export { setAccDescription };
    export { getAccDescription };
    export { hasAtLeastOneBox };
    export { hasAtLeastOneBoxWithTitle };
}
export default _default;
/**
 * A message from one actor to another.
 */
export type AddMessageParams = {
    /**
     * - The id of the actor sending the message.
     */
    from: string;
    /**
     * - The id of the actor receiving the message.
     */
    to: string;
    /**
     * - The message text.
     */
    msg: string;
    /**
     * - The type of signal.
     */
    signalType: number;
    /**
     * - Set to `"addMessage"` if this is an `AddMessageParams`.
     */
    type: "addMessage";
    /**
     * - If `true`, this signal starts an activation.
     */
    activate?: boolean | undefined;
};
import { getAccTitle } from '../common/commonDb.js';
import { getDiagramTitle } from '../common/commonDb.js';
import { setDiagramTitle } from '../common/commonDb.js';
import { setAccTitle } from '../common/commonDb.js';
import { setAccDescription } from '../common/commonDb.js';
import { getAccDescription } from '../common/commonDb.js';
