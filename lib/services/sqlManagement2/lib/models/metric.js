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
 * Database metrics.
 *
 */
class Metric {
  /**
   * Create a Metric.
   * @member {date} [startTime] The start time for the metric (ISO-8601
   * format).
   * @member {date} [endTime] The end time for the metric (ISO-8601 format).
   * @member {string} [timeGrain] The time step to be used to summarize the
   * metric values.
   * @member {string} [unit] The unit of the metric. Possible values include:
   * 'count', 'bytes', 'seconds', 'percent', 'countPerSecond', 'bytesPerSecond'
   * @member {object} [name] The name information for the metric.
   * @member {string} [name.value] The name of the database metric.
   * @member {string} [name.localizedValue] The friendly name of the database
   * metric.
   * @member {array} [metricValues] The metric values for the specified time
   * window and timestep.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Metric
   *
   * @returns {object} metadata of Metric
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Metric',
      type: {
        name: 'Composite',
        className: 'Metric',
        modelProperties: {
          startTime: {
            required: false,
            readOnly: true,
            serializedName: 'startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: false,
            readOnly: true,
            serializedName: 'endTime',
            type: {
              name: 'DateTime'
            }
          },
          timeGrain: {
            required: false,
            readOnly: true,
            serializedName: 'timeGrain',
            type: {
              name: 'String'
            }
          },
          unit: {
            required: false,
            readOnly: true,
            serializedName: 'unit',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'Composite',
              className: 'MetricName'
            }
          },
          metricValues: {
            required: false,
            readOnly: true,
            serializedName: 'metricValues',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MetricValueElementType',
                  type: {
                    name: 'Composite',
                    className: 'MetricValue'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Metric;