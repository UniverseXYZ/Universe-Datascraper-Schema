import { Document } from 'mongoose';
import { MessageStatus } from './types';
export declare class NFTBlockTask {
    messageId: string;
    blockNum: number;
    status: MessageStatus;
    errorMessage: string;
}
declare type NFTBlockTaskDocument = NFTBlockTask & Document;
declare const NFTBlockTaskSchema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
export { NFTBlockTaskDocument, NFTBlockTaskSchema, };
