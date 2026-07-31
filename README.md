# Pablo Embarach - Portfolio

> Full stack personal portfolio built with Angular 21 + Spring Boot, 
> self-hosted on Oracle Cloud.

🔗 **Live:** [pabloembarach.duckdns.org](https://pabloembarach.duckdns.org)

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | Angular 21 · Ionic 7 · TypeScript · SCSS |
| Backend | Java 23 · Spring Boot 3 · REST API · JavaMail |
| Infrastructure | Oracle Cloud · Nginx · Let's Encrypt SSL · systemd |
| CI/CD | GitHub Actions |

## Features

- 🎨 Responsive single-page design with dark slate + cyan theme
- 📬 Working contact form - form submissions delivered via Gmail SMTP
- 🔒 HTTPS with auto-renewing Let's Encrypt certificate
- ⚙️ Backend runs as a systemd service - survives reboots automatically
- 🚀 CI pipeline runs on every push - builds frontend and runs backend tests

## Project Structure

pablo-portfolio/

├── frontend/ # Angular 21 + Ionic 7 SPA

│ ├── src/app/

│ │ └── home/

│ │ └── components/

│ │ ├── hero/ # Fixed header with nav

│ │ ├── projects/ # Project cards grid

│ │ └── contact/ # Reactive form + HttpClient

│ └── src/environments/ # Dev and prod API URLs

└── backend/

└── portfolio/ # Spring Boot 3 REST API

└── src/main/java/

└── com/pabloembarach/portfolio/

├── controller/ # ContactController

├── service/ # EmailService

├── dto/ # ContactRequest (validated)

└── config/ # CORS configuration

## Local Development

**Prerequisites:** Node 22+, Java 21+, Maven 3.9+

```bash
# Frontend
cd frontend
ionic serve              # runs on http://localhost:8100

# Backend
cd backend/portfolio
mvn spring-boot:run      # runs on http://localhost:8080
```

**Environment variables required for backend:**

MAIL_USERNAME=your.email@gmail.com

MAIL_PASSWORD=your-gmail-app-password

## Deployment

Hosted on Oracle Cloud Free Tier (VM.Standard.A1.Flex):
- Nginx serves the Angular production build and proxies `/api/` to Spring Boot
- Spring Boot runs as a systemd service
- SSL via Certbot with auto-renewal

## Lighthouse Scores

| Category | Score |
|---|---|
| Performance | 93 |
| Accessibility | 95 |
| Best Practices | 100 |
| SEO | 91 |

---

Built by [Pablo Embarach](https://pabloembarach.duckdns.org) · Dublin, Ireland
