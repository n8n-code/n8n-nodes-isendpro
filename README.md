# @n8n-dev/n8n-nodes-isendpro

![isendpro Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-isendpro.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-isendpro)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing isendpro API integrations by hand.**

Every time you connect n8n to isendpro, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to isendpro took 5 minutes, not half a day?**

This node gives you **12+ resources** out of the box: **Campagne**, **Comptage**, **Credit**, **Del Liste Noire**, **Get Liste Noire**, and 7 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-isendpro
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-isendpro`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **isendpro API** → paste your API key
3. Drag the **isendpro** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Campagne</b> (1 operations)</summary>

- Get Retourne les SMS envoy s sur une p riode donn e

</details>

<details>
<summary><b>Comptage</b> (1 operations)</summary>

- Post Compter le nombre de caract re

</details>

<details>
<summary><b>Credit</b> (1 operations)</summary>

- Get Interrogation credit

</details>

<details>
<summary><b>Del Liste Noire</b> (1 operations)</summary>

- Post Ajoute un numero en liste noire

</details>

<details>
<summary><b>Get Liste Noire</b> (1 operations)</summary>

- Post Retourne le liste noire

</details>

<details>
<summary><b>Hlr</b> (1 operations)</summary>

- Post V rifier la validit d un num ro

</details>

<details>
<summary><b>Repertoire</b> (2 operations)</summary>

- Post Gestion repertoire creation
- Put Gestion repertoire modification

</details>

<details>
<summary><b>Set Liste Noire</b> (1 operations)</summary>

- Post Ajoute un numero en liste noire

</details>

<details>
<summary><b>Add Shortlink</b> (1 operations)</summary>

- Post add a shortlink

</details>

<details>
<summary><b>Sms</b> (2 operations)</summary>

- Post Envoyer un sms
- Post Envoyer des SMS

</details>

<details>
<summary><b>Add Subaccount</b> (1 operations)</summary>

- Post Ajoute un sous compte

</details>

<details>
<summary><b>Edit Subaccount</b> (1 operations)</summary>

- Put Edit a subaccount

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from isendpro docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official isendpro OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **isendpro** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the isendpro API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
