import type { INodeProperties } from 'n8n-workflow';

export const addSubaccountDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Add Subaccount"
					]
				}
			},
			"options": [
				{
					"name": "Subaccount Add",
					"value": "Subaccount Add",
					"action": "Ajoute un sous compte",
					"description": "Ajoute un sous compte",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/subaccount"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /subaccount",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Add Subaccount"
					],
					"operation": [
						"Subaccount Add"
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
						"Add Subaccount"
					],
					"operation": [
						"Subaccount Add"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sub Account Edit",
			"name": "subAccountEdit",
			"type": "options",
			"default": "addAccount",
			"options": [
				{
					"name": "Add Account",
					"value": "addAccount"
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
						"Add Subaccount"
					],
					"operation": [
						"Subaccount Add"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sub Account Login",
			"name": "subAccountLogin",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subAccountLogin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Add Subaccount"
					],
					"operation": [
						"Subaccount Add"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sub Account Password",
			"name": "subAccountPassword",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subAccountPassword",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Add Subaccount"
					],
					"operation": [
						"Subaccount Add"
					]
				}
			}
		},
];
