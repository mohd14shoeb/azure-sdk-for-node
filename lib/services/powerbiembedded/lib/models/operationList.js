/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the OperationList class.
 * @constructor
 * @member {array} [value]
 * 
 */
function OperationList() {
}

/**
 * Defines the metadata of OperationList
 *
 * @returns {object} metadata of OperationList
 *
 */
OperationList.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'OperationList',
    type: {
      name: 'Composite',
      className: 'OperationList',
      modelProperties: {
        value: {
          required: false,
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'OperationElementType',
                type: {
                  name: 'Composite',
                  className: 'Operation'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = OperationList;