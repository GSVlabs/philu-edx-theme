[Fix] - 2022-09-23
~~~~~~~~~~~~~~~~~~
* fixed discussion-alert when it's appear in mfe when forum is stopped (RGOeX-1845)
  - This commit should be skipped when we start the sync process with the olive branch if the `master PR <https://github.com/openedx/edx-platform/pull/31034>`_ will be merged by then

[Fix] - 2022-09-16
~~~~~~~~~~~~~~~~~~
* Decreased gaps between records of Task Status table (RGOeX-1834)

[Fix] - 2022-09-15
~~~~~~~~~~~~~~~~~~
* fixed Program Dashboard Basic Theme due to upstream changes

[Fix] - 2022-09-13
~~~~~~~~~~~~~~~~~~
* Username column modified to one row with max width, Type and Status columns - removed line break (RGOeX-1823)

[Fix] - 2022-09-13
~~~~~~~~~~~~~~~~~~
* fixed problem with "View SCORM reports" in MFE and Legacy interfaces (RGOeX-900)
* fixed markup error for "View Scorm Reports" (RGOeX-932)

[Feature] - 2022-09-12
~~~~~~~~~~~~~~~~~~~~~~
* Changes for mobile legacy header dropdown to comparing with mobile MFE header dropdown (RGOeX-1745)

[Fix] - 2022-09-12
~~~~~~~~~~~~~~~~~~
* fixed the default "Start" button for ".mp4" type link of the video in the default Video X-Block (RGOeX-1854)

[Fix] - 2022-09-05
~~~~~~~~~~~~~~~~~~
* removed unexpected element after clicking on Social Media Icon in the profile legacy (RGOeX-1718)

[Fix] - 2022-08-30
~~~~~~~~~~~~~~~~~~
* fixed responsive for Course Certificate Error for 767-476 Height Breakpoint (RGOeX-1717)

[Enhancement] - 2022-08-30
~~~~~~~~~~~~~~~~~~~~~~~~~~
* Based color was changed in the email templates, extra background was removed (RGOeX-1712)

[Fix] - 2022-08-30
~~~~~~~~~~~~~~~~~~
* Added base color for focused and active states on buttons inside tinymce modals (RGOeX-1734)
* Remove text shadow from discussion buttons on hover inside course (RGOeX-1767)

[Fix] - 2022-08-25
~~~~~~~~~~~~~~~~~~
* backport "Sign-up" button url fix from edx-platform (RGOeX-1597)

[Feature] - 2022-08-23
~~~~~~~~~~~~~~~~~~~~~~
* Color for selected and active elements in default Video X-Block was changed to violet color, which was used in appsembler xblock video - LMS and CMS (RGOeX-1395)
* Width of Speed dropdown was matched to Speed icon (RGOeX-1402)

[Fix] - 2022-08-17
~~~~~~~~~~~~~~~~~~
* Vertical alignment for hamburger menu button (RGOeX-1732)
* Add variables to change color for header's buttons - login and register (RGOeX-1732)
* Horizontal alignment languages select (RGOeX-1732)
* Language select hover color is related to buttons color (RGOeX-1732)
* Variable to change color for hamburger menu button (RGOeX-1732)
* Update rules for commitlint config from openedx config

[Fix] - 2022-08-15
~~~~~~~~~~~~~~~~~~
* Add open graph image for social sharing (RGOeX-1233)

[Fix] - 2022-08-11
~~~~~~~~~~~~~~~~~~
* Fix search button outline on focus (RGOeX-1425)

[Enhancement] - 2022-08-11
~~~~~~~~~~~~~~~~~~~~~~~~~~
* Add responsive for the certificate (RGOeX-1566)

[Enhancement] - 2022-08-10
~~~~~~~~~~~~~~~~~~~~~~~~~~
* add ability to hide the "powered and created by" section by flag (RGOeX-1668)
* update set of social links (RGOeX-1668)
* update styles for simple base branding (RGOeX-1668)

[Fix] - 2022-08-08
~~~~~~~~~~~~~~~~~~
* ORA popup buttons color fix (RGOeX-1383)

[Fix] - 2022-08-04
~~~~~~~~~~~~~~~~~~
* Fix image proportions in the HTML xBlock (RGOeX-1660)

