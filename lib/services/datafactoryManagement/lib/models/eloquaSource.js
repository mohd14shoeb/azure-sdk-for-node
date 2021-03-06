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

const models = require('./index');

/**
 * A copy activity Eloqua server source.
 *
 * @extends models['CopySource']
 */
class EloquaSource extends models['CopySource'] {
  /**
   * Create a EloquaSource.
   * @member {object} [query] A query to retrieve data from source. Type:
   * string (or Expression with resultType string).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of EloquaSource
   *
   * @returns {object} metadata of EloquaSource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EloquaSource',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'CopySource',
        className: 'EloquaSource',
        modelProperties: {
          sourceRetryCount: {
            required: false,
            serializedName: 'sourceRetryCount',
            type: {
              name: 'Object'
            }
          },
          sourceRetryWait: {
            required: false,
            serializedName: 'sourceRetryWait',
            type: {
              name: 'Object'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          query: {
            required: false,
            serializedName: 'query',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = EloquaSource;
