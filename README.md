
# TeamFlow

> A production-style project management platform built to explore and practice modern backend engineering.

TeamFlow is a full-stack project management platform where teams can create organizations, manage members and roles, create projects and boards, assign and track tasks, collaborate through comments and labels, receive notifications, and track activity.

The primary focus of this project is **backend engineering**. The application is being built incrementally to understand how production-style backend systems are designed, structured, secured, tested, optimized, and deployed.

---

## 🚀 Project Goals

The main goal of TeamFlow is not simply to build another CRUD application.

It is designed as a practical backend engineering project to learn and apply:

- TypeScript backend development
- Node.js
- Express.js
- REST API design
- PostgreSQL
- Relational database design
- Authentication
- Authorization
- Role-Based Access Control (RBAC)
- Input validation
- Transactions
- Database indexing
- Query optimization
- Redis
- Caching
- Background jobs
- File uploads
- Notifications
- WebSockets
- Testing
- Docker
- API documentation
- Deployment

The project will grow gradually as new backend concepts are learned.

---

# ✨ Features

## 🔐 Authentication

- User registration
- User login
- Password hashing
- Access tokens
- Refresh tokens
- Logout
- Protected routes
- Password reset
- Email verification

---

## 🏢 Organizations

Users can create and manage organizations.

An organization acts as a workspace for a team.

Example:

```text
Acme Software
│
├── Members
│   ├── Alice
│   ├── Bob
│   └── Charlie
│
├── Website Project
├── Mobile App
└── Backend API
````

---

## 👥 Organization Members

Users can belong to multiple organizations.

Members can have different roles:

```text
OWNER
ADMIN
MEMBER
GUEST
```

The system uses role-based access control to determine what each user can do.

---

## 🔑 Role-Based Access Control

### Owner

Can:

* Manage the organization
* Manage members
* Change member roles
* Create and delete projects
* Delete the organization
* Transfer ownership

### Admin

Can:

* Manage members
* Create projects
* Manage projects
* Manage tasks

Cannot:

* Delete the organization
* Transfer ownership

### Member

Can:

* View projects
* Create tasks
* Edit permitted tasks
* Assign tasks
* Comment
* Upload attachments

### Guest

Can:

* View permitted projects
* View tasks
* Comment where allowed

Cannot:

* Manage the organization
* Manage members
* Create projects

---

# 📁 Projects

Projects belong to organizations.

A project can represent:

* A website
* A mobile application
* A backend system
* A marketing campaign
* A college project
* Any other team initiative

Example:

```text
Organization
    │
    ├── Website Redesign
    ├── Mobile App
    └── Backend API
```

Projects support:

* Creation
* Updating
* Deletion
* Project status
* Start dates
* Deadlines
* Project-level access

---

# 📋 Boards

Projects contain boards used to organize tasks.

Example:

```text
┌────────────┬────────────┬────────────┬────────────┐
│    TODO    │ IN PROGRESS│   REVIEW   │    DONE    │
├────────────┼────────────┼────────────┼────────────┤
│ Task A     │ Task C     │ Task E     │ Task G     │
│ Task B     │ Task D     │ Task F     │ Task H     │
└────────────┴────────────┴────────────┴────────────┘
```

Boards support ordering and task movement.

---

# ✅ Tasks

Tasks are the primary unit of work.

A task can contain:

```text
Title
Description
Status
Priority
Assignee
Due Date
Position
Created By
Created At
Updated At
Completed At
```

### Task Status

```text
TODO
IN_PROGRESS
REVIEW
DONE
```

### Task Priority

```text
LOW
MEDIUM
HIGH
URGENT
```

Tasks support:

* Create
* Read
* Update
* Delete
* Assignment
* Completion
* Moving between boards
* Filtering
* Sorting
* Searching
* Pagination

---

# 💬 Comments

Team members can collaborate through comments on tasks.

Example:

```text
Task: Implement authentication

Alice:
Login endpoint is complete.

Bob:
Can you add refresh tokens?

Alice:
Sure, I'll add them next.
```

Users can:

* Create comments
* View comments
* Edit their comments
* Delete their comments

Administrators may have additional permissions.

---

# 🏷️ Labels

Tasks can have multiple labels.

Example:

```text
bug
frontend
backend
urgent
documentation
feature
```

Labels use a many-to-many relationship:

```text
Tasks
  │
  ▼
Task Labels
  │
  ▼
