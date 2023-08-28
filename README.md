Overview

filecoin-verifier-common is an internal utility package designed to facilitate consistent development across our Filecoin projects. It centralizes shared constants and essential tools.

Features

Shared Constants: Avoid redefining the same values across projects.
Utility Tools: Reusable functions and modules designed for the Filecoin ecosystem.

Installation

Quick guide

```
yarn add filecoin-verifier-common
```
or

```
npm install filecoin-verifier-common
```
Usage

```
javascript

// Sample usage of a shared constant
import { SOME_CONSTANT } from 'filecoin-verifier-common';

console.log(SOME_CONSTANT);
```