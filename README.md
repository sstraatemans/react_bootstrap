# React Bootstrap
_The changelog is maintained in `CHANGELOG.md`_

### Configuration
to setup the website build system locally you need to install the following  apps.  
1. npm   
3. Gulp  
4. Webpack
5. XAMPP (virtual host, Apache en MYSQL server)  

#### 1. NPM
NPM is needed to install the javascript dependencies for the project.  
1. go to: `https://nodejs.org/en/download/`  
2. run the installer and follow the instructions  
3. don't forget to have NPM in your PATH environment (`http://stackoverflow.com/questions/27864040/fixing-npm-path-in-windows-8`)  
4. open a command screen (CMD)  
5. run to check if NPM is correctly installed  
```
    $ npm -v
```  
6. to update, run:  
```
    $ npm i npm -g
```  
7. Don't worry about the long list of warnings (yellow text). If there is red text, than something went wrong.  

### 3. Gulp
If you installed the NPM dependencies, thn Gulp should be installed as well.    
Gulp will make sure your assets are copied to the right place in the web folder.    
Run Gulp when you made changes to the assets (images, fonts etc), javascript or CSS.  

### 4.Webpack
The code can be found here: `app\assets\js`
The important files have the `.jsx` extension. These are just normal javascript files, but this extension makes it clear that it's a React file.   
The base of the application is `App.jsx`  
In the component directory you can see that the whole site is made up of different components. Every component has its own directory.  
A component has the following files:  
1. `Component.jsx`: the actual code.  
2. `Component.scss`: the SASS/CSS code needed just for this component. The CSS is constructed with the BEM method. so component styles don't bite eachother. http://getbem.com/introduction/  
3. `Component.spec.js`: these are the test files. tests are done with a compination of `mocha / chai/ enzyme / sinon`.


##### Javascript
You can find all the important js files here:  
`app\assets\js`    
These are not normal JS files. They are ES6/ES2015. because ES6 features are not natively supported yet, they need to be compiled. Compilation is done by `https://babeljs.io/`.  
To compile run:  
```
    $ npm run dev  
```  
Webpack will automatically check all your js and scss files and compile them in to single files (`bundle.js` and `bundle.css`) and put them in the right location (`/web/js` and `/web/css`).  It will also create sourcemaps for easy debugging in the browser.    

To build and minify the javascript and css (for prodcution). There will be no sourcemaps created  
```
    $ npm run build  
```

To test all the Javascript files  
```
    $ npm run test  
```  



##### Gulp commands
The only gulp command needed, when you have new images in your assets.
To just copy and build everything once:  
```
    $ gulp
```  
