# GitHub Copilot Agent Instructions for OctoFit Tracker

## Project Overview
- **OctoFit Tracker** is a fitness app with a Django backend and React frontend.
- Key features: user authentication, activity logging, team management, leaderboards, and personalized workout suggestions.

## Architecture
- **Backend:**
  - Located in `octofit-tracker/backend/`.
  - Uses Django REST Framework, djongo for MongoDB, and allauth for authentication.
  - Main app: `octofit_tracker/` (core settings, URLs), `tracker/` (models, views, serializers).
  - Data migrations and management commands in `tracker/migrations/` and `octofit_tracker/management/commands/`.
  - MongoDB integration: expects server at `localhost:27017`.
- **Frontend:**
  - Located in `octofit-tracker/frontend/`.
  - Uses React, with main components in `src/components/`.

## Developer Workflows
- **Backend Setup:**
  - Create venv: `python3 -m venv octofit-tracker/backend/venv`.
  - Activate venv (PowerShell): `& .\octofit-tracker\backend\venv\Scripts\Activate.ps1`.
  - Install dependencies: `pip install -r octofit-tracker/backend/requirements.txt`.
  - Run server: `python octofit-tracker/backend/manage.py runserver 8000`.
- **MongoDB:**
  - Ensure MongoDB is running on `localhost:27017`.
  - Check with: `ps aux | grep mongod` (Linux/macOS) or use MongoDB Compass/Services (Windows).
- **Frontend Setup:**
  - Install dependencies: `npm install` in `octofit-tracker/frontend/`.
  - Start dev server: `npm start` (runs on port 3000).

## Patterns & Conventions
- **Ports:** Only 8000 (backend), 3000 (frontend), 27017 (MongoDB) are used and exposed.
- **Database:** Use Django ORM for schema/data, not direct MongoDB scripts.
- **Authentication:** Uses `django-allauth` and `dj-rest-auth` for user management.
- **API:** REST endpoints defined in `tracker/views.py` and `tracker/serializers.py`.
- **Management Commands:** Custom scripts in `octofit_tracker/management/commands/` (e.g., `populate_db.py`).

## Integration Points
- **Backend/Frontend:** Communicate via REST API (CORS enabled).
- **MongoDB:** Integrated via djongo; all schema/data managed through Django.

## Examples
- To add a new model: edit `tracker/models.py`, run `python manage.py makemigrations`, then `python manage.py migrate`.
- To add a new API endpoint: update `tracker/views.py` and `tracker/serializers.py`.

## References
- Backend: `octofit-tracker/backend/octofit_tracker/`, `octofit-tracker/backend/tracker/`
- Frontend: `octofit-tracker/frontend/src/components/`
- Management commands: `octofit-tracker/backend/octofit_tracker/management/commands/`

---

**Feedback requested:**
- Are any workflows, conventions, or integration points unclear or missing?
- Let us know if you need more examples or details for any section.
