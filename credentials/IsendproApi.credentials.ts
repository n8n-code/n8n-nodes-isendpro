import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class IsendproApi implements ICredentialType {
        name = 'N8nDevIsendproApi';

        displayName = 'Isendpro API';

        icon: Icon = { light: 'file:../nodes/Isendpro/isendpro.png', dark: 'file:../nodes/Isendpro/isendpro.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apirest.isendpro.com/cgi-bin',
                        required: true,
                        placeholder: 'https://apirest.isendpro.com/cgi-bin',
                        description: 'The base URL of your Isendpro API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
