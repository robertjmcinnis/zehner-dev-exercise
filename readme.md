# Zehner Dev Exercise

Rob McInnis


### Live Demo

[http://robertjmcinnis.com/zehner/](http://robertjmcinnis.com/zehner/)


### Mockup:

[https://www.figma.com/file/cVzImwKchhNv8cXmY7teFa/Dev-Test?node-id=1%3A17](https://www.figma.com/file/cVzImwKchhNv8cXmY7teFa/Dev-Test?node-id=1%3A17)


### To Install



1. Download FIles
2. run ‘npm install’
3. Run ‘gulp run watch’


### Summary

Wow, 3-4 hours max.  I went over!  Was this an honesty test?  Because, i tip my cap to anyone completing this entire exercise in 3 hours,l polisheded and production ready.  

Initially, my approach was to build out a totally complete/polished header, footer, and hero area.  After a couple hours I got super nervous because there was an entire page of components that I haven’t even started on.  I then transitioned into creating all the components, but didn’t have time to style them for mobile.  

Other big pieces that are missing, global search bar, location dropdown, general tightening up of all the elements really. In all honesty,  I think the Instagram section, 4moms section, any mobile men stuff, and logo carousel were made after the 4 hour mark.  


### Approach



1. Aim to provide deliverable for modern webkit browsers (not really worrying about IE).  
2. Using flexbox should help with partial support
3. Aim to showcase the variety of skills required to complete the exercise
    *   Use atomic design/BEM organization
    *   Try to keep components as reusable as possible.
    *   Provide documentation
    4. Add a level of polish - probably the footer section?
4. Commenting and documentation
    *   Identify what pieces would be componentized (COMPONENT)
    *   Identify clean sections (eg/ SECTION)
    *   Identify where data would ideally come from a CMS
    *   Describe rationale for using 3rd party libraries
5. Build Tools
    *   I saw gulp listed in the job description, so I used that to compile css, and js.
    *   I’m not super advanced with Gulp, so there are some things I would have like to setup:
        *       Minifyer for CSS, JS
        *       Image resizer
        *       More graceful way incorporate dependencies
    *   Used Node to bring in some packages
    *   Package.json and gulpfile.js are in the repository
6. Assets
    *   I started screen capturing and photoshopping the Figma mockup to use real looking assets.  I got annoyed by doing that after a while and realized that [https://www.4moms.com/](https://www.4moms.com/) actually has lots of the images, and copy.  So I took those.  
7. Libraries Packages and Dependencies
    *   Taking into the time limit, I chose to leverage some third party libraries to help cut down time.  If there’s extra time at the end, I could potentially re-code from scratch if I wanted to show off. That didn’t happen.
    *   Libraries I chose to leverage:
        *       Slick Slider (carousels)
        *       jQuery - I’m more comfortable with jQuery than vanilla.  I’ll aim t
        *       Bootstrap.  I tried to use it, but found myself so rusty, I abandoned the idea. 
        *       Instagram script - I found a quick script that fetched actual instagram posts.  Ideally, I would have plugged into the API to bring posts in.
8. Known Errors
    *   There’s a nice little cross-origin error (it’s the Instagram section).  It doesn’t affect any functionality that I see on Chrome (won’t appear on Safari)
    *   Fair bit of jank, especially, mobile.


### If there was more time I would



*   Style mobile more (yikes!)
*   Including SVG’s in a more graceful way(either through Bootstrap, or including them as snippet etc… They look messy.
*   Avoid having one long HTML file.  Usually, I would be inside a framework that allows including HTML sections like in a PHP or Liquid environment.  Yes, It felt super dirty to have one huge HTML file.  I might have tried
    *   Use gulp-include package
    *   Handlebars
    *   React
    *   My own stripped down JS include sections
*   Animations.  FOr UI elements like button, maybe a fade-in on screen effect.
*   Improve gulp tasks - Minify, image sizes, includeJS dependencies 
*   Use Bootstrap
*   Build out a more robust CSS grid system, if not leveraging Bootstrap
*   Hook up the data would be provided by a CMS
*   Support non-modern browsers
*   Do performance tests 
*   Support the page with accessibility standards
*   Make more SEO - tracking scripts, cleaning up meta content
*   Test a lot more!