# financieroappbancopichincha

## Descripción

`financieroappbancopichincha` es una aplicación React Native diseñada para gestionar productos financieros ofrecidos por el Banco Pichincha. Esta aplicación permite listar, buscar, agregar, editar y eliminar productos financieros, todo esto interactuando con una API.

## Requisitos

- Node.js
- Expo CLI
- Un emulador de Android/iOS o un dispositivo físico

## Instalación

Primero, clona el repositorio en tu máquina local usando:

```bash
git clone https://github.com/cristopher-dev/financieroappbancopichincha
cd financieroappbancopichincha
npm install
npm start
npm run android
npm run ios
npm run web
npm test
```

# Project Structure

This document provides an overview of the project's directory structure and its main components.

## src: Root Folder

The root folder of the source code.

### api

Contains the API configuration and related TypeScript types.

- **api.ts**: Functions to communicate with the API.
- **types.ts**: TypeScript type definitions for the API.

### components

Reusable React Native components.

- **DetailSection**
- **FormButton**
- **Forms**
- **HeaderLogo**
- **ListItem**
- **Modal**
- **SearchList**
- **ValidatedInput**

### navigation

Contains the application's navigation configuration.

### screens

Application screens.

- **D1**
- **D2Add**
- **D2Edit**

### tests

Unit tests for the components and the API.

- **api.test.tsx**
- **DetailSection.test.tsx**
- **FormButton.test.tsx**
- **etc.**

### types

Global TypeScript type definitions.

- **product.interfaces.ts**: Interface definitions for the products.

## Root Level Files

- **.gitignore**: File to specify which files or folders should be ignored in Git.
- **app.json**: Expo application configuration.
- **App.tsx**: Root component of the React Native application.
- **babel.config.js**: Babel configuration to transform the JSX code.

```

```
