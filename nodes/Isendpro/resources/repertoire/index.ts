import type { INodeProperties } from 'n8n-workflow';

export const repertoireDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					]
				}
			},
			"options": [
				{
					"name": "Repertoire Crea",
					"value": "Repertoire Crea",
					"action": "Gestion repertoire (creation)",
					"description": "Cree un nouveau répertoire et retourne son identifiant. Cet identifiant pourra être utilisé pour ajouter ou supprimer des numéros via l'API.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/repertoire"
						}
					}
				},
				{
					"name": "Repertoire",
					"value": "Repertoire",
					"action": "Gestion repertoire (modification)",
					"description": "Ajoute ou supprime une liste de numéros à un répertoire existant.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/repertoire"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /repertoire",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire Crea"
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
						"Repertoire"
					],
					"operation": [
						"Repertoire Crea"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Repertoire Edit",
			"name": "repertoireEdit",
			"type": "options",
			"default": "create",
			"description": "Action à réaliser doit valoir \"create\" ici.",
			"options": [
				{
					"name": "Create",
					"value": "create"
				}
			],
			"routing": {
				"send": {
					"property": "repertoireEdit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire Crea"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Repertoire Nom",
			"name": "repertoireNom",
			"type": "string",
			"default": "",
			"description": "Nom du répertoire (libellé) à créer",
			"routing": {
				"send": {
					"property": "repertoireNom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire Crea"
					]
				}
			}
		},
		{
			"displayName": "PUT /repertoire",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 1",
			"name": "champ1",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Noms des contact",
			"routing": {
				"send": {
					"property": "champ1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 10",
			"name": "champ10",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs I des contacts",
			"routing": {
				"send": {
					"property": "champ10",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 11",
			"name": "champ11",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs J des contacts",
			"routing": {
				"send": {
					"property": "champ11",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 12",
			"name": "champ12",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs K des contacts",
			"routing": {
				"send": {
					"property": "champ12",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 13",
			"name": "champ13",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs L des contacts",
			"routing": {
				"send": {
					"property": "champ13",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 14",
			"name": "champ14",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs M des contacts",
			"routing": {
				"send": {
					"property": "champ14",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 15",
			"name": "champ15",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs N des contacts",
			"routing": {
				"send": {
					"property": "champ15",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 16",
			"name": "champ16",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs O des contacts",
			"routing": {
				"send": {
					"property": "champ16",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 17",
			"name": "champ17",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs P des contacts",
			"routing": {
				"send": {
					"property": "champ17",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 18",
			"name": "champ18",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs Q des contacts",
			"routing": {
				"send": {
					"property": "champ18",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 19",
			"name": "champ19",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs R des contacts",
			"routing": {
				"send": {
					"property": "champ19",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 2",
			"name": "champ2",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs A des contacts",
			"routing": {
				"send": {
					"property": "champ2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 20",
			"name": "champ20",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs S des contacts",
			"routing": {
				"send": {
					"property": "champ20",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 21",
			"name": "champ21",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs T des contacts",
			"routing": {
				"send": {
					"property": "champ21",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 22",
			"name": "champ22",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs U des contacts",
			"routing": {
				"send": {
					"property": "champ22",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 23",
			"name": "champ23",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs V des contacts",
			"routing": {
				"send": {
					"property": "champ23",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 24",
			"name": "champ24",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs W des contacts",
			"routing": {
				"send": {
					"property": "champ24",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 25",
			"name": "champ25",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs X des contacts",
			"routing": {
				"send": {
					"property": "champ25",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 26",
			"name": "champ26",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs Y des contacts",
			"routing": {
				"send": {
					"property": "champ26",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 27",
			"name": "champ27",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs Z des contacts",
			"routing": {
				"send": {
					"property": "champ27",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 3",
			"name": "champ3",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs B des contacts",
			"routing": {
				"send": {
					"property": "champ3",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 4",
			"name": "champ4",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs C des contacts",
			"routing": {
				"send": {
					"property": "champ4",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 5",
			"name": "champ5",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs D des contacts",
			"routing": {
				"send": {
					"property": "champ5",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 6",
			"name": "champ6",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs E des contacts",
			"routing": {
				"send": {
					"property": "champ6",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 7",
			"name": "champ7",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs F des contacts",
			"routing": {
				"send": {
					"property": "champ7",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 8",
			"name": "champ8",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs G des contacts",
			"routing": {
				"send": {
					"property": "champ8",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"displayName": "Champ 9",
			"name": "champ9",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Champs H des contacts",
			"routing": {
				"send": {
					"property": "champ9",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
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
						"Repertoire"
					],
					"operation": [
						"Repertoire"
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
			"description": "liste des numéros des téléphone à ajouter ou supprimer",
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
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Repertoire Edit",
			"name": "repertoireEdit",
			"type": "options",
			"default": "add",
			"description": "action à réaliser, \"add\" pour l'ajout de numéros, \"del\" pour la suppression de numéros",
			"options": [
				{
					"name": "Add",
					"value": "add"
				},
				{
					"name": "Del",
					"value": "del"
				}
			],
			"routing": {
				"send": {
					"property": "repertoireEdit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Repertoire ID",
			"name": "repertoireId",
			"type": "string",
			"default": "",
			"description": "repertoireId du répertoire cible",
			"routing": {
				"send": {
					"property": "repertoireId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Repertoire"
					],
					"operation": [
						"Repertoire"
					]
				}
			}
		},
];
