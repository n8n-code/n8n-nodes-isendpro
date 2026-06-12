import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { campagneDescription } from './resources/campagne';
import { comptageDescription } from './resources/comptage';
import { creditDescription } from './resources/credit';
import { delListeNoireDescription } from './resources/del-liste-noire';
import { getListeNoireDescription } from './resources/get-liste-noire';
import { hlrDescription } from './resources/hlr';
import { repertoireDescription } from './resources/repertoire';
import { setListeNoireDescription } from './resources/set-liste-noire';
import { addShortlinkDescription } from './resources/add-shortlink';
import { smsDescription } from './resources/sms';
import { addSubaccountDescription } from './resources/add-subaccount';
import { editSubaccountDescription } from './resources/edit-subaccount';

export class Isendpro implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Isendpro',
                name: 'N8nDevIsendpro',
                icon: { light: 'file:./isendpro.png', dark: 'file:./isendpro.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: '[1] Liste des fonctionnalités :',
                defaults: { name: 'Isendpro' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevIsendproApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Campagne",
					"value": "Campagne",
					"description": ""
				},
				{
					"name": "Comptage",
					"value": "Comptage",
					"description": ""
				},
				{
					"name": "Credit",
					"value": "Credit",
					"description": ""
				},
				{
					"name": "Del Liste Noire",
					"value": "Del Liste Noire",
					"description": ""
				},
				{
					"name": "Get Liste Noire",
					"value": "Get Liste Noire",
					"description": ""
				},
				{
					"name": "Hlr",
					"value": "Hlr",
					"description": ""
				},
				{
					"name": "Repertoire",
					"value": "Repertoire",
					"description": ""
				},
				{
					"name": "Set Liste Noire",
					"value": "Set Liste Noire",
					"description": ""
				},
				{
					"name": "Add Shortlink",
					"value": "Add Shortlink",
					"description": ""
				},
				{
					"name": "Sms",
					"value": "Sms",
					"description": ""
				},
				{
					"name": "Add Subaccount",
					"value": "Add Subaccount",
					"description": ""
				},
				{
					"name": "Edit Subaccount",
					"value": "Edit Subaccount",
					"description": ""
				}
			],
			"default": ""
		},
		...campagneDescription,
		...comptageDescription,
		...creditDescription,
		...delListeNoireDescription,
		...getListeNoireDescription,
		...hlrDescription,
		...repertoireDescription,
		...setListeNoireDescription,
		...addShortlinkDescription,
		...smsDescription,
		...addSubaccountDescription,
		...editSubaccountDescription
                ],
        };
}
