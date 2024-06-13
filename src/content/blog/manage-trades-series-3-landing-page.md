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

## Files and Folders changes

This is the list of files and folders that we will create or modify in this article, main attention to the `pages/index.tsx` file.

![Files and Folder Changes](@assets/images/manage-trades-series-3/manage-trades-series-3-landing-page-changes.png)

## Result

As the landing page creation process is quite simple but requires a lot of code, I will not show the code here. You can check the code on the [3-landing-page branch](https://github.com/allanweber/trading-journal-nextjs/tree/3-landing-page)

At the end you should have something like this:

![Final Result](@assets/images/manage-trades-series-3/manage-trades-series-3-landing-page.gif)

## Source Code Available

[3-landing-page branch](https://github.com/allanweber/trading-journal-nextjs/tree/3-landing-page)
