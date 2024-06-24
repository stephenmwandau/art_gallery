###### Website
- website : generally consists of static content that is delivered as a user request it. 
- Mostly informational 
- blog pages , company landing pages , portfolios 

###### Web applications
- Are interactive and dynamic 
- provide users with functionalities like form inputs , dashboards , content management systems. 
e.g. ecommerce pages, banking systems , social media platform 

The backbone of any webpage is HTML . (HyperText Markup Language)
###### HTML 
defines the structure and content of a webpage 

1. Define the content structure : HTML uses tags / elements to define the structure(the latyout and the content a user can see , paragraph, button , image , video) of the webpage 

syntax of HTML
-
<> : opening tag  </> : closing tag
 say a paragraph <p> content </p>
                 <button> title of the button </button>

- </> closing tag
say img <img/>
     br <br/>  : <br>

All HTML elements/tags have attributes : 
Attribute : more information about an element


2. Semantics: HTML provides semantics tags that provide specific meaning to content : Search Engine Optimization : 
<header></header> : heading section of the webpage
<footer></footer> : defines the bottom section of a page 
<nav></nav> : navigation

3. Hyperlinks : HTML allows the linking of pages, external resources and internal resources through hyperlink tags  <a> tag : anchor tag , <link>

4. Forms and Inputs : Collect user input and interact with backend services 
<form>
   <input/> email
   <input/> password
   <button>Login<button>
</form>

comment tags are used to write notes with coding scripts. 
<!-- write comment -->

###### CSS (Cascading Style Sheets)
- used to style and layout the web content structured by HTML

1. Design and layout : Controlling the visual appearance of a page 
2. Responsive Design : CSS will allow us to adapt to different screen sizes and devices making the content accessible through all platforms 
: media queries and flexible grid layouts 
3. Animations and Effects : creating visual effects (transitions) : JS is more friendly. 

Syntax of CSS 
Selectors  : Element Name (p,button) , elements id (#nameofid) , class selector ( .nameofclass )

selector {
    stylingproperty : value
}

p {
    color: red;
}


### How we write CSS 
1. External CSS : Link a html file to an external css file : linked using the LINK tag 
2. Internal CSS : Write css code inside the html document : using the <style></style> 
3. Inline CSS : Write css code as an attribute for a HTML element : style


### WORKING WITH GITHUB AND GIT 

## SCENERIO A : commiting a new project

1. Create a new repository in your github account
2. Initializing the .git tracking folder for our local project
       git init 
3. Connect our local project to the online repository .git version  
   git remote add origin git@github.com:josephbill/art_gallery.git
   confirm the link using : git remote -v
4. Check on files to be tracked 
    git status (red means not yet tracked) (green means file is tracked)
5. Add files to be tracked 
     git add filename
     git add foldername
     git add .  :: all files 
6. Commit with a message 
     git commit -m "message value"
7. We can now push to our desired origin 
     git push origin branchname  (use git branch to check branch name)



## SCENERIO B : PUSHING AN EXISTING PROJECT 
- assumptions : git repo exists, you have already done an initial push 

1. git status
2.   git add filename
     git add foldername
     git add .  :: all files 

3. git commit -m "value message"
4. git push origin branchname