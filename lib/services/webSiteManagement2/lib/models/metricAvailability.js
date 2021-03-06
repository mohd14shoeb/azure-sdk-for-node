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

/**
 * Retention policy of a resource metric.
 *
 */
class MetricAvailability {
  /**
   * Create a MetricAvailability.
   * @member {string} [timeGrain]
   * @member {string} [blobDuration]
   */
  constructor() {
  }

  /**
   * Defines the metadata of MetricAvailability
   *
   * @returns {object} metadata of MetricAvailability
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MetricAvailability',
      type: {
        name: 'Composite',
        className: 'MetricAvailability',
        modelProperties: {
          timeGrain: {
            required: false,
            serializedName: 'timeGrain',
            type: {
              name: 'String'
            }
          },
          blobDuration: {
            required: false,
            serializedName: 'blobDuration',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MetricAvailability;
