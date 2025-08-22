# 🤖 AI Chatbot with Image Generation

A full-stack AI-powered chatbot application that supports both text conversations and AI image generation. Built with React, Node.js, Express, and MongoDB.

## 🌟 Features

- **AI Text Chat**: Intelligent conversations powered by Gemini 2.0 Flash
- **AI Image Generation**: Create stunning images using ImageKit AI
- **User Authentication**: Secure JWT-based authentication with bcrypt password hashing
- **Credit System**: Users receive credits to use AI features
- **Public Gallery**: Share and view AI-generated images from the community
- **Real-time Chat**: Seamless messaging experience
- **Responsive Design**: Beautiful UI built with Tailwind CSS
- **Payment Integration**: Stripe integration for credit purchases (webhook support)

## 🚀 Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Markdown** - Markdown rendering
- **Prism.js** - Code syntax highlighting

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

### AI & Services
- **OpenAI/Gemini** - Text generation API
- **ImageKit** - Image generation and management
- **Stripe** - Payment processing

## 📁 Project Structure

```
Chatbot/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── context/      # React context
│   │   └── assets/       # Static assets
│   └── package.json
├── server/                # Node.js backend
│   ├── controllers/      # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── configs/         # Configuration files
│   ├── middleware/      # Custom middleware
│   └── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- ImageKit account
- OpenAI/Gemini API key
- Stripe account (optional, for payments)

### 1. Clone the repository
```bash
git clone https://github.com/EmirAkagunduz16/Chatbot.git
cd Chatbot
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the server directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_gemini_api_key

# ImageKit Configuration
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

# Stripe (Optional)
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

Start the backend server:
```bash
npm run server
```

### 3. Frontend Setup
```bash
cd client
npm install
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

## 🔧 API Endpoints

### Authentication
- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - User login
- `GET /api/user/data` - Get user data (protected)

### Chat & Messages
- `POST /api/message/text` - Send text message
- `POST /api/message/image` - Generate AI image
- `GET /api/user/published-images` - Get public gallery images

### Payments (Optional)
- `POST /api/webhook/stripe` - Stripe webhook handler

## 🎨 Features in Detail

### AI Text Chat
- Powered by Gemini 2.0 Flash model
- Context-aware conversations
- Markdown support for formatted responses
- Syntax highlighting for code blocks

### AI Image Generation
- Generate images from text prompts
- Powered by ImageKit AI
- Option to publish images to public gallery
- Automatic image optimization and CDN delivery

### Credit System
- Users start with 20 free credits
- Text messages cost 1 credit
- Image generation costs 2 credits
- Credits can be purchased via Stripe integration

### User Authentication
- Secure JWT-based authentication
- Password hashing with bcryptjs
- Protected routes and middleware
- 30-day token expiration

## 🌐 Environment Variables

Make sure to set up the following environment variables in your `.env` file:

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT tokens |
| `GEMINI_API_KEY` | API key for Gemini AI |
| `IMAGEKIT_PUBLIC_KEY` | ImageKit public key |
| `IMAGEKIT_PRIVATE_KEY` | ImageKit private key |
| `IMAGEKIT_URL_ENDPOINT` | ImageKit URL endpoint |
| `STRIPE_SECRET_KEY` | Stripe secret key (optional) |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret (optional) |

## 🚀 Deployment

### Backend Deployment
1. Deploy to platforms like Heroku, Railway, or DigitalOcean
2. Set environment variables in your hosting platform
3. Ensure MongoDB is accessible from your deployment

### Frontend Deployment
1. Build the React app: `npm run build`
2. Deploy to Vercel, Netlify, or any static hosting service
3. Update API endpoints to point to your deployed backend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Emir Akagunduz**
- GitHub: [@EmirAkagunduz16](https://github.com/EmirAkagunduz16)

## 🙏 Acknowledgments

- OpenAI/Google for AI models
- ImageKit for image generation services
- The React and Node.js communities
- All contributors and users

---

⭐ Don't forget to star this repository if you found it helpful!
