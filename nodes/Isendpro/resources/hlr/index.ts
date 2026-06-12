import type { INodeProperties } from 'n8n-workflow';

export const hlrDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Hlr"
					]
				}
			},
			"options": [
				{
					"name": "Get Hlr",
					"value": "Get Hlr",
					"action": "Vérifier la validité d'un numéro",
					"description": "Réalise un lookup HLR sur les numéros \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/hlr"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /hlr",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Hlr"
					],
					"operation": [
						"Get Hlr"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Get HLR",
			"name": "getHLR",
			"type": "options",
			"default": "1",
			"description": "Doit valoir \"1\"",
			"options": [
				{
					"name": "1",
					"value": "1"
				}
			],
			"routing": {
				"send": {
					"property": "getHLR",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hlr"
					],
					"operation": [
						"Get Hlr"
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
			"description": "Clé API",
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
						"Hlr"
					],
					"operation": [
						"Get Hlr"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Num",
			"name": "num",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "liste de numéros de téléphone",
			"routing": {
				"send": {
					"property": "num",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hlr"
					],
					"operation": [
						"Get Hlr"
					]
				}
			}
		},
];
