---
title: "Hosting Server Best Practices for your WordPress Sites in 2025"
description: "I've seen countless posts and articles about design, development, AI, and performance, but what about WordPress security? 🤔."
pubDate: "Sep 10 2022"
heroImage: "/wordpress-security.webp"
tags: ["Security"]
---

I've seen countless posts and articles about design, development, AI, and performance, but what about WordPress security? 🤔

You could have the most amazing 3D site with stunning animations, but if you're dealing with downtimes, overwhelming traffic from malicious users, or a blacklisted IP, your leads will vanish. 🥶

To address this, I created a personal checklist of some essential practices to consider when managing hostings and developing websites. These steps focus on building a robust infrastructure with solid security at its core.

☑️ cPhulk Protection (cPanel): Implement cPhulk on your server to guard against brute force attacks. This tool limits login attempts and identifies suspicious activity, blocking malicious IPs from accessing the server.

☑️ Restricting Access to xmlrpc.php: Limit access to the xmlrpc.php file to only the server by configuring firewall rules or .htaccess directives. 

☑️7G/8G Firewall: Utilize the 7G/8G firewall for advanced protection against malicious requests. 

☑️Enforcing 2FA: Require two-factor authentication (2FA) for all users across your websites. 

☑️Cloudflare or Sucuri's CDF: These services distribute traffic to prevent server overloads, improve site performance, and add an extra layer of security.

☑️Using hCaptcha Instead of reCaptcha: Opt for hCaptcha over reCaptcha when possible to enhance user privacy and security. 

☑️Disabling Public SSH Keys: Restrict server access by disabling public SSH keys, allowing only the root admin to log in. 

☑️Monitoring Bandwidth Usage: Run daily bandwidth monitoring to identify abnormal traffic patterns that might indicate a DDoS attack or other issues. 

☑️Adjusting Hosting Account Packages: Modify default server account packages to prevent unlimited space and bandwidth allocations.
