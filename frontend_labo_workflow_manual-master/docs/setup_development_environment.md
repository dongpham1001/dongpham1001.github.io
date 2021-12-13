# Setup development environment

Necessary tools, how to install and how to use them.

**TOC**

- [Install application by cli (winget)](#install-application-by-cli-winget)
- [Install WSL](#install-wsl)
- [Install Japanese font](#install-japanese-font)
- [Add chrome extensions](#add-chrome-extensions)
- [Install Git + SourceTree](#install-git--sourcetree)
- [Install ruby-sass](#install-ruby-sass)
- [Install node.js](#install-nodejs)
- [Install Visual Studio Code](#install-visual-studio-code)
- [Install Xampp](#install-xampp)
- [Install Wordpress](#install-wordpress)
- [Install Docker](#install-docker)
- [Install nvm-windows](#install-nvm-windows)

## Install application by cli (winget).

1. *Step 1*:  Install winget
    - Winget is available by default in windows, open command Command Prompt and input `winget`, if do not have go to here to download https://docs.microsoft.com/en-us/windows/package-manager/winget/

2. *Step 2*:  Use winget
    - To search for a tool, type winget search <appname>.
    - After you have confirmed that the tool you want is available, you can install the tool by typing winget install <appname>. The winget tool will launch the installer and install the application on your PC.
    ![install.png](./../images/install.png)
    - In addition to install and search, winget provides a number of other commands that enable you to show details on applications, change sources, and validate packages. To get a complete list of commands, type: winget --help.
    ![help.png](./../images/help.png)

## Install WSL

1. *Step 1*:  Go to Control Panel -> Programs and click to `Turn Windows features on or off`
2. *Step 2*:  Find Window Subsystem for Linux, next click OK and waiting install, when it done reset your PC.
    ![wsl.png](./../images/wsl.png)
3. *Step 3*:  Open this URL `https://aka.ms/wslstore`, it will add Ubuntu machine by MS store. Get and Install it.
4. *Step 4*:  Check WSL by command `wsl` on Command Prompt or PowerShell.
5. *Step 5*:  Install zsh
    - Login to Ubuntu, run `sudo apt-get install zsh`
    - Run `chsh -s $(which zsh)`, Finally, log out of your computer and log back in.

## Install Japanese font

Install font japanese because field design have font japanese

1. *Step 1*:
    - Download font Japanese  (link below).
    - > https://github.com/allgrow-labo/japanese-font
2. *Step 2*:
    - Install the font you just download.
    - Copy font you just Download then paste in to folder `C:\Windows\Fonts`. Then the computer will automatically install those fonts for you.

## Add chrome extensions

[Perfect pixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi)
[GitHub + Mermaid](https://chrome.google.com/webstore/detail/github-%20-mermaid/goiiopgdnkogdbjmncgedmgpoajilohe)

## Install Git + SourceTree

Git is a version management system.
Git will help manage the version and sharing the file while work

### Instal Git
1. *Step 1*: Download
    - Using `winget` to download by `winget install -e --id Git.Git`
    - OR Link to Download: https://git-scm.com/
2. *Step 2*: Install
    - Open file .exe  just downloaded to setup
3. *Step 3*: After install can check to see if have Git installed
    - Open a command prompt, type command line `git --version` if version git display, Git have installed

### Install SourceTree

In case you are new to Git or worried about how to use the Command prompt, we recommend use SourceTree.

1. *Step 1*: Download
    - Using `winget` to download by `winget install -e --id Atlassian.Sourcetree`
    - OR Link to Download: https://www.sourcetreeapp.com/

### Use SourceTree for push code
1. *Step 1*: Click button + [1] in img
2. *Step 2*: Paste URl repository in box [2] in img
3. *Step 3*: click [3] in img to select folder will receive clone. Note the folder must be empty

## Install ruby-sass

### Install Ruby

Software compile from sass to css use ruby so requires installation of ruby
1. *Step 1*: Download
    - Using `winget` to download by `winget install -e --id RubyInstallerTeam.Ruby`
    - OR Link to Download: http://rubyinstaller.org/
    - At the menu click "download" then choose the version ruby to download.
2. *Step 2*: Install
    - Open file .exe  just downloaded to setup
    - After completing setup check to see if have ruby installed :

Open command prompt -> input the characters `ruby -v` then press the enter key
If the version is displayed, the installation is successful.

```sh
ruby -v
```

### Install sass

After installing ruby ​​successfully, install sass.
1. *Step 1*:
    - Open command prompt then input `gem install sass` and press the enter key
    - Then, if `1 gem installed` display, the installation sass successful.

```sh
gem install sass
```

2. *Step 2*:
    - After install scss successful, I can check the version by input `sass -v` in command prompt

```sh
sass -v
```

## Install node.js
1. *Step 1*: Download node js
    - Using `winget` to download by `winget install -e --id OpenJS.Nodejs`
    - OR Link to Download: https://nodejs.org/en/
2. *Step 2*: Install
    - Open file .exe  just downloaded to setup
    - After completing the setup check to see if have node js installed :
        - Open command prompt input `node -v` and press the enter key.
        - If the version node js is displayed, the installation node js is successful.

```sh
node -v
```

## Install Visual Studio Code.
1. *Step 1*:  Download xampp
    - Using `winget` to download by `winget install -e --id Microsoft.VisualStudioCode`
    - OR Link to Download: http://rubyinstaller.org/
### VS Code recommend exteinsion
1. *Step 1*:  Open VS Code
2. *Step 2*:  Go to EXtensions
3. *Step 3*:  Search `Live Share` and install it

## Install Xampp
1. *Step 1*:  Download xampp
    - Using `winget` to download by `winget install -e --id ApacheFriends.Xampp`
    - OR Link to Download xapp: https://www.apachefriends.org/jp/download.html

Note: The latest version is PHP7, but there are some applications that do not work properly on PHP7, so it is recommended to use the old version for the time being.

## Install Wordpress
1. *Step 1*:  Download wordpress
    - Link to Download: https://wordpress.org/download/
    - After download unnzip and put the folder into folder  `C:\xampp\htdocs\`
2. *Step 2*: Open xampp start Apache and MySQL
3. *Step 3*: Create database
    - Accept http://localhost/phpmyadmin/ to create database
4. *Step 4*: Accept to install wordpress
    - Accept to directory according to the structure: http://localhost/namefolderwordpressdownload/ to install wp (please search google)
5. *Step 5*: After install wordpress successful can accept wordpress admin screen according to the structure: http://localhost/namefolderwordpressdownload/wp-admin

## Install Docker
1. *Step 1*:  Download Docker
    - Using `winget` to download by `winget install -e --id Docker.DockerDesktop`
    - OR Go to https://www.docker.com/products/docker-desktop and download
2. *Step 2*:  Install Docker

    ![install-docker.png](./../images/install-docker.png)
    - Waiting untill done
    - When the install finish, restart your PC
3. *Step 3*:  Open Docker
    - Open Docker Desktop
    - It will warning you are missing WSL2, click this link https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi to download `wsl_update_x64.msi` and install, the restart the Docker.
    - The docker is runing
    ![docker-desktop.png](./../images/docker-desktop.png)

## Install nvm-windows
1. *Step 1*:  Download nvm
    - Go to here and install nvm https://github.com/coreybutler/nvm-windows
2. *Step 2*:  Use nvm
    - Check node version in your PC `nvm list`
    - Install node `nvm install <version> [arch]`
    - Choose node version and use `nvm use <version>`
