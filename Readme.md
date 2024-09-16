##Namaste React 

##Parcel

- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential - supports older browsers
- Diagnostic 
- Error Handling
- HTTPs
- Tree shaking - removed unused code
- Different Development and Production bundles 


<!-- App Loyout -->
/*
-> Header
  - Logo
  - Nav Items
-> Body
  - Search
  - Card Container
    * Image, Restaurant Name, Ratings, delivery time
-> Footer
  - Copyright
  - Links
*/

#Types of Testing
- Unit Testing
- Integration Testing
- End to End Testing e2e

#Setting up Testing in our app
 - Install React Testing Library
 - Install jest
 - Install Babel dependencies
 - Configure Babel
 - Configure @aprcel Config file to disable default babel transpilation
 - running the test : npm run test
 - execute jest configuration : npm jest --init
 - Install Jsdom Library
 - Install @babel/preset-react : To make JSX work inside the test case
 - Include @babel/preset-react inside babel.config.js
 - Install @testing-library/jest-domz
 

#Run the testcase
- npm run test
- npx jest --init
  --jsdom (browser-like)


#dunder method = __....___ (2 underscores in front and 2 underscores in back)