[Enhancement] - 2022-08-01
~~~~~~~~~~~~~~~~~~~~~~~~~~
* Add CI checkers (conventions commits and eslint) (RGOeX-1661)

  * Fix lint errors

[Refactor] - 2022-07-01
~~~~~~~~~~~~~~~~~~
* Remove redundant code for course sharing through FB (RGOeX-1233)

  * FB doesn't support the `quote` parameter for the sharing anymore

[Feat] - 2022-06-30
~~~~~~~~~~~~~~~~~~~
* Update theme for nutmeg (RGOeX-1267)

[Fix] - 2022-06-24
~~~~~~~~~~~~~~~~~~
* Discover new page - fix active state for search submit button (RGOeX-1441)
* Fix Cookie Policy Banner close button location on rtl (RGOeX-1442)

[Fix] - 2022-06-02
~~~~~~~~~~~~~~~~~~
* Fix course sharing text on course about page for FB and Tweeter (RGOeX-1233)

  * FB text is translatable now
  * Account variable in the text uses the platform_name if social media account was not set in the settings.

[Fix] - 2022-05-26
~~~~~~~~~~~~~~~~~~
* Fix popup window in ORA while user send the answer (RGOeX-1238)

[Fix] - 2022-05-17
~~~~~~~~~~~~~~~~~~
* Fixes for calculator in LMS legacy view - bug in lms footer (RGOeX-1241)
* Fixes for calculator in LMS legacy view - calculator help popup (RGOeX-1242)
* Fixes for calculator in LMS legacy view - calculator input outline (RGOeX-1243)

[Fix] - 2022-05-10
~~~~~~~~~~~~~~~~~~
* change link color in the course invitation email template (RGOeX-1164)

[Fix] - 2022-05-09
~~~~~~~~~~~~~~~~~~
* Fix translations for course sharing text (RGOeX-1162)

[Fix] - 2022-05-02
~~~~~~~~~~~~~~~~~~
* style links in emails (RGOeX-122)
* add brand color for video transcript links (RGOeX-1148)

[Maple RG Release] - 2022-04-22
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

[Fix] - 2022-02-23
~~~~~~~~~~~~~~~~~~
* fix color of the course org autocomplete list (RGOeX-910)

[Fix] - 2022-02-22
~~~~~~~~~~~~~~~~~~
* fix responsive for course buttons on the dashboard (RGOeX-996)

[Fix] - 2022-02-15
~~~~~~~~~~~~~~~~~~
* improve an accessibility for the cookie banner (RGOeX-858)

[Fix] - 2022-02-10
~~~~~~~~~~~~~~~~~~
* use default cookie popup instead of custom (RGOeX-391)

[Fix] - 2022-02-09
~~~~~~~~~~~~~~~~~~
* fix page scroll on analytics and other course tabs with long course navigation menu (RGA-236)
* Text Size for main text for All Problems on Safari (RGOeX-677)

[Feature] - 2022-02-07
~~~~~~~~~~~~~~~~~~~~~~
* cookie policy banner (RGOeX-391)

[Fix] - 2022-02-03
~~~~~~~~~~~~~~~~~~
* removed bg color from course updates iframe (RGOeX-772)
* container width on legacy gradebook page (RGOeX-783)

[Fix] - 2022-02-02
~~~~~~~~~~~~~~~~~~
* fix header height (RGOeX-651)

[Fix] - 2022-02-01
~~~~~~~~~~~~~~~~~~
* fix course sharing through email

[Fix] - 2022-01-31
~~~~~~~~~~~~~~~~~~
* fix buttons hover color in discussion editor (RGOeX-723)
* fix username hover color in discussion inside unit - fix after testing (RGOeX-722)

[Fix] - 2022-01-27
~~~~~~~~~~~~~~~~~~
* fix branding for mce editor (RGOeX-663)

[Fix] - 2022-01-26
~~~~~~~~~~~~~~~~~~
* fix programs - fix outline on focused buttons (RGOeX-686)

