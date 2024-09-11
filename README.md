# Ember E-commerce Platform

Ember is a modern, full-stack e-commerce platform designed to showcase and sell luxury, handcrafted, sustainable furniture.

<!-- add an image of the website -->
<img src="https://hnjusjswsficvzglhkfw.supabase.co/storage/v1/object/public/ember/ember-screenshot.png" alt="Ember Website Screenshot" width="50%" height="50%">

## Live Demo

[Ember Live Demo](https://ember-jade.vercel.app/)

## Technologies Used

- Next.js
- .NET
- PostgreSQL
- AWS
- Vercel
- Supabase

## Project Structure

The project is divided into three main parts:

1. `ember-client`: Next.js frontend application
2. `ember-inventory`: Next.js admin dashboard
3. `ember-backend`: .NET backend API

## Frontend (ember-client)

The frontend is built with Next.js and includes features such as:

- Responsive design
- Product showcases
- User authentication (coming soon)
- Shopping cart functionality (in progress)

### Getting Started

To run the frontend:

```bash
cd ember-client
npm install
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Admin Dashboard (ember-inventory)

The admin dashboard is also built with Next.js and provides features for managing products, orders, and inventory.

### Getting Started

To run the admin dashboard:

```bash
cd ember-inventory
npm install
npm run dev
```

## Backend (ember-backend)

The backend is built with .NET and provides RESTful API endpoints for the frontend and admin dashboard. It is hosted on AWS Elastic Beanstalk.

### Prerequisites

- .NET SDK
- PostgreSQL

### Configuration

Update the connection string in `appsettings.json`:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Port=5432;Database=ember;User Id=postgres;Password=mysecretpassword;"
}
```

### Running the API

To run the API:

```bash
dotnet run
```

The API will be available at `http://localhost:5081` or `https://localhost:7087`.

## Features

- Product catalog with categories
- User authentication and authorization (coming soon)
- Shopping cart and order management (in progress)
- Admin dashboard for inventory management (in progress)
- Ratings and reviews system (in progress)

## Deployment

- Frontend and Admin Dashboard: Can be deployed on Vercel or any static hosting platform
- Backend: Can be deployed on Azure, AWS, or any platform supporting .NET applications
