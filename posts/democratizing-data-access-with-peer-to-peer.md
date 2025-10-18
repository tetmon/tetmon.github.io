---
title: Democratizing Data Access with Peer-to-Peer
date: 2024-01-10
description: Find out how Edgeset circumvents networking limitations of self-hosted solutions.
author: Chris Forno
---

A big hurdle for self-hosted software is setting up networking. Firewalls, DNS, TLS… It's a confusing hassle, even for computer network professionals. In EdgeSet, we’ve removed the hassle with our peer-to-peer functionality.


## How it works

If you enable peer-to-peer access, your EdgeSet instance will be reachable at your unique web address (e.g. slz-tkb-ipy.edges.et). You don’t need to open any firewall ports, set up any DNS records, or register a TLS certificate. It just works.

You do not need to install any applications or extensions, peer-to-peer access works from any web browser (on desktop or mobile).


## No server? No problem


Peer-to-peer even works in the desktop version of EdgeSet, so you can share access to reports and analysis **without setting up a server**.

## Security of peer-to-peer access

[We are obsessed with security](our-obsession-with-security) and we built peer-to-peer access with security in mind:

- All network traffic between your EdgeSet instance and peer-to-peer clients is encrypted with industry-standard Datagram Transport Layer Security (DTLS).
- Only "handshake" messages travel through our servers to help establish the network connection. Once the peer-to-peer connection is established, we cannot see any further traffic.
- If the web browser and the EdgeSet instance are on the same private network, the encrypted peer-to-peer traffic does not travel over the public internet.
- By default, your unique web address is random (though you can request a custom subdomain or bring your own domain). Since there are 5,429,503,678,976 possible combinations and we throttle requests, it’s effectively impossible for someone to find your address by guessing or scanning.
