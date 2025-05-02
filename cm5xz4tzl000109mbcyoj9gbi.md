---
title: "The Internet"
datePublished: Wed Jan 15 2025 14:05:17 GMT+0000 (Coordinated Universal Time)
cuid: cm5xz4tzl000109mbcyoj9gbi
slug: the-internet
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1736951721817/4dacf4f8-26ca-4aec-aa77-07fb45a5c059.webp
tags: internet, client-server, chaiaurcode, chaicode, chaicohort

---

As we all know internet is the craziest innovation of the entire human race it made us to communicate across the world for almost every human? How ? Lets understand.

# What is Internet?

The internet is basically means, connection of the computers which helps multiple peoples to connect and communicate with each others simultaneously such that they can exchange information with other peoples.  
Now internet is just it is? No internet is also technology.

## How it works?

Before knowing the working of the internet we need to get familiar with the some jargons (terms used to describe the components of internet)

### Jargons:

1. **Client:** Every user is a client but for the internet a browser or an application is also referred as a client.
    
2. **Browser:** A software application which helps us to communicate with servers (live hosted on the machines with internet). It also act as an operating system.
    
3. **Server:** A software program written or developed by a software developer to manage functionalities to communicate with the data or information associated with the clients. A server is generally hosted on machines (computers) which generally never sleeps (never shutdown).
    
4. **IP Address:** The location of the devices on which the server is hosted.
    
5. **Domains**: The unique names given to the ip addresses.
    
6. **DNS**: The Domain naming systems are the software which maps the IP address to a domain.
    
7. **Request:** A query or question for the some information.
    
8. **Response**: Answer or results contains status code, message or data in it.
    
9. **Status Code**: status messages(can be an error or success message) mapped with some numeric codes.
    
    example: 200: “ok”, 404: “Not Found”
    
10. **URL**: A uniform resource locator is technically a link which redirects the client to an ip address.
    

### Working:

Hey myself Sagar, I opened my browser and entered an URL “chaicode.com” in the search bar.  
then i get the response as:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1736944925676/d037df67-b70b-4a8d-8062-4e9a2ff4bd1b.png align="center")

Now I was curious how search bar in my browser resolved the URL “chaicode.com” and then send me this response.

so I get to know few things about the internet, that are as:

1. Internet works on client server architectures which is nothing just client (browser) makes a request and server full fill the request and send response to the client as HTML page or JSON formats.
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1736945423797/ce37ceda-62bf-4dea-945f-3c8e763bb762.png align="center")
    
2. Inside the simple architecture there are lot of modules works under an abstractions.
    

The OSI (open system Interconnection) model is model introduced but it was hypothetical with reference of the internet. But you need to know about TCP/IP protocol which is similar to this OSI reference model.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1736948330792/67578e95-1b20-4a76-bc8b-0f524507585b.png align="center")

### Which layers of OSI are relevant to TCP?

TCP primarily operates in the Transport layer of the OSI model. However, its functioning also involves aspects related to the Network and Data Link layers, as it relies on lower-level protocols and technologies for data delivery.

### Are OSI and TCP concepts outdated?

The OSI model remains relevant as a fundamental concept for understanding networking, but TCP/IP has become the de facto standard for internet communication. Newer technologies and protocols have emerged, but TCP/IP’s widespread usage makes it a central consideration in modern networking.

### Can TCP work without OSI?

TCP was designed based on the principles outlined in the OSI model, but it can operate independently of the OSI framework. However, the OSI model provides a conceptual foundation that aids in understanding how TCP and other networking protocols work together.

When you type a URL (Uniform Resource Locator) into your browser, several processes happen behind the scenes to display the desired webpage. Below is a step-by-step breakdown of how the **internal working of the internet** processes your request:

---

### What happened when we search chaicode.com?

**Step 1: URL Parsing:**

