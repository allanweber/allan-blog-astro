---
title: Setup a favorable client side translations with NextJs and Next-Intl
author: Allan Weber
pubDatetime: 2024-06-15T13:40:24.000+02:00
slug: setup-a-favorable-client-side-translations-with-nextjs
featured: true
draft: false
tags:
    - Javascript
    - react
    - Typescript
    - NextJs
    - Next-Intl
    - Multilanguage
    - micro-saas
    - real-software
    - SSR
    - Server Side Rendering
    - CSR
    - Client Side Rendering
description: How to setup a favorable client side translations with NextJs and Next-Intl to improve the performance of your application.
---

> Next-Intl is a library that provides a way to manage translations in a NextJs application. It is a simple and easy to use library that allows you to manage translations in a NextJs application. However, it is not optimized for client side rendering, as it loads all translations on the client side. This can be a problem if you have a lot of translations, as it can slow down the application. In this article, we will show you how to setup a favorable client side translations with NextJs and Next-Intl to improve the performance of your application.

## Table of contents

## The problem

The problem with Next-Intl is that it loads all translations on the client side, at least on the away their main documentation shows.

Can be a problem if you have a lot of translations, as it can slow down the application.

```typescript
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

This is not really optimized for client side rendering.

## The solution

Let's start the solution by trying to make all the translations to be loaded only on the server side. Which is the best way to do it.

It is simple done by using the default **```const t = useTranslations('...');```** but we will avoid calling it in cliente components decorated with **```'use client'```** directive

Take for example a Navbar components using NavigationMenu from Shadcn:

```typescript
'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
...

export interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [...];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const t = useTranslations('site');

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <Icons.Logo />
              Trading Journal
            </Link>
          </NavigationMenuItem>

          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <Link
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: 'ghost',
                })}`}
              >
                {t(route.label)}
              </Link>
            ))}
          </nav>
  ...
  );
}
```

This component will not be rendered on the client side, so the translations will not be loaded on the client side.

Instead, what we could do is load the translations on the server side and pass them to the client side Navbar component as props.

```typescript
'use client';

export type NavbarProps = {
  routeList: RouteProps[];
  signInLabel: string;
  signUpLabel: string;
};

export default function Navbar({
  routeList,
  signInLabel,
  signUpLabel,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <Icons.Logo />
              Trading Journal
            </Link>
          </NavigationMenuItem>

          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <Link
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: 'ghost',
                })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
....
  );
}
```

On the server side, we can load the translations and pass them to the Navbar component as props.

```typescript
const routeList: RouteProps[] = [
  {
    href: '#features',
    label: 'features',
  },
  {
    href: '#pricing',
    label: 'pricing',
  },
];

export default function Page() {
  const t = useTranslations('site');

  const navbarProps: NavbarProps = {
    routeList: routeList.map(({ label, href }) => ({
      label: t(label),
      href,
    })),
    signInLabel: t('sign-in'),
    signUpLabel: t('sign-up'),
  };

  return (
    <>
      <Navbar {...navbarProps} />
      <Hero />
      <Features />
      <Pricing />
      <Newsletter />
      <ScrollToTop />
    </>
  );
}
```

## The case of Translations rendered on the client side

Some times is necessary to render translations on the client side, either because the translations are dynamic or because to pass the translations as props would be too complex.

For example a Light/Dark mode switcher:

```typescript
'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslations } from 'next-intl';

export default function ModeToggle() {
  const { setTheme } = useTheme();
  const t = useTranslations('theme');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t('toggle-theme')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          {t('light')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          {t('dark')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          {t('system')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

In this case makes sense to render the translations on the client side, as the translations are dynamic and it would be too complex to pass them as props, also it is a small component and just convenient to do it this way.

To make sure Next-Intl does not load all the translations to the client side we can split the translations in two files, one for the server side and one for the client side.

![Messages files](@assets/images/setup-a-favorable-client-side-translations-with-nextjs/messages-files-structure.png)

To support this change, we need to change the way we load the translations in the ~/src/app/[locale]/layout.tsx file to only load client side translations when the page is rendered on the client side.

```typescript
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/theme';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import '../globals.css';

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}-client.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## Conclusion

If you look the Element tab in the browser you will see that the translations loaded on the client side are much smaller now since we are only loading the necessary translations on the client side.

## Source Code Available

Check the source code on the branch named 3-landing-page in the project below:

[3-landing-page branch](https://github.com/allanweber/trading-journal-nextjs/tree/3-landing-page)
