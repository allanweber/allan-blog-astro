---
title: Creating a Landing Page with NextJs and Shadcn
author: Allan Weber
pubDatetime: 2024-06-12T18:29:52.000+02:00
slug: manage-trades-series-3-landing-page
featured: false
draft: false
tags:
    - Javascript
    - react
    - Typescript
    - NextJs
    - dark mode
    - shadcn
    - micro-saas
    - real-software
    - Landing Page
description: How to create a landing page with NextJs and Shadcn
---

> Continuing the series of articles about managing trades called Trading Journal. The series will cover the creation of a trading journal, where the user can manage their trades, from many different markets. The third article will cover the creation of a landing page for the application where users can see which features the application will have.

## Table of contents

## Introduction

A good landing page is essential for any application. It is the first thing that the user sees when they access the application. It is the first impression that the user has of the application. It is important to have a good landing page to attract users to the application.

In this article, we will create a landing page for the Trading Journal application. The landing page will have just enough information to attract users to the application. It will have a brief description of the application, a list of features, and a call to action to sign up for a future newsletter.

All the buttons and actions will not do anything, as the application is not yet developed. The purpose of the landing page is to attract users to the application and to get them to sign up for a future newsletter.

In a next article, we will implement landing page feature to sign up for the newsletter.

## Prerequisites

For this article, you will need to install some Shadcn components. You can install them by running the following commands:

```bash
npx shadcn-ui@latest add navigation-menu sheet avatar badge card input accordion
```

## Main changes

As the landing page creation process is quite simple but requires a lot of code, I will not show the code here. You can check the code on the [3-landing-page branch](https://github.com/allanweber/trading-journal-nextjs/tree/3-landing-page)

* We moved the ~/messages folder to ~/src/messages.
* The whole landing page will be in ~/src/app/[locale]/site/page.tsx file.
* Components will be in ~/src/app/[locale]/site/components folder.
* Assets will be in ~/src/app/[locale]/site/assets folder.

One important change is two different categories of translations file:

* The files called {locale}.json will be used for rendering server side components.
* The files called {locale}.client.json will be used for rendering client side components.

In this only the necessary translations will be loaded on the client side.

![Messages files](@assets/images/manage-trades-series-3/messages-files-structure.png)

To support this change, we need to change the way we load the translations in the ~/src/app/[locale]/layout.tsx file to only load client side translations when the page is rendered on the client side.

```tsx
...
import { notFound } from 'next/navigation';
...
let messages;
try {
messages = (await import(`@/messages/${locale}-client.json`)).default;
} catch (error) {
notFound();
}
...
```

![Messages files](@assets/images/manage-trades-series-3/layout-messages-change.png)

## Result

At the end you should have something like this:

![Final Result](@assets/images/manage-trades-series-3/manage-trades-series-3-landing-page.gif)

## Source Code Available

[3-landing-page branch](https://github.com/allanweber/trading-journal-nextjs/tree/3-landing-page)
