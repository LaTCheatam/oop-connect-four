# OOP Connect Four

This project is part of the object-oriented programming curriculum at App
Academy. Please fork and clone it to work on the Connect Four project.

Welcome to the Connect Four project! In this multi-step project, you will create a well-designed HTML+CSS+JS browser-based application that will allow you to play Connect Four. It will combine all of the concepts that you learned in browser basics, element selection and handling, storage, JSON, and hopefully a well-designed application that adheres to the pattern handle-input/update-state/render-view.

Each step (usually) has two parts:

The requirements for the next step of the application
A reading that can help you get through some implementation details
The reason they're set up this way is so that you can attempt to do the requirements yourself. If you get stuck on how to do it, then there is a reading available for you to help you take the next step in code.

Remember: working software with nicely-formatted source code is the best software.

Please fork and clone the repository found at https://github.com/appacademy-starters/oop-connect-four. In that repository, you will find the following files:

index.html: The HTML file that you'll modify to structure your UI
site.css: The CSS file that you'll modify to style your UI
connect-four.js: The JavaScript file you'll modify to add behavior to your game
images/: A directory that contains images for the application.
README.md: A "read me" file that contains information about the project.
Development with a Web server
This will be the first time you use a local Web server to do your development. It's going to be nearly identical to just opening your file from the file system, but you'll be using a URL with the HTTP protocol rather than the file protocol. You'll be using a simple HTTP server packaged with all Python 3 distributions. (You did install Python3 back at the end of week 1, right?)

After you clone your forked repository, open Visual Studio Code by typing code . in the repository directory. Then, type python3 -m http.server.

(For those of you on Windows, if this is the first time you're running the built-in HTTP server, you may seem some other terminals popping up and then closing, then a "Windows Defender Firewall" block message. Please check both "Private networks..." and "Public networks..." boxes before clicking the "Allow access" button.)

If everything is ok with your Python installation, you will see a message similar to

Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
Note that port number, open a new tab or window in your browser, and type in http://localhost:«port number» into your browser's address bar. You should see the UI!

When you need to stop the HTTP server, click back on the terminal window and type the key combination Control+C. That works on both Windows and macOS. That will stop the HTTP server.

The rules of Connect Four
There's really no better way to explain Connect Four than by watching the "pretty sneaky, sis" advert that played in the early eighties. Have a watch of Connect Four - "Pretty Sneaky, Sis..." (Commercial, 1981).

If that didn't do it for you, here is the instruction card for the Connect Four game by Milton Bradley.

The first player drops a checker into a slot. The checker falls to the lowest open position in the column. If all six positions are full, the player cannot play in that column.

A player wins when they have four in a row anywhere in the board, vertically, horizontally, or diagonally. ("Pretty sneaky, sis.")

The game is a tie if the entire board fills and no one has four in a row.
