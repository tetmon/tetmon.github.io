---
title: 'Our Obsession with Security'
date: '2024-01-10'
author: 'Chris Forno'
---

We already talked about our biggest security advantage in [The Benefits of SaaS without the Downsides](the-benefits-of-sass-without-the-downsides). But we didn’t stop there.

## Security features in EdgeSet
EdgeSet is designed from the ground up to protect your data:

- EdgeSet stores data source credentials (passwords and keys) encrypted. It uses the ChaCha20 cipher designed by the legendary cryptographer DJ Bernstein and selected by Google for use in HTTP/3.
- Every EdgeSet instance uses a unique encryption key. Reverse engineering the EdgeSet source code does not allow attackers to decrypt your credentials.
- EdgeSet uses a type system to guarantee that any sensitive data (i.e. credentials) are automatically scrubbed from memory when they go out of scope. This prevents unencrypted data from being accidentally written to disk.
- EdgeSet does not implicitly cache any data from your data sources. The only data that is held on disk are data for saved queries and visualizations (which are usually aggregated non-identifying data).
- All user passwords are hashed with individual salts using a modern memory-hard hashing function with GPU resistance.
- EdgeSet does not run OpenSSH or allow shell logins of any kind. It does provide a terminal interface that operates over the SSH protocol, but it cannot be escaped to a shell.
- The permissions system (which allows for granting or blocking access down to the column level) applies safe defaults: users are not automatically granted access, even to new data sources.

## Security controls in Tetmon
It’s not enough to design security into the product, we also secure the process of building the product and our software supply chain:

- We review software dependencies (i.e. open source libraries) before inclusion and then “pin” them to a cryptographic hash. Since EdgeSet is built entirely via Nix in a “clean room” environment, no unverified software or data can enter the final product.
- We review all code commits to our Git repositories, and commits are cryptographically signed by our developers.
- We host our own Git and CI/CD (Continuous Integration/Continuous Deployment) servers, rather than trust third-party services not to be compromised. These servers store credentials in RAM only, to mitigate the risk of attacks against the physical hardware. All system software is mounted read-only and verified with cryptographic hashes.
- Our developers do not have SSH access to build servers. For code to make it through the build process, it must go through the Git approval process.
- Before new EdgeSet builds are made available, they are automatically tested inside various simulated networks. The tests not only test the correctness and proper functioning of EdgeSet features, but they also test that the permissions system cannot be circumvented. These tests cannot be bypassed.
- Finally, when new versions of EdgeSet ship, they are cryptographically signed. EdgeSet verifies all updates using an embedded public key, and administrators have full control over whether or not to apply updates.

__If you need military-grade security, contact us about our enterprise license that allows you to run EdgeSet on an air-gapped network.__
