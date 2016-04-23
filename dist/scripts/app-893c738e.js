/**
 * @ngdoc overview
 * @name website
 *
 * @description
 * Generated by Yo men
 *
 * **Note:** Describe what this module does
 *
 * @example
  http://localhost:8000
 */
angular.module("website",["ngMaterial","ngRoute"]).config(["$routeProvider","$locationProvider",function(e,s){e.when("/",{templateUrl:"routes/main/main.html",controller:"main"}).otherwise({redirectTo:"/"}),s.html5Mode(!1)}]).run(["$rootScope","$location",function(e,s){e.isActive=function(e){return e===s.path()}}]),angular.module("website").controller("tiff-schedule",[function(){console.log("Started controller tiff-schedule")}]),angular.module("website").config(["$routeProvider",function(e){e.when("/tiff-schedule",{templateUrl:"routes/tiff-schedule/tiff-schedule.html",controller:"tiff-schedule",controllerAs:"vm"})}]),angular.module("website").controller("tiff",[function(){console.log("Started controller tiff")}]),angular.module("website").config(["$routeProvider",function(e){e.when("/tiff",{templateUrl:"routes/tiff/tiff.html",controller:"tiff",controllerAs:"vm"})}]),angular.module("website").controller("simple-therapy",[function(){console.log("Started controller simple-therapy")}]),angular.module("website").config(["$routeProvider",function(e){e.when("/simple-therapy",{templateUrl:"routes/simple-therapy/simple-therapy.html",controller:"simple-therapy",controllerAs:"vm"})}]),angular.module("website").controller("realsocial",[function(){console.log("Started controller realsocial")}]),angular.module("website").config(["$routeProvider",function(e){e.when("/realsocial",{templateUrl:"routes/realsocial/realsocial.html",controller:"realsocial",controllerAs:"vm"})}]),angular.module("website").controller("panasonic",[function(){console.log("Started controller panasonic")}]),angular.module("website").config(["$routeProvider",function(e){e.when("/panasonic",{templateUrl:"routes/panasonic/panasonic.html",controller:"panasonic",controllerAs:"vm"})}]),angular.module("website").controller("main",[function(){console.log("Started controller main")}]),angular.module("website").config(["$routeProvider",function(e){e.when("/freshbooks",{templateUrl:"routes/freshbooks/freshbooks.html",controller:"freshbooks",controllerAs:"vm"})}]),angular.module("website").controller("freshbooks",[function(){console.log("Started controller freshbooks")}]),angular.module("website").config(["$routeProvider",function(e){e.when("/colin-smith",{templateUrl:"routes/colin-smith/colin-smith.html",controller:"colin-smith",controllerAs:"vm"})}]),angular.module("website").controller("colin-smith",[function(){console.log("Started controller colin-smith")}]),angular.module("website").config(["$routeProvider",function(e){e.when("/cv",{templateUrl:"routes/cv/cv.html",controller:"cv",controllerAs:"vm"})}]),angular.module("website").controller("cv",[function(){console.log("Started controller cv")}]),angular.module("website").run(["$templateCache",function(e){e.put("routes/cv/cv.html",'<div layout="row" layout-sm="column" class="modular_content"><p>Automatically Generated for: cv-route.</p></div>'),e.put("routes/main/footer.html",""),e.put("routes/main/header.html",'<div class="logo"><a ng-class="{ \'md-primary\': !isActive(\'/#/\') }" href="/#/" class=""><img src="/assets/images/logo_placeholder.png" width="120" height="120"></a></div>'),e.put("routes/main/main.html",'<div class="home"><h1>Hello &ndash;</h1><p>You\'ve stumbled upon my portfolio. While I\'m currently busy working at a wee startup, I\'m sometimes available for freelance work and am open to trades/barters for my services. Feel free to <a href="mailto:caroline.shaw@gmail.com">get in touch</a>.</p><h2>Work</h2></div>'),e.put("routes/main/work.html",'<h3 class="heading-small" ng-class="{ \'hide\': isActive(\'/\') }">Other Projects</h3><hr ng-class="{ \'hide\': isActive(\'/\') }" class="hr-short"><div class="work"><a ng-class="{ \'hide\': isActive(\'/colin-smith\') }" href="/#/colin-smith" class="">Colin Smith Woodworking</a> <a ng-class="{ \'hide\': isActive(\'/freshbooks\') }" href="/#/freshbooks" class="">FreshBooks</a><a ng-class="{ \'hide\': isActive(\'/tiff\') }" href="/#/tiff" class="">TIFF.net</a> <a ng-class="{ \'hide\': isActive(\'/tiff-schedule\') }" href="/#/tiff-schedule" class="">TIFF Official Film Schedule</a> <a ng-class="{ \'hide\': isActive(\'/simple-therapy\') }" href="/#/simple-therapy" class="">SimpleTherapy</a> <a ng-class="{ \'hide\': isActive(\'/realsocial\') }" href="/#/realsocial" class="">Realsocial</a></div>'),e.put("routes/colin-smith/colin-smith.html",'<div class="project"><h2>Colin Smith Woodworking</h2><p class="project-intro">I built a WordPress theme for Colin\'s <a href="http://colinsmithwoodworking.com/">new website</a> to help him promote his freelance carpentry business in Toronto.</p><p>With SEO recommendations in hand, a <a href="http://www.laurashaw.ca/">UX designer</a> and I collaborated on the overall architecture for Colin\'s new wesite. Using <a href="https://www.roots.io">Roots.io</a> as a base theme for WordPress, custom post types were leveraged with the Advanced Custom Fields plugin to create an extensible CMS for his products.</p><div class="work-imgs clearfix"><img class="desktop" src="assets/images/colin-home.jpg"> <img class="mobile" src="assets/images/colin-mobile-home.jpg"></div><p>Careful attention was paid to photograph size &amp; image optimization, as performance is always of concern when showcasing a portfolio with large, crisp photographs in web and mobile environments.</p><div class="work-imgs clearfix"><img class="one-half" src="assets/images/colin-menu-highlight.gif"> <img class="one-half" src="assets/images/colin-form-elements.jpg"> <img class="one-half" src="assets/images/colin-photo.jpg"> <img class="one-half" src="assets/images/colin-menu-mobile.gif"></div></div>'),e.put("routes/freshbooks/freshbooks.html",'<div class="project"><h2>FreshBooks</h2><p class="project-intro">As <a target="_blank" href="http://freshbooks.com/">FreshBooks</a>\' first front-end developer, I developed &amp; maintained the brochure website as well as the web application.</p><p>As a member within an agile scrum team, I produced user experience A/B tests, developed a styleguide, and worked on a variety of marketing initiatives while mentoring juinor developers. A lot of time and consideration was spent modernizing the website codebase, and componentizing modules to promote rapid development.</p><div class="work-imgs clearfix"><img class="desktop" src="assets/images/freshbooks-home.jpg"> <img class="mobile" src="assets/images/freshbooks-mobile.jpg"></div></div>'),e.put("routes/simple-therapy/simple-therapy.html",'<div class="project"><h2>SimpleTherapy</h2><p class="project-intro"><a target="_blank" href="http://simpletherapy.com/">SimpleTherapy</a> offers video-based, head-to-toe exercise therapy programs that target joints, muscles, tendons and ligaments.</p><p>My challenge as both the UX designer and developer was to create an easy-to-use, simple interface to be used across multiple devices. From designing registration workflows to the account settings pages, I produced a series of wireframes to set up the main architecture for both myself and the back-end developer.</p><div class="work-imgs clearfix"><img class="one-third" src="assets/images/st-wireframe-1.png"> <img class="one-third" src="assets/images/st-wireframe-2.png"> <img class="one-third" src="assets/images/st-wireframe-3.png"></div><p>As a team of two, we used the Laravel PHP framework, coupled with Bootstrap and the HTML video API to produce the webapp.</p><div class="work-imgs clearfix"><img class="desktop" src="assets/images/simpletherapy-dashboard.jpg"></div><div class="work-imgs clearfix"><img class="desktop" src="assets/images/simpletherapy-video.jpg"></div><p>The experience can be tailored by choosing the instructor, as well as setting personal goals to work towards. There were elements of gamification for tracking progress, such as gaining badges and points for completing exercise programs. The <a href="https://www.highcarts.com">Highcharts</a> library was used to create a variety of data visualizations.</p><div class="work-imgs clearfix"><img class="desktop" src="assets/images/simpletherapy-graphs.jpg"></div></div>'),e.put("routes/panasonic/panasonic.html",'<div class="project"><h2>Panasonic Right at Home</h2><p class="project-intro">I leveraged the HTML5 Video API to create a custom experience for Panasonic\'s home phone product.</p><p>As the sole developer on this project, I explored the HTML5 video API in order to create a cohesive UI for a series of videos. Video Compression and performance were particularly important for this project to succeed. A lightweight alternative mobile responsive version of the website was created as well.</p><p>URL: rightathome.com ?</p></div>'),e.put("routes/tiff-schedule/tiff-schedule.html",'<div class="project"><h2>TIFF Official Film Schedule</h2><p class="project-intro">The <a target="_blank" href="http://www.tiff.net">Toronto International Film Festival</a> hosts a variety of films and events for the public and private members every September.</p><p>My task as both the User Experience Designer and Web Developer was to create a responsive schedule to hold all of the festival schedule data from TIFF.</p><div class="work-imgs clearfix"><img class="one-third" src="assets/images/ofs-wireframe-1.jpg"> <img class="one-third" src="assets/images/ofs-wireframe-2.jpg"> <img class="one-third" src="assets/images/ofs-wireframe-3.jpg"></div><p>Working closely with a designer on our team, we spec\'d out the behaviours of the schedule and after approval from TIFF, I built it using jQuery. A JSON endpoint feeds data into the schedule based on selected filters chosen by the user.</p><div class="work-imgs clearfix"><img class="desktop" src="assets/images/ofs-large.jpg"> <img class="mobile" src="assets/images/ofs-mobile.jpg"></div><p>The schedule had a few key features: a list view and a grid view, with the ability to find out more details about the film or event via a modal. A lot of care was taken to ensure that this experience was both user-friendly and WCAG compliant.</p><div class="work-imgs clearfix"><img class="one-half" src="assets/images/ofs-programmes.jpg"> <img class="one-half" src="assets/images/ofs-listview.jpg"> <img class="one-half" src="assets/images/ofs-gridview.jpg"> <img class="one-half" src="assets/images/ofs-modal.jpg"></div></div>'),e.put("routes/realsocial/realsocial.html",'<div class="project"><h2>RealSocial</h2><p class="project-intro">I <a href="http://www.renvrant.com/">pair programmed</a> the brochure website for Art &amp; Science\'s product <a target="_blank" href="http://realsocial.tv/">RealSocial™</a>.</p><p><a href="http://snapsvg.io/">SnapSVG</a> was leveraged for a bouncy logo animation, while the demo page uses the Instagram API and CSS3 3D transforms to demonstrate how the product looks in situ. We introduced <a href="http://gulpjs.com/">Gulp</a> as our taskrunner in order to experiment with a new workflow tool.</p><div class="work-imgs clearfix"><img class="desktop" src="assets/images/realsocial-background.jpg"> <img class="mobile" src="assets/images/realsocial-mobile.jpg"></div><div class="work-imgs clearfix"><img class="one-half" src="assets/images/realsocial-logo.gif"> <img class="one-half" src="assets/images/realsocial-screen-closeup.jpg"> <img class="one-half" src="assets/images/realsocial-megaphone.jpg"> <img class="one-half" src="assets/images/realsocial-screen.gif"></div></div>'),e.put("routes/tiff/tiff.html",'<div class="project"><h2>TIFF.net</h2><p class="project-intro">The <a target="_blank" href="http://www.tiff.net">Toronto International Film Festival</a> sought a responsive and accessible website to support their year-round programming, festivals and initiatives.</p><p>RequireJS was used to handle JavaScript dependencies, while Bootstrap was used to provide a base for a clean front-end CSS &amp; JavaScript framework. Many of the pages were created as multi-purpose templates that could be refactored to include various types of widgets and content. The custom CMS required styling and UX considerations for ease of use.</p><p>Accessibility documents, namely WCAG and ARIA guidelines were extensively researched in order to maintain a standard of accessibility across the website.</p><div class="work-imgs clearfix"><img class="desktop" src="assets/images/tiff-large.jpg"> <img class="mobile" src="assets/images/tiff-mobile.jpg"></div></div>')}]),angular.module("website").run(["$templateCache",function(e){e.put("routes/cv/cv.html",'<div layout="row" layout-sm="column" class="modular_content"><p>Automatically Generated for: cv-route.</p></div>'),e.put("routes/main/footer.html",""),e.put("routes/main/header.html",'<div class="logo"><a ng-class="{ \'md-primary\': !isActive(\'/#/\') }" href="/#/" class=""><img src="/assets/images/logo_placeholder.png" width="120" height="120"></a></div>'),e.put("routes/main/main.html",'<div class="home"><h1>Hello &ndash;</h1><p>You\'ve stumbled upon my portfolio. While I\'m currently busy working at a wee startup, I\'m sometimes available for freelance work and am open to trades/barters for my services. Feel free to <a href="mailto:caroline.shaw@gmail.com">get in touch</a>.</p><h2>Work</h2></div>'),e.put("routes/main/work.html",'<h3 class="heading-small" ng-class="{ \'hide\': isActive(\'/\') }">Other Projects</h3><hr ng-class="{ \'hide\': isActive(\'/\') }" class="hr-short"><div class="work"><a ng-class="{ \'hide\': isActive(\'/colin-smith\') }" href="/#/colin-smith" class="">Colin Smith Woodworking</a> <a ng-class="{ \'hide\': isActive(\'/freshbooks\') }" href="/#/freshbooks" class="">FreshBooks</a><a ng-class="{ \'hide\': isActive(\'/tiff\') }" href="/#/tiff" class="">TIFF.net</a> <a ng-class="{ \'hide\': isActive(\'/tiff-schedule\') }" href="/#/tiff-schedule" class="">TIFF Official Film Schedule</a> <a ng-class="{ \'hide\': isActive(\'/simple-therapy\') }" href="/#/simple-therapy" class="">SimpleTherapy</a> <a ng-class="{ \'hide\': isActive(\'/realsocial\') }" href="/#/realsocial" class="">Realsocial</a></div>'),e.put("routes/colin-smith/colin-smith.html",'<div class="project"><h2>Colin Smith Woodworking</h2><p class="project-intro">I built a WordPress theme for Colin\'s <a href="http://colinsmithwoodworking.com/">new website</a> to help him promote his freelance carpentry business in Toronto.</p><p>With SEO recommendations in hand, a <a href="http://www.laurashaw.ca/">UX designer</a> and I collaborated on the overall architecture for Colin\'s new wesite. Using <a href="https://www.roots.io">Roots.io</a> as a base theme for WordPress, custom post types were leveraged with the Advanced Custom Fields plugin to create an extensible CMS for his products.</p><div class="work-imgs clearfix"><img class="desktop" src="assets/images/colin-home.jpg"> <img class="mobile" src="assets/images/colin-mobile-home.jpg"></div><p>Careful attention was paid to photograph size &amp; image optimization, as performance is always of concern when showcasing a portfolio with large, crisp photographs in web and mobile environments.</p><div class="work-imgs clearfix"><img class="one-half" src="assets/images/colin-menu-highlight.gif"> <img class="one-half" src="assets/images/colin-form-elements.jpg"> <img class="one-half" src="assets/images/colin-photo.jpg"> <img class="one-half" src="assets/images/colin-menu-mobile.gif"></div></div>'),e.put("routes/freshbooks/freshbooks.html",'<div class="project"><h2>FreshBooks</h2><p class="project-intro">As <a target="_blank" href="http://freshbooks.com/">FreshBooks</a>\' first front-end developer, I developed &amp; maintained the brochure website as well as the web application.</p><p>As a member within an agile scrum team, I produced user experience A/B tests, developed a styleguide, and worked on a variety of marketing initiatives while mentoring juinor developers. A lot of time and consideration was spent modernizing the website codebase, and componentizing modules to promote rapid development.</p><div class="work-imgs clearfix"><img class="desktop" src="assets/images/freshbooks-home.jpg"> <img class="mobile" src="assets/images/freshbooks-mobile.jpg"></div></div>'),e.put("routes/simple-therapy/simple-therapy.html",'<div class="project"><h2>SimpleTherapy</h2><p class="project-intro"><a target="_blank" href="http://simpletherapy.com/">SimpleTherapy</a> offers video-based, head-to-toe exercise therapy programs that target joints, muscles, tendons and ligaments.</p><p>My challenge as both the UX designer and developer was to create an easy-to-use, simple interface to be used across multiple devices. From designing registration workflows to the account settings pages, I produced a series of wireframes to set up the main architecture for both myself and the back-end developer.</p><div class="work-imgs clearfix"><img class="one-third" src="assets/images/st-wireframe-1.png"> <img class="one-third" src="assets/images/st-wireframe-2.png"> <img class="one-third" src="assets/images/st-wireframe-3.png"></div><p>As a team of two, we used the Laravel PHP framework, coupled with Bootstrap and the HTML video API to produce the webapp.</p><div class="work-imgs clearfix"><img class="desktop" src="assets/images/simpletherapy-dashboard.jpg"></div><div class="work-imgs clearfix"><img class="desktop" src="assets/images/simpletherapy-video.jpg"></div><p>The experience can be tailored by choosing the instructor, as well as setting personal goals to work towards. There were elements of gamification for tracking progress, such as gaining badges and points for completing exercise programs. The <a href="https://www.highcarts.com">Highcharts</a> library was used to create a variety of data visualizations.</p><div class="work-imgs clearfix"><img class="desktop" src="assets/images/simpletherapy-graphs.jpg"></div></div>'),e.put("routes/panasonic/panasonic.html",'<div class="project"><h2>Panasonic Right at Home</h2><p class="project-intro">I leveraged the HTML5 Video API to create a custom experience for Panasonic\'s home phone product.</p><p>As the sole developer on this project, I explored the HTML5 video API in order to create a cohesive UI for a series of videos. Video Compression and performance were particularly important for this project to succeed. A lightweight alternative mobile responsive version of the website was created as well.</p><p>URL: rightathome.com ?</p></div>'),e.put("routes/tiff-schedule/tiff-schedule.html",'<div class="project"><h2>TIFF Official Film Schedule</h2><p class="project-intro">The <a target="_blank" href="http://www.tiff.net">Toronto International Film Festival</a> hosts a variety of films and events for the public and private members every September.</p><p>My task as both the User Experience Designer and Web Developer was to create a responsive schedule to hold all of the festival schedule data from TIFF.</p><div class="work-imgs clearfix"><img class="one-third" src="assets/images/ofs-wireframe-1.jpg"> <img class="one-third" src="assets/images/ofs-wireframe-2.jpg"> <img class="one-third" src="assets/images/ofs-wireframe-3.jpg"></div><p>Working closely with a designer on our team, we spec\'d out the behaviours of the schedule and after approval from TIFF, I built it using jQuery. A JSON endpoint feeds data into the schedule based on selected filters chosen by the user.</p><div class="work-imgs clearfix"><img class="desktop" src="assets/images/ofs-large.jpg"> <img class="mobile" src="assets/images/ofs-mobile.jpg"></div><p>The schedule had a few key features: a list view and a grid view, with the ability to find out more details about the film or event via a modal. A lot of care was taken to ensure that this experience was both user-friendly and WCAG compliant.</p><div class="work-imgs clearfix"><img class="one-half" src="assets/images/ofs-programmes.jpg"> <img class="one-half" src="assets/images/ofs-listview.jpg"> <img class="one-half" src="assets/images/ofs-gridview.jpg"> <img class="one-half" src="assets/images/ofs-modal.jpg"></div></div>'),e.put("routes/realsocial/realsocial.html",'<div class="project"><h2>RealSocial</h2><p class="project-intro">I <a href="http://www.renvrant.com/">pair programmed</a> the brochure website for Art &amp; Science\'s product <a target="_blank" href="http://realsocial.tv/">RealSocial™</a>.</p><p><a href="http://snapsvg.io/">SnapSVG</a> was leveraged for a bouncy logo animation, while the demo page uses the Instagram API and CSS3 3D transforms to demonstrate how the product looks in situ. We introduced <a href="http://gulpjs.com/">Gulp</a> as our taskrunner in order to experiment with a new workflow tool.</p><div class="work-imgs clearfix"><img class="desktop" src="assets/images/realsocial-background.jpg"> <img class="mobile" src="assets/images/realsocial-mobile.jpg"></div><div class="work-imgs clearfix"><img class="one-half" src="assets/images/realsocial-logo.gif"> <img class="one-half" src="assets/images/realsocial-screen-closeup.jpg"> <img class="one-half" src="assets/images/realsocial-megaphone.jpg"> <img class="one-half" src="assets/images/realsocial-screen.gif"></div></div>'),e.put("routes/tiff/tiff.html",'<div class="project"><h2>TIFF.net</h2><p class="project-intro">The <a target="_blank" href="http://www.tiff.net">Toronto International Film Festival</a> sought a responsive and accessible website to support their year-round programming, festivals and initiatives.</p><p>RequireJS was used to handle JavaScript dependencies, while Bootstrap was used to provide a base for a clean front-end CSS &amp; JavaScript framework. Many of the pages were created as multi-purpose templates that could be refactored to include various types of widgets and content. The custom CMS required styling and UX considerations for ease of use.</p><p>Accessibility documents, namely WCAG and ARIA guidelines were extensively researched in order to maintain a standard of accessibility across the website.</p><div class="work-imgs clearfix"><img class="desktop" src="assets/images/tiff-large.jpg"> <img class="mobile" src="assets/images/tiff-mobile.jpg"></div></div>')}]);