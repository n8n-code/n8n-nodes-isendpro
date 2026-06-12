import type { INodeProperties } from 'n8n-workflow';

export const addShortlinkDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Add Shortlink"
					]
				}
			},
			"options": [
				{
					"name": "Add Shortlink",
					"value": "Add Shortlink",
					"action": "add a shortlink",
					"description": "add a shortlink",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shortlink"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /shortlink",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Add Shortlink"
					],
					"operation": [
						"Add Shortlink"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Keyid",
			"name": "keyid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "keyid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Add Shortlink"
					],
					"operation": [
						"Add Shortlink"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Shortlink",
			"name": "shortlink",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "shortlink",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Add Shortlink"
					],
					"operation": [
						"Add Shortlink"
					]
				}
			}
		},
];
