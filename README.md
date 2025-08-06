# script about "Navigation menu with active page highlighting"

Goal: Combine location, DOM, classes, and history.

Requirements:
Implement a navigation menu (HTML) with 3 links: /home, /about, /contact.
Create a Navigation class that:
Tracks window.location.pathname.
Adds the CSS class "active" to the corresponding menu item.
Responds to popstate and manually changes the URL on click (via pushState).