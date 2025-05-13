---
title: "How to Install Judge0 (Self Hosted) – Step-by-Step Guide for Developers"
seoTitle: "How to Install Judge0 on WSL and Linux"
seoDescription: "Learn how to install and set up the Judge0 online code execution engine on WSL and Linux. Follow this complete, developer-friendly guide to get Judge0 runni"
datePublished: Tue Apr 29 2025 18:30:00 GMT+0000 (Coordinated Universal Time)
cuid: cma55gxtt000408kyalf6040d
slug: how-to-install-judge0-on-wsl-and-linux-step-by-step-guide-for-developers
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1746090603325/ed6a7236-a000-4f3f-a6f1-e973987f014e.png

---

# Introduction

Judge0 is robust, scalable, and open-source code execution platform. Which enable us to create large and scalable softwares for competetive-programming, online IDEs,, online code editors, programming assessments, etc.

It contains support for **60+ languages.**

---

# Installating judge0

We are going to install `judge0-v1.13.1` on our PCs.

### System Requirements

Judge0 has been tested only for linux platforms that’s why there is no official support for installations in other platforms.

Note:- We are going to see how to install `judge0` in Windows and Linux.

### Prerequisites

1. A Laptop or desktop PC with Wndows or Linux .
    
2. A stable internet connection.
    

With the above prequisites lets proceed for the installation

## Preinstallations

### Windows WSL

---

For installation of WSL we need to enable some features in out windows machine.

**Enabling WSL and Virtual Machine platform'**

1. Press `🪟 + r` and type optionalfeatures.exe click on `OK`.
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1746081823070/68b67c36-0dbf-419c-978b-fa8ecc4376ad.png align="center")
    
2. Allow for permission.
    
3. Mark check for enabling `Virtual Machine Platform` and `Windows Subsystem For Linux` and press ok.
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1746081964945/fbb5c354-32bf-4f1c-99ba-f59ed5527581.png align="center")
    
4. Wait for checking requirements.
    
5. Click on restart.
    

**Installing wsl**

1. Open powershell.
    
2. Install wsl package
    

```bash
wsl.exe --install
```

3. Check installation using
    

```bash
wsl -v # or wsl --version
```

4. Install Ubuntu
    

```bash
# wsl --install <Distro_name>
wsl --install # it will install latest version of Ubuntu 24.04 as a default
```

5. Using ubuntu using WSL
    

```bash
 wsl -d Ubuntu # For using any other distro of linux replace Ubuntu with the Name of Distribution
```

### Ubuntu (Linux platform)

---

1. Use `sudo` to open file `/etc/default/grub`
    

```bash
sudo nano /etc/default/grub
```

1. Add `systemd.unified_cgroup_hierarchy=0` in the value of `GRUB_CMDLINE_LINUX` variable.
    

```bash
GRUB_CMDLINE_LINUX="systemd.unified_cgroup_hierarchy=0"
```

If the line already contains other parameters, ensure you add this parameter within the quotes, separated by a space. For instance:

```bash
GRUB_CMDLINE_LINUX="quiet splash systemd.unified_cgroup_hierarchy=0"
```

2. Apply the changes:
    

```bash
sudo update-grub
```

3. Restart your server:
    

```bash
sudo reboot
```

## Common Installation

**Step 1: Open terminal (Windows open WSL CLI)**

**Step 2: Update your System**

*Mac:*

```bash
sudo softwareupdate --install --all
```

*Linux or WSL:*

```bash
sudo apt update -y && sudo apt upgrade -y 
```

**Step 3: Download** `Docker` and `Docker Compose` **(Skip If you have already installed)**

*Mac*

```bash
brew install --cask docker
```

*Linux or WSL*

```bash
sudo apt install docker.io && sudo apt install docker-compose
```

**Step 4: Install** `unzip` **Package**

*Mac*

```bash
brew install unzip
```

*Linux or WSL*

```bash
sudo apt install unzip
```

**Step 5: Download the judge0’s release archive**

```bash
wget https://github.com/judge0/judge0/releases/download/v1.13.1/judge0-v1.13.1.zip
```