Labels
```

---

# 📎 Attachments

Tasks can eventually contain file attachments.

Supported file types may include:

```text
PNG
JPG
PDF
TXT
ZIP
```

Attachment metadata includes:

```text
filename
mimeType
size
storageKey
uploadedBy
taskId
createdAt
```

File storage will initially be kept simple and can later be moved to cloud object storage.

---

# 🔔 Notifications

Users can receive notifications for important events.

Examples:

```text
You were assigned a task.

You were mentioned in a comment.

A task assigned to you is due tomorrow.

You received an organization invitation.
```

Notifications support:

* Reading notifications
* Marking notifications as read
* Marking all notifications as read

---

# 📝 Activity Logs

TeamFlow keeps an audit trail of important actions.

Examples:

```text
Jais created task "Implement Authentication"

Jais assigned the task to Alex

Alex changed priority from MEDIUM to HIGH

Sarah moved the task from TODO to REVIEW

Jais added a comment
```

Activity logs help teams understand what happened inside an organization or project.

---

# 🔎 Search, Filtering & Pagination

TeamFlow supports querying tasks using filters.

Examples:

```http
GET /tasks?status=TODO
```

```http
GET /tasks?priority=HIGH
```

```http
GET /tasks?assignedTo=123
```

Multiple filters can be combined:

```http
GET /tasks?status=TODO&priority=HIGH&assignedTo=123
```

Pagination:

```http
GET /tasks?page=2&limit=20
```

Sorting:

```http
GET /tasks?sort=createdAt&order=desc
```

Search:

```http
GET /tasks?search=authentication
```

---

# 🏗️ Architecture

TeamFlow follows a layered backend architecture.

```text
Client
  │
  ▼
Router
  │
  ▼
Middleware
  │
  ▼
Controller
  │
  ▼
Service
  │
  ▼
Repository
  │
  ▼
PostgreSQL
```

### Router

Responsible for defining API endpoints.

Example:

```text
POST /tasks
GET /tasks
GET /tasks/:id
PATCH /tasks/:id
DELETE /tasks/:id
```

### Middleware

Handles cross-cutting concerns such as:

* Authentication
* Authorization
* Validation
* Logging
* Rate limiting

### Controller

Responsible for:

* Reading the HTTP request
* Calling the appropriate service
* Returning the HTTP response

### Service

Contains business logic and rules.

Example:

```text
Can this user assign this task?

Does the assignee belong to the organization?

Should a notification be generated?
```

### Repository

Responsible for database operations.

Example:

```text
findTaskById()
createTask()
updateTask()
deleteTask()
```

### PostgreSQL

Provides persistent relational storage.

---

# 🗄️ Database

PostgreSQL is the primary database.

The expected database structure includes:

```text
users
organizations
organization_members
organization_invitations
projects
boards
tasks
comments
labels
task_labels
attachments
notifications
activity_logs
refresh_tokens
```

Future tables may include:

```text
sessions
project_members
task_watchers
email_verification_tokens
password_reset_tokens
```

---

# 🔗 Database Relationships

A simplified relationship structure:

```text
User
 │
 ├──────────────┐
 │              │
 ▼              ▼
Organization   OrganizationMember
 │
 ▼
Projects
 │
 ▼
Boards
 │
 ▼
Tasks
 ├──────────────► Comments
 ├──────────────► Attachments
 └──────────────► TaskLabels
                       │
                       ▼
                     Labels
```

A user can belong to multiple organizations.

An organization can have multiple users.

Therefore:

```text
Users
  ↕
Organization Members
  ↕
Organizations
```

is a many-to-many relationship.

---

# 🛡️ Security

Security is an important part of TeamFlow.

The backend will implement:

* Password hashing
* Authentication
* Authorization
* Input validation
* Parameterized SQL queries
* Rate limiting
* CORS configuration
* Security headers
* File upload validation
* Request size limits
* Secure token handling
* Environment-based secrets

Sensitive information must never be exposed through API responses or logs.

---

# ⚙️ Validation

All external input should be validated.

Validation will eventually use:

```text
Zod
```

Validation will cover:

* Request body
* Route parameters
* Query parameters
* Authentication input
* File metadata

Example:

```text
POST /tasks

