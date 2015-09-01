$(function () {
    var $mybook = $('#mybook');
    var $bttn_next = $('#next_page_button');
    var $bttn_prev = $('#prev_page_button');
    var $loading = $('#loading');
    var $mybook_images = $mybook.find('img');
    var cnt_images = $mybook_images.length;
    var loaded = 0;

    $mybook_images.each(function () {
        var $img = $(this);
        var source = $img.attr('src');
        $('<img/>').load(function () {
            ++loaded;
            if (loaded == cnt_images) {
                $loading.hide();
                $bttn_next.show();
                $bttn_prev.show();
                $mybook.show().booklet({
                    // name of the booklet to display in the document title bar
                    name: null,
                    // container width
                    width: 800,
                    // container height
                    height: 500,
                    // speed of the transition between pages
                    speed: 600,
                    // direction of the overall content organization, default LTR, left to right, can be RTL for languages which read right to left
                    direction: 'LTR',
                    // index of the first page to be displayed
                    startingPage: 0,
                    // easing method for complete transition
                    easing: 'easeInOutQuad',
                    // easing method for first half of transition
                    easeIn: 'easeInQuad',
                    // easing method for second half of transition
                    easeOut: 'easeOutQuad',
                    // start with the book "closed", will add empty pages to beginning and end of book
                    closed: true,
                    // used with "closed", "menu" and "pageSelector", determines title of blank starting page
                    closedFrontTitle: null,
                    // used with "closed", "menu" and "chapterSelector", determines chapter name of blank starting page
                    closedFrontChapter: null,
                    // used with "closed", "menu" and "pageSelector", determines chapter name of blank ending page
                    closedBackTitle: null,
                    // used with "closed", "menu" and "chapterSelector", determines chapter name of blank ending page
                    closedBackChapter: null,
                    // used with  "closed", makes first and last pages into covers, without page numbers (if enabled)
                    covers: false,
                    // padding for each page wrapper
                    pagePadding: 10,
                    // display page numbers on each page
                    pageNumbers: true,
                    // enables preview pageturn hover animation, shows a small preview of previous or next page on hover
                    hovers: false,
                    // enables navigation using a page sized overlay, when enabled links inside the content will not be clickable
                    overlays: false,
                    // adds tabs along the top of the pages
                    tabs: false,
                    // set the width of the tabs
                    tabWidth: 60,
                    // set the height of the tabs
                    tabHeight: 20,
                    // adds arrows overlayed over the book edges
                    arrows: false,
                    // cursor css setting for side bar areas
                    cursor: 'pointer',
                    // enables navigation using a hash string, ex: #/page/1 for page 1, will affect all booklets with 'hash' enabled
                    hash: false,
                    // enables navigation with arrow keys (left: previous, right: next)
                    keyboard: true,
                    // selector for element to use as click trigger for next page
                    next: $bttn_next,
                    // selector for element to use as click trigger for previous page
                    prev: $bttn_prev,
                    // selector for element to use as the menu area, required for 'pageSelector'
                    pageSelector: false,
                    // enables navigation with a dropdown menu of pages, requires 'menu'
                    // enables navigation with a dropdown menu of chapters, determined by the "rel" attribute, requires 'menu'
                    chapterSelector: false,
                    
                    // display shadows on page animations
                    shadows: true,
                    
                    // shadow width for top forward anim
                    shadowTopFwdWidth: 166,
                    
                    // shadow width for top back anim
                    shadowTopBackWidth: 166,
                    
                    // shadow width for bottom shadow
                    shadowBtmWidth: 50,
                    

                    // callback invoked before each page turn animation
                    before: function () { },
                    // callback invoked after each page turn animation
                    after: function () { }
                });
            }
        }).attr('src', source);
    });

});