*When you type a URL like* [`https://www.chaicode.com`](https://www.google.com)*, the browser parses it into different components:*

* ***Protocol***: `https` *(indicates secure communication using SSL/TLS)*
    
* ***Domain Name***: [`www.chaicode.com`](http://www.google.com)
    
* ***Path***: `/` *(the default homepage path)*
    

---

**Step 2: DNS (Domain Name System) Resolution**

*Your browser needs to convert the domain name (*[`www.chaicode.com`](http://www.google.com)*) into an IP address, which is the address of the web server hosting the website.*

1. ***Browser Cache***: The browser first checks its cache to see if it already knows the IP address of [`www.chaicode.com`](http://www.google.com)*.*
    
2. ***Operating System Cache***\*: If not found, it checks the local DNS cache on your device.
    
3. ***Recursive DNS Resolver***: If the IP address is still unknown, your device contacts a DNS resolver provided by your ISP.
    
4. ***Root DNS Server***: If the resolver doesn’t have the IP address, it contacts the root DNS server, which directs it to a Top-Level Domain (TLD) DNS server (.com, .net, .in, .uk, etc.).
    
5. ***TLD DNS Server***: The TLD server directs it to the authoritative DNS server for [`chaicode.com`](http://google.com)*.*
    
6. ***Authoritative DNS Server***: Finally, this server provides the IP address (e.g., 104.21.16.156) for[`www.chaicode.com`](http://www.google.com)*.*
    

---

**Step 3: TCP Connection Establishment:**

*Once the IP address is obtained, the browser establishes a* ***TCP (Transmission Control Protocol)*** *connection with the server using a process called* ***Three-Way Handshake***:

1. **SYN(Synchronize):** *The client sends a request to initiate a connection*
    
2. **SYN-ACK(Synchronize-Acknowledge):** The server acknowledges the request.
    
3. **ACK (Acknowledge):** The client confirms the connection.
    

---

**Step 4: SSL/TLS Handshake (For HTTPS)**

*If the URL uses HTTPS, an* ***SSL/TLS handshake*** *happens to secure the connection:*

1. ***Client Hello***: The browser sends a request to the server with supported encryption methods.
    
2. ***Server Hello***: The server responds with its encryption method and a digital certificate.
    
3. ***Key Exchange***: Both parties agree on a session key to encrypt data.\*
    

---

**Step 5: Sending the HTTP Request**

*The browser sends an* ***HTTP request*** *to the server. The request includes:*

* ***Method***: `GET` *(to request a webpage)*
    
* ***Headers***: Information like user-agent, cookies, etc.\*
    
* ***Body***: (Optional) Used for `POST` *requests.*
    

---

**Step 6: Server Processing**

*The web server processes the request:*

1. ***Application Layer***: The server runs the web application (like Node.js, PHP, etc.) and generates a response.
    
2. ***Database Interaction***: If needed, the server queries a database to retrieve dynamic content.
    
3. ***Response Generation***: The server compiles the HTML, CSS, JavaScript, and other files.
    

---

**Step 7: HTTP Response**

*The server sends an* ***HTTP response*** *back to the browser. The response includes:*

* ***Status Code***: `200 OK`*,* `404 Not Found`*, etc.*
    
* ***Headers***: Metadata like content type, cache-control, etc.
    
* ***Body***: The actual webpage content (HTML, CSS, JavaScript).
    

---

**Step 8: Rendering the Webpage**

*The browser takes the response and renders the webpage by following these steps:*

1. ***HTML Parsing***: The browser builds a ***DOM (Document Object Model)*** *tree.*
    
2. ***CSS Parsing***: It applies styles and creates a ***CSSOM (CSS Object Model)****.*
    
3. ***JavaScript Execution***: The browser runs JavaScript code.
    
4. ***Layout and Painting***: It calculates the layout and paints the elements on the screen.
    

---

**Step 9: Additional Resource Requests**

*If the HTML includes additional resources (like images, CSS files, or JavaScript files), the browser makes more requests to the server to fetch these resources.*

---

**Step 10: Caching and Content Delivery**

*To improve performance, browsers use caching and* ***CDNs (Content Delivery Networks)****:*

* ***Browser Cache***: Stores static resources like images and scripts.
    
* ***CDN***: Distributes content from servers closer to the user to reduce latency.
    

---

## **Summary of Protocols Involved**

| **Protocol** | **Layer** | **Purpose** |
| --- | --- | --- |
| DNS | Application Layer | Resolves domain names to IP addresses |
| TCP | Transport Layer | Ensures reliable data transfer |
| IP | Network Layer | Routes data packets across networks |
| HTTPS/HTTP | Application Layer | Sends requests and responses |

---

This entire process happens in **milliseconds** so that’s how we can see the home page so quick. But we know that internet is an ocean this is just a droplet.