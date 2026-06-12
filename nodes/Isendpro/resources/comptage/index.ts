import type { INodeProperties } from 'n8n-workflow';

export const comptageDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Comptage"
					]
				}
			},
			"options": [
				{
					"name": "Comptage",
					"value": "Comptage",
					"action": "Compter le nombre de caractère ",
					"description": "Compte le nombre de SMS necessaire à un envoi",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/comptage"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /comptage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Comptage"
					],
					"operation": [
						"Comptage"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Comptage",
			"name": "comptage",
			"type": "options",
			"default": "1",
			"options": [
				{
					"name": "1",
					"value": "1"
				}
			],
			"routing": {
				"send": {
					"property": "comptage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Comptage"
					],
					"operation": [
						"Comptage"
					]
				}
			}
		},
		{
			"displayName": "Date Envoi",
			"name": "date_envoi",
			"type": "string",
			"default": "",
			"description": "Date d'envoi au format YYYY-MM-DD hh:mm . Ce paramètre est optionnel, si il est omis l'envoi est réalisé immédiatement.",
			"routing": {
				"send": {
					"property": "date_envoi",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Comptage"
					],
					"operation": [
						"Comptage"
					]
				}
			}
		},
		{
			"displayName": "Emetteur",
			"name": "emetteur",
			"type": "string",
			"default": "",
			"description": "- L'emetteur doit être une chaîne alphanumérique comprise entre 4 et 11 caractères.\n\n- Les caractères acceptés sont les chiffres entre 0 et 9, les lettres entre A et Z et l’espace.\n\n- Il ne peut pas comporter uniquement des chiffres. \n\n- Pour la modification de l'émetteur et dans le cadre de campagnes commerciales, les opérateurs imposent contractuellement d'ajouter en fin de message le texte \"STOP XXXXX\". De ce fait, le message envoyé ne pourra excéder une longueur de 148 caractères au lieu des 160 caractères, le « STOP » étant rajouté automatiquement.\n",
			"routing": {
				"send": {
					"property": "emetteur",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Comptage"
					],
					"operation": [
						"Comptage"
					]
				}
			}
		},
		{
			"displayName": "Gmt Zone",
			"name": "gmt_zone",
			"type": "options",
			"default": "Pacific/Midway",
			"description": "Fuseau horaire de la date d'envoi",
			"options": [
				{
					"name": "Pacific Midway",
					"value": "Pacific/Midway"
				},
				{
					"name": "America Adak",
					"value": "America/Adak"
				},
				{
					"name": "Etc GMT 10",
					"value": "Etc/GMT+10"
				},
				{
					"name": "Pacific Marquesas",
					"value": "Pacific/Marquesas"
				},
				{
					"name": "Pacific Gambier",
					"value": "Pacific/Gambier"
				},
				{
					"name": "America Anchorage",
					"value": "America/Anchorage"
				},
				{
					"name": "America Ensenada",
					"value": "America/Ensenada"
				},
				{
					"name": "Etc GMT 8",
					"value": "Etc/GMT+8"
				},
				{
					"name": "America Los Angeles",
					"value": "America/Los_Angeles"
				},
				{
					"name": "America Denver",
					"value": "America/Denver"
				},
				{
					"name": "America Chihuahua",
					"value": "America/Chihuahua"
				},
				{
					"name": "America Dawson Creek",
					"value": "America/Dawson_Creek"
				},
				{
					"name": "America Belize",
					"value": "America/Belize"
				},
				{
					"name": "America Cancun",
					"value": "America/Cancun"
				},
				{
					"name": "Chile Easter Island",
					"value": "Chile/EasterIsland"
				},
				{
					"name": "America Chicago",
					"value": "America/Chicago"
				},
				{
					"name": "America New York",
					"value": "America/New_York"
				},
				{
					"name": "America Havana",
					"value": "America/Havana"
				},
				{
					"name": "America Bogota",
					"value": "America/Bogota"
				},
				{
					"name": "America Caracas",
					"value": "America/Caracas"
				},
				{
					"name": "America Santiago",
					"value": "America/Santiago"
				},
				{
					"name": "America La Paz",
					"value": "America/La_Paz"
				},
				{
					"name": "Atlantic Stanley",
					"value": "Atlantic/Stanley"
				},
				{
					"name": "America Campo Grande",
					"value": "America/Campo_Grande"
				},
				{
					"name": "America Goose Bay",
					"value": "America/Goose_Bay"
				},
				{
					"name": "America Glace Bay",
					"value": "America/Glace_Bay"
				},
				{
					"name": "America St Johns",
					"value": "America/St_Johns"
				},
				{
					"name": "America Araguaina",
					"value": "America/Araguaina"
				},
				{
					"name": "America Montevideo",
					"value": "America/Montevideo"
				},
				{
					"name": "America Miquelon",
					"value": "America/Miquelon"
				},
				{
					"name": "America Godthab",
					"value": "America/Godthab"
				},
				{
					"name": "America Argentina Buenos Aires",
					"value": "America/Argentina/Buenos_Aires"
				},
				{
					"name": "America Sao Paulo",
					"value": "America/Sao_Paulo"
				},
				{
					"name": "America Noronha",
					"value": "America/Noronha"
				},
				{
					"name": "Atlantic Cape Verde",
					"value": "Atlantic/Cape_Verde"
				},
				{
					"name": "Atlantic Azores",
					"value": "Atlantic/Azores"
				},
				{
					"name": "Europe Belfast",
					"value": "Europe/Belfast"
				},
				{
					"name": "Europe Dublin",
					"value": "Europe/Dublin"
				},
				{
					"name": "Europe Lisbon",
					"value": "Europe/Lisbon"
				},
				{
					"name": "Europe London",
					"value": "Europe/London"
				},
				{
					"name": "Africa Abidjan",
					"value": "Africa/Abidjan"
				},
				{
					"name": "Europe Amsterdam",
					"value": "Europe/Amsterdam"
				},
				{
					"name": "Europe Belgrade",
					"value": "Europe/Belgrade"
				},
				{
					"name": "Europe Brussels",
					"value": "Europe/Brussels"
				},
				{
					"name": "Africa Algiers",
					"value": "Africa/Algiers"
				},
				{
					"name": "Africa Windhoek",
					"value": "Africa/Windhoek"
				},
				{
					"name": "Asia Beirut",
					"value": "Asia/Beirut"
				},
				{
					"name": "Africa Cairo",
					"value": "Africa/Cairo"
				},
				{
					"name": "Asia Gaza",
					"value": "Asia/Gaza"
				},
				{
					"name": "Africa Blantyre",
					"value": "Africa/Blantyre"
				},
				{
					"name": "Asia Jerusalem",
					"value": "Asia/Jerusalem"
				},
				{
					"name": "Europe Minsk",
					"value": "Europe/Minsk"
				},
				{
					"name": "Asia Damascus",
					"value": "Asia/Damascus"
				},
				{
					"name": "Europe Moscow",
					"value": "Europe/Moscow"
				},
				{
					"name": "Africa Addis Ababa",
					"value": "Africa/Addis_Ababa"
				},
				{
					"name": "Asia Tehran",
					"value": "Asia/Tehran"
				},
				{
					"name": "Asia Dubai",
					"value": "Asia/Dubai"
				},
				{
					"name": "Asia Yerevan",
					"value": "Asia/Yerevan"
				},
				{
					"name": "Asia Kabul",
					"value": "Asia/Kabul"
				},
				{
					"name": "Asia Yekaterinburg",
					"value": "Asia/Yekaterinburg"
				},
				{
					"name": "Asia Tashkent",
					"value": "Asia/Tashkent"
				},
				{
					"name": "Asia Kolkata",
					"value": "Asia/Kolkata"
				},
				{
					"name": "Asia Katmandu",
					"value": "Asia/Katmandu"
				},
				{
					"name": "Asia Dhaka",
					"value": "Asia/Dhaka"
				},
				{
					"name": "Asia Novosibirsk",
					"value": "Asia/Novosibirsk"
				},
				{
					"name": "Asia Rangoon",
					"value": "Asia/Rangoon"
				},
				{
					"name": "Asia Bangkok",
					"value": "Asia/Bangkok"
				},
				{
					"name": "Asia Krasnoyarsk",
					"value": "Asia/Krasnoyarsk"
				},
				{
					"name": "Asia Hong Kong",
					"value": "Asia/Hong_Kong"
				},
				{
					"name": "Asia Irkutsk",
					"value": "Asia/Irkutsk"
				},
				{
					"name": "Australia Perth",
					"value": "Australia/Perth"
				},
				{
					"name": "Australia Eucla",
					"value": "Australia/Eucla"
				},
				{
					"name": "Asia Tokyo",
					"value": "Asia/Tokyo"
				},
				{
					"name": "Asia Seoul",
					"value": "Asia/Seoul"
				},
				{
					"name": "Asia Yakutsk",
					"value": "Asia/Yakutsk"
				},
				{
					"name": "Australia Adelaide",
					"value": "Australia/Adelaide"
				},
				{
					"name": "Australia Darwin",
					"value": "Australia/Darwin"
				},
				{
					"name": "Australia Brisbane",
					"value": "Australia/Brisbane"
				},
				{
					"name": "Australia Hobart",
					"value": "Australia/Hobart"
				},
				{
					"name": "Asia Vladivostok",
					"value": "Asia/Vladivostok"
				},
				{
					"name": "Australia Lord Howe",
					"value": "Australia/Lord_Howe"
				},
				{
					"name": "Etc GMT 11",
					"value": "Etc/GMT-11"
				},
				{
					"name": "Asia Magadan",
					"value": "Asia/Magadan"
				},
				{
					"name": "Pacific Norfolk",
					"value": "Pacific/Norfolk"
				},
				{
					"name": "Asia Anadyr",
					"value": "Asia/Anadyr"
				},
				{
					"name": "Pacific Auckland",
					"value": "Pacific/Auckland"
				},
				{
					"name": "Etc GMT 12",
					"value": "Etc/GMT-12"
				},
				{
					"name": "Pacific Chatham",
					"value": "Pacific/Chatham"
				},
				{
					"name": "Pacific Tongatapu",
					"value": "Pacific/Tongatapu"
				},
				{
					"name": "Pacific Kiritimati",
					"value": "Pacific/Kiritimati"
				}
			],
			"routing": {
				"send": {
					"property": "gmt_zone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Comptage"
					],
					"operation": [
						"Comptage"
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
						"Comptage"
					],
					"operation": [
						"Comptage"
					]
				}
			}
		},
		{
			"displayName": "Nostop",
			"name": "nostop",
			"type": "string",
			"default": "",
			"description": "Si le message n’est pas à but commercial, vous pouvez faire une demande pour retirer l’obligation du STOP. Une fois votre demande validée par nos services, vous pourrez supprimer la mention STOP SMS en ajoutant nostop = \"1\"",
			"routing": {
				"send": {
					"property": "nostop",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Comptage"
					],
					"operation": [
						"Comptage"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Num",
			"name": "num",
			"type": "string",
			"default": "",
			"description": "Numero de téléphone au format national (exemple 0680010203) ou international (example 33680010203)",
			"routing": {
				"send": {
					"property": "num",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Comptage"
					],
					"operation": [
						"Comptage"
					]
				}
			}
		},
		{
			"displayName": "Num Azur",
			"name": "numAzur",
			"type": "options",
			"default": "1",
			"options": [
				{
					"name": "1",
					"value": "1"
				}
			],
			"routing": {
				"send": {
					"property": "numAzur",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Comptage"
					],
					"operation": [
						"Comptage"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sms",
			"name": "sms",
			"type": "string",
			"default": "",
			"description": "Message à envoyer aux destinataires. Le message doit être encodé au format utf-8 et ne contenir que des caractères existant dans l'alphabet GSM. Il est également possible d'envoyer (à l'étranger uniquement) des SMS en UCS-2, cf paramètre ucs2 pour plus de détails.",
			"routing": {
				"send": {
					"property": "sms",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Comptage"
					],
					"operation": [
						"Comptage"
					]
				}
			}
		},
		{
			"displayName": "Smslong",
			"name": "smslong",
			"type": "options",
			"default": "999",
			"description": "Le SMS long permet de dépasser la limite de 160 caractères en envoyant un message constitué\nde plusieurs SMS.\nIl est possible d’envoyer jusqu’à 6 SMS concaténés pour une longueur totale maximale de 918\ncaractères par message.\nPour des raisons technique, la limite par SMS concaténé étant de 153 caractères.\nEn cas de modification de l’émetteur, il faut considérer l’ajout automatique de 12 caractères\ndu « STOP SMS ».\nPour envoyer un smslong, il faut ajouter le paramètre smslong aux appels. La valeur de SMS doit être le nombre maximum de sms concaténé autorisé.   Pour ne pas avoir ce message d’erreur et obtenir un calcul dynamique du nombre de SMS alors il faut renseigner smslong = \"999\"\n",
			"options": [
				{
					"name": "999",
					"value": "999"
				}
			],
			"routing": {
				"send": {
					"property": "smslong",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Comptage"
					],
					"operation": [
						"Comptage"
					]
				}
			}
		},
		{
			"displayName": "Tracker",
			"name": "tracker",
			"type": "string",
			"default": "",
			"description": "Le tracker doit être une chaine alphanumérique de moins de 50 caractères. Ce tracker sera ensuite renvoyé en paramètre des urls pour les retours des accusés de réception. ",
			"routing": {
				"send": {
					"property": "tracker",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Comptage"
					],
					"operation": [
						"Comptage"
					]
				}
			}
		},
		{
			"displayName": "Ucs 2",
			"name": "ucs2",
			"type": "string",
			"default": "",
			"description": "Il est également possible d’envoyer des SMS en alphabet non latin (russe, chinois, arabe, etc) sur\nles numéros hors France métropolitaine.\nPour ce faire, la requête devrait être encodée au format UTF-8 et contenir l’argument ucs2 = \"1\"\nDu fait de contraintes techniques, 1 SMS unique ne pourra pas dépasser 70 caractères (au lieu\ndes 160 usuels) et dans le cas de SMS long, chaque sms ne pourra dépasser 67 caractères.\n",
			"routing": {
				"send": {
					"property": "ucs2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Comptage"
					],
					"operation": [
						"Comptage"
					]
				}
			}
		},
];
