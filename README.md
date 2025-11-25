# KrishiLink — Farmer’s Growth & Connection Platform

**Live Demo:** [https://fanciful-kitten-0501cd.netlify.app/]

---

## Project Overview

KrishiLink is a modern single-page web application (SPA) built to connect people in the agricultural ecosystem — farmers, traders, and consumers — in a friendly social network. Instead of a traditional buyer-seller marketplace, KrishiLink focuses on direct interaction, collaboration, and community — allowing users to post crops, browse listings, and send interest requests to connect and work together.

---

## Key Features

* **Post & Showcase Crops:** Registered users can create crop listings with images, price, unit, estimated quantity, location, and a short description.
* **Discover & Search:** Browse all crops in a responsive grid; search and filter to find the exact crop you need. Shows a clear "No results found" when nothing matches.
* **Send Interest Requests:** Non-owner users can submit structured interest requests (quantity, message, auto-calculated total price). Owners can view, accept, or reject interests.
* **Owner Management:** Crop owners can manage received interests (accept/reject), and when accepted the crop quantity is adjusted accordingly.
* **User Account & Profile:** Email/password and Google sign-in registration and login, with profile editing and persisted private routes.
* **My Posts & My Interests:** Users can manage their own posts (edit/delete) and track all interests they’ve sent in a clean table format.

---

## Why KrishiLink?

* Connects the agricultural community with a social-network approach rather than a pure ecommerce model.
* Encourages collaboration, transparency, and local trade.
* Mobile-first responsive UI so farmers and traders can use it on low-end devices.
* Lightweight and deployable on free hosting platforms (Netlify / Surge / Firebase client, Vercel server).
* Built with real-world requirements: interest management, ownership checks, and robust routing/reload support.

---

## Tech Stack

* **Frontend:** React.js, React Router, Tailwind CSS (or preferred UI library)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Atlas or local)
* **Authentication:** Firebase Authentication (Email/Password + Google)
* **Hosting:** Netlify / Surge / Firebase for client, Vercel for server

---

## Demo Flow (quick)

1. Open the Live Demo : https://fanciful-kitten-0501cd.netlify.app/
2. Register or log in (Google sign-in supported).
3. Add a new crop from **Add Crops** (private route).
4. Visit **All Crops** to search and view crop cards.
5. Click **View Details** on a crop to send interest (if you are not the owner) or manage interests (if you are the owner).

---





## Deployment Notes

* For SPA routing: ensure your hosting provider rewrites all routes to `/index.html` to avoid 404s on reload.
* Add your deployed client domain to Firebase Authentication's authorized domains if you use Firebase Auth.
* Keep environment secrets out of the client. Use server-side verification (optional: Firebase Admin) for protected API routes.
* Make sure to push frequent, descriptive commits. (Client: minimum 15 notable commits, Server: minimum 8 notable commits.)

---

## Project Requirements & Grading Checklist

* Navigation and footer present across pages (except 404).
* Home page includes hero slider, latest 6 crop posts, "How it works", agro news/blogs, and two extra sections.
* All Crops page has search and grid display.
* Crop Details page supports interest creation and received-interest management.
* Authentication, private routes, and persistence on reload for logged-in users.
* CRUD operations for crops with proper owner checks and modals for edit/delete.

---

## Future Improvements

* Add real-time notifications when new interests are created (WebSocket or Firebase Realtime).
* Implement pagination and advanced filtering for the All Crops page.
* Support multi-image crop posts and image upload storage (e.g., Cloudinary).
* Add export/print options for reports and interest histories.

---


