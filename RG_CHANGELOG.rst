RG Changelog
############

All notable changes to this project will be documented in this file.

The format is based on `Keep a Changelog <https://keepachangelog.com/en/1.0.0/>`_,
and this project adheres to customized Semantic Versioning e.g.: `olive-rg.1`

[Unreleased]
************

Added:
======
* Olive legacy theme (RGOeX-24496)
* Changed stylelint version to 14 (MC-31)
* Apply theme colors to RG Analytics (RGA-507)
* Charts styles corrections (RGA-583)
* Apply theme colors to the tinymce editor (RGOeX-25024)
* Remove unnecessary text-shadow on hover from tiny-mce button inside ORA (RGOeX-25111)

Fixes:
======
* Fix footer social icons size (RGOeX-24792)
* Apply theme color to the buttons on team pages (RGOeX-24791)
* Fix button icons in the scrom xblock (RGOeX-24872)


[nutmeg-rg.1] 2022-09-30 (Nutmeg RG release)
********************************************

Fixes:
======
* Fixed the markup issue for "Upload a CSV file" field (RGOeX-24683)
* Fixed color of the support link in the deletion email (RGOeX-24674)
* Fixed colors of the non-active tabs link on the Teams page (RGOeX-24673)
* Fixed styles for Submit Your Response button in ORA in CMS (RGOeX-1824)
* Re-fixed discussion-alert when it's appear in mfe when forum is stopped, for staff and regular user  (RGOeX-1845)

[nutmeg-rg.1] 2022-09-30 (Nutmeg RG release)
********************************************

Fixes:
======
* Fixed discussion-alert when it's appear in mfe when forum is stopped (RGOeX-1845)
* Decreased gaps between records of Task Status table (RGOeX-1834)
* Fixed Program Dashboard Basic Theme due to upstream changes
* Username column modified to one row with max width, Type and Status columns - removed line break (RGOeX-1823)
* Branded color for ORA in studio (RGOeX-1824)
* Fixed problem with "View SCORM reports" in MFE and Legacy interfaces (RGOeX-900)
* Fixed markup error for "View Scorm Reports" (RGOeX-932)
* Changes for mobile legacy header dropdown to comparing with mobile MFE header dropdown (RGOeX-1745)
* Fixed the default "Start" button for ".mp4" type link of the video in the default Video X-Block (RGOeX-1854)
* Removed unexpected element after clicking on Social Media Icon in the profile legacy (RGOeX-1718)
* Fixed responsive for Course Certificate Error for 767-476 Height Breakpoint (RGOeX-1717)
* Added base color for focused and active states on buttons inside tinymce modals (RGOeX-1734)
* Remove text shadow from discussion buttons on hover inside course (RGOeX-1767)
* Backport "Sign-up" button url fix from edx-platform (RGOeX-1597)
* Vertical alignment for hamburger menu button (RGOeX-1732)
* Add variables to change color for header's buttons - login and register (RGOeX-1732)
* Horizontal alignment languages select (RGOeX-1732)
* Language select hover color is related to buttons color (RGOeX-1732)
* Variable to change color for hamburger menu button (RGOeX-1732)
* Update rules for commitlint config from openedx config
* Add open graph image for social sharing (RGOeX-1233)
* Fix search button outline on focus (RGOeX-1425)
* ORA popup buttons color fix (RGOeX-1383)
* Fix image proportions in the HTML xBlock (RGOeX-1660)
* Discover new page - fix active state for search submit button (RGOeX-1441)
* Fix Cookie Policy Banner close button location on rtl (RGOeX-1442)
* Fix course sharing text on course about page for FB and Tweeter (RGOeX-1233)
    * FB text is translatable now
    * Account variable in the text uses the platform_name if social media account was not set in the settings.
* Fix popup window in ORA while user send the answer (RGOeX-1238)
* Fixes for calculator in LMS legacy view - bug in lms footer (RGOeX-1241)
* Fixes for calculator in LMS legacy view - calculator help popup (RGOeX-1242)
* Fixes for calculator in LMS legacy view - calculator input outline (RGOeX-1243)
* Change link color in the course invitation email template (RGOeX-1164)
* Fix translations for course sharing text (RGOeX-1162)
* Style links in emails (RGOeX-122)
* Add brand color for video transcript links (RGOeX-1148)