title
description
priority
dueDate
assignee
```

Invalid input should be rejected before business logic executes.

---

# ❌ Error Handling

TeamFlow uses centralized error handling.

API errors should follow a consistent structure.

Example:

```json
{
  "error": {
    "code": "TASK_NOT_FOUND",
    "message": "Task was not found."
  }
}
```

Production responses should not expose:

* Stack traces
* Database errors
* Internal implementation details
* Secrets

---

# 📊 HTTP Status Codes

The API follows standard HTTP status codes.

```text
200 OK
201 Created
204 No Content

400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Entity
429 Too Many Requests

500 Internal Server Error
```

---

# ⚡ Redis

Redis will be introduced after the core backend is functional.

Potential uses include:

### Caching

Cache frequently requested data.

```text
GET /projects/:id
        ↓
Redis
        ↓
PostgreSQL if cache miss
```

### Rate Limiting

Redis can store request counters.

### Pub/Sub

Redis Pub/Sub can eventually help distribute real-time events between multiple backend instances.

---

# 🔄 Background Jobs

TeamFlow will eventually use a queue system such as:

```text
BullMQ
```

Potential background jobs:

```text
Send email
Send deadline reminder
Process uploaded files
Clean expired invitations
Clean expired tokens
Generate reports
```

The API should not wait for long-running background tasks.

Example:

```text
API Request
    ↓
Create Job
    ↓
Return Response
    ↓
Worker
    ↓
Process Job
```

---

# 🔌 WebSockets

Real-time features will be added after the REST API is stable.

Potential events:

```text
TASK_CREATED
TASK_UPDATED
TASK_MOVED
COMMENT_CREATED
USER_ONLINE
USER_OFFLINE
NOTIFICATION_CREATED
```

Example:

```text
User A moves a task
        ↓
Backend
        ↓
WebSocket
        ↓
User B sees the update
```

---

# 🧪 Testing

Testing will be introduced progressively.

## Unit Tests

Test isolated business logic.

Example:

```text
TaskService.assignTask()
```

## Integration Tests

Test the API with the database.

Example:

```text
POST /tasks
```

should create an actual task in the test database.

## Authentication Tests

Test:

```text
Valid login
Invalid password
Expired token
Missing token
Unauthorized access
```

## Authorization Tests

Verify:

```text
OWNER
ADMIN
MEMBER
GUEST
```

have the correct permissions.

---

# 🐳 Docker

Eventually TeamFlow will run using Docker.

Development environment:

```text
┌──────────────────┐
│   Node Backend   │
└────────┬─────────┘
         │
