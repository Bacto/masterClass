### Required tools

- Xcode

### Mac configuration

- Keyboard
- Trackpad speed

### Security

- Define a password
- Set password on screensaver
- Encrypt HDD
- Activate firewall
- ctrl + shift + power to learn
- Install 1password / Dashlane

### Terminal

- iTerm2
- oh-my-zsh

Command explanations: https://explainshell.com

Useful commands:
- `ls`: list a directory content
- `ls -al`: list all files in a list view
- `rm <file>`: remove a file
- `rm -r <directory>`: remove a directory
- `mkdir <directory>`: create a directory
- `cd <directory>`: go into directory
- `cd ..`: go to parent directory


Useful shortcuts:
- `ctrl+c`: interrupt
- `ctrl+a`: go to begin of line
- `ctrl+e`: go to end of line
- `ctrl+r`: search in your history
- `ctrl+l`: clean the screen


### Others

- Brew:
  - brew search \<package\>
  - brew install \<package\>

### Atom

- Install Atom (Caskroom/cask/atom)
- During installation, watch https://www.youtube.com/watch?v=Y7aEiVwBAdk

- Plugins to install:
  - file-icons
  - es6-javascript
  - linter
  - linter-jsxhint
  - linter-jsonlint
  - linter-eslint
  - language-babel
  - react-snippets
  - pigments


### Hello world

Install nodejs with Brew

Then, create your "Projects" directory that will contain all your projects:
```
mkdir ~/Projects
cd ~/Projects
```

Create the directory helloWorld:
```
mkdir helloWorld
cd helloWorld
```

`atom app.js` => `console.log('Hello world!');`
`node app.js`


### Github

- Install git
```
git config --global user.email <email@example.com>
git config --global user.name "<Fistname> <Lastname>"
```

- Create an account on Github (with your real name!)
- Activate two factors authentication
- Fill you profile: add a photo and a small description


- Create private and public keys


- Create a repository named "helloWorld" on Github
```
git init
git add app.js
git commit -m "Creation of my first project"
git remote ...
git push ...
```

#### How to push to github

```
git add --all .
git commit -m "<Reason>"
git push
```

#### Tired of entering your private key password every time?
```
ssh-add -K
```
;)

### I am...

Go back to your project "helloWorld" on your computer and add your name: "Hello world, I'm <yourName>".

Then commit and push your files:
```
git add app.js
git commit -m "Add my name"
git push master
```
