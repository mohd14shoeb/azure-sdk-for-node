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
 * Class representing a ReservationResponse.
 * @extends models['BaseResource']
 */
class ReservationResponse extends models['BaseResource'] {
  /**
   * Create a ReservationResponse.
   * @member {string} [location] Possible values include: 'westus', 'eastus',
   * 'eastus2', 'northcentralus', 'westus2', 'southcentralus', 'centralus',
   * 'westeurope', 'northeurope', 'eastasia', 'southeastasia', 'japaneast',
   * 'japanwest', 'brazilsouth', 'australiaeast', 'australiasoutheast',
   * 'southindia', 'westindia', 'centralindia', 'canadacentral', 'canadaeast',
   * 'uksouth', 'westcentralus', 'ukwest'
   * @member {number} [etag]
   * @member {string} [id] Identifier of the reservation
   * @member {string} [name] Name of the reservation
   * @member {string} [kind] Resource Provider type to be reserved. Possible
   * values include: 'Microsoft.Compute'
   * @member {object} [sku]
   * @member {string} [sku.name]
   * @member {object} [properties]
   * @member {string} [properties.displayName] Friendly name for user to easily
   * identify the reservation
   * @member {array} [properties.appliedScopes]
   * @member {string} [properties.appliedScopeType] Possible values include:
   * 'Single', 'Shared'
   * @member {number} [properties.quantity] Quantity of the SKUs that are part
   * of the Reservation.
   * @member {string} [properties.provisioningState] Possible values include:
   * 'Creating', 'PendingResourceHold', 'ConfirmedResourceHold',
   * 'PendingBilling', 'ConfirmedBilling', 'Created', 'Succeeded', 'Cancelled',
   * 'Expired', 'BillingFailed', 'Failed', 'Split', 'Merged'
   * @member {date} [properties.effectiveDateTime] DateTime of the Reservation
   * starting when this version is effective from.
   * @member {date} [properties.lastUpdatedDateTime] DateTime of the last time
   * the Reservation was updated.
   * @member {date} [properties.expiryDate] This is the date when the
   * Reservation will expire.
   * @member {object} [properties.extendedStatusInfo]
   * @member {string} [properties.extendedStatusInfo.statusCode] Possible
   * values include: 'None', 'Pending', 'Active', 'PurchaseError',
   * 'PaymentInstrumentError', 'Split', 'Merged', 'Expired', 'Succeeded'
   * @member {string} [properties.extendedStatusInfo.message] The message
   * giving detailed information about the status code.
   * @member {object} [properties.splitProperties]
   * @member {array} [properties.splitProperties.splitDestinations] List of
   * destination Resource Id that are created due to split. Format of the
   * resource Id is
   * /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
   * @member {string} [properties.splitProperties.splitSource] Resource Id of
   * the Reservation from which this is split. Format of the resource Id is
   * /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
   * @member {object} [properties.mergeProperties]
   * @member {string} [properties.mergeProperties.mergeDestination] Reservation
   * Resource Id Created due to the merge. Format of the resource Id is
   * /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
   * @member {array} [properties.mergeProperties.mergeSources] Resource Ids of
   * the Source Reservation's merged to form this Reservation. Format of the
   * resource Id is
   * /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
   * @member {string} [type] Type of resource.
   * "Microsoft.Capacity/reservationOrders/reservations"
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ReservationResponse
   *
   * @returns {object} metadata of ReservationResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReservationResponse',
      type: {
        name: 'Composite',
        className: 'ReservationResponse',
        modelProperties: {
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'Number'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'Enum',
              allowedValues: [ 'Microsoft.Compute' ]
            }
          },
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'SkuName'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'ReservationProperties'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ReservationResponse;