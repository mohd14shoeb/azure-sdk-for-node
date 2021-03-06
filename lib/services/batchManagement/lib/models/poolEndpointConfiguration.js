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
 * @summary The endpoint configuration for a pool.
  *
 */
class PoolEndpointConfiguration {
  /**
   * Create a PoolEndpointConfiguration.
   * @member {array} inboundNatPools A list of inbound NAT pools that can be
   * used to address specific ports on an individual compute node externally.
   * The maximum number of inbound NAT pools per Batch pool is 5. If the
   * maximum number of inbound NAT pools is exceeded the request fails with
   * HTTP status code 400.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PoolEndpointConfiguration
   *
   * @returns {object} metadata of PoolEndpointConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PoolEndpointConfiguration',
      type: {
        name: 'Composite',
        className: 'PoolEndpointConfiguration',
        modelProperties: {
          inboundNatPools: {
            required: true,
            serializedName: 'inboundNatPools',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'InboundNatPoolElementType',
                  type: {
                    name: 'Composite',
                    className: 'InboundNatPool'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PoolEndpointConfiguration;
