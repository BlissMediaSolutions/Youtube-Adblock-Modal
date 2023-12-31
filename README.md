# Youtube-Adblock-Modal
Youtube Adblock Popup\Modal hide

A simple Tampermonkey\Greasyfork script to hide the modal window which appears when using Youtube with an Adblocker (like uBlock Origin or AdBlock Plus).

While others have already implemented developed other scripts, they all seemed to based on automatically clicking the close button of the modal popup window.
I thought a better solution would be to target the CSS of the parent DOM element of the modal.

When using Youtube with an adblock extension in your browser, you may get a modal popup like this;
![Youtube Adblock popup](https://github.com/BlissMediaSolutions/Youtube-Adblock-Modal/assets/10906791/f07dc31f-cb2b-4dd2-8e97-28e01ba3bf3e)

so this is (hopefully) a CSS approach to make sure the modal window doesn't appear, bu simply hiding the parent DOM element.
Possibly not needed, but it also renames the existing 2 classes of the parent DOM element (so there's no styling from the classes)

Tested with Tampermonkey on Google Chrome & Mozilla Firefox
https://www.tampermonkey.net/

*important note:*
If you find youtube becomes 'locked up' (page unresponsive) it may be that this script is hiding another, different, modal window which looks like this.
(just disabled script, and see if this modal is being triggered)
![youtube-3-video-warning](https://github.com/BlissMediaSolutions/Youtube-Adblock-Modal/assets/10906791/f7ec425a-d777-429e-9cd8-35385fc22925)

While this script will also hide this modal, it wont deal with the 'lock\block' youtube is implementing. (still investigating that)
