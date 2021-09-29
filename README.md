# From Design Rules to Design Tools

This code repository holds all the code shown in the From Rules to Tools workshop at Design Matter 2021.

## Installation

In order to run Mechanic, you need to install two things on your computer.

### Node.js

1. Go to https://nodejs.org and click the green button on the left to download the version "recommended for most users".
2. After downloading the file, double-click the installer package and finish the installation.

### Atom

_Skip this if you already have a text editor such as Atom, Sublime Text or VS Code installed_

1. Go to https://atom.io/ and click the "Download" button
2. After downloading the file:
   1. **Mac** Drag the application to the Applications folder
   2. **Windows** Double-click the installer to install Atom

## Your first design function

_All instructions below are for Mac, but most explanations should work for Windows too_

We are going to be creating a new [Mechanic](https://mechanic.design) project.

1. In Finder, find the folder where you want to create a new Mechanic project folder
2. Open the Terminal application, write `cd` and drag the folder to the Terminal Window
3. Press enter

Now you can run the commands to create and run a new Mechanic project:

1. Run `npm init mechanic@latest rules-tools-workshop`
2. Select "template"
3. Select "React Image (SVG)"
4. Call the function `my-first-function`

Now you have created a Mechanic project and you can move into the folder and run the design tool:

1. Run `cd rules-tools-workshop`
2. Run `npm run dev`

## Business card design function

1. From the Terminal window, run `npm run new`
2. Choose "Example"
3. Choose "Business Card Generator"

## Instagram story design function

1. From the Terminal window, run `npm run new`
2. Choose "Example"
3. Choose "Instagram Story Generator"

## More resources

To learn about what can be done and how to do it through Mechanic, visit the [documentation site](https://mechanic.design/docs).
