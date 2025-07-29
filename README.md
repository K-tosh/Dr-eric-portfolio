# Dr. Eric Lugaya Musanyi - Medical Portfolio Website

A modern, responsive portfolio website for Dr. Eric Lugaya Musanyi, a Licensed Clinical Officer providing professional medical care services in Nairobi, Kenya.

## 🩺 About

This portfolio showcases Dr. Eric's medical practice, featuring:
- Home-based medical consultations
- Virtual telemedicine services
- Specialized care in Neurology, ENT, and Infectious Diseases
- 24/7 emergency medical support
- Clinical consultation booking system

## 🚀 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional medical-themed interface
- **Appointment Booking**: Integrated booking system for consultations
- **Service Showcase**: Detailed medical services and specializations
- **SEO Optimized**: Meta tags, structured data, and search engine optimization
- **Performance Optimized**: Fast loading with Next.js optimization
- **Contact Integration**: WhatsApp, phone, and email integration
- **Social Media Ready**: Open Graph and Twitter Card support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Bootstrap 5 + Custom CSS
- **Icons**: IcoFont Icons
- **Language**: JavaScript (ES6+)
- **Package Manager**: npm

## 📁 Project Structure

```
Dr-eric Portfolio/
├── app/                          # Next.js App Router
│   ├── page.jsx                  # Home page
│   ├── layout.jsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── book-appointment/         # Booking page
│   └── coming-soon/              # Coming soon pages
├── components/                   # Reusable React components
│   ├── About/                    # About section
│   ├── Appoinment/              # Appointment component
│   ├── BookAppointment/         # Booking system
│   ├── Consultation/            # Consultation types
│   ├── Counter/                 # Statistics counter
│   ├── FAQ/                     # Frequently asked questions
│   ├── Features/                # Key features
│   ├── Footer/                  # Footer component
│   ├── Header/                  # Navigation header
│   ├── HeroBanner/             # Hero section
│   ├── Services/               # Medical services
│   └── ...
├── public/                     # Static assets
│   ├── images/                 # Image files
│   └── ...
├── .next/                      # Next.js build output
├── package.json               # Dependencies
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Dr-eric Portfolio"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📱 Key Components

### Main Sections
- **[HeroBanner](components/HeroBanner/HeroBanner.jsx)**: Hero section with call-to-action
- **[About](components/About/About.jsx)**: Dr. Eric's background and credentials
- **[Services](components/Services/Services.jsx)**: Medical services offered
- **[Consultation](components/Consultation/Consultation.jsx)**: Consultation types
- **[BookAppointment](components/BookAppointment/BookAppointment.jsx)**: Appointment booking
- **[Footer](components/Footer/Footer.jsx)**: Contact info and quick links

### Pages
- **[Home](app/page.jsx)**: Main landing page
- **[Book Appointment](app/book-appointment/)**: Dedicated booking page
- **[Coming Soon](app/coming-soon/)**: Placeholder pages

## 🎨 Styling

- **Bootstrap 5**: Responsive grid system and components
- **Custom CSS**: Medical-themed styling in [globals.css](app/globals.css)
- **IcoFont Icons**: Medical and general purpose icons
- **Responsive Design**: Mobile-first approach

## 📞 Contact Information

- **Phone**: +254-91-674-164
- **WhatsApp**: [+254-91-674-164](https://wa.me/25491674164)
- **Emergency**: 24/7 Available
- **Service Area**: Nairobi, Kenya

## 🏥 Medical Services

- Clinical Consultations
- Home-Based Medical Care
- Virtual Telemedicine
- Neurological Assessments
- ENT Specialist Care
- Infectious Disease Management
- Laboratory Coordination
- Emergency Medical Support

## 📋 Specializations

- **Neurology**: Specialized neurological care
- **ENT Care**: Ear, Nose, and Throat treatments
- **Infectious Disease**: Disease management and treatment
- **Primary Care**: General medical consultations

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific configurations:

```env
# Add any required environment variables here
NEXT_PUBLIC_SITE_URL=https://drericmusanyi.com
```

### SEO Configuration
SEO settings are configured in [layout.jsx](app/layout.jsx) with:
- Meta descriptions
- Open Graph tags
- Twitter Cards
- Structured data (Schema.org)

## 📈 Performance

- **Next.js Optimization**: Automatic code splitting and optimization
- **Image Optimization**: Optimized image loading
- **Static Generation**: Pre-rendered pages for better performance
- **Responsive Images**: Adaptive image sizes

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

This project is proprietary and confidential. All rights reserved by Dr. Eric Lugaya Musanyi.

## 🤝 Contributing

This is a private medical portfolio. For any updates or modifications, please contact the development team.

## 📞 Support

For technical support or medical inquiries:
- **Development**: Contact the web development team
- **Medical Services**: Call +254-91-674-164
- **Emergency**: 24/7 emergency line available

---

**© 2025 Dr. Eric Musanyi - All rights reserved. Afyascope.co.ke**

*Licensed Clinician providing professional medical care in Nairobi, Kenya*