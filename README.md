# RVAI Lab Vibe Coding Starter Kit

A modern web application starter kit created by [Rogue Valley AI Lab](https://rvai.io) and [WhiteRabbit Ashland](https://whiterabbit.ai), optimized for development in [Cursor](https://cursor.sh) and deployment on [Vercel](https://vercel.com).

## Overview

This starter kit provides a complete foundation for building vibe coded applications with web technologies that play well with Vercel–a serverless platform that makes it easy to deploy publicly:

- **Framework**: [Next.js](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Authentication**: Clerk
- **Database**: Neon PostgreSQL
- **ORM**: Drizzle

## Getting Started
There's a lot of details here, but the goal is primarily to give your AI agent the context to take these actions on your behalf. Make sure your cursor agent reads this file when first kickstarting your work. It'll make its work a lot more reliable! 

Note the AI: don't setup anything here until it's actually needed. For instance, don't bother with setting up a database until it's required to build out a feature. Always be conservative with adding complexity!


### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- Git (for cloning the repository)

### Installation and Setup

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/RVAILab/webapp-starter-kit
   cd webapp-starter-kit
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file based on the `.env.example` file:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env.local` file with your own API keys and configuration values.

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result (just a basic NextJS page).

Now you can ask Cursor to build new functionality with the specifics of this tech stack.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a custom font from Vercel.

## Database Setup

This project uses [Neon](https://neon.tech) for PostgreSQL database and [Drizzle ORM](https://orm.drizzle.team) for database access.

### Setup Steps

1. Create a Neon account and project at [neon.tech](https://neon.tech)
2. Get your database connection string from the Neon dashboard
3. update the `DATABASE_URL` with your connection string
4. Generate database migrations:
   ```bash
   npm run db:generate
   ```
5. Apply migrations to your database:
   ```bash
   npm run db:migrate
   ```

### Database Scripts

- `npm run db:generate` - Generate SQL migrations based on your schema changes
- `npm run db:push` - Push schema changes directly to the database (use in development only)
- `npm run db:migrate` - Apply migrations to your database

## UI Components with Shadcn UI

This project uses [Shadcn UI](https://ui.shadcn.com/), a collection of reusable components built with Radix UI and Tailwind CSS.

### Key Features

- Beautifully designed components
- Built with Radix UI primitives
- Styled with Tailwind CSS
- Fully accessible and customizable
- Automatic dark mode support

### Usage

Import components from the `@/components/ui` directory:

```tsx
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Button variant="outline">Click me</Button>
  );
}
```

For more information and documentation, visit [Shadcn UI documentation](https://ui.shadcn.com/docs).

## Authentication with Clerk

This project uses [Clerk](https://clerk.com/) for user authentication and identity management. A basic implementation of login/logout and profile menu is added to the layout file. You'll likely want to customize this furhter.

### Features

- Complete authentication system
- User management
- Multi-session support
- OAuth providers
- Email/password authentication
- Security and compliance out of the box

### Environment Setup

To use Clerk, you need to set up environment variables within your .env.local file (and later on Vercel, if you want to deploy this app to the cloud):

1. Create a Clerk account at [clerk.com](https://clerk.com/)
2. Create a new application in the Clerk dashboard
3. Copy your API keys from the Clerk dashboard
4. Add the required environment variables to your `.env.local` file:

For more information, visit [Clerk documentation](https://clerk.com/docs).

## Development Environment

This starter kit is optimized for development in [Cursor](https://cursor.sh), an AI-powered code editor that enhances productivity with:

- AI code completion
- Intelligent code navigation
- Integrated AI assistance
- TypeScript support
- Git integration

## Cursor Rules for AI-Assisted Development

This starter kit includes special-purpose rules in the `.cursor` directory that enhance AI-assisted development. These rules provide context-aware guidance to Cursor AI when working with specific aspects of the codebase.

### Project-Wide Rules

The `.cursorrules` file at the root of this project provides global guidance to the cursor agent for the entire codebase, including:

- **Technical Standards**: Guidelines for TypeScript usage, Next.js best practices, and mobile-first design
- **Development Approach**: Standardized pacing, scope control, and communication protocols
- **Code Quality**: Enforcement of minimalist implementations and testability-focused development

These global rules ensure consistent coding practices throughout the project and define a structured workflow for AI-assisted development.

### Domain-Specific Rules

In addition to the global rules, specific domain rules are available in the `.cursor/rules/` directory:

- **Database Handling**: Guidelines for working with PostgreSQL and Drizzle ORM, including schema configuration, migrations, and best practices.
- **Dynamic Page Routes**: Instructions for implementing Next.js dynamic routes without type issues, with code examples and proper TypeScript typing.
- **User Interface**: Guidelines for working with Shadcn UI components, including installation commands and best practices.

### How Cursor Rules Work

1. Rules are stored in `.cursor/rules/` as markdown files with YAML frontmatter.
2. Each rule has a description that Cursor AI uses to understand when to apply it.
3. When you're working on a relevant part of the codebase, Cursor AI can fetch these rules to provide context-specific guidance.
4. You can request specific rules using the `fetch_rules` command within Cursor.

### Benefits

- Ensures consistent implementation of patterns across the codebase
- Provides project-specific best practices at your fingertips
- Reduces the need to remember complex implementation details
- Helps new team members get up to speed quickly

## Deployment

This starter kit is designed for seamless deployment on [Vercel](https://vercel.com), the platform from the creators of Next.js.

To deploy your application:

1. Push your code to a GitHub repository
2. Import your repository to Vercel
3. Configure your environment variables
4. Deploy

## About

This starter kit is maintained by [Rogue Valley AI Lab](https://rvai.io) and [WhiteRabbit Ashland](https://whiterabbit.ai), organizations dedicated to advancing AI and web development technologies.

## Learn More

To learn more about the technologies used in this starter kit:

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/docs)
- [Neon Documentation](https://neon.tech/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team/docs)
