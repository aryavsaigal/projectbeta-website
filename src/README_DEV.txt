Hlo there! Looks like you are editing the source files for the website.
I have tried to create a proper documentation of the code whenever necessary
and refactored some variables/functions so the codebase may be updated conveniently

Do note that it is ncessary to have some knowledge of React when going through the code,
as some parts utilize logics derived from React that may not be understood by javascript
alone.


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
window  all the types of windows used for specific files or topics


Other important information about each component as well as the explaination for
their functionalities are given in their respective files' comments

Hope the documentation is useful. Please reach out to me in case you have any suggestions.

Change the status quo!

Suyash Chandel


Last updated: 14/06/2023