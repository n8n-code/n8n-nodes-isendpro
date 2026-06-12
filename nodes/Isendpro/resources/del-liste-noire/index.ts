import type { INodeProperties } from 'n8n-workflow';

export const delListeNoireDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Del Liste Noire"
					]
				}
			},
			"options": [
				{
					"name": "Del Liste Noire",
					"value": "Del Liste Noire",
					"action": "Ajoute un numero en liste noire",
					"description": "Supprime un numero en liste noire",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dellistenoire"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /dellistenoire",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Del Liste Noire"
					],
					"operation": [
						"Del Liste Noire"
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
						"Del Liste Noire"
					],
					"operation": [
						"Del Liste Noire"
					]
				}
			}
		},
		{
			"displayName": "Del Liste Noire",
			"name": "delListeNoire",
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
					"property": "delListeNoire",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Del Liste Noire"
					],
					"operation": [
						"Del Liste Noire"
					]
				}
			}
		},
		{
			"displayName": "Num",
			"name": "num",
			"required": true,
			"description": "numéro de mobile à supprimer",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "num",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Del Liste Noire"
					],
					"operation": [
						"Del Liste Noire"
					]
				}
			}
		},
];
