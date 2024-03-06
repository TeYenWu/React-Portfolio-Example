# React Portfolio Website
This project served as the course material for FSU's CIS4930/5930 HCI class, aiming to provide a quick overview and hands-on experience in high-fidelity prototyping using React. This material was built on the [Tutorials](https://www.youtube.com/watch?v=7WwtzsSHdpI) and [Github Repo](https://github.com/safak/youtube/tree/react-portfolio) from [Lama Dev](https://www.youtube.com/@LamaDev). We have updated the content accordingly, making it align with the course structure and tailored for beginners, enabling students to swiftly start and construct a prototype for a Web App. 

## Pre-configuration

### Install and Configure Visual Studio Code

Download and install [Visual Studio Code](https://code.visualstudio.com)

Install extensions: ES7+ React/Redux/React-Native snippets

### Install Node.js and NPM
Please use Node version managers to install Node.js and NPM. 
Here's the [download link](https://nodejs.org/en/download/)

### Install Packages
npm install

## Getting Started with Create React App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## FAQ
### Q: Facing this error: error:0308010C:digital envelope routines::unsupported
A: If you are facing the following error try out the given solution:

```
Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:68:19)
    at Object.createHash (node:crypto:138:10)
...
    at /Users/chashi/Desktop/FSU/Spring 2024/TA HCI/my-portfolio-example/node_modules/babel-loader/lib/index.js:51:103 {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}

Node.js v20.11.1
```

Solution: 

Itypically occurs with Node.js versions 17 and above due to changes in the default OpenSSL configuration. These versions default to using OpenSSL 3, which has made some algorithms that were previously default now conditional on being enabled in the OpenSSL configuration. This can lead to issues with some Node.js projects, particularly those that rely on certain cryptographic functions.

One common solution to this problem is to set an environment variable that tells Node.js to use a different cryptographic policy, effectively reverting to behavior compatible with earlier versions of OpenSSL. You can try setting the NODE_OPTIONS environment variable to --openssl-legacy-provider before starting your development server. This tells Node.js to use legacy methods for cryptography, which can bypass the error you're seeing.

#### For Linux or macOS
Open your terminal and run the following command before starting your development server:
```
export NODE_OPTIONS=--openssl-legacy-provider
```

#### For Windows
Open your command prompt or PowerShell and run the following command before starting your development server:
```
$env:NODE_OPTIONS="--openssl-legacy-provider"
```

#### Permanent Solution
If you find yourself needing to use this workaround frequently, you can add the NODE_OPTIONS variable to your environment variables permanently:

On Linux/macOS, add the export command to your .bashrc, .bash_profile, or .zshrc file.
On Windows, you can set environment variables through the System Properties.

### Q: Facing this error: React' must be in scope when using JSX  react/react-in-jsx-scope
A: The error you're seeing indicates that React must be in scope whenever you use JSX syntax in your components. This requirement was a standard in React versions prior to React 17. With React 17 and newer, the new JSX Transform was introduced, allowing you to use JSX without importing React in every file.
Solution: 
#### Update React and ReactDOM: 
Make sure your package.json file has the appropriate versions of react and react-dom (17.0.0 or higher). You can update them using npm:
```
npm install react@latest react-dom@latest
```
#### Update React Scripts: 
If you're using Create React App, ensure you have the latest version of react-scripts that supports React 17+ JSX Transform:
```
npm install react-scripts@latest
```
