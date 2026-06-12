import type { INodeProperties } from 'n8n-workflow';

export const editSubaccountDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Edit Subaccount"
					]
				}
			},
			"options": [
				{
					"name": "Subaccount Edit",
					"value": "Subaccount Edit",
					"action": "Edit a subaccount",
					"description": "Edit a subaccount",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/subaccount"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /subaccount",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Edit Subaccount"
					],
					"operation": [
						"Subaccount Edit"
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
						"Edit Subaccount"
					],
					"operation": [
						"Subaccount Edit"
					]
				}
			}
		},
		{
			"displayName": "Sub Account Add Credit",
			"name": "subAccountAddCredit",
			"type": "string",
			"default": "",
			"description": "montant du crédit à ajouter",
			"routing": {
				"send": {
					"property": "subAccountAddCredit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Edit Subaccount"
					],
					"operation": [
						"Subaccount Edit"
					]
				}
			}
		},
		{
			"displayName": "Sub Account Country Code",
			"name": "subAccountCountryCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subAccountCountryCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Edit Subaccount"
					],
					"operation": [
						"Subaccount Edit"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sub Account Edit",
			"name": "subAccountEdit",
			"type": "options",
			"default": "setPrice",
			"description": "action à réaliser soit setPrice pour définir un prix ou addCredit pour ajouter du credit ou setRestriction modifier la restriction stop /",
			"options": [
				{
					"name": "Set Price",
					"value": "setPrice"
				},
				{
					"name": "Add Credit",
					"value": "addCredit"
				},
				{
					"name": "Set Restriction",
					"value": "setRestriction"
				}
			],
			"routing": {
				"send": {
					"property": "subAccountEdit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Edit Subaccount"
					],
					"operation": [
						"Subaccount Edit"
					]
				}
			}
		},
		{
			"displayName": "Sub Account Key ID",
			"name": "subAccountKeyId",
			"type": "string",
			"default": "",
			"description": "keyid du sous-compte",
			"routing": {
				"send": {
					"property": "subAccountKeyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Edit Subaccount"
					],
					"operation": [
						"Subaccount Edit"
					]
				}
			}
		},
		{
			"displayName": "Sub Account Price",
			"name": "subAccountPrice",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subAccountPrice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Edit Subaccount"
					],
					"operation": [
						"Subaccount Edit"
					]
				}
			}
		},
		{
			"displayName": "Sub Account Restriction Stop",
			"name": "subAccountRestrictionStop",
			"type": "options",
			"default": "0",
			"options": [
				{
					"name": "0",
					"value": "0"
				},
				{
					"name": "1",
					"value": "1"
				}
			],
			"routing": {
				"send": {
					"property": "subAccountRestrictionStop",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Edit Subaccount"
					],
					"operation": [
						"Subaccount Edit"
					]
				}
			}
		},
		{
			"displayName": "Sub Account Restriction Time",
			"name": "subAccountRestrictionTime",
			"type": "options",
			"default": "0",
			"options": [
				{
					"name": "0",
					"value": "0"
				},
				{
					"name": "1",
					"value": "1"
				}
			],
			"routing": {
				"send": {
					"property": "subAccountRestrictionTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Edit Subaccount"
					],
					"operation": [
						"Subaccount Edit"
					]
				}
			}
		},
];
