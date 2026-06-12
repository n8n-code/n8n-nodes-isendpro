import type { INodeProperties } from 'n8n-workflow';

export const creditDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Credit"
					]
				}
			},
			"options": [
				{
					"name": "Get Credit",
					"value": "Get Credit",
					"action": "Interrogation credit",
					"description": "Retourne le credit existant associe au compte.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/credit"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /credit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Credit"
					],
					"operation": [
						"Get Credit"
					]
				}
			}
		},
		{
			"displayName": "Keyid",
			"name": "keyid",
			"required": true,
			"description": "Clé API",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "keyid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Credit"
					],
					"operation": [
						"Get Credit"
					]
				}
			}
		},
		{
			"displayName": "Credit",
			"name": "credit",
			"required": true,
			"description": "Type de reponse demandée, 1 pour euro, 2 pour euro + estimation quantité",
			"default": "1",
			"type": "options",
			"options": [
				{
					"name": "1",
					"value": "1"
				},
				{
					"name": "2",
					"value": "2"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "credit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Credit"
					],
					"operation": [
						"Get Credit"
					]
				}
			}
		},
];
