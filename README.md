jquery-scrollToggleClass
========================

A very very small plugin for adding and removing classes to an element wheter you scroll up or down. Very useful for adjusting size on fixed navs.

Example Usage
-------------
    
    $('.nav').scrollToggleClass();
    
Options
-------------

The following options, shown with their default values, are available for `$.fn.scrollToggleClass`:

    {
      offset: 0,
      scrollDownClass:'scroll-down',
      scrollUpClass: 'scroll-up'
    }
    
Notes
-------------

* Animations are added via CSS3 transition effects.
* For navigation menus, it is important that the property of `position:fixed` to be set.

License
-------------
The jquery-scrollToggleClass Plugin is licensed under the MIT license. See the LICENSE file for full details.