[Fix|Feature] - 2022-01-24
~~~~~~~~~~~~~~~~~~~~~~~~~~
* fix username hover color in discussion inside unit (RGOeX-722)
* add a favicon for MFEs and remove background for content through iframe (RGOeX-678)

[Fix] - 2022-01-21
~~~~~~~~~~~~~~~~~~
* fix branding for ccx coach tab (RGOeX-714)
* fix columns width for the ora tab (RGOeX-675)

[Fix] - 2022-01-20
~~~~~~~~~~~~~~~~~~
* remove duplicate prerequisites link on course about page (RGOeX-644)
* remove an arrow icon for multiple selects (RGOeX-673)
* fix font styles in course card on dashboard (RGOeX-676)
* fix background color only for mfe (RGOeX-711)

[Fix] - 2022-01-18
~~~~~~~~~~~~~~~~~~
* fix enrollment button on the course about page (RGOeX-631)
* fix background Learning MFE on Courseware(Course Unit) (RGOeX-645)
* remove courseware data attribute (RGOeX-632)

[Fix] - 2022-01-17
~~~~~~~~~~~~~~~~~~
* fix markup error for social icons on Dashboard Course Card (RGOeX-641)

[Fix] - 2021-12-23
~~~~~~~~~~~~~~~~~~
* fix program long title name (RGOeX-624)

[Fix] - 2021-12-22
~~~~~~~~~~~~~~~~~~
* fix programs title safari font (RGOeX-613)
* fix program progress orientation (RGOeX-614)

[Fix] - 2021-12-21
~~~~~~~~~~~~~~~~~~
* fix promo banner height (RGOeX-611)
* fix background color for program course card (RGOeX-612)

[Feature] - 2021-11-25
~~~~~~~~~~~~~~~~~~~~~~
* prepare basic theme for new release (RGOeX-503)

[Fix] - 2021-11-15
~~~~~~~~~~~~~~~~~~
* fix ORA response section (RGOeX-474, RGOeX-475)

[Fix] - 2021-11-12
~~~~~~~~~~~~~~~~~~
* Instructor tab - markup fixes (RGOeX-442)

[Lilac RG Release] - 2021-11-10
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

[Fix] - 2021-11-09
~~~~~~~~~~~~~~~~~~
* fix facebook and twitter share links on course about

[Documentation] - 2021-11-04
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* update checklist for basic theme

[Fix] - 2021-11-02
~~~~~~~~~~~~~~~~~~
* fix active inputs and selects on promblems xblock (RGOeX-452)
* fix button hover on Discussion inside course (RGOeX-447)
* add markup fixes on Instructor tab - Special Exams (RGOeX-443)
* All Topics - fix button width on discussion (RGOeX-453)

[Fix] - 2021-10-27
~~~~~~~~~~~~~~~~~~
* fix profile social links - fix hover state (RGOeX-441)

[Fix] - 2021-10-22
~~~~~~~~~~~~~~~~~~
* fix extra padding on Course About in Safari (RGOeX-437)

[Fix] - 2021-10-21
~~~~~~~~~~~~~~~~~~
* change position of view course button on dashboard and certificate button (RGOeX-412)
* add brand color for email templates (RGOeX-433)
* ORA xBlock branding (RGOeX-345)

[Fix] - 2021-10-19
~~~~~~~~~~~~~~~~~~
* add ability to order static pages nav in the footer (RGOeX-390)
* add nofollow attr for RG links in the footer (RGOeX-364)
* add favicon to the LMS and the CMS pages (RGOeX-421)

[Fix] - 2021-09-28
~~~~~~~~~~~~~~~~~~
* fix 500 error on the dashboard when course has 2 course modes (RGOeX-425)

[Fix] - 2021-08-26
~~~~~~~~~~~~~~~~~~
* remove sysadmin functionality (RGOeX-408)

[Fix] - 2021-08-17
~~~~~~~~~~~~~~~~~~
* fix styles for nav next/prev button in the course unit (RGOeX-370)

[Feature] - 2021-08-12
~~~~~~~~~~~~~~~~~~~~~~
* prepare basic theme for new release (RGOeX-370)

[Koa RG Release] - 2021-02-24
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* For the upcoming logs please use the following tags:
   * Feature
   * Enhancement
   * Fix
   * Documentation
