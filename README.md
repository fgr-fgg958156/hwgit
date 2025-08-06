# script about "Class for working with history of transitions (HistoryTracker)"

Goal: Practice the History API and storing routes.

Requirements:
Create a HistoryTracker class that:
Stores a list of visited URLs in an array.
Has methods:
push(url) — adds an entry via pushState and stores it in history.
back() — goes to the previous page via history.back().
Optional:
Use the popstate event to log the history of navigation.