# BloomMate - Frontend

> This software is part of a project for a software engineering class at **Hanyang University Information Systems Dept.**

> The class is in collaboration with **LG Electronics.**

## ① Intro
This is a repository that implements the mobile application part of BloomMate. We have tried to implement the MVC pattern separately between View and Controller, and we have tried to write as clean code as possible by utilizing various libraries. You can check the key features directly by install the application

![소웨공 Architecutre](https://github.com/BloomMate/BloomMate-FE/assets/60422588/c9a148ca-a23a-4f10-88e3-ed4ea0f91589)

## ② Key Tech Stacks

|Name|Description|
|----|-----------|
|![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)| Main FrameWork|
|![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)| Main Language|
|![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)|Asynchronous state management|
|![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)|Performant, flexible and extensible forms with easy-to-use validation|
|![Recoil](https://img.shields.io/badge/Recoil-3578E5.svg?style=for-the-badge&logo=recoil&logoColor=white)|A global state management

## ③ Installation Guide

**A. Android Installation**

To install the Android application, follow these simple steps:

1. Go to the Google Drive link provided below:
    - Link: https://drive.google.com/drive/folders/1misbKdk9KiIgrsmARhBsaBBLhtyIzM-k?usp=drive_link

Please take note of the following:

1. Starting from September 2024, the application may not function properly. This is due to the possibility of the server operation being discontinued when the free plan of AWS EC2 ends.
2. Since the application was not downloaded from the Play Store, you may encounter a message indicating a potential presence of malicious software. Rest assured that BloomMate does not contain any malicious code. You can safely ignore the message and proceed with the installation.

**B. IOS Installation**

For iOS, the only way to install the app is through the official App Store. Therefore, you need to install it directly via source code. Please note that the following steps can only be performed on macOS, as it is not possible to install iOS on Windows without xCode. Follow these steps:

1. Configure iOS by referring to the official react-native website's iOS setup page.
2. Download the source code from the this repository.
3. Open the terminal and enter the command "yarn" to download the required libraries.
4. Create a .env file in the root directory. Contact our team for the contents to include in the .env file, and we will respond within 3 business days.
5. Enter "yarn start" in the terminal and use "yarn ios" to install BloomMate on your iOS device.

Similar to Android, there is a possibility that the application may not function properly after September 2024.