┌────────▼─────────┐
│    PostgreSQL    │
└──────────────────┘
```

Later:

```text
Backend
PostgreSQL
Redis
Background Worker
```

Docker Compose will be used for local development.

---

# 📚 API Documentation

The API will eventually be documented using:

```text
OpenAPI / Swagger
```

Documentation will include:

* Endpoints
* Request parameters
* Request bodies
* Responses
* Authentication
* Errors
* Examples

---

# 🛠️ Tech Stack

## Backend

* Node.js
* TypeScript
* Express.js

## Database

* PostgreSQL

## Database Driver

* `pg`

## Validation

* Zod

## Authentication

* JWT
* Secure cookies where appropriate
* Password hashing

## Caching

* Redis

## Background Jobs

* BullMQ

## Real-Time

* WebSockets

## Testing

* Vitest
* Supertest

## Infrastructure

* Docker
* Docker Compose

## Documentation

* OpenAPI
* Swagger

---

# 📂 Planned Project Structure

```text
teamflow/
│
├── src/
│   │
│   ├── config/
│   │   ├── env.ts
│   │   └── database.ts
│   │
│   ├── middleware/
│   │   ├── auth.ts
│   │   ├── errorHandler.ts
│   │   ├── validation.ts
│   │   └── rateLimiter.ts
│   │
│   ├── modules/
│   │   │
│   │   ├── auth/
│   │   ├── users/
│   │   ├── organizations/
│   │   ├── projects/
│   │   ├── boards/
│   │   ├── tasks/
│   │   ├── comments/
│   │   ├── labels/
│   │   ├── attachments/
│   │   ├── notifications/
│   │   └── activity/
│   │
│   ├── database/
│   │   ├── schema/
│   │   ├── migrations/
│   │   └── seed.ts
│   │
│   ├── jobs/
│   │
│   ├── websocket/
│   │
│   ├── utils/
│   │
│   ├── app.ts
│   └── server.ts
│
├── tests/
│
├── .env
├── .env.example
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── README.md
```

The structure may evolve as the project grows.

---

# 🗺️ Development Roadmap

## Phase 1 — Foundation

* [ ] Initialize project
* [ ] Configure TypeScript
* [ ] Configure Express
* [ ] Configure environment variables
* [ ] Configure PostgreSQL
* [ ] Create connection pool
* [ ] Add basic middleware
* [ ] Add logging
* [ ] Add error handling
* [ ] Add 404 handling
* [ ] Create health endpoint

---

## Phase 2 — Database Foundation

* [ ] Design initial schema
* [ ] Create users table
* [ ] Create organizations table
* [ ] Create organization_members table
* [ ] Add constraints
* [ ] Add indexes
* [ ] Add migrations
* [ ] Add seed data

---

## Phase 3 — Architecture

* [ ] Create routes
* [ ] Create controllers
* [ ] Create services
* [ ] Create repositories
* [ ] Define module boundaries
* [ ] Implement consistent API responses

---

## Phase 4 — Authentication

* [ ] Registration
* [ ] Password hashing
* [ ] Login
* [ ] Access tokens
* [ ] Refresh tokens
* [ ] Authentication middleware
* [ ] Logout
* [ ] Password reset
* [ ] Email verification

---

## Phase 5 — Authorization

* [ ] Organization roles
* [ ] Permission checks
* [ ] Resource-level authorization
* [ ] Owner permissions
* [ ] Admin permissions
* [ ] Member permissions
* [ ] Guest permissions

---

## Phase 6 — Organizations

* [ ] Create organization
* [ ] List organizations
* [ ] Get organization
* [ ] Update organization
* [ ] Delete organization
* [ ] Invite members
* [ ] Accept invitations
* [ ] Remove members
* [ ] Change member roles

---

## Phase 7 — Projects

* [ ] Create project
* [ ] List projects
* [ ] Get project
* [ ] Update project
* [ ] Delete project
* [ ] Project permissions

---

## Phase 8 — Boards

* [ ] Create board
* [ ] List boards
* [ ] Update board
* [ ] Delete board
* [ ] Reorder boards

---

## Phase 9 — Tasks

* [ ] Create task
* [ ] Get task
* [ ] Update task
* [ ] Delete task
* [ ] Assign task
* [ ] Move task
* [ ] Complete task
* [ ] Filter tasks
* [ ] Sort tasks
* [ ] Search tasks
* [ ] Paginate tasks

---

## Phase 10 — Collaboration

* [ ] Comments
* [ ] Labels
* [ ] Task-label relationships
* [ ] Activity logs
* [ ] Attachments

---

## Phase 11 — Notifications

* [ ] Notification creation
* [ ] Notification listing
* [ ] Mark notification as read
* [ ] Mark all as read
* [ ] Email notifications
* [ ] Deadline reminders

---

## Phase 12 — Advanced Backend

* [ ] Redis
* [ ] Caching
* [ ] Rate limiting
* [ ] Background jobs
* [ ] BullMQ
* [ ] File uploads
* [ ] Structured logging

---

## Phase 13 — Testing

* [ ] Unit tests
* [ ] Integration tests
* [ ] Authentication tests
* [ ] Authorization tests
* [ ] Database tests
* [ ] Error-case tests

---

## Phase 14 — Real-Time

* [ ] WebSocket server
* [ ] User presence
* [ ] Real-time task updates
* [ ] Real-time comments
* [ ] Real-time notifications

---

## Phase 15 — Deployment

* [ ] Dockerfile
* [ ] Docker Compose
* [ ] Production environment configuration
* [ ] Production PostgreSQL
* [ ] Redis
* [ ] Background worker
* [ ] API deployment
* [ ] Monitoring
* [ ] API documentation
* [ ] Production README

---

# 🎯 MVP Scope

The first TeamFlow release will intentionally be smaller.

### MVP includes:

* Authentication
* Organizations
* Organization members
* Roles
* Projects
* Boards
* Tasks
* Task assignment
* Comments
* Basic filtering
* Sorting
* Pagination

### Not part of the initial MVP:

* Redis
* WebSockets
* BullMQ
* Email
* Complex notifications
* File uploads
* Advanced analytics
* Production scaling

These will be introduced after the core application is stable.

---

# 🔄 Development Philosophy

TeamFlow is being developed as a learning project.

The goal is:

```text
Problem
   ↓
Understand the concept
   ↓
Choose a solution
   ↓
Implement
   ↓
Test
   ↓
Measure
   ↓
