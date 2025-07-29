# Contact Form System with Role-Based Admin Access

## Overview

This document provides a comprehensive breakdown of the contact form system implementation in our MERN stack restaurant application. The system allows users to submit contact forms, which are stored in MongoDB, and provides role-based admin access to view and manage these submissions.

## System Flow

### Contact Form Submission Flow

1. **User fills out the contact form** on the Contact page
2. **Client-side validation** checks for required fields, valid email format, and length constraints
3. **Form submission** sends data to the backend API endpoint
4. **Server-side validation** ensures data integrity and security
5. **Data storage** in MongoDB using the Contact model
6. **Response** sent back to the client with success/error message
7. **UI feedback** shown to the user via an alert message

## File Structure and Purpose

### Backend Files

#### Models

- **`models/User.js`**: Defines the User schema with added `type` field for role-based access
  ```javascript
  type: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
  ```

- **`models/Contact.js`**: Defines the Contact schema for storing form submissions
  ```javascript
  const contactSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now }
  });
  ```

#### Middleware

- **`middleware/auth.js`**: Verifies JWT token and sets `req.user`
  ```javascript
  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
  ```

- **`middleware/admin.js`**: Checks if authenticated user is an admin
  ```javascript
  // Check if user exists and is an admin
  if (!user || user.type !== 'admin') {
    return res.status(403).json({ msg: 'Access denied. Admin privileges required.' });
  }
  ```

#### Routes

- **`routes/contact.js`**: Handles contact form submission and admin-only operations
  - `POST /api/contact`: Public route for submitting contact forms
  - `GET /api/contact`: Admin-only route for retrieving all contacts
  - `DELETE /api/contact/:id`: Admin-only route for deleting a contact
  - `GET /api/contact/search`: Admin-only route for searching contacts

- **`routes/auth.js`**: Updated to include user type in JWT payload
  ```javascript
  const payload = {
    user: {
      id: user.id,
      type: user.type
    }
  };
  ```

#### Server Configuration

- **`server.js`**: Main server file with added security middleware and routes
  ```javascript
  // Middleware
  app.use(express.json());
  app.use(cors());
  app.use(helmet());

  // Routes
  app.use('/api/auth', authRoutes);
  app.use('/api/contact', contactRoutes);
  ```

### Frontend Files

#### Components

- **`components/Contact.jsx`**: Contact form with validation and submission handling
  - Uses `useForm` hook for form state management
  - Implements client-side validation
  - Shows loading spinner during submission
  - Displays success/error alerts

- **`components/Admin.jsx`**: Admin dashboard for viewing and managing contact submissions
  - Protected route (redirects non-admin users)
  - Displays contacts in a table format
  - Implements search functionality
  - Allows viewing full message details in a modal
  - Provides delete functionality

#### Context

- **`context/AuthContext.jsx`**: Authentication context with added admin role check
  ```javascript
  // Check if user is admin
  const isAdmin = user?.type === 'admin';
  ```

#### Navigation

- **`components/miniComponents/Navbar.jsx`**: Updated to conditionally show Admin Dashboard link
  ```javascript
  {isAdmin && (
    <Link 
      to="/admin" 
      className="profile-dropdown-item text-decoration-none"
      onClick={() => setShowProfileDropdown(false)}
    >
      <FaShieldAlt /> Admin Dashboard
    </Link>
  )}
  ```

## Key Logic Explained

### Role-Based Access Control

1. **User Type Storage**: The User model includes a `type` field with possible values 'user' or 'admin'
2. **JWT Payload**: When generating JWT tokens, the user type is included in the payload
3. **Admin Middleware**: The `admin.js` middleware checks if the authenticated user has admin privileges
4. **UI Conditional Rendering**: The Admin Dashboard link only appears for admin users
5. **Route Protection**: The Admin component redirects non-admin users to the home page

### Form Validation

#### Client-Side Validation

```javascript
const validateForm = (values) => {
    const errors = {};
    
    if (!values.name) {
        errors.name = 'Name is required';
    }
    
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Email is invalid';
    }
    
    // Additional validation...
    
    return errors;
};
```

#### Server-Side Validation

```javascript
// Validate input
if (!name || !email || !subject || !message) {
  return res.status(400).json({ msg: 'Please enter all fields' });
}

// Validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  return res.status(400).json({ msg: 'Please enter a valid email address' });
}
```

### Error Handling

```javascript
try {
  // API call or database operation
} catch (error) {
  console.error('Error description:', error);
  // Handle error appropriately
} finally {
  // Clean up (e.g., set loading state to false)
}
```

## Security Best Practices Implemented

1. **Input Validation**: Both client and server-side validation to prevent malicious data
2. **JWT Authentication**: Secure token-based authentication system
3. **Role-Based Access Control**: Restricting sensitive operations to admin users only
4. **Middleware Protection**: Routes protected with authentication and role checks
5. **Error Handling**: Proper error handling to prevent information leakage
6. **HTTP Security Headers**: Using Helmet middleware to set security-related HTTP headers
7. **CORS Configuration**: Controlling cross-origin resource sharing
8. **Environment Variables**: Sensitive information stored in environment variables

## Screenshots

*Note: Add screenshots of the contact form, admin dashboard, and other relevant UI elements here.*

## Conclusion

This contact form system demonstrates a complete implementation of a secure, role-based feature in a MERN stack application. It showcases proper separation of concerns, security best practices, and a smooth user experience.