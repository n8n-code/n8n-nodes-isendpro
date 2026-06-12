import type { INodeProperties } from 'n8n-workflow';

export const campagneDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Campagne"
					]
				}
			},
			"options": [
				{
					"name": "Get Campagne",
					"value": "Get Campagne",
					"action": "Retourne les SMS envoyés sur une période donnée",
					"description": "Retourne les SMS envoyés sur une période donnée en fonction d'une date de début et d'une date de fin. \n\nLes dates sont au format YYYY-MM-DD hh:mm. \n\nLe fichier rapport de campagne est sous la forme d'un fichier zip + contenant un fichier csv contenant le détail des envois.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/campagne"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /campagne",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Campagne"
					],
					"operation": [
						"Get Campagne"
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
						"Campagne"
					],
					"operation": [
						"Get Campagne"
					]
				}
			}
		},
		{
			"displayName": "Rapport Campagne",
			"name": "rapportCampagne",
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
					"property": "rapportCampagne",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Campagne"
					],
					"operation": [
						"Get Campagne"
					]
				}
			}
		},
		{
			"displayName": "Date Deb",
			"name": "date_deb",
			"required": true,
			"description": "date de debut au format YYYY-MM-DD hh:mm",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "date_deb",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Campagne"
					],
					"operation": [
						"Get Campagne"
					]
				}
			}
		},
		{
			"displayName": "Date Fin",
			"name": "date_fin",
			"required": true,
			"description": "date de fin au format YYYY-MM-DD hh:mm",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "date_fin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Campagne"
					],
					"operation": [
						"Get Campagne"
					]
				}
			}
		},
];
