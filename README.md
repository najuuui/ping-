# Ping Pong game.
#### Created on, 29.03.2018
#### By **Najma**


## Description
This is a ping pong game that i created as a part of my third week assignment at moringa school.

## Technologies used.
* Html and css technologies is used to develop the portfolio site.
* Git is used on the other side as the version control for tracking changes on the local and remote repository.
* Bootstrap 3 was used for creating the various sections and styles using various classes.
* jQuery was used for manipulating the DOM.

## Procedure for development And deployment to git pages.
Html file first created to give the site a *structure this is for emphasizing texts* then styles added using css as the changes are being tracked continously using git.

## Behaviour driven development
### The following were some common behaviours of the development.
* Creting the backend logic.
* Designing the User Interface.
* Linking the backend logic with the interface.

### The following are some codes
#### Backend logic.


      let myArray = [];
      function pingPongFunc (num){
        for (var i=1; i<=num; i++){
          if(i%3 ==0 && i%5==0 ){
            myArray.push("ping pong");
          }
          else if(i%3 == 0){
            myArray.push("ping");
          }
          else if(i%5 == 0){
          myArray.push("pong");
          }
          else{
          myArray.push(i);
          };
        };
      };
    }


#### linking the logic and interface with jquery.


    $("form#counter").submit(function(event){
      event.preventDefault();

      var num = parseInt($("#number").val());
        pingPong(num);
        $(".list-group").add();
        myArray.forEach(function(i){
        $("ul").append($("<li'>").html(i));
        });

       });
    });

#### sample output

     1,
     2,
    'ping',
     4,
    'pong',
    'ping',
      7,
      8,
    'ping',
    'pong',
     11,
    'ping',
      13,
      14,
    'ping pong'



### Follow along.

* Create a remote repository on github.
* Initialize a local repository using **git init** command on the project directory.
* Create the required html and css files and image directories.
* Create a new branch called gh-pages **git branch gh-pages**.
* Use **git add .** to add files and folders to git so that the project can be monitored then issue **git commit -m "message here"** to commit to staging area.
* Then connect with the remote repository **git remote add origin <url.git>**
* Then push to the remote repository on github.**git push origin master**.

## Accessing the portfolio.
The site can be viewed from here [ping pong blog](https://najuuui.github.io/ping-pong/) or [ping pong github repository](https://github.com/najuuui/ping-pong).

### copyright
*The site and materials can be accessed by the public freely*

Copyright (c) 2018 **[Najma](https://github.com/najuuui/ping-pong)**