Refactor
```

Technologies should not be introduced simply because they are popular.

For example:

### Need caching

```text
Slow repeated queries
        ↓
Understand caching
        ↓
Learn Redis
        ↓
Implement caching
        ↓
Measure the result
```

### Need background processing

```text
Email shouldn't block API
        ↓
Understand queues
        ↓
Learn BullMQ
        ↓
Implement worker
```

### Need real-time updates

```text
Users need live updates
        ↓
Understand WebSockets
        ↓
Implement real-time events
```

---

# 🧠 Learning Objectives

By completing TeamFlow, the goal is to be able to understand and explain:

* How a production backend is structured
* How HTTP requests flow through an application
* How REST APIs are designed
* How authentication works
* How authorization differs from authentication
* How relational databases are designed
* How PostgreSQL interacts with Node.js
* Why repositories and services exist
* How transactions protect data consistency
* How indexes improve query performance
* How caching works
* How background jobs work
* How WebSockets work
* How backend applications are tested
* How Docker is used
* How backend applications are deployed
* How production systems handle failures

---

# 📈 Future Architecture

The eventual architecture will look approximately like:

```text
                         ┌───────────────────┐
                         │   React Client    │
                         └─────────┬─────────┘
                                   │
                          HTTP / WebSocket
                                   │
                                   ▼
                    ┌─────────────────────────┐
                    │      Node + Express     │
                    │                         │
                    │ Authentication          │
                    │ Authorization            │
                    │ Validation              │
                    │ Controllers              │
                    │ Services                 │
                    │ Repositories             │
                    └───────┬─────────┬───────┘
                            │         │
                  ┌─────────┘         └─────────┐
                  ▼                             ▼
          ┌───────────────┐              ┌──────────────┐
          │  PostgreSQL   │              │    Redis     │
          │               │              │              │
          │ Users         │              │ Cache        │
          │ Organizations │              │ Rate limits  │
          │ Projects      │              │ Pub/Sub      │
          │ Tasks         │              │              │
          │ Comments      │              └──────────────┘
          └───────────────┘
                  │
                  ▼
          ┌──────────────────┐
          │ Background       │
          │ Workers          │
          │                  │
          │ BullMQ           │
          │ Emails           │
          │ Notifications    │
          │ Cleanup Jobs     │
          └──────────────────┘
```

---

# 🏁 Definition of Done

TeamFlow will be considered complete when:

### Backend

* [ ] Authentication works
* [ ] Refresh tokens work
* [ ] Organizations work
* [ ] Roles and permissions work
* [ ] Invitations work
* [ ] Projects work
* [ ] Boards work
* [ ] Tasks work
* [ ] Comments work
* [ ] Labels work
* [ ] Attachments work
* [ ] Notifications work
* [ ] Activity logs work
* [ ] Search works
* [ ] Filtering works
* [ ] Pagination works
* [ ] Validation works
* [ ] Centralized error handling works

### Database

* [ ] Schema is properly designed
* [ ] Foreign keys are enforced
* [ ] Constraints are used
* [ ] Appropriate indexes exist
* [ ] Transactions are used where required
* [ ] Query performance has been investigated
* [ ] Migrations exist
* [ ] Seed data exists

### Infrastructure

* [ ] Docker works
* [ ] Docker Compose works
* [ ] Redis works
* [ ] Background workers work
* [ ] Environment configuration is secure
* [ ] Production deployment works

### Quality

* [ ] Unit tests exist
* [ ] Integration tests exist
* [ ] Authentication is tested
* [ ] Authorization is tested
* [ ] API documentation exists
* [ ] README is complete
* [ ] No secrets are committed
* [ ] Structured logging is implemented

---

# 📌 Current Status

```text
TypeScript               ✅
PostgreSQL               ✅
Node.js                  ✅
Express.js               ✅
Node + PostgreSQL        ✅

TeamFlow Foundation      🔄 In Progress
Authentication           ⏳
Authorization            ⏳
Organizations            ⏳
Projects                 ⏳
Boards                   ⏳
Tasks                    ⏳
Comments                 ⏳
Labels                   ⏳
Activity Logs            ⏳
Notifications            ⏳
Redis                    ⏳
Background Jobs          ⏳
Testing                  ⏳
Docker                   ⏳
WebSockets               ⏳
Deployment               ⏳
```

---

# 📜 License

This project is licensed under the MIT License.

See the [LICENSE](LICENSE) file for details.
