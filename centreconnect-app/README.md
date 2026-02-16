# CentreConnect - Digital ECD Ecosystem

**South Africa's first digital infrastructure platform for Early Childhood Development centres**

## 🎯 What is CentreConnect?

CentreConnect is a multi-tenant SaaS platform that provides complete digital infrastructure for ECD centres:

- **Professional Websites** - Branded sites for each centre
- **Parent Portal** - Reusable child profiles, multi-centre applications
- **ECD Admin Dashboard** - Manage applications, content, calendar
- **Discovery Directory** - Parents find and compare centres
- **Platform Admin** - Manage all centres, subscriptions, support

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Supabase
- Create project at https://supabase.com
- Run migration from `supabase/migrations/001_initial_schema.sql`
- Configure storage buckets (see SETUP.md)
- Get API keys

### 3. Configure Environment
```bash
cp .env.example .env.local
# Add your Supabase credentials
```

### 4. Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000

## 📚 Documentation

- **SETUP.md** - Complete setup instructions
- **DEPLOYMENT.md** - Production deployment guide
- **supabase/** - Database schema and migrations

## 🏗️ Tech Stack

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend:** Supabase (PostgreSQL + Auth + Storage)
- **UI Components:** Radix UI + shadcn/ui
- **Forms:** React Hook Form + Zod validation
- **State:** Zustand + React Context

## 🔐 Security

- Row-Level Security (RLS) on all tables
- Role-based access control (platform_admin, ecd_admin, parent_user)
- Multi-tenant data isolation via `ecd_id`
- POPIA-compliant child data handling
- Secure file uploads to Supabase Storage

## 📊 Features

### For Parents
- Browse ECD centres
- Create reusable child profiles
- Apply to multiple centres
- Track application status
- Secure document uploads

### For ECD Centres
- Professional branded website
- Application management (review, approve, reject)
- Calendar and events
- Announcements
- Parent communication

### For Platform Admin
- Manage all centres
- Track subscriptions and revenue
- Support ticket system
- Audit logs
- Analytics dashboard

## 🗂️ Project Structure

```
centreconnect/
├── app/                     # Next.js App Router
│   ├── (auth)/             # Login/Register
│   ├── (public)/           # Landing + Directory
│   ├── parent/             # Parent portal
│   ├── ecd/                # ECD admin portal
│   └── admin/              # Platform admin
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── shared/             # Shared components
├── lib/
│   ├── supabase/          # Supabase clients
│   ├── hooks/             # Custom hooks
│   └── validations/       # Zod schemas
├── supabase/
│   └── migrations/        # Database schema
└── public/                # Static assets
```

## 🌍 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy!

See DEPLOYMENT.md for complete instructions.

## 📈 Roadmap

### Phase 1 (MVP) ✅
- Authentication & authorization
- Parent portal with child profiles
- ECD admin application management
- Public directory
- Platform admin dashboard

### Phase 2 (Coming Soon)
- Email notifications
- SMS notifications
- Payment integration
- Advanced analytics
- Mobile app

## 🤝 Support

- **Technical:** jabulani@centreconnect.co.za
- **Business:** mandlenkosi@centreconnect.co.za

## 📄 License

Proprietary - Copyright © 2026 CentreConnect

## 🎉 Getting Help

1. Check SETUP.md for installation issues
2. Check DEPLOYMENT.md for deployment issues
3. Review Supabase logs for database errors
4. Check browser console for client errors
5. Contact support if stuck

---

**Built with ❤️ for Early Childhood Development in South Africa**
