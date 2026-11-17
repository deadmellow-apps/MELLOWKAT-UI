> **MELLOWKAT-UI patch notes (Nov 2026)**: fork of KAT-UI v0.0.2, updated for the latest Steam client.
>
> **Fixes**
> - Notification bell: no more blank box; now uses Steam's native animated bell with theme colours.
> - Size on Disk plugin: shows a hard-drive icon instead of a clock.
> - Game page: Play Time and Size on Disk icons are vertically centred.
> - 100% achievements badge on library tiles updated for Steam's renamed class.
> - Account Menu: extra buttons load reliably; fixed Chinese and Danish translations; no duplicate buttons after a language change; Change Status submenu options show again (was empty apart from "Back").
> - Settings section headers no longer sometimes show raw "DRIVER = 1" text.
> - Avatar Decoration option no longer breaks other scripts in the main window.
> - Menu Style now applies to the store menu window; SVG fix patch now actually loads.
>
> **Changes**
> - Store / Community / Market pages now use Steam's default styling (theme styles kept in `Webkit/` for later).
> - Theme updates now come from this fork instead of upstream KAT-UI.
> - Top bar: with "Move Bottom Buttons to Top Bar" on, Downloads / Add Game / Friends now sit in the centre of the top bar instead of next to the notification bell.
>
> **Cleanup & privacy**
> - Removed debug/click-logging code and unused dev files.
> - No more requests to outside servers for fonts or images; icon fonts are bundled.
> - Removed broken or no-op options (Fonts, Refresh Settings) and empty scripts.
>
> **Credits for code touched in this update**
> - Base theme: [KAT-UI](https://github.com/Beto1807/KAT-UI) by Beto1807, based on [NEVKO-UI](https://github.com/dotFelixan/NEVKO-UI) by dotFelixan.
> - Top-bar Compact Buttons (CSS & JS): from "Simply Dark" / CompactHeader by [ShadowMonster99 (shdwmtr)](https://github.com/shdwmtr).
> - Account Menu extra buttons (JS): by [motionarium](https://github.com/motionarium).
> - Icons, including the new Size on Disk hard-drive icon: [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons) by Microsoft (MIT License, see `Icons/Fluent/_font/LICENSE-3rdParty.md`).
> - Full credits for the original theme are in the Credits section below.

<div align="center">

<img src="github\logo\newnevkologo.png?raw=true" alt="nevkouilogo" width="200">

# KAT-UI

## Theme made for Millennium for Steam

Based on dotFelixan's NEVKO-UI, meant to be a more deeply implemented theme, with more features, while still keeping the same *fresh* design as NEVKO-UI, now across the ~~whole store and~~ client interface.

[WebPage](https://t.me/dotSProjects) | [Discord](https://dsc.gg/dotProjects)

### Screenshots

![Refresh Design](https://github.com/dotFelixan/NEVKO-UI/blob/main/github/screenshots/stillaliveupdate.png?raw=true)

</div>

## Current Features

* Contributor Badges
* "Custom" Rounding Avatars
* Hide Avatar Decoration

* Alternative Online Indicator

* Refresh Header Design
* Refresh Library [WIP] Design

* Custom Accents
* Custom Background Color

* Main:
  * [Header] - Remove Window Buttons
  * [Library] - Hiding Library Items
  * [Library] - Library Side
  * [Library] - Gamepage Side
  * [Library] - Game Page Content Location
  * [Misc] - Style Menu

* Privacy:
  * [Account Menu] - Blur Account Name
  * [Account Menu] - Blur Balance
  * [Account Button] - Hide Balance

## TODO LIST

### Low Priority

Edit Later

## CREDITS

### Authors from Who I Borrowed the Code

* [ShadowMonster99](https://github.com/shdwmtr) - [JS & CSS] Code from CompactHeader

* [tkashkin](https://github.com/tkashkin) - [CSS] Fonts Code from Adwaita

* [kuska1](https://github.com/kuska1) - [CSS] Some code from Material Design

* [SpaceTheme](https://github.com/SpaceTheme) - [CSS] Code for Right Side GamePage from SpaceTheme

### People Who Helped Me With the Code

* [motionarium](https://github.com/motionarium) - Extra Buttons & Driver [JS]

### Inspiration and Where Did I Get the Ideas From

* [Juxtopposed](https://youtu.be/cDY2p1CTkPo) - Future Store Ideas & etc.

* [УЧ Дизайн](https://youtu.be/k0YCMI2ntjE) - Header Design & etc.