> You can directly download `judge0’s release archive` from [here](https://github.com/judge0/judge0/releases/download/v1.13.1/judge0-v1.13.1.zip).

**Step 6: Extract or Unzip the judge0’s release archive**

```bash
unzip judge0-v1.13.1.zip
```

**Step 7: Go into** `judge0-v1.13.1` extracted folder

```bash
cd judge0-v1.13.1
```

**Step 8: Update the variable** `REDIS_PASSWORD` **in the** `judge0.conf` **file.**

```bash
nano judge0.conf
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1746085860298/04f6c3e0-8eb3-45d2-9b64-9b46d97cc37c.png align="center")

Instead of YourPassword use [generated password](https://www.random.org/passwords/?num=1&len=32&format=plain&rnd=new) for both `REDIS_PASSWORD` and `POSTGRES_PASSWORD`.

Passwords can be *different*(prefer) or *same*

1. Write and Save
    
    press ctrl + o and save as same name
    
2. To come out the file :
    
    press ctrl + x
    

> ‼️Do not modify `docker-compose.yml`, modify it only if you know what are you doing 💀.

**Step 9:** Run these commands to initialize `redis` and `postgres`:

```bash
docker-compose up -d db redis # use sudo for smooth experience
```

wait for initialization of `redis` and `postgres`.

**Step 10:** Run these commands to initialize `workers` and `server`:

```bash
docker-compose up -d # use sudo for smooth experience
```

After these commands end, your instance of Judge0 CE v1.13.0 is now available at : [`http://0.0.0.0:2358`](http://0.0.0.0:2358/) *or* [`http://localhost:2358`](http://localhost:2358/) don’t worry your installation is working if you are getting empty white-page.

Helping links:

* Judge0 Dummy Client Page - go to directory ‘[/dummy-client.html](http://localhost:2358/dummy-client.html)’
    
    you can try here dummy code executions
    
* Judge0 Languages Page - go to directory ‘[/languages’](http://localhost:2358/languages)
    
* Judge0 Documentation Page - go to directory ‘[/docs’](http://localhost:2358/languages)
    

---

# Testing Installation

Visit `http://localhost:2358/dummy-client.html` try to run.

If you are getting accepted then congratulations installation is successful if compilation error check the Source Code stdin and expected output.

If your are facing `internal error` with `Message: 'No such file or directory @ rb_sysopen - /box/script.js'` then goto

Edit this text

---

# Message: 'No such file or directory @ rb\_sysopen - /box/script.js',

Before we start, I want to inform that in some PCs you don’t need to configure that much but If you are getting the `Message: 'No such file or directory @ rb_sysopen - /box/script.js'`. Many of my collegues are getting this error too. So together we tried to solve the problem.

> This may or may not work for your operating system due to some architecture issues over operating system or machines try reinstall the docker.

**Reason**: Docker Desktop uses a **Linux VM** under the hood (e.g., Alpine or Debian-based), and **cgroups** are part of the **Linux kernel**. So you'll need to check cgroup version **inside the Docker VM or container**.

```bash
stat -fc %T /sys/fs/cgroup  # use WSL for windows to check it
```

*Outputs***:**

* `cgroup2fs` → Cgroup v2
    
* `tmpfs` or `cgroup` → Cgroup v1
    

If your docker-desktop is running at CgroupV2 you need to downgrade it.

Step 1: Open settings.json or settings-store.json

## Windows

```bash
code "C:\Users\[Username]\AppData\Roaming\Docker\settings-store.json"
```

## Mac

```bash
vim ~/Library/Group\Containers/group.com.docker/settings-store.json
```

## Linux

```bash
nano ~/.docker/desktop/settings-store.json # not use settings.json
```

Step 2: Append `“DeprecatedCgroupv1”: true` in settings-store.json file or not use settings.json

```json
{
    “DeprecatedCgroupv1”: true
}
```

Step 3: Restart docker

## Additionally Enable `Use Rosetta for x86_64/amd64 emulation on Apple Silicon` in Mac OS.

Test it again, if this is useful “You’re Welcome”

---

# From WSL to Docker-Desktop (for windows users only)

1. From the Docker menu, select **Settings &gt; General**
    
2. Make sure that ‘Use the WSL 2 based engine’ is selected
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1746087352659/59c0ccfb-583c-4c67-ad22-e2c1cfa08c15.png align="center")
    
3. Then go to **Settings &gt; Resources &gt; WSL Integration** in Docker Desktop and enable **Ubuntu.**
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1746087416523/8224a190-12bf-4458-9481-0a87195750e6.png align="center")
    
4. Now you can see containers running in the `docker-desktop`.
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1746087600563/fed3fc94-caf6-4f60-a61b-244c55f722f7.png align="center")
    

---

# How to re run the judge0 container?

Step 1: Open the judge0 folder with files (`docker-compose.yml` and `Jude0.conf`).

Step2: Open the terminal and use

```bash
docker-compose up -d
```

---

# How to stop judge0 container?

Step 1: Open the judge0 folder with files (`docker-compose.yml` and `Jude0.conf`).

Step2: Open the terminal and use

```bash
docker-compose down
```

---

# References

* [Judge0](https://judge0.com/)
    
* [Judge0 github repository](https://github.com/judge0/judge0/)
    
* [Judge0 Official installation documentation.](https://github.com/judge0/judge0/blob/master/CHANGELOG.md)
    

---

# Suggestion

* If you are somehow failed to install/config judge 0 try reinstalling from start.
    
* Avoid multiple downloads of `judge0’s release archive`.