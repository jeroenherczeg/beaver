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

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CONDUCT](CONDUCT.md) for details.

## Security

If you discover any security related issues, please email jeroen@herczeg.be instead of using the issue tracker.

## Credits

- [Jeroen Herczeg][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[link-author]: https://github.com/jeroenherczeg
[link-contributors]: ../../contributors