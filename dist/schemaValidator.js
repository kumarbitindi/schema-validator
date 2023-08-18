"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"type":"object","properties":{"types":{"type":"object","additionalProperties":{"type":"array","items":{"type":"object","properties":{"name":{"type":"string"},"type":{"type":"string"}},"required":["name","type"]}}},"primaryType":{"type":"string"},"domain":{"type":"object"},"message":{"type":"object"}},"required":["types","primaryType","domain","message"]};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((((data.types === undefined) && (missing0 = "types")) || ((data.primaryType === undefined) && (missing0 = "primaryType"))) || ((data.domain === undefined) && (missing0 = "domain"))) || ((data.message === undefined) && (missing0 = "message"))){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.types !== undefined){let data0 = data.types;const _errs1 = errors;if(errors === _errs1){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){for(const key0 in data0){let data1 = data0[key0];const _errs4 = errors;if(errors === _errs4){if(Array.isArray(data1)){var valid2 = true;const len0 = data1.length;for(let i0=0; i0<len0; i0++){let data2 = data1[i0];const _errs6 = errors;if(errors === _errs6){if(data2 && typeof data2 == "object" && !Array.isArray(data2)){let missing1;if(((data2.name === undefined) && (missing1 = "name")) || ((data2.type === undefined) && (missing1 = "type"))){validate10.errors = [{instancePath:instancePath+"/types/" + key0.replace(/~/g, "~0").replace(/\//g, "~1")+"/" + i0,schemaPath:"#/properties/types/additionalProperties/items/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];return false;}else {if(data2.name !== undefined){const _errs8 = errors;if(typeof data2.name !== "string"){validate10.errors = [{instancePath:instancePath+"/types/" + key0.replace(/~/g, "~0").replace(/\//g, "~1")+"/" + i0+"/name",schemaPath:"#/properties/types/additionalProperties/items/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs8 === errors;}else {var valid3 = true;}if(valid3){if(data2.type !== undefined){const _errs10 = errors;if(typeof data2.type !== "string"){validate10.errors = [{instancePath:instancePath+"/types/" + key0.replace(/~/g, "~0").replace(/\//g, "~1")+"/" + i0+"/type",schemaPath:"#/properties/types/additionalProperties/items/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs10 === errors;}else {var valid3 = true;}}}}else {validate10.errors = [{instancePath:instancePath+"/types/" + key0.replace(/~/g, "~0").replace(/\//g, "~1")+"/" + i0,schemaPath:"#/properties/types/additionalProperties/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid2 = _errs6 === errors;if(!valid2){break;}}}else {validate10.errors = [{instancePath:instancePath+"/types/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),schemaPath:"#/properties/types/additionalProperties/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid1 = _errs4 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/types",schemaPath:"#/properties/types/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs1 === errors;}else {var valid0 = true;}if(valid0){if(data.primaryType !== undefined){const _errs12 = errors;if(typeof data.primaryType !== "string"){validate10.errors = [{instancePath:instancePath+"/primaryType",schemaPath:"#/properties/primaryType/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.domain !== undefined){let data6 = data.domain;const _errs14 = errors;if(!(data6 && typeof data6 == "object" && !Array.isArray(data6))){validate10.errors = [{instancePath:instancePath+"/domain",schemaPath:"#/properties/domain/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.message !== undefined){let data7 = data.message;const _errs16 = errors;if(!(data7 && typeof data7 == "object" && !Array.isArray(data7))){validate10.errors = [{instancePath:instancePath+"/message",schemaPath:"#/properties/message/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}var valid0 = _errs16 === errors;}else {var valid0 = true;}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;}