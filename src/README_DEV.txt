Hlo there! Looks like you are editing the source files for the website.
I have tried to create a proper documentation of the code whenever necessary
and refactored some variables/functions so the codebase may be updated conveniently.

Do note that it is ncessary to have some knowledge of React when going throughout
the code, as some parts utilize logics derived from React that may not be
understood by javascript alone.


The source folder (src) contains the followings:

components      The React components making up the site
css             CSS files for the site in general, the mobile version, and specific components
fonts           Font files used for the site
images          All images and videos used in the site, including icons, member photos, logos etc.
legacy          Old original code used when the repo was not yet made for future maintenance
PDFs            All PDF files used for display in the site
App.js          Root React component ifle
CNAME           File to designate the URL of the site to this github repo
index.js        Main JS file from which App.js is called
particles.json  Stores configuration data for the particles background


The components folder further contains the following folders:

data    MD and JS files (with json/react components) storing large data of a particular subject
home    The scrollable desktop part of the site
main    Smaller OS wide elements of the site
window  All the types of windows used for specific files or topics

Other folders and directories are self explainatory.


All the parts of the React code which are most probable to be updated frequently have
been refactored into the 'data' folder. This means that 99% of all your changes to 
the codebase will be done in the 'data' folder.
You would most likely not concern yourself with component files outside this folder.
However you are completely welcome to view the source code of these files or even
modify them if necessary. Things like
> Updating background wallpaper
> Updating the hidden window
> Adding new windows instances or templates
> Adding new components
> Disabling or deleting existing components
would need to be done by accessing these files as per your own requirements.


Specifically for creating new windows, you will have to do the following:

1. Determine the type of file the window would be, and choose the
appropriate extension for it.
> Visit the window folder to view the existing extensions
> You can also make your own by creating a new window template and incorporating
  that component in the setWindowContent() function in Window.js

2. Add a new element in the returnValue array in windowsData.js in the format:
    { id: "<unique int>", dir: "<name of file>.<extension>" },
>  Make sure the extension used is correct

3. Set a way for the user to open that window
> By default, you can add an element in the DesktopButtons file in 
  Desktop.js in the format:
    { src: <location of icon>, buttonName: "<name of file>.<extension>" },
> It is also possible to trigger the window by a user action event by
  calling the following function:
    addWindow("<name of file>.<extension>")
  Make sure to call it within the scope of Homepage.js

4. Add the required content for the window
> If the window instance was from a preexisting template, visit that template's
  file to accomodate the new content
> If the window template was custom made, it will depend on whether it requires
  additional content to be inputted or is already complete

Changes to miscellaenous assets and files can be done as deemed necessary.


Once all changes to the code are ready, run 'npm run deploy' to correctly
deploy the site in Github Pages. 

<---!!! IMPORTANT !!!--->

Due to unknown technical issues, Github removes the custom domain set for
the site to display to.
To manually set the custom domain, visit the following link:
https://github.com/Project-Beta/projectbeta-website/settings/pages
go to the Custom Domain section, enter 'projectbeta.info' into the field
and save the change.

<---!!!----!!!----!!!--->

Other important information about each component as well as the explaination for
their functionalities are given in their respective files' comments

Hope the documentation is useful. Please reach out to me in case you have any
suggestions or queries.

Change the status quo!

Suyash Chandel


Last updated: 17/06/2023