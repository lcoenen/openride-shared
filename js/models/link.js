"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLink(x) {
    return x !== undefined && typeof x['@id'] == 'string';
}
exports.isLink = isLink;
/*
 *
 * This function is extracting the _id from an URL
 *
 * @objectType is the type of a ressource
 *
 * This function will extract the third part of an url in the form
 *
 * /api/ressource/ID[/...]
 *
 */
function idLink(link, objectType) {
    let url = isLink(link) ? link['@id'] : link;
    let resourceId = url.split('/')[3];
    let resourceType = url.split('/')[2];
    if (objectType && objectType != resourceType)
        throw Error(`idLink: this not a ${objectType}`);
    return resourceId;
}
exports.idLink = idLink;
//# sourceMappingURL=link.js.map