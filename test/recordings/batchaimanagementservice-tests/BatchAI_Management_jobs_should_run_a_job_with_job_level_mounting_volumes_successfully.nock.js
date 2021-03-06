// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westeurope';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup4060/providers/Microsoft.BatchAI/jobs/job4?api-version=2018-03-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/westeurope/operationstatuses/8c048dce-55bd-4d55-8789-521152b17c47?api-version=2018-03-01',
  'retry-after': '15',
  'request-id': 'f219417a-7aa2-41e6-b974-69f91325c9ff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/westeurope/operationresults/8c048dce-55bd-4d55-8789-521152b17c47?api-version=2018-03-01',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-request-id': 'e3a7b6bd-9a6c-43ce-809e-749afe38ec68',
  'x-ms-correlation-request-id': 'e3a7b6bd-9a6c-43ce-809e-749afe38ec68',
  'x-ms-routing-request-id': 'WESTUS2:20180316T004842Z:e3a7b6bd-9a6c-43ce-809e-749afe38ec68',
  date: 'Fri, 16 Mar 2018 00:48:41 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup4060/providers/Microsoft.BatchAI/jobs/job4?api-version=2018-03-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/westeurope/operationstatuses/8c048dce-55bd-4d55-8789-521152b17c47?api-version=2018-03-01',
  'retry-after': '15',
  'request-id': 'f219417a-7aa2-41e6-b974-69f91325c9ff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/westeurope/operationresults/8c048dce-55bd-4d55-8789-521152b17c47?api-version=2018-03-01',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-request-id': 'e3a7b6bd-9a6c-43ce-809e-749afe38ec68',
  'x-ms-correlation-request-id': 'e3a7b6bd-9a6c-43ce-809e-749afe38ec68',
  'x-ms-routing-request-id': 'WESTUS2:20180316T004842Z:e3a7b6bd-9a6c-43ce-809e-749afe38ec68',
  date: 'Fri, 16 Mar 2018 00:48:41 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/westeurope/operationresults/8c048dce-55bd-4d55-8789-521152b17c47?api-version=2018-03-01')
  .reply(200, "{\"id\":\"https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/westeurope/operationresults/8c048dce-55bd-4d55-8789-521152b17c47\",\"name\":\"8c048dce-55bd-4d55-8789-521152b17c47\",\"status\":\"Succeeded\",\"startTime\":\"2018-03-16T00:48:42.462Z\",\"endTime\":\"2018-03-16T00:48:43.025Z\",\"properties\":{\"resourceId\":\"00000000-0000-0000-0000-000000000000$nodetestgroup4060$job4\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '424',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'request-id': '27b5fce2-c4fc-41e7-bbe3-c2b01e9b0381',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b3879981-44b9-4ac5-a565-3eaf252a10c4',
  'x-ms-correlation-request-id': 'b3879981-44b9-4ac5-a565-3eaf252a10c4',
  'x-ms-routing-request-id': 'WESTUS2:20180316T004913Z:b3879981-44b9-4ac5-a565-3eaf252a10c4',
  date: 'Fri, 16 Mar 2018 00:49:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/westeurope/operationresults/8c048dce-55bd-4d55-8789-521152b17c47?api-version=2018-03-01')
  .reply(200, "{\"id\":\"https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/westeurope/operationresults/8c048dce-55bd-4d55-8789-521152b17c47\",\"name\":\"8c048dce-55bd-4d55-8789-521152b17c47\",\"status\":\"Succeeded\",\"startTime\":\"2018-03-16T00:48:42.462Z\",\"endTime\":\"2018-03-16T00:48:43.025Z\",\"properties\":{\"resourceId\":\"00000000-0000-0000-0000-000000000000$nodetestgroup4060$job4\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '424',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'request-id': '27b5fce2-c4fc-41e7-bbe3-c2b01e9b0381',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b3879981-44b9-4ac5-a565-3eaf252a10c4',
  'x-ms-correlation-request-id': 'b3879981-44b9-4ac5-a565-3eaf252a10c4',
  'x-ms-routing-request-id': 'WESTUS2:20180316T004913Z:b3879981-44b9-4ac5-a565-3eaf252a10c4',
  date: 'Fri, 16 Mar 2018 00:49:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup4060/providers/Microsoft.BatchAI/jobs/job4?api-version=2018-03-01')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup4060/providers/Microsoft.BatchAI/jobs/job4\",\"name\":\"job4\",\"type\":\"Microsoft.BatchAI/Jobs\",\"properties\":{\"priority\":0,\"cluster\":{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup4060/providers/Microsoft.BatchAI/clusters/cluster\"},\"jobOutputDirectoryPathSegment\":\"00000000-0000-0000-0000-000000000000/nodetestgroup4060/jobs/job4/a002cb4c-f6eb-4e7f-913a-3e956399dee1\",\"nodeCount\":1,\"mountVolumes\":{\"azureBlobFileSystems\":[{\"accountName\":\"testacc3603\",\"containerName\":\"azcontainer\",\"credentials\":{},\"relativeMountPath\":\"azcs\"}]},\"toolType\":\"custom\",\"customToolkitSettings\":{\"commandLine\":\"echo hello from job; echo job > $AZ_BATCHAI_OUTPUT_OUTPUT/job.txt\"},\"jobPreparation\":{\"commandLine\":\"echo hello from job preparation; echo prep > $AZ_BATCHAI_OUTPUT_OUTPUT/prep.txt\"},\"stdOutErrPathPrefix\":\"$AZ_BATCHAI_MOUNT_ROOT/azfs\",\"outputDirectories\":[{\"id\":\"OUTPUT\",\"pathPrefix\":\"$AZ_BATCHAI_JOB_MOUNT_ROOT/azcs\",\"type\":\"custom\",\"createNew\":true}],\"constraints\":{\"maxWallClockTime\":\"P7D\"},\"creationTime\":\"2018-03-16T00:48:42.462Z\",\"provisioningState\":\"succeeded\",\"provisioningStateTransitionTime\":\"2018-03-16T00:48:43.009Z\",\"executionState\":\"succeeded\",\"executionStateTransitionTime\":\"2018-03-16T00:49:03.408Z\",\"executionInfo\":{\"startTime\":\"2018-03-16T00:48:43.879Z\",\"endTime\":\"2018-03-16T00:49:03.408Z\",\"exitCode\":0}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1433',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Fri, 16 Mar 2018 00:48:42 GMT',
  etag: '"0x8D58AD7AA6C6795"',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'request-id': '1a149262-6de3-4aca-b338-20ee986a6a1b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '04bc161a-a33d-44cb-8716-4cf0832ed4d5',
  'x-ms-correlation-request-id': '04bc161a-a33d-44cb-8716-4cf0832ed4d5',
  'x-ms-routing-request-id': 'WESTUS2:20180316T004915Z:04bc161a-a33d-44cb-8716-4cf0832ed4d5',
  date: 'Fri, 16 Mar 2018 00:49:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup4060/providers/Microsoft.BatchAI/jobs/job4?api-version=2018-03-01')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup4060/providers/Microsoft.BatchAI/jobs/job4\",\"name\":\"job4\",\"type\":\"Microsoft.BatchAI/Jobs\",\"properties\":{\"priority\":0,\"cluster\":{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup4060/providers/Microsoft.BatchAI/clusters/cluster\"},\"jobOutputDirectoryPathSegment\":\"00000000-0000-0000-0000-000000000000/nodetestgroup4060/jobs/job4/a002cb4c-f6eb-4e7f-913a-3e956399dee1\",\"nodeCount\":1,\"mountVolumes\":{\"azureBlobFileSystems\":[{\"accountName\":\"testacc3603\",\"containerName\":\"azcontainer\",\"credentials\":{},\"relativeMountPath\":\"azcs\"}]},\"toolType\":\"custom\",\"customToolkitSettings\":{\"commandLine\":\"echo hello from job; echo job > $AZ_BATCHAI_OUTPUT_OUTPUT/job.txt\"},\"jobPreparation\":{\"commandLine\":\"echo hello from job preparation; echo prep > $AZ_BATCHAI_OUTPUT_OUTPUT/prep.txt\"},\"stdOutErrPathPrefix\":\"$AZ_BATCHAI_MOUNT_ROOT/azfs\",\"outputDirectories\":[{\"id\":\"OUTPUT\",\"pathPrefix\":\"$AZ_BATCHAI_JOB_MOUNT_ROOT/azcs\",\"type\":\"custom\",\"createNew\":true}],\"constraints\":{\"maxWallClockTime\":\"P7D\"},\"creationTime\":\"2018-03-16T00:48:42.462Z\",\"provisioningState\":\"succeeded\",\"provisioningStateTransitionTime\":\"2018-03-16T00:48:43.009Z\",\"executionState\":\"succeeded\",\"executionStateTransitionTime\":\"2018-03-16T00:49:03.408Z\",\"executionInfo\":{\"startTime\":\"2018-03-16T00:48:43.879Z\",\"endTime\":\"2018-03-16T00:49:03.408Z\",\"exitCode\":0}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1433',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Fri, 16 Mar 2018 00:48:42 GMT',
  etag: '"0x8D58AD7AA6C6795"',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'request-id': '1a149262-6de3-4aca-b338-20ee986a6a1b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '04bc161a-a33d-44cb-8716-4cf0832ed4d5',
  'x-ms-correlation-request-id': '04bc161a-a33d-44cb-8716-4cf0832ed4d5',
  'x-ms-routing-request-id': 'WESTUS2:20180316T004915Z:04bc161a-a33d-44cb-8716-4cf0832ed4d5',
  date: 'Fri, 16 Mar 2018 00:49:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup4060/providers/Microsoft.BatchAI/jobs/job4?api-version=2018-03-01')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup4060/providers/Microsoft.BatchAI/jobs/job4\",\"name\":\"job4\",\"type\":\"Microsoft.BatchAI/Jobs\",\"properties\":{\"priority\":0,\"cluster\":{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup4060/providers/Microsoft.BatchAI/clusters/cluster\"},\"jobOutputDirectoryPathSegment\":\"00000000-0000-0000-0000-000000000000/nodetestgroup4060/jobs/job4/a002cb4c-f6eb-4e7f-913a-3e956399dee1\",\"nodeCount\":1,\"mountVolumes\":{\"azureBlobFileSystems\":[{\"accountName\":\"testacc3603\",\"containerName\":\"azcontainer\",\"credentials\":{},\"relativeMountPath\":\"azcs\"}]},\"toolType\":\"custom\",\"customToolkitSettings\":{\"commandLine\":\"echo hello from job; echo job > $AZ_BATCHAI_OUTPUT_OUTPUT/job.txt\"},\"jobPreparation\":{\"commandLine\":\"echo hello from job preparation; echo prep > $AZ_BATCHAI_OUTPUT_OUTPUT/prep.txt\"},\"stdOutErrPathPrefix\":\"$AZ_BATCHAI_MOUNT_ROOT/azfs\",\"outputDirectories\":[{\"id\":\"OUTPUT\",\"pathPrefix\":\"$AZ_BATCHAI_JOB_MOUNT_ROOT/azcs\",\"type\":\"custom\",\"createNew\":true}],\"constraints\":{\"maxWallClockTime\":\"P7D\"},\"creationTime\":\"2018-03-16T00:48:42.462Z\",\"provisioningState\":\"succeeded\",\"provisioningStateTransitionTime\":\"2018-03-16T00:48:43.009Z\",\"executionState\":\"succeeded\",\"executionStateTransitionTime\":\"2018-03-16T00:49:03.408Z\",\"executionInfo\":{\"startTime\":\"2018-03-16T00:48:43.879Z\",\"endTime\":\"2018-03-16T00:49:03.408Z\",\"exitCode\":0}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1433',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Fri, 16 Mar 2018 00:48:42 GMT',
  etag: '"0x8D58AD7AA6C6795"',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'request-id': '20aa8022-1c87-4a67-a582-e47f7bf1819e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '96ef76e0-bab7-48b7-a4c2-c98476f7d848',
  'x-ms-correlation-request-id': '96ef76e0-bab7-48b7-a4c2-c98476f7d848',
  'x-ms-routing-request-id': 'WESTUS2:20180316T004931Z:96ef76e0-bab7-48b7-a4c2-c98476f7d848',
  date: 'Fri, 16 Mar 2018 00:49:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup4060/providers/Microsoft.BatchAI/jobs/job4?api-version=2018-03-01')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup4060/providers/Microsoft.BatchAI/jobs/job4\",\"name\":\"job4\",\"type\":\"Microsoft.BatchAI/Jobs\",\"properties\":{\"priority\":0,\"cluster\":{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup4060/providers/Microsoft.BatchAI/clusters/cluster\"},\"jobOutputDirectoryPathSegment\":\"00000000-0000-0000-0000-000000000000/nodetestgroup4060/jobs/job4/a002cb4c-f6eb-4e7f-913a-3e956399dee1\",\"nodeCount\":1,\"mountVolumes\":{\"azureBlobFileSystems\":[{\"accountName\":\"testacc3603\",\"containerName\":\"azcontainer\",\"credentials\":{},\"relativeMountPath\":\"azcs\"}]},\"toolType\":\"custom\",\"customToolkitSettings\":{\"commandLine\":\"echo hello from job; echo job > $AZ_BATCHAI_OUTPUT_OUTPUT/job.txt\"},\"jobPreparation\":{\"commandLine\":\"echo hello from job preparation; echo prep > $AZ_BATCHAI_OUTPUT_OUTPUT/prep.txt\"},\"stdOutErrPathPrefix\":\"$AZ_BATCHAI_MOUNT_ROOT/azfs\",\"outputDirectories\":[{\"id\":\"OUTPUT\",\"pathPrefix\":\"$AZ_BATCHAI_JOB_MOUNT_ROOT/azcs\",\"type\":\"custom\",\"createNew\":true}],\"constraints\":{\"maxWallClockTime\":\"P7D\"},\"creationTime\":\"2018-03-16T00:48:42.462Z\",\"provisioningState\":\"succeeded\",\"provisioningStateTransitionTime\":\"2018-03-16T00:48:43.009Z\",\"executionState\":\"succeeded\",\"executionStateTransitionTime\":\"2018-03-16T00:49:03.408Z\",\"executionInfo\":{\"startTime\":\"2018-03-16T00:48:43.879Z\",\"endTime\":\"2018-03-16T00:49:03.408Z\",\"exitCode\":0}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1433',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Fri, 16 Mar 2018 00:48:42 GMT',
  etag: '"0x8D58AD7AA6C6795"',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'request-id': '20aa8022-1c87-4a67-a582-e47f7bf1819e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '96ef76e0-bab7-48b7-a4c2-c98476f7d848',
  'x-ms-correlation-request-id': '96ef76e0-bab7-48b7-a4c2-c98476f7d848',
  'x-ms-routing-request-id': 'WESTUS2:20180316T004931Z:96ef76e0-bab7-48b7-a4c2-c98476f7d848',
  date: 'Fri, 16 Mar 2018 00:49:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup4060/providers/Microsoft.BatchAI/jobs/job4/listOutputFiles?api-version=2018-03-01&outputdirectoryid=stdouterr')
  .reply(200, "{\"value\":[{\"name\":\"execution.log\",\"isDirectory\":false,\"downloadUrl\":\"https://testacc3603.file.core.windows.net/azfileshare/00000000-0000-0000-0000-000000000000/nodetestgroup4060/jobs/job4/a002cb4c-f6eb-4e7f-913a-3e956399dee1/stdouterr/execution.log?sv=2016-05-31&sr=f&sig=hIFYVo4F1YhN0EdKSlAykzm1vekhYHECHH2FxkUkygk%3D&se=2018-03-16T01%3A49%3A32Z&sp=rl\",\"properties\":{\"lastModified\":\"2018-03-16T00:49:02Z\",\"contentLength\":181}},{\"name\":\"stderr-job_prep.txt\",\"isDirectory\":false,\"downloadUrl\":\"https://testacc3603.file.core.windows.net/azfileshare/00000000-0000-0000-0000-000000000000/nodetestgroup4060/jobs/job4/a002cb4c-f6eb-4e7f-913a-3e956399dee1/stdouterr/stderr-job_prep.txt?sv=2016-05-31&sr=f&sig=Uw7ePitEXH4i11JeGJi4VICpkKYoQv%2BE1KY3L2kU3SQ%3D&se=2018-03-16T01%3A49%3A32Z&sp=rl\",\"properties\":{\"lastModified\":\"2018-03-16T00:49:02Z\",\"contentLength\":0}},{\"name\":\"stderr.txt\",\"isDirectory\":false,\"downloadUrl\":\"https://testacc3603.file.core.windows.net/azfileshare/00000000-0000-0000-0000-000000000000/nodetestgroup4060/jobs/job4/a002cb4c-f6eb-4e7f-913a-3e956399dee1/stdouterr/stderr.txt?sv=2016-05-31&sr=f&sig=FBJpFalCLp%2BSYF%2Fbp58vzeTSxqshmjZO9nzgU56BKEc%3D&se=2018-03-16T01%3A49%3A32Z&sp=rl\",\"properties\":{\"lastModified\":\"2018-03-16T00:49:02Z\",\"contentLength\":0}},{\"name\":\"stdout-job_prep.txt\",\"isDirectory\":false,\"downloadUrl\":\"https://testacc3603.file.core.windows.net/azfileshare/00000000-0000-0000-0000-000000000000/nodetestgroup4060/jobs/job4/a002cb4c-f6eb-4e7f-913a-3e956399dee1/stdouterr/stdout-job_prep.txt?sv=2016-05-31&sr=f&sig=3cP4VgRmIJno1KXN%2BhxkRfoE8Pab0YL0ElQffFVZRAg%3D&se=2018-03-16T01%3A49%3A32Z&sp=rl\",\"properties\":{\"lastModified\":\"2018-03-16T00:49:02Z\",\"contentLength\":27}},{\"name\":\"stdout.txt\",\"isDirectory\":false,\"downloadUrl\":\"https://testacc3603.file.core.windows.net/azfileshare/00000000-0000-0000-0000-000000000000/nodetestgroup4060/jobs/job4/a002cb4c-f6eb-4e7f-913a-3e956399dee1/stdouterr/stdout.txt?sv=2016-05-31&sr=f&sig=vCkhFrMCa4epyX3HseNWHp8oSYyegD27lA%2F1dgp8K7U%3D&se=2018-03-16T01%3A49%3A32Z&sp=rl\",\"properties\":{\"lastModified\":\"2018-03-16T00:49:02Z\",\"contentLength\":15}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2117',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'request-id': 'fc2b7496-48d0-4235-a38f-8851edfc9226',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '92517440-3055-488a-a7bf-1cfefbf79a82',
  'x-ms-correlation-request-id': '92517440-3055-488a-a7bf-1cfefbf79a82',
  'x-ms-routing-request-id': 'WESTUS2:20180316T004932Z:92517440-3055-488a-a7bf-1cfefbf79a82',
  date: 'Fri, 16 Mar 2018 00:49:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup4060/providers/Microsoft.BatchAI/jobs/job4/listOutputFiles?api-version=2018-03-01&outputdirectoryid=stdouterr')
  .reply(200, "{\"value\":[{\"name\":\"execution.log\",\"isDirectory\":false,\"downloadUrl\":\"https://testacc3603.file.core.windows.net/azfileshare/00000000-0000-0000-0000-000000000000/nodetestgroup4060/jobs/job4/a002cb4c-f6eb-4e7f-913a-3e956399dee1/stdouterr/execution.log?sv=2016-05-31&sr=f&sig=hIFYVo4F1YhN0EdKSlAykzm1vekhYHECHH2FxkUkygk%3D&se=2018-03-16T01%3A49%3A32Z&sp=rl\",\"properties\":{\"lastModified\":\"2018-03-16T00:49:02Z\",\"contentLength\":181}},{\"name\":\"stderr-job_prep.txt\",\"isDirectory\":false,\"downloadUrl\":\"https://testacc3603.file.core.windows.net/azfileshare/00000000-0000-0000-0000-000000000000/nodetestgroup4060/jobs/job4/a002cb4c-f6eb-4e7f-913a-3e956399dee1/stdouterr/stderr-job_prep.txt?sv=2016-05-31&sr=f&sig=Uw7ePitEXH4i11JeGJi4VICpkKYoQv%2BE1KY3L2kU3SQ%3D&se=2018-03-16T01%3A49%3A32Z&sp=rl\",\"properties\":{\"lastModified\":\"2018-03-16T00:49:02Z\",\"contentLength\":0}},{\"name\":\"stderr.txt\",\"isDirectory\":false,\"downloadUrl\":\"https://testacc3603.file.core.windows.net/azfileshare/00000000-0000-0000-0000-000000000000/nodetestgroup4060/jobs/job4/a002cb4c-f6eb-4e7f-913a-3e956399dee1/stdouterr/stderr.txt?sv=2016-05-31&sr=f&sig=FBJpFalCLp%2BSYF%2Fbp58vzeTSxqshmjZO9nzgU56BKEc%3D&se=2018-03-16T01%3A49%3A32Z&sp=rl\",\"properties\":{\"lastModified\":\"2018-03-16T00:49:02Z\",\"contentLength\":0}},{\"name\":\"stdout-job_prep.txt\",\"isDirectory\":false,\"downloadUrl\":\"https://testacc3603.file.core.windows.net/azfileshare/00000000-0000-0000-0000-000000000000/nodetestgroup4060/jobs/job4/a002cb4c-f6eb-4e7f-913a-3e956399dee1/stdouterr/stdout-job_prep.txt?sv=2016-05-31&sr=f&sig=3cP4VgRmIJno1KXN%2BhxkRfoE8Pab0YL0ElQffFVZRAg%3D&se=2018-03-16T01%3A49%3A32Z&sp=rl\",\"properties\":{\"lastModified\":\"2018-03-16T00:49:02Z\",\"contentLength\":27}},{\"name\":\"stdout.txt\",\"isDirectory\":false,\"downloadUrl\":\"https://testacc3603.file.core.windows.net/azfileshare/00000000-0000-0000-0000-000000000000/nodetestgroup4060/jobs/job4/a002cb4c-f6eb-4e7f-913a-3e956399dee1/stdouterr/stdout.txt?sv=2016-05-31&sr=f&sig=vCkhFrMCa4epyX3HseNWHp8oSYyegD27lA%2F1dgp8K7U%3D&se=2018-03-16T01%3A49%3A32Z&sp=rl\",\"properties\":{\"lastModified\":\"2018-03-16T00:49:02Z\",\"contentLength\":15}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2117',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'request-id': 'fc2b7496-48d0-4235-a38f-8851edfc9226',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '92517440-3055-488a-a7bf-1cfefbf79a82',
  'x-ms-correlation-request-id': '92517440-3055-488a-a7bf-1cfefbf79a82',
  'x-ms-routing-request-id': 'WESTUS2:20180316T004932Z:92517440-3055-488a-a7bf-1cfefbf79a82',
  date: 'Fri, 16 Mar 2018 00:49:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup4060/providers/Microsoft.BatchAI/jobs/job4/listOutputFiles?api-version=2018-03-01&outputdirectoryid=OUTPUT')
  .reply(200, "{\"value\":[{\"name\":\"job.txt\",\"isDirectory\":false,\"downloadUrl\":\"https://testacc3603.blob.core.windows.net/azcontainer/00000000-0000-0000-0000-000000000000/nodetestgroup4060/jobs/job4/a002cb4c-f6eb-4e7f-913a-3e956399dee1/outputs/job.txt?sv=2016-05-31&sr=b&sig=vGQhF4YpntzeM8gUr1r176gvPmXEyo6%2B6JdqApzp7Qs%3D&se=2018-03-16T01%3A49%3A32Z&sp=rl\",\"properties\":{\"lastModified\":\"2018-03-16T00:49:02Z\",\"contentLength\":4}},{\"name\":\"prep.txt\",\"isDirectory\":false,\"downloadUrl\":\"https://testacc3603.blob.core.windows.net/azcontainer/00000000-0000-0000-0000-000000000000/nodetestgroup4060/jobs/job4/a002cb4c-f6eb-4e7f-913a-3e956399dee1/outputs/prep.txt?sv=2016-05-31&sr=b&sig=oplnvSYBEN251rRtUkrpc3aTq7qqy0Gx5Txf3KCEXtE%3D&se=2018-03-16T01%3A49%3A32Z&sp=rl\",\"properties\":{\"lastModified\":\"2018-03-16T00:49:02Z\",\"contentLength\":5}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '819',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'request-id': '50d51325-4e4a-497e-9369-890a304c4fd6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '560df619-d0e2-4541-9dfa-0edd8cad36dc',
  'x-ms-correlation-request-id': '560df619-d0e2-4541-9dfa-0edd8cad36dc',
  'x-ms-routing-request-id': 'WESTUS2:20180316T004932Z:560df619-d0e2-4541-9dfa-0edd8cad36dc',
  date: 'Fri, 16 Mar 2018 00:49:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup4060/providers/Microsoft.BatchAI/jobs/job4/listOutputFiles?api-version=2018-03-01&outputdirectoryid=OUTPUT')
  .reply(200, "{\"value\":[{\"name\":\"job.txt\",\"isDirectory\":false,\"downloadUrl\":\"https://testacc3603.blob.core.windows.net/azcontainer/00000000-0000-0000-0000-000000000000/nodetestgroup4060/jobs/job4/a002cb4c-f6eb-4e7f-913a-3e956399dee1/outputs/job.txt?sv=2016-05-31&sr=b&sig=vGQhF4YpntzeM8gUr1r176gvPmXEyo6%2B6JdqApzp7Qs%3D&se=2018-03-16T01%3A49%3A32Z&sp=rl\",\"properties\":{\"lastModified\":\"2018-03-16T00:49:02Z\",\"contentLength\":4}},{\"name\":\"prep.txt\",\"isDirectory\":false,\"downloadUrl\":\"https://testacc3603.blob.core.windows.net/azcontainer/00000000-0000-0000-0000-000000000000/nodetestgroup4060/jobs/job4/a002cb4c-f6eb-4e7f-913a-3e956399dee1/outputs/prep.txt?sv=2016-05-31&sr=b&sig=oplnvSYBEN251rRtUkrpc3aTq7qqy0Gx5Txf3KCEXtE%3D&se=2018-03-16T01%3A49%3A32Z&sp=rl\",\"properties\":{\"lastModified\":\"2018-03-16T00:49:02Z\",\"contentLength\":5}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '819',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'request-id': '50d51325-4e4a-497e-9369-890a304c4fd6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '560df619-d0e2-4541-9dfa-0edd8cad36dc',
  'x-ms-correlation-request-id': '560df619-d0e2-4541-9dfa-0edd8cad36dc',
  'x-ms-routing-request-id': 'WESTUS2:20180316T004932Z:560df619-d0e2-4541-9dfa-0edd8cad36dc',
  date: 'Fri, 16 Mar 2018 00:49:32 GMT',
  connection: 'close' });
 return result; }]];