# Booking System Implementation Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Booking Form Functionality](#booking-form-functionality)
3. [Backend Implementation](#backend-implementation)
4. [Admin Dashboard](#admin-dashboard)
5. [Security Measures](#security-measures)
6. [Shared Logic with Contact Form](#shared-logic-with-contact-form)

## Introduction

This document provides a comprehensive explanation of the booking system implementation in our MERN stack restaurant application. The booking system allows authenticated users to make table reservations and provides admin users with the ability to view and manage all bookings.

## Booking Form Functionality

### Step-by-Step Data Flow

1. **Form Initialization**:
   - The booking form is initialized with the `useForm` custom hook that manages form state, validation, and submission.
   - Initial values are set for name, email, datetime, people, and message fields.
   - The form is only accessible to authenticated users; non-authenticated users are redirected to the login page.

2. **Form Validation**:
   - Client-side validation is implemented using the `validateBookingForm` function.
   - The function checks for required fields (name, email, datetime, people) and validates email format.
   - Validation errors are displayed below each form field when the user interacts with them.

3. **Form Submission**:
   - When the user submits the form, the `onSubmit` function is called.
   - The function sets loading state and clears any previous errors.
   - It makes a POST request to the `/api/booking` endpoint with the form data and JWT token for authentication.
   - On success, a success message is displayed using both an alert and a toast notification.
   - On failure, an error message is displayed with details about what went wrong.
   - The form is reset after successful submission.

### Code Breakdown

```jsx
// Form submission handler
const onSubmit = async (formValues) => {
    setIsSubmitting(true);
    setBookingError(null);
    
    try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            },
            body: JSON.stringify(formValues)
        });

        const data = await response.json();

        if (response.ok) {
            // Show success message
            setBookingSuccess(true);
            toast.success('Your booking has been confirmed!');
            
            // Reset form after success
            setTimeout(() => {
                resetForm();
                setBookingSuccess(false);
            }, 3000);
        } else {
            // Show error message
            setBookingError(data.msg || 'Failed to create booking');
            toast.error(data.msg || 'Failed to create booking');
        }
    } catch (err) {
        console.error('Booking error:', err);
        setBookingError('Server error. Please try again.');
        toast.error('Server error. Please try again.');
    } finally {
        setIsSubmitting(false);
    }
};
```

## Backend Implementation

### Database Model

The Booking model is defined in `server/models/Booking.js` with the following schema:

```javascript
const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  datetime: {
    type: Date,
    required: true,
  },
  people: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    trim: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
```

### API Routes

The booking API routes are defined in `server/routes/booking.js` and include:

1. **POST /api/booking**:
   - Creates a new booking
   - Requires authentication (JWT token)
   - Validates input data using express-validator
   - Sanitizes input to prevent XSS attacks
   - Returns the created booking with a success message

2. **GET /api/booking**:
   - Retrieves all bookings
   - Requires authentication and admin role
   - Returns bookings sorted by datetime

3. **GET /api/booking/user**:
   - Retrieves bookings for the authenticated user
   - Requires authentication
   - Returns bookings sorted by datetime

4. **DELETE /api/booking/:id**:
   - Deletes a booking by ID
   - Requires authentication and admin role
   - Returns a success message

5. **GET /api/booking/search**:
   - Searches bookings by name or email
   - Requires authentication and admin role
   - Returns matching bookings sorted by datetime

### Route Protection

All booking routes are protected using middleware:

1. **auth middleware** (`server/middleware/auth.js`):
   - Verifies the JWT token from the request header
   - Sets the user ID in the request object
   - Returns 401 if no token or invalid token

2. **admin middleware** (`server/middleware/admin.js`):
   - Checks if the authenticated user has admin role
   - Used after auth middleware
   - Returns 403 if user is not an admin

## Admin Dashboard

### Admin Booking List Page

The admin booking list page (`src/components/admin/booking.jsx`) provides a UI for admins to view and manage all bookings:

1. **Authentication Check**:
   - Verifies that the user is authenticated and has admin role
   - Redirects to home page if not an admin

2. **Fetching Bookings**:
   - Makes a GET request to `/api/booking` with JWT token
   - Displays bookings in a table format
   - Provides search functionality by name or email

3. **Booking Management**:
   - View detailed booking information in a modal
   - Delete bookings with confirmation
   - Success/error notifications using toast

### Code Breakdown for Admin Check

```jsx
// If not authenticated or not admin, redirect to home
if (!isAuthenticated || !isAdmin) {
  return <Navigate to="/" />;
}
```

## Security Measures

### Client-Side Security

1. **Form Validation**:
   - Input validation for required fields and proper formats
   - Prevents submission of invalid data

2. **Authentication Check**:
   - Booking form only accessible to authenticated users
   - Admin dashboard only accessible to users with admin role

3. **JWT Token Storage**:
   - Token stored in localStorage for authentication
   - Sent with each API request in headers

### Server-Side Security

1. **Input Validation and Sanitization**:
   - express-validator used to validate and sanitize input
   - Prevents XSS attacks and invalid data

2. **JWT Authentication**:
   - Verifies user identity using JWT tokens
   - Tokens expire after 1 hour

3. **Role-Based Access Control**:
   - Admin middleware checks user role
   - Prevents unauthorized access to admin routes

4. **Error Handling**:
   - Proper error messages without exposing sensitive information
   - Consistent error response format

5. **Environment Variables**:
   - Sensitive information stored in .env file
   - MongoDB URI, JWT secret, etc. not hardcoded

## Shared Logic with Contact Form

The booking system shares several patterns and logic with the existing contact form implementation:

1. **Form Handling**:
   - Both use the `useForm` custom hook for form state management
   - Similar validation patterns and error display

2. **API Structure**:
   - Similar route structure (POST for creation, GET for retrieval)
   - Same authentication and authorization patterns

3. **Admin Dashboard**:
   - Similar UI for displaying and managing entries
   - Shared search functionality and deletion confirmation

4. **Security Measures**:
   - Both implement input validation and sanitization
   - Both protect admin routes with the same middleware

5. **Error Handling**:
   - Consistent error display using alerts and toast notifications
   - Similar loading state management

The main differences are in the data model (booking vs. contact) and the requirement for authentication on the booking form (contacts can be submitted by anyone, bookings only by authenticated users).

---

This documentation provides a comprehensive overview of the booking system implementation, from the frontend form to the backend API and database storage, with a focus on security and best practices.