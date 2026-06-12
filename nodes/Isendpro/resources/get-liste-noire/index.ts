import type { INodeProperties } from 'n8n-workflow';

export const getListeNoireDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Get Liste Noire"
					]
				}
			},
			"options": [
				{
					"name": "Get Liste Noire",
					"value": "Get Liste Noire",
					"action": "Retourne le liste noire",
					"description": "Retourne un fichier csv zippé contenant la liste noire",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getlistenoire"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /getlistenoire",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Get Liste Noire"
					],
					"operation": [
						"Get Liste Noire"
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
						"Get Liste Noire"
					],
					"operation": [
						"Get Liste Noire"
					]
				}
			}
		},
		{
			"displayName": "Get Liste Noire",
			"name": "getListeNoire",
			"required": true,
			"description": "Doit valoir \"1\"",
			"default": "1",
			"type": "options",
			"options": [
				{
					"name": "1",
					"value": "1"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "getListeNoire",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Get Liste Noire"
					],
					"operation": [
						"Get Liste Noire"
					]
				}
			}
		},
];
