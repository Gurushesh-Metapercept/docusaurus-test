---
sidebar_position: 1
sidebar_label: Introduction
---

import {Highlight} from "@site/src/components/Highlight.js"

# Tutorial Intro

## Features

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Docusaurus provides the `<Tabs>` component that you can use in Markdown thanks to MDX:
<Tabs>
<TabItem value="apple" label="Apple" default>
This is an apple 🍎
</TabItem>
<TabItem value="orange" label="Orange">
This is an orange 🍊
</TabItem>
<TabItem value="banana" label="Banana">
This is a banana 🍌
</TabItem>
</Tabs>

## Exporting components

To define any custom component within an MDX file, you have to export it: only paragraphs that start with export will be parsed as components instead of prose.

```jsx title="/src/components/Highlight.js"
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!
```

Lorem ipsum **dolor** sit amet consectetur, adipisicing elit. Neque dolores
<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolores
qui hic praesentium quo natus fugit, delectus tenetur ex laboriosam
dolorum commodi quia. Fugit enim rerum quia reiciendis accusamus
molestiae?

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolores
qui hic praesentium quo natus fugit, delectus tenetur ex laboriosam
dolorum commodi quia. Fugit enim rerum quia reiciendis accusamus
molestiae?

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

## warning

:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

### danger

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolores
qui hic praesentium quo natus fugit, delectus tenetur ex laboriosam
dolorum commodi quia. Fugit enim rerum quia reiciendis accusamus
molestiae?
