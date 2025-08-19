# https://youtrack.jetbrains.com/issue/WEB-74161

After installing the dependencies, go to [index page](app/pages/index.vue) and check the image attributes in the `<PwaXXXX>` components:
- works when there are mora than 2 images in the pwa icon types
- check `PwaMaskableImage` and `PwaAppleImage` there is only 1 pwa icon available:
   - mouse over displays the image
   - crtl + space doesn't display the image
   - if uou use `:image="'` suggestion will be there
- composables seems to be fine
- `$pwaIcons?.<type>['<image>']` seems to be also fine
