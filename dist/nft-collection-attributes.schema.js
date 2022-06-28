"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTCollectionAttributesrSchema = exports.NFTCollectionAttributes = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let NFTCollectionAttributes = class NFTCollectionAttributes {
};
__decorate([
    (0, mongoose_1.Prop)({ trim: true, required: true }),
    __metadata("design:type", String)
], NFTCollectionAttributes.prototype, "contractAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], NFTCollectionAttributes.prototype, "attributes", void 0);
NFTCollectionAttributes = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'nft-collection-attributes' })
], NFTCollectionAttributes);
exports.NFTCollectionAttributes = NFTCollectionAttributes;
exports.NFTCollectionAttributesrSchema = mongoose_1.SchemaFactory.createForClass(NFTCollectionAttributes);
exports.NFTCollectionAttributesrSchema.index({ contractAddress: 1 }, { unique: true });
//# sourceMappingURL=nft-collection-attributes.schema.js.map