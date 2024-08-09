/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'youtube': '&#xe900;',
            'yelp': '&#xe901;',
            'wordpress': '&#xe902;',
            'whatsapp': '&#xe903;',
            'wechat': '&#xe904;',
            'vimeo': '&#xe905;',
            'twitter-x': '&#xe906;',
            'twitter': '&#xe907;',
            'twitch': '&#xe908;',
            'tiktok': '&#xe909;',
            'threads': '&#xe90a;',
            'qq': '&#xe90b;',
            'telegram': '&#xe90c;',
            'substack': '&#xe90d;',
            'strava': '&#xe90e;',
            'stack-overflow': '&#xe90f;',
            'spotify': '&#xe910;',
            'sourceforge': '&#xe911;',
            'snapchat': '&#xe912;',
            'slack': '&#xe913;',
            'skype': '&#xe914;',
            'sina-weibo': '&#xe915;',
            'signal': '&#xe916;',
            'reddit': '&#xe917;',
            'quora': '&#xe918;',
            'pinterest': '&#xe919;',
            'paypal': '&#xe91a;',
            'microsoft-teams': '&#xe91d;',
            'messenger': '&#xe91e;',
            'medium': '&#xe91f;',
            'mastodon': '&#xe920;',
            'linkedin': '&#xe921;',
            'line': '&#xe922;',
            'instagram': '&#xe923;',
            'google': '&#xe924;',
            'gitlab': '&#xe925;',
            'github': '&#xe926;',
            'facebook': '&#xe927;',
            'dribbble': '&#xe928;',
            'discord': '&#xe929;',
            'behance': '&#xe92a;',
            'alexa': '&#xe92b;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icons/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