Added:
======
* Color for selected and active elements in default Video X-Block was changed to violet color, which was used in appsembler xblock video - LMS and CMS (RGOeX-1395)
* Width of Speed dropdown was matched to Speed icon (RGOeX-1402)
* Update theme for nutmeg (RGOeX-1267)

Changed:
========
* Based color was changed in the email templates, extra background was removed (RGOeX-1712)
* Add responsive for the certificate (RGOeX-1566)
* Add ability to hide the "powered and created by" section by flag (RGOeX-1668)
* Update set of social links (RGOeX-1668)
* Update styles for simple base branding (RGOeX-1668)
* Add CI checkers (conventions commits and eslint) (RGOeX-1661)
    * Fix lint errors
* Remove redundant code for course sharing through FB (RGOeX-1233)
    * FB doesn't support the `quote` parameter for the sharing anymore


[Maple RG Release] - 2022-04-22
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Fixes:
======
* Fix color of the course org autocomplete list (RGOeX-910)
* Fix responsive for course buttons on the dashboard (RGOeX-996)
* Improve an accessibility for the cookie banner (RGOeX-858)
* Use default cookie popup instead of custom (RGOeX-391)
* Fix page scroll on analytics and other course tabs with long course navigation menu (RGA-236)
* Text Size for main text for All Problems on Safari (RGOeX-677)
* Removed bg color from course updates iframe (RGOeX-772)
* Container width on legacy gradebook page (RGOeX-783)
* Fix header height (RGOeX-651)
* Fix course sharing through email
* Fix buttons hover color in discussion editor (RGOeX-723)
* Fix username hover color in discussion inside unit - fix after testing (RGOeX-722)
* Fix branding for mce editor (RGOeX-663)
* Fix programs - fix outline on focused buttons (RGOeX-686)
* Fix username hover color in discussion inside unit (RGOeX-722)
* Fix branding for ccx coach tab (RGOeX-714)
* Fix columns width for the ora tab (RGOeX-675)
* Remove duplicate prerequisites link on course about page (RGOeX-644)
* Remove an arrow icon for multiple selects (RGOeX-673)
* Fix font styles in course card on dashboard (RGOeX-676)
* Fix background color only for mfe (RGOeX-711)
* Fix enrollment button on the course about page (RGOeX-631)
* Fix background Learning MFE on Courseware(Course Unit) (RGOeX-645)
* Remove courseware data attribute (RGOeX-632)
* Fix markup error for social icons on Dashboard Course Card (RGOeX-641)
* Fix program long title name (RGOeX-624)
* Fix programs title safari font (RGOeX-613)
* Fix program progress orientation (RGOeX-614)
* Fix promo banner height (RGOeX-611)
* Fix background color for program course card (RGOeX-612)
* Fix ORA response section (RGOeX-474, RGOeX-475)
* Instructor tab - markup fixes (RGOeX-442)

Added:
======
* Cookie policy banner (RGOeX-391)
* Add a favicon for MFEs and remove background for content through iframe (RGOeX-678)
* Prepare basic theme for new release (RGOeX-503)


[Lilac RG Release] - 2021-11-10
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Fixes:
======
* Fix facebook and twitter share links on course about
* Fix active inputs and selects on promblems xblock (RGOeX-452)
* Fix button hover on Discussion inside course (RGOeX-447)
* Add markup fixes on Instructor tab - Special Exams (RGOeX-443)
* All Topics - fix button width on discussion (RGOeX-453)
* Fix profile social links - fix hover state (RGOeX-441)
* Fix extra padding on Course About in Safari (RGOeX-437)
* Change position of view course button on dashboard and certificate button (RGOeX-412)
* Add brand color for email templates (RGOeX-433)
* ORA xBlock branding (RGOeX-345)
* Add ability to order static pages nav in the footer (RGOeX-390)
* Add nofollow attr for RG links in the footer (RGOeX-364)
* Add favicon to the LMS and the CMS pages (RGOeX-421)
* Fix 500 error on the dashboard when course has 2 course modes (RGOeX-425)
* Remove sysadmin functionality (RGOeX-408)
* Fix styles for nav next/prev button in the course unit (RGOeX-370)

Added:
======
* Prepare basic theme for new release (RGOeX-370)

Changed:
========
* Update checklist for basic theme
