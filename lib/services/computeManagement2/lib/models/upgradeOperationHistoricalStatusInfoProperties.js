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
 * Describes each OS upgrade on the Virtual Machine Scale Set.
 *
 */
class UpgradeOperationHistoricalStatusInfoProperties {
  /**
   * Create a UpgradeOperationHistoricalStatusInfoProperties.
   * @member {object} [runningStatus] Information about the overall status of
   * the upgrade operation.
   * @member {string} [runningStatus.code] Code indicating the current status
   * of the upgrade. Possible values include: 'RollingForward', 'Cancelled',
   * 'Completed', 'Faulted'
   * @member {date} [runningStatus.startTime] Start time of the upgrade.
   * @member {date} [runningStatus.endTime] End time of the upgrade.
   * @member {object} [progress] Counts of the VM's in each state.
   * @member {number} [progress.successfulInstanceCount] The number of
   * instances that have been successfully upgraded.
   * @member {number} [progress.failedInstanceCount] The number of instances
   * that have failed to be upgraded successfully.
   * @member {number} [progress.inProgressInstanceCount] The number of
   * instances that are currently being upgraded.
   * @member {number} [progress.pendingInstanceCount] The number of instances
   * that have not yet begun to be upgraded.
   * @member {object} [error] Error Details for this upgrade if there are any.
   * @member {array} [error.details] The Api error details
   * @member {object} [error.innererror] The Api inner error
   * @member {string} [error.innererror.exceptiontype] The exception type.
   * @member {string} [error.innererror.errordetail] The internal error message
   * or exception dump.
   * @member {string} [error.code] The error code.
   * @member {string} [error.target] The target of the particular error.
   * @member {string} [error.message] The error message.
   * @member {string} [startedBy] Invoker of the Upgrade Operation. Possible
   * values include: 'Unknown', 'User', 'Platform'
   * @member {object} [targetImageReference] Image Reference details
   * @member {string} [targetImageReference.publisher] The image publisher.
   * @member {string} [targetImageReference.offer] Specifies the offer of the
   * platform image or marketplace image used to create the virtual machine.
   * @member {string} [targetImageReference.sku] The image SKU.
   * @member {string} [targetImageReference.version] Specifies the version of
   * the platform image or marketplace image used to create the virtual
   * machine. The allowed formats are Major.Minor.Build or 'latest'. Major,
   * Minor, and Build are decimal numbers. Specify 'latest' to use the latest
   * version of an image available at deploy time. Even if you use 'latest',
   * the VM image will not automatically update after deploy time even if a new
   * version becomes available.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpgradeOperationHistoricalStatusInfoProperties
   *
   * @returns {object} metadata of UpgradeOperationHistoricalStatusInfoProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpgradeOperationHistoricalStatusInfoProperties',
      type: {
        name: 'Composite',
        className: 'UpgradeOperationHistoricalStatusInfoProperties',
        modelProperties: {
          runningStatus: {
            required: false,
            readOnly: true,
            serializedName: 'runningStatus',
            type: {
              name: 'Composite',
              className: 'UpgradeOperationHistoryStatus'
            }
          },
          progress: {
            required: false,
            readOnly: true,
            serializedName: 'progress',
            type: {
              name: 'Composite',
              className: 'RollingUpgradeProgressInfo'
            }
          },
          error: {
            required: false,
            readOnly: true,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'ApiError'
            }
          },
          startedBy: {
            required: false,
            readOnly: true,
            serializedName: 'startedBy',
            type: {
              name: 'Enum',
              allowedValues: [ 'Unknown', 'User', 'Platform' ]
            }
          },
          targetImageReference: {
            required: false,
            readOnly: true,
            serializedName: 'targetImageReference',
            type: {
              name: 'Composite',
              className: 'ImageReference'
            }
          }
        }
      }
    };
  }
}

module.exports = UpgradeOperationHistoricalStatusInfoProperties;