import type { INodeProperties } from 'n8n-workflow';

export const setListeNoireDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Set Liste Noire"
					]
				}
			},
			"options": [
				{
					"name": "Set Liste Noire",
					"value": "Set Liste Noire",
					"action": "Ajoute un numero en liste noire",
					"description": "Ajoute un numero en liste noire. Une fois ajouté, les requêtes d'envoi de SMS marketing vers ce numéro seront refusées.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/setlistenoire"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /setlistenoire",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Set Liste Noire"
					],
					"operation": [
						"Set Liste Noire"
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
						"Set Liste Noire"
					],
					"operation": [
						"Set Liste Noire"
					]
				}
			}
		},
		{
			"displayName": "Setliste Noire",
			"name": "setlisteNoire",
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
					"property": "setlisteNoire",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Set Liste Noire"
					],
					"operation": [
						"Set Liste Noire"
					]
				}
			}
		},
		{
			"displayName": "Num",
			"name": "num",
			"required": true,
			"description": "numéro de mobile à insérer en liste noire",
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
						"Set Liste Noire"
					],
					"operation": [
						"Set Liste Noire"
					]
				}
			}
		},
];
