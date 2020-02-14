
# Images Set To WebP Converter [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=See&url=https://github.com/BiosBoy/images-set-to-webp-converter&via=svyat770&hashtags=js,jsx,webp,checker,images-set-to-webp-converter,webp,html,css)


[![npm](https://badgen.net/npm/v/images-set-to-webp-converter)](https://www.npmjs.com/package/images-set-to-webp-converter)  [![Price](https://img.shields.io/badge/price-FREE-purple.svg)](https://github.com/BiosBoy/images-set-to-webp-converter/blob/master/LICENSE)  [![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://github.com/BiosBoy/images-set-to-webp-converter/blob/master/LICENSE)  [![GitHub package version](https://img.shields.io/badge/version-1.1.0-green.svg)](https://github.com/BiosBoy/images-set-to-webp-converter)  ![](https://img.badgesize.io/biosboy/images-set-to-webp-converter/master/lib/lib-min.js.svg)

  ![logo_image](https://raw.githubusercontent.com/BiosBoy/images-set-to-webp-converter/master/web-converter_logo.jpg)


### The easist way to convert a bunch of .jpg, .png, etc images to webp!
Builded on top of the well versed webp util https://www.npmjs.com/package/cwebp!


**Quick Start:**

 1. Install the plugin globally or inside your working dir by:
      `npm install images-set-to-webp-converter`
      or
      `yarn add images-set-to-webp-converter`
 2. Prepare some images set inside particular folder, generated previously by Abode Images Processor Pro plugin, like:

          Desktop --- |
                      |
                      | --- IMGSet --- |
                                       |
                                       | --- image@1x.png
                                       | --- image@2x.png
                                       | --- Touchscreen --- |
                                                             |
                                                             | --- img@4x.png
                                                             | --- img@2x.jpg `

3. Run `images-set-to-webp-converter` util in a way like:
     `node images-set-to-webp-converter /Desktop/IMGSet`

4. Grab your **.webp** right on here:

          Desktop --- |
                      |
                      | --- IMGSet --- |
                                       |
                                       | --- image@1x.png
                                       | --- image@2x.png
                                       | --- image@1x.webp <--
                                       | --- image@2x.webp <--
                                       | --- Touchscreen --- |
                                                             |
                                                             | --- img@4x.png
                                                             | --- img@2x.jpg `
                                                             | --- img@4x.webp <--
                                                             | --- img@2x.webp <--

**And that's all! See how it's easy? So we can convert various images produced by Adobe IPP in the .WEBP format without any tears or routine!**

# FAQ:

1. **How can I tune the quality/compression of produced image?**

-   Well, it's a bit easy. Just add a number value right after you add the path of the folder to proccess.
Example: `node images-set-to-webp-converter /Desktop/IMGSet 65`.
