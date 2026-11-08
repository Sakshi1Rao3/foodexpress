# FoodExpress – Online Food Ordering Platform

FoodExpress is a web-based food ordering application that allows users to explore restaurants, browse food items, add items to their cart, and place orders.

## Features

- User registration and login
- Supabase authentication
- Restaurant and food item browsing
- Shopping cart management
- Order placement and confirmation
- Order history
- User-specific order storage using Supabase

## Tech Stack

- **Frontend:** Next.js, React, TypeScript
- **Styling:** Tailwind CSS
- **Backend & Database:** Supabase
- **Authentication:** Supabase Auth
- **Package Manager:** npm / pnpm

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Sakshi1Rao3/foodexpress.git
cd foodexpress/online\ food
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project folder:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_publishable_or_anon_key
```

Replace the placeholders with your Supabase project credentials.

### 4. Set up the database

Run the SQL script in `supabase/user_orders.sql` using the Supabase SQL Editor.

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Watch Demo


https://github.com/user-attachments/assets/dc03ffdc-f946-4e79-a33e-0a2c7ac73047



