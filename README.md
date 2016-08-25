# A Modular Page Builder for Vue.js

## Install

Via NPM

``` bash
$ npm install vue-page-builder --save
```

## Usage

``` js
import PageBuilder from 'vue-page-builder'
```

## Components

- Section
- Row
- Column
- Text
- Image
- Video
- Quote
- Carousel

## Custom Components

## Example

``` json
{
  content: [
    {
      section : [
        {
          row: [
            {
              component: "text",
              column_size: 6,
              column_offset: 0,
              content: "Hello"
            },
            {
              component: "text",
              column_size: 6,
              column_offset: 0,
              content: "World"
            }
          ]
        },
        {
          row: [
            {
              component: "img",
              column_size: 12,
              column_offset: 0,
              content: "test.jpg"
            }
          ]
        }
      ]
    }
  ]
}
```