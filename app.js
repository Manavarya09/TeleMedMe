// Application Data
const appData = {
  users: [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@medicenter.com",
      role: "doctor",
      specialization: "Cardiology",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150",
      verified: true,
      rating: 4.8,
      experience: "10 years",
      phone: "+1-555-0123"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      email: "michael.chen@medicenter.com",
      role: "doctor",
      specialization: "Neurology",
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150",
      verified: true,
      rating: 4.9,
      experience: "15 years",
      phone: "+1-555-0124"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.rodriguez@patient.com",
      role: "patient",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=150",
      phone: "+1-555-0125",
      dateOfBirth: "1985-03-15",
      emergencyContact: "+1-555-0126"
    },
    {
      id: 4,
      name: "James Wilson",
      email: "james.wilson@patient.com",
      role: "patient",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      phone: "+1-555-0127",
      dateOfBirth: "1978-11-22",
      emergencyContact: "+1-555-0128"
    },
    {
      id: 5,
      name: "Admin User",
      email: "admin@medicenter.com",
      role: "admin",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      phone: "+1-555-0100"
    }
  ],
  appointments: [
    {
      id: 1,
      patientId: 3,
      doctorId: 1,
      date: "2025-06-18",
      time: "10:00",
      duration: 30,
      type: "Video Consultation",
      status: "scheduled",
      reason: "Follow-up consultation",
      notes: "Patient reports improved symptoms"
    },
    {
      id: 2,
      patientId: 4,
      doctorId: 2,
      date: "2025-06-19",
      time: "14:30",
      duration: 45,
      type: "Video Consultation",
      status: "completed",
      reason: "Neurological assessment",
      notes: "Comprehensive neurological evaluation completed"
    },
    {
      id: 3,
      patientId: 3,
      doctorId: 1,
      date: "2025-06-20",
      time: "09:00",
      duration: 30,
      type: "Video Consultation",
      status: "pending",
      reason: "Routine checkup",
      notes: ""
    }
  ],
  prescriptions: [
    {
      id: 1,
      patientId: 3,
      doctorId: 1,
      appointmentId: 2,
      medication: "Lisinopril 10mg",
      dosage: "Once daily",
      duration: "30 days",
      instructions: "Take with food",
      dateIssued: "2025-06-17",
      status: "active"
    },
    {
      id: 2,
      patientId: 4,
      doctorId: 2,
      appointmentId: 2,
      medication: "Gabapentin 300mg",
      dosage: "Three times daily",
      duration: "14 days",
      instructions: "May cause drowsiness",
      dateIssued: "2025-06-16",
      status: "active"
    }
  ],
  medicalRecords: [
    {
      id: 1,
      patientId: 3,
      doctorId: 1,
      date: "2025-06-17",
      type: "Consultation Notes",
      title: "Cardiac Follow-up",
      content: "Patient shows significant improvement in cardiovascular symptoms. Blood pressure well controlled.",
      attachments: ["ecg_report.pdf", "blood_test_results.pdf"]
    },
    {
      id: 2,
      patientId: 4,
      doctorId: 2,
      date: "2025-06-16",
      type: "Diagnostic Report",
      title: "Neurological Assessment",
      content: "Comprehensive neurological evaluation shows no significant abnormalities. Patient reports reduced frequency of headaches.",
      attachments: ["mri_scan.pdf", "neurological_tests.pdf"]
    }
  ],
  payments: [
    {
      id: 1,
      patientId: 3,
      appointmentId: 1,
      amount: 150.00,
      currency: "USD",
      status: "completed",
      paymentMethod: "Credit Card",
      transactionId: "txn_1234567890",
      date: "2025-06-17",
      description: "Video consultation with Dr. Sarah Johnson"
    },
    {
      id: 2,
      patientId: 4,
      appointmentId: 2,
      amount: 200.00,
      currency: "USD",
      status: "completed",
      paymentMethod: "Credit Card",
      transactionId: "txn_1234567891",
      date: "2025-06-16",
      description: "Neurological consultation with Dr. Michael Chen"
    }
  ],
  notifications: [
    {
      id: 1,
      userId: 3,
      title: "Appointment Reminder",
      message: "Your appointment with Dr. Sarah Johnson is scheduled for tomorrow at 10:00 AM",
      type: "reminder",
      read: false,
      createdAt: "2025-06-17T20:00:00Z"
    },
    {
      id: 2,
      userId: 1,
      title: "New Appointment Request",
      message: "Emily Rodriguez has requested an appointment for June 20th",
      type: "appointment",
      read: false,
      createdAt: "2025-06-17T15:30:00Z"
    }
  ],
  systemSettings: {
    platformName: "TeleMed Pro",
    version: "2.1.0",
    maintenanceMode: false,
    hipaaCompliant: true,
    encryptionEnabled: true,
    auditLogging: true,
    dataRetentionDays: 2555
  }
};

// Current User Session Management
let currentUser = null;
let currentUserToken = null;
let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// DOM Elements
const authContainer = document.getElementById('auth-container');
const appContainer = document.getElementById('app-container');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const forgotPasswordForm = document.getElementById('forgot-password-form');
const twoFactorForm = document.getElementById('2fa-form');
const patientNav = document.getElementById('patient-nav');
const doctorNav = document.getElementById('doctor-nav');
const adminNav = document.getElementById('admin-nav');
const userAvatar = document.getElementById('user-avatar');
const userName = document.getElementById('user-name');
const userRole = document.getElementById('user-role');
const themeToggle = document.getElementById('theme-toggle');
const notificationBell = document.getElementById('notification-bell');
const notificationsPanel = document.getElementById('notifications-panel');
const notificationsList = document.getElementById('notifications-list');
const notificationIndicator = document.getElementById('notification-indicator');
const markAllRead = document.getElementById('mark-all-read');
const breadcrumb = document.getElementById('breadcrumb');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mainNav = document.querySelector('.main-nav');
const logoutButton = document.getElementById('logout-button');
const loadingOverlay = document.getElementById('loading-overlay');
const toastContainer = document.getElementById('toast-container');

// Content Pages
const pages = document.querySelectorAll('.content-page');

// Modal Elements
const appointmentModal = document.getElementById('appointment-modal');
const paymentModal = document.getElementById('payment-modal');
const prescriptionModal = document.getElementById('prescription-modal');

// Forms
const appointmentForm = document.getElementById('appointment-form');
const paymentForm = document.getElementById('payment-form');
const prescriptionForm = document.getElementById('prescription-form');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  // Set initial theme
  updateTheme();
  
  // Show login form initially
  showAuthForm('login-form');
  
  // Setup Event Listeners
  setupEventListeners();
  
  // Populate page data
  populateCalendarGrid();
  setupCharts();
  
  // Check for stored credentials
  checkForStoredAuth();
});

// Event Listeners Setup
function setupEventListeners() {
  // Auth form navigation
  document.getElementById('register-link').addEventListener('click', (e) => {
    e.preventDefault();
    showAuthForm('register-form');
  });
  
  document.getElementById('login-link').addEventListener('click', (e) => {
    e.preventDefault();
    showAuthForm('login-form');
  });
  
  document.getElementById('forgot-password-link').addEventListener('click', (e) => {
    e.preventDefault();
    showAuthForm('forgot-password-form');
  });
  
  document.getElementById('back-to-login').addEventListener('click', (e) => {
    e.preventDefault();
    showAuthForm('login-form');
  });
  
  // Form submissions
  document.getElementById('login-form-element').addEventListener('submit', handleLogin);
  document.getElementById('register-form-element').addEventListener('submit', handleRegister);
  document.getElementById('forgot-password-form-element').addEventListener('submit', handlePasswordReset);
  document.getElementById('2fa-form-element').addEventListener('submit', handle2FAVerification);
  
  // Navigation
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', handleNavigation);
  });
  
  // Page-specific buttons with data-page attribute
  document.querySelectorAll('[data-page]').forEach(element => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPage = e.currentTarget.getAttribute('data-page');
      navigateTo(targetPage);
    });
  });
  
  // Theme toggle
  themeToggle.addEventListener('click', toggleTheme);
  
  // Notification panel toggle
  notificationBell.addEventListener('click', toggleNotificationsPanel);
  document.addEventListener('click', (e) => {
    if (!notificationsPanel.contains(e.target) && !notificationBell.contains(e.target)) {
      notificationsPanel.classList.add('hidden');
    }
  });
  
  // Mark all notifications as read
  markAllRead.addEventListener('click', markAllNotificationsAsRead);
  
  // Mobile menu toggle
  mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  
  // Logout button
  logoutButton.addEventListener('click', handleLogout);
  
  // Modal close buttons
  document.querySelectorAll('.modal-close, [data-dismiss="modal"]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.modal-container').forEach(modal => {
        modal.classList.add('hidden');
      });
    });
  });
  
  // Appointment booking
  document.getElementById('book-appointment-btn')?.addEventListener('click', openAppointmentModal);
  document.getElementById('book-appointment')?.addEventListener('click', handleBookAppointment);
  
  // Payment processing
  document.getElementById('process-payment')?.addEventListener('click', handlePaymentSubmission);
  
  // Prescription creation
  document.getElementById('save-prescription')?.addEventListener('click', handlePrescriptionSubmission);
  
  // Password visibility toggle
  document.querySelectorAll('.password-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      const passwordInput = e.currentTarget.previousElementSibling;
      const icon = e.currentTarget.querySelector('i');
      
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    });
  });
  
  // Tab navigation
  document.querySelectorAll('.tab-btn').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const tabGroup = e.currentTarget.closest('.tab-navigation');
      const tabs = tabGroup.querySelectorAll('.tab-btn');
      const tabContents = tabGroup.closest('.card').querySelectorAll('.tab-content');
      const targetTab = e.currentTarget.getAttribute('data-tab');
      
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(content => content.classList.add('hidden'));
      
      e.currentTarget.classList.add('active');
      document.getElementById(`${targetTab}-tab`)?.classList.remove('hidden');
    });
  });
  
  // Verification code inputs
  const verificationInputs = document.querySelectorAll('.verification-input');
  verificationInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      if (e.target.value.length === 1 && index < verificationInputs.length - 1) {
        verificationInputs[index + 1].focus();
      }
    });
    
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && e.target.value.length === 0 && index > 0) {
        verificationInputs[index - 1].focus();
      }
    });
  });
  
  // Card number formatting
  const cardNumberInput = document.getElementById('card-number');
  if (cardNumberInput) {
    cardNumberInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      let formattedValue = '';
      
      for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formattedValue += ' ';
        }
        formattedValue += value[i];
      }
      
      e.target.value = formattedValue;
    });
  }
  
  // Expiry date formatting
  const expiryDateInput = document.getElementById('expiry-date');
  if (expiryDateInput) {
    expiryDateInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      
      if (value.length > 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
      }
      
      e.target.value = value;
    });
  }
}

// Authentication Functions
function showAuthForm(formId) {
  document.querySelectorAll('.auth-form').forEach(form => {
    form.classList.add('hidden');
  });
  document.getElementById(formId).classList.remove('hidden');
}

function handleLogin(e) {
  e.preventDefault();
  showLoading();
  
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  // Simulate login delay
  setTimeout(() => {
    const user = appData.users.find(u => u.email === email);
    
    if (user) {
      // Show 2FA for simulation purposes
      hideLoading();
      showAuthForm('2fa-form');
    } else {
      hideLoading();
      showToast('Error', 'Invalid email or password', 'error');
    }
  }, 1000);
}

function handleRegister(e) {
  e.preventDefault();
  showLoading();
  
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const role = document.getElementById('register-role').value;
  const consent = document.getElementById('privacy-consent').checked;
  
  if (!name || !email || !password || !role || !consent) {
    hideLoading();
    showToast('Error', 'Please fill in all fields and accept the terms', 'error');
    return;
  }
  
  // Simulate registration delay
  setTimeout(() => {
    hideLoading();
    showToast('Success', 'Account created successfully! Please check your email for verification.', 'success');
    showAuthForm('login-form');
  }, 1000);
}

function handlePasswordReset(e) {
  e.preventDefault();
  showLoading();
  
  const email = document.getElementById('reset-email').value;
  
  // Simulate password reset delay
  setTimeout(() => {
    hideLoading();
    showToast('Success', 'Password reset link sent to your email!', 'success');
    showAuthForm('login-form');
  }, 1000);
}

function handle2FAVerification(e) {
  e.preventDefault();
  showLoading();
  
  const inputs = document.querySelectorAll('.verification-input');
  let code = '';
  
  inputs.forEach(input => {
    code += input.value;
  });
  
  if (code.length !== 6) {
    hideLoading();
    showToast('Error', 'Please enter the complete verification code', 'error');
    return;
  }
  
  // Simulate 2FA verification delay
  setTimeout(() => {
    // For demo purposes, we'll use the first user in the data
    const email = document.getElementById('login-email').value;
    const user = appData.users.find(u => u.email === email) || appData.users[0];
    
    currentUser = user;
    currentUserToken = 'sample_jwt_token_' + Date.now();
    
    hideLoading();
    initializeUserSession(user);
  }, 1000);
}

function handleLogout() {
  showLoading();
  
  // Simulate logout delay
  setTimeout(() => {
    currentUser = null;
    currentUserToken = null;
    
    // Reset the login form
    document.getElementById('login-form-element').reset();
    
    // Show auth container
    authContainer.classList.remove('hidden');
    appContainer.classList.add('hidden');
    
    hideLoading();
    showToast('Success', 'Logged out successfully', 'success');
  }, 500);
}

function checkForStoredAuth() {
  // In a real app, we would check for JWT in localStorage or cookies
  // For this demo, we'll just simulate no stored credentials
  return false;
}

// Session Initialization
function initializeUserSession(user) {
  // Set user info
  userAvatar.src = user.avatar;
  userName.textContent = user.name;
  userRole.textContent = user.role;
  
  // Show appropriate navigation based on role
  patientNav.classList.add('hidden');
  doctorNav.classList.add('hidden');
  adminNav.classList.add('hidden');
  
  if (user.role === 'patient') {
    patientNav.classList.remove('hidden');
    navigateTo('patient-dashboard');
    populatePatientDashboard(user);
  } else if (user.role === 'doctor') {
    doctorNav.classList.remove('hidden');
    navigateTo('doctor-dashboard');
    populateDoctorDashboard(user);
  } else if (user.role === 'admin') {
    adminNav.classList.remove('hidden');
    navigateTo('admin-dashboard');
    populateAdminDashboard();
  }
  
  // Load notifications
  loadUserNotifications(user.id);
  
  // Show app container
  authContainer.classList.add('hidden');
  appContainer.classList.remove('hidden');
}

// Navigation
function handleNavigation(e) {
  e.preventDefault();
  const targetPage = e.currentTarget.getAttribute('data-page');
  navigateTo(targetPage);
}

function navigateTo(pageId) {
  // Hide all pages
  pages.forEach(page => {
    page.classList.add('hidden');
  });
  
  // Show target page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.remove('hidden');
    updateBreadcrumb(pageId);
    
    // Handle page-specific data loading
    loadPageData(pageId);
    
    // Close mobile menu if open
    if (window.innerWidth < 768) {
      mainNav.classList.remove('open');
    }
    
    // Update active navigation item
    document.querySelectorAll('.nav-list a').forEach(link => {
      if (link.getAttribute('data-page') === pageId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

function updateBreadcrumb(pageId) {
  let pageName = pageId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  breadcrumb.innerHTML = `<span>${pageName}</span>`;
}

// Theme Management
function updateTheme() {
  document.documentElement.setAttribute('data-color-scheme', darkMode ? 'dark' : 'light');
  
  if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    const text = themeToggle.querySelector('span');
    
    if (darkMode) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      text.textContent = 'Light Mode';
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      text.textContent = 'Dark Mode';
    }
  }
}

function toggleTheme() {
  darkMode = !darkMode;
  updateTheme();
}

// Mobile Menu
function toggleMobileMenu() {
  mainNav.classList.toggle('open');
}

// Notifications
function loadUserNotifications(userId) {
  const userNotifications = appData.notifications.filter(n => n.userId === userId);
  const unreadCount = userNotifications.filter(n => !n.read).length;
  
  notificationsList.innerHTML = '';
  
  if (userNotifications.length === 0) {
    notificationsList.innerHTML = '<div class="notification-item"><p>No notifications</p></div>';
  } else {
    userNotifications.forEach(notification => {
      const notificationItem = document.createElement('div');
      notificationItem.className = `notification-item ${notification.read ? '' : 'unread'}`;
      
      notificationItem.innerHTML = `
        <h4 class="notification-title">${notification.title}</h4>
        <p class="notification-message">${notification.message}</p>
        <span class="notification-time">${formatNotificationTime(notification.createdAt)}</span>
      `;
      
      notificationsList.appendChild(notificationItem);
    });
  }
  
  // Update notification indicator
  if (unreadCount > 0) {
    notificationIndicator.style.display = 'block';
  } else {
    notificationIndicator.style.display = 'none';
  }
}

function formatNotificationTime(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
  
  if (diffInHours < 1) {
    return 'Just now';
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  } else {
    return date.toLocaleString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  }
}

function toggleNotificationsPanel() {
  notificationsPanel.classList.toggle('hidden');
}

function markAllNotificationsAsRead() {
  // In a real app, we would send a request to the server
  // For this demo, we'll just update the UI
  document.querySelectorAll('.notification-item.unread').forEach(item => {
    item.classList.remove('unread');
  });
  
  notificationIndicator.style.display = 'none';
  showToast('Success', 'All notifications marked as read', 'success');
}

// Toast Notifications
function showToast(title, message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-icon">
      <i class="fas ${getToastIcon(type)}"></i>
    </div>
    <div class="toast-content">
      <h4 class="toast-title">${title}</h4>
      <p class="toast-message">${message}</p>
    </div>
    <button class="toast-close">
      <i class="fas fa-times"></i>
    </button>
  `;
  
  toastContainer.appendChild(toast);
  
  // Add event listener to close button
  toast.querySelector('.toast-close').addEventListener('click', () => {
    toast.remove();
  });
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (toast.parentNode) {
      toast.remove();
    }
  }, 5000);
}

function getToastIcon(type) {
  switch (type) {
    case 'success': return 'fa-check-circle';
    case 'error': return 'fa-exclamation-circle';
    case 'warning': return 'fa-exclamation-triangle';
    default: return 'fa-info-circle';
  }
}

// Loading Indicator
function showLoading() {
  loadingOverlay.classList.remove('hidden');
}

function hideLoading() {
  loadingOverlay.classList.add('hidden');
}

// Modal Handling
function openAppointmentModal() {
  appointmentModal.classList.remove('hidden');
}

function openPaymentModal() {
  paymentModal.classList.remove('hidden');
}

function openPrescriptionModal() {
  prescriptionModal.classList.remove('hidden');
}

// Form Submissions
function handleBookAppointment() {
  showLoading();
  
  // Get form data
  const doctorId = document.getElementById('appointment-doctor').value;
  const date = document.getElementById('appointment-date').value;
  const time = document.getElementById('appointment-time').value;
  const type = document.getElementById('appointment-type').value;
  const reason = document.getElementById('appointment-reason').value;
  
  // Validate form
  if (!doctorId || !date || !time || !reason) {
    hideLoading();
    showToast('Error', 'Please fill in all required fields', 'error');
    return;
  }
  
  // Simulate booking delay
  setTimeout(() => {
    hideLoading();
    appointmentModal.classList.add('hidden');
    
    // For demo purposes, open payment modal
    document.getElementById('payment-doctor').textContent = doctorId === '1' ? 'Dr. Sarah Johnson' : 'Dr. Michael Chen';
    document.getElementById('payment-datetime').textContent = `${formatDate(date)} at ${formatTime(time)}`;
    document.getElementById('payment-type').textContent = type === 'video' ? 'Video Consultation' : 'Chat Consultation';
    
    openPaymentModal();
  }, 1000);
}

function handlePaymentSubmission() {
  showLoading();
  
  // Get form data
  const cardHolder = document.getElementById('card-holder').value;
  const cardNumber = document.getElementById('card-number').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const cvv = document.getElementById('cvv').value;
  
  // Validate form
  if (!cardHolder || !cardNumber || !expiryDate || !cvv) {
    hideLoading();
    showToast('Error', 'Please fill in all payment details', 'error');
    return;
  }
  
  try {
    // Simulate payment processing delay
    setTimeout(() => {
      // Make sure we hide the loading overlay no matter what
      hideLoading();
      paymentModal.classList.add('hidden');
      
      // Show success message
      showToast('Success', 'Payment processed successfully! Appointment confirmed.', 'success');
      
      // Refresh appointments page if it's open
      if (currentUser && currentUser.role === 'patient') {
        populatePatientAppointments(currentUser.id);
      }
      
      // Navigate to appointments
      navigateTo(currentUser && currentUser.role === 'patient' ? 'patient-appointments' : 'doctor-appointments');
    }, 1500);
  } catch (error) {
    // Ensure loading overlay is hidden if there's an error
    hideLoading();
    showToast('Error', 'There was a problem processing your payment. Please try again.', 'error');
  }
}

function handlePrescriptionSubmission() {
  showLoading();
  
  try {
    // Get form data
    const patientId = document.getElementById('prescription-patient').value;
    const medication = document.getElementById('prescription-medication').value;
    const dosage = document.getElementById('prescription-dosage').value;
    const duration = document.getElementById('prescription-duration').value;
    const instructions = document.getElementById('prescription-instructions').value;
    
    // Validate form
    if (!patientId || !medication || !dosage || !duration || !instructions) {
      hideLoading();
      showToast('Error', 'Please fill in all prescription details', 'error');
      return;
    }
    
    // Simulate prescription creation delay
    setTimeout(() => {
      hideLoading();
      prescriptionModal.classList.add('hidden');
      
      showToast('Success', 'Prescription created successfully!', 'success');
      
      // Refresh prescriptions page if it's open
      if (currentUser && currentUser.role === 'doctor') {
        populateDoctorPrescriptions(currentUser.id);
      }
    }, 1000);
  } catch (error) {
    // Ensure loading overlay is hidden if there's an error
    hideLoading();
    showToast('Error', 'There was a problem creating the prescription. Please try again.', 'error');
  }
}

// Data Loading and Page Population
function loadPageData(pageId) {
  if (!currentUser) return;
  
  switch (pageId) {
    case 'patient-dashboard':
      populatePatientDashboard(currentUser);
      break;
    case 'patient-appointments':
      populatePatientAppointments(currentUser.id);
      break;
    case 'patient-prescriptions':
      populatePatientPrescriptions(currentUser.id);
      break;
    case 'patient-records':
      populatePatientRecords(currentUser.id);
      break;
    case 'patient-payments':
      populatePatientPayments(currentUser.id);
      break;
    case 'doctor-dashboard':
      populateDoctorDashboard(currentUser);
      break;
    case 'doctor-appointments':
      populateDoctorAppointments(currentUser.id);
      break;
    case 'doctor-patients':
      populateDoctorPatients(currentUser.id);
      break;
    case 'doctor-prescriptions':
      populateDoctorPrescriptions(currentUser.id);
      break;
    case 'admin-users':
      populateAdminUsers();
      break;
    case 'admin-dashboard':
      populateAdminDashboard();
      break;
  }
}

// Patient Dashboard
function populatePatientDashboard(user) {
  // Set patient name
  document.getElementById('patient-name').textContent = user.name;
  document.getElementById('patient-video-avatar').src = user.avatar;
  
  // Get patient data
  const patientId = user.id;
  const appointments = appData.appointments.filter(a => a.patientId === patientId);
  const prescriptions = appData.prescriptions.filter(p => p.patientId === patientId);
  const payments = appData.payments.filter(p => p.patientId === patientId);
  
  // Update stats
  const upcomingAppointments = appointments.filter(a => a.status === 'scheduled' || a.status === 'pending');
  const activePrescriptions = prescriptions.filter(p => p.status === 'active');
  
  document.getElementById('upcoming-appointments-count').textContent = upcomingAppointments.length;
  document.getElementById('active-prescriptions-count').textContent = activePrescriptions.length;
  document.getElementById('payment-due').textContent = '$0.00'; // For demo purposes
  
  // Populate upcoming appointments
  const appointmentsList = document.getElementById('patient-upcoming-appointments');
  appointmentsList.innerHTML = '';
  
  if (upcomingAppointments.length === 0) {
    appointmentsList.innerHTML = '<p class="empty-state">No upcoming appointments</p>';
  } else {
    upcomingAppointments.slice(0, 3).forEach(appointment => {
      const doctor = appData.users.find(u => u.id === appointment.doctorId);
      
      const appointmentItem = document.createElement('div');
      appointmentItem.className = 'appointment-item';
      
      appointmentItem.innerHTML = `
        <div class="appointment-info">
          <h4>Dr. ${doctor.name}</h4>
          <div class="appointment-details">
            <span><i class="fas fa-calendar"></i> ${formatDate(appointment.date)}</span>
            <span><i class="fas fa-clock"></i> ${formatTime(appointment.time)}</span>
            <span><i class="fas fa-video"></i> ${appointment.type}</span>
          </div>
        </div>
        <div class="appointment-actions">
          <button class="btn btn--primary btn--sm">Join</button>
          <button class="btn btn--outline btn--sm">Reschedule</button>
        </div>
      `;
      
      appointmentsList.appendChild(appointmentItem);
    });
  }
  
  // Populate recent prescriptions
  const prescriptionsList = document.getElementById('patient-recent-prescriptions');
  prescriptionsList.innerHTML = '';
  
  if (prescriptions.length === 0) {
    prescriptionsList.innerHTML = '<p class="empty-state">No prescriptions</p>';
  } else {
    prescriptions.slice(0, 3).forEach(prescription => {
      const doctor = appData.users.find(u => u.id === prescription.doctorId);
      
      const prescriptionItem = document.createElement('div');
      prescriptionItem.className = 'prescription-item';
      
      prescriptionItem.innerHTML = `
        <div class="prescription-details">
          <h4>${prescription.medication}</h4>
          <div class="prescription-meta">
            <span><i class="fas fa-pills"></i> ${prescription.dosage}</span>
            <span><i class="fas fa-calendar-alt"></i> ${prescription.duration}</span>
            <span><i class="fas fa-user-md"></i> Dr. ${doctor.name}</span>
          </div>
        </div>
        <div class="prescription-actions">
          <button class="btn btn--outline btn--sm">Download</button>
        </div>
      `;
      
      prescriptionsList.appendChild(prescriptionItem);
    });
  }
}

// Patient Appointments
function populatePatientAppointments(patientId) {
  const appointmentsList = document.getElementById('patient-appointments-list');
  appointmentsList.innerHTML = '';
  
  const appointments = appData.appointments.filter(a => a.patientId === patientId);
  
  if (appointments.length === 0) {
    appointmentsList.innerHTML = '<p class="empty-state">No appointments found</p>';
    return;
  }
  
  appointments.forEach(appointment => {
    const doctor = appData.users.find(u => u.id === appointment.doctorId);
    
    const appointmentItem = document.createElement('div');
    appointmentItem.className = 'appointment-item';
    
    appointmentItem.innerHTML = `
      <div class="appointment-info">
        <h4>Dr. ${doctor.name}</h4>
        <div class="appointment-details">
          <span><i class="fas fa-calendar"></i> ${formatDate(appointment.date)}</span>
          <span><i class="fas fa-clock"></i> ${formatTime(appointment.time)}</span>
          <span><i class="fas fa-video"></i> ${appointment.type}</span>
          <span><i class="fas fa-info-circle"></i> ${appointment.reason}</span>
        </div>
      </div>
      <div class="appointment-actions">
        ${appointment.status === 'scheduled' ? `
          <button class="btn btn--primary btn--sm">Join</button>
          <button class="btn btn--outline btn--sm">Reschedule</button>
          <button class="btn btn--outline btn--sm"><i class="fas fa-times"></i></button>
        ` : appointment.status === 'completed' ? `
          <span class="status status--success">Completed</span>
          <button class="btn btn--outline btn--sm">View Summary</button>
        ` : `
          <span class="status status--info">Pending</span>
        `}
      </div>
    `;
    
    appointmentsList.appendChild(appointmentItem);
  });
}

// Patient Prescriptions
function populatePatientPrescriptions(patientId) {
  const prescriptionsList = document.getElementById('patient-prescriptions-list');
  prescriptionsList.innerHTML = '';
  
  const prescriptions = appData.prescriptions.filter(p => p.patientId === patientId);
  
  if (prescriptions.length === 0) {
    prescriptionsList.innerHTML = '<p class="empty-state">No prescriptions found</p>';
    return;
  }
  
  prescriptions.forEach(prescription => {
    const doctor = appData.users.find(u => u.id === prescription.doctorId);
    
    const prescriptionItem = document.createElement('div');
    prescriptionItem.className = 'prescription-item';
    
    prescriptionItem.innerHTML = `
      <div class="prescription-details">
        <h4>${prescription.medication}</h4>
        <div class="prescription-meta">
          <span><i class="fas fa-pills"></i> ${prescription.dosage}</span>
          <span><i class="fas fa-calendar-alt"></i> ${prescription.duration}</span>
          <span><i class="fas fa-user-md"></i> Dr. ${doctor.name}</span>
          <span><i class="fas fa-clock"></i> Issued: ${formatDate(prescription.dateIssued)}</span>
        </div>
        <p class="mt-8"><i class="fas fa-info-circle"></i> ${prescription.instructions}</p>
      </div>
      <div class="prescription-actions">
        <button class="btn btn--outline btn--sm"><i class="fas fa-download"></i> Download</button>
        <button class="btn btn--outline btn--sm"><i class="fas fa-print"></i> Print</button>
      </div>
    `;
    
    prescriptionsList.appendChild(prescriptionItem);
  });
}

// Patient Medical Records
function populatePatientRecords(patientId) {
  const recordsList = document.getElementById('patient-records-list');
  recordsList.innerHTML = '';
  
  const records = appData.medicalRecords.filter(r => r.patientId === patientId);
  
  if (records.length === 0) {
    recordsList.innerHTML = '<p class="empty-state">No medical records found</p>';
    return;
  }
  
  records.forEach(record => {
    const doctor = appData.users.find(u => u.id === record.doctorId);
    
    const recordItem = document.createElement('div');
    recordItem.className = 'record-item';
    
    let attachmentsHtml = '';
    if (record.attachments && record.attachments.length > 0) {
      record.attachments.forEach(attachment => {
        attachmentsHtml += `
          <a href="#" class="attachment-item">
            <i class="fas fa-file-pdf"></i>
            <span>${attachment}</span>
          </a>
        `;
      });
    }
    
    recordItem.innerHTML = `
      <div class="record-header">
        <div class="record-info">
          <h4>${record.title}</h4>
          <div class="record-meta">
            <span><i class="fas fa-calendar-alt"></i> ${formatDate(record.date)}</span>
            <span><i class="fas fa-user-md"></i> Dr. ${doctor.name}</span>
            <span><i class="fas fa-tag"></i> ${record.type}</span>
          </div>
        </div>
        <div class="record-actions">
          <button class="btn btn--outline btn--sm"><i class="fas fa-print"></i></button>
          <button class="btn btn--outline btn--sm"><i class="fas fa-download"></i></button>
        </div>
      </div>
      <div class="record-content">
        <p>${record.content}</p>
      </div>
      <div class="record-attachments">
        ${attachmentsHtml}
      </div>
    `;
    
    recordsList.appendChild(recordItem);
  });
}

// Patient Payments
function populatePatientPayments(patientId) {
  const paymentsTable = document.getElementById('payment-history-table');
  paymentsTable.innerHTML = '';
  
  const payments = appData.payments.filter(p => p.patientId === patientId);
  
  if (payments.length === 0) {
    paymentsTable.innerHTML = '<tr><td colspan="5" class="empty-state">No payment history found</td></tr>';
    return;
  }
  
  payments.forEach(payment => {
    const tr = document.createElement('tr');
    
    tr.innerHTML = `
      <td>${formatDate(payment.date)}</td>
      <td>${payment.description}</td>
      <td>$${payment.amount.toFixed(2)} ${payment.currency}</td>
      <td><span class="status status--success">${payment.status}</span></td>
      <td>
        <div class="table-actions">
          <button class="btn btn--outline btn--sm" title="View Invoice"><i class="fas fa-file-invoice"></i></button>
          <button class="btn btn--outline btn--sm" title="Download Receipt"><i class="fas fa-download"></i></button>
        </div>
      </td>
    `;
    
    paymentsTable.appendChild(tr);
  });
}

// Doctor Dashboard
function populateDoctorDashboard(user) {
  // Set doctor name
  document.getElementById('doctor-name').textContent = user.name;
  
  // Get doctor data
  const doctorId = user.id;
  const appointments = appData.appointments.filter(a => a.doctorId === doctorId);
  const patients = [...new Set(appointments.map(a => a.patientId))];
  
  // Update stats
  const today = new Date().toISOString().split('T')[0];
  const todayAppointments = appointments.filter(a => a.date === today);
  
  document.getElementById('today-appointments-count').textContent = todayAppointments.length;
  document.getElementById('total-patients-count').textContent = patients.length;
  document.getElementById('monthly-earnings').textContent = '$2,150.00'; // For demo purposes
  
  // Populate today's appointments
  const appointmentsList = document.getElementById('doctor-today-appointments');
  appointmentsList.innerHTML = '';
  
  if (todayAppointments.length === 0) {
    appointmentsList.innerHTML = '<p class="empty-state">No appointments today</p>';
  } else {
    todayAppointments.forEach(appointment => {
      const patient = appData.users.find(u => u.id === appointment.patientId);
      
      const appointmentItem = document.createElement('div');
      appointmentItem.className = 'appointment-item';
      
      appointmentItem.innerHTML = `
        <div class="appointment-info">
          <h4>${patient.name}</h4>
          <div class="appointment-details">
            <span><i class="fas fa-clock"></i> ${formatTime(appointment.time)}</span>
            <span><i class="fas fa-hourglass-half"></i> ${appointment.duration} min</span>
            <span><i class="fas fa-info-circle"></i> ${appointment.reason}</span>
          </div>
        </div>
        <div class="appointment-actions">
          <button class="btn btn--primary btn--sm">Start</button>
          <button class="btn btn--outline btn--sm">Reschedule</button>
        </div>
      `;
      
      appointmentsList.appendChild(appointmentItem);
    });
  }
  
  // Populate recent patients
  const patientsList = document.getElementById('doctor-recent-patients');
  patientsList.innerHTML = '';
  
  if (patients.length === 0) {
    patientsList.innerHTML = '<p class="empty-state">No patients yet</p>';
  } else {
    const patientData = patients.map(patientId => appData.users.find(u => u.id === patientId)).filter(Boolean);
    
    patientData.slice(0, 3).forEach(patient => {
      const patientItem = document.createElement('div');
      patientItem.className = 'patient-item';
      
      patientItem.innerHTML = `
        <div class="patient-info">
          <img src="${patient.avatar}" alt="${patient.name}" class="patient-avatar">
          <div>
            <h4>${patient.name}</h4>
            <p>Last visit: ${formatDate('2025-06-17')}</p>
          </div>
        </div>
        <div class="patient-actions">
          <button class="btn btn--outline btn--sm">View</button>
        </div>
      `;
      
      patientsList.appendChild(patientItem);
    });
  }
  
  // Populate calendar grid
  populateCalendarGrid();
}

// Doctor Appointments
function populateDoctorAppointments(doctorId) {
  const appointmentsList = document.getElementById('doctor-appointments-list');
  appointmentsList.innerHTML = '';
  
  const appointments = appData.appointments.filter(a => a.doctorId === doctorId);
  
  if (appointments.length === 0) {
    appointmentsList.innerHTML = '<p class="empty-state">No appointments found</p>';
    return;
  }
  
  appointments.forEach(appointment => {
    const patient = appData.users.find(u => u.id === appointment.patientId);
    
    const appointmentItem = document.createElement('div');
    appointmentItem.className = 'appointment-item';
    
    appointmentItem.innerHTML = `
      <div class="appointment-info">
        <h4>${patient.name}</h4>
        <div class="appointment-details">
          <span><i class="fas fa-calendar"></i> ${formatDate(appointment.date)}</span>
          <span><i class="fas fa-clock"></i> ${formatTime(appointment.time)}</span>
          <span><i class="fas fa-hourglass-half"></i> ${appointment.duration} min</span>
          <span><i class="fas fa-info-circle"></i> ${appointment.reason}</span>
        </div>
      </div>
      <div class="appointment-actions">
        ${appointment.status === 'scheduled' ? `
          <button class="btn btn--primary btn--sm">Start</button>
          <button class="btn btn--outline btn--sm">Reschedule</button>
          <button class="btn btn--outline btn--sm"><i class="fas fa-times"></i></button>
        ` : appointment.status === 'completed' ? `
          <span class="status status--success">Completed</span>
          <button class="btn btn--outline btn--sm">View Notes</button>
        ` : `
          <span class="status status--info">Pending</span>
          <button class="btn btn--primary btn--sm">Approve</button>
          <button class="btn btn--outline btn--sm">Decline</button>
        `}
      </div>
    `;
    
    appointmentsList.appendChild(appointmentItem);
  });
  
  // Populate appointment requests
  const requestsList = document.getElementById('appointment-requests-list');
  if (requestsList) {
    requestsList.innerHTML = '';
    
    const pendingAppointments = appointments.filter(a => a.status === 'pending');
    
    if (pendingAppointments.length === 0) {
      requestsList.innerHTML = '<p class="empty-state">No pending requests</p>';
    } else {
      pendingAppointments.forEach(appointment => {
        const patient = appData.users.find(u => u.id === appointment.patientId);
        
        const requestItem = document.createElement('div');
        requestItem.className = 'appointment-item';
        
        requestItem.innerHTML = `
          <div class="appointment-info">
            <h4>${patient.name}</h4>
            <div class="appointment-details">
              <span><i class="fas fa-calendar"></i> ${formatDate(appointment.date)}</span>
              <span><i class="fas fa-clock"></i> ${formatTime(appointment.time)}</span>
              <span><i class="fas fa-hourglass-half"></i> ${appointment.duration} min</span>
              <span><i class="fas fa-info-circle"></i> ${appointment.reason}</span>
            </div>
          </div>
          <div class="appointment-actions">
            <button class="btn btn--primary btn--sm">Approve</button>
            <button class="btn btn--outline btn--sm">Decline</button>
          </div>
        `;
        
        requestsList.appendChild(requestItem);
      });
    }
  }
}

// Doctor Prescriptions
function populateDoctorPrescriptions(doctorId) {
  const prescriptionsList = document.getElementById('doctor-prescriptions-list');
  prescriptionsList.innerHTML = '';
  
  const prescriptions = appData.prescriptions.filter(p => p.doctorId === doctorId);
  
  if (prescriptions.length === 0) {
    prescriptionsList.innerHTML = '<p class="empty-state">No prescriptions found</p>';
    return;
  }
  
  prescriptions.forEach(prescription => {
    const patient = appData.users.find(u => u.id === prescription.patientId);
    
    const prescriptionItem = document.createElement('div');
    prescriptionItem.className = 'prescription-item';
    
    prescriptionItem.innerHTML = `
      <div class="prescription-details">
        <h4>${prescription.medication}</h4>
        <div class="prescription-meta">
          <span><i class="fas fa-user"></i> ${patient.name}</span>
          <span><i class="fas fa-pills"></i> ${prescription.dosage}</span>
          <span><i class="fas fa-calendar-alt"></i> ${prescription.duration}</span>
          <span><i class="fas fa-clock"></i> Issued: ${formatDate(prescription.dateIssued)}</span>
        </div>
        <p class="mt-8"><i class="fas fa-info-circle"></i> ${prescription.instructions}</p>
      </div>
      <div class="prescription-actions">
        <button class="btn btn--outline btn--sm"><i class="fas fa-edit"></i> Edit</button>
        <button class="btn btn--outline btn--sm"><i class="fas fa-print"></i> Print</button>
        <button class="btn btn--outline btn--sm"><i class="fas fa-redo"></i> Renew</button>
      </div>
    `;
    
    prescriptionsList.appendChild(prescriptionItem);
  });
}

// Admin Dashboard
function populateAdminDashboard() {
  setupCharts();
  populateAdminUsers();
}

// Admin Users
function populateAdminUsers() {
  const usersList = document.getElementById('admin-users-list');
  if (!usersList) return;
  
  usersList.innerHTML = '';
  
  appData.users.forEach(user => {
    const tr = document.createElement('tr');
    
    tr.innerHTML = `
      <td>
        <div class="patient-info">
          <img src="${user.avatar}" alt="${user.name}" class="patient-avatar">
          <div>
            <h4>${user.name}</h4>
            <p>${user.phone}</p>
          </div>
        </div>
      </td>
      <td>${user.email}</td>
      <td><span class="status status--info">${user.role}</span></td>
      <td><span class="status status--success">Active</span></td>
      <td>
        <div class="table-actions">
          <button class="btn btn--outline btn--sm" title="Edit"><i class="fas fa-edit"></i></button>
          <button class="btn btn--outline btn--sm" title="Disable"><i class="fas fa-ban"></i></button>
          <button class="btn btn--outline btn--sm" title="Delete"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    `;
    
    usersList.appendChild(tr);
  });
}

// Utility Functions
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

function formatTime(timeString) {
  const [hours, minutes] = timeString.split(':');
  const hour = parseInt(hours, 10);
  const period = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  
  return `${formattedHour}:${minutes} ${period}`;
}

// Calendar Grid
function populateCalendarGrid() {
  const calendarGrid = document.querySelector('.calendar-grid');
  if (!calendarGrid) return;
  
  calendarGrid.innerHTML = '';
  
  // Days of the week header
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysOfWeek.forEach(day => {
    const dayElement = document.createElement('div');
    dayElement.className = 'calendar-day-header';
    dayElement.textContent = day;
    calendarGrid.appendChild(dayElement);
  });
  
  // Generate days for June 2025
  const daysInMonth = 30; // June has 30 days
  const firstDayOfMonth = 0; // Sunday (0) is the first day of June 2025
  
  // Empty cells for days before the first of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyDay = document.createElement('div');
    emptyDay.className = 'calendar-day empty';
    calendarGrid.appendChild(emptyDay);
  }
  
  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('div');
    dayElement.className = 'calendar-day';
    dayElement.textContent = day;
    
    // Mark some days as available, booked, or unavailable for demo purposes
    if ([2, 5, 9, 14, 18, 23, 27].includes(day)) {
      dayElement.classList.add('available');
    } else if ([3, 10, 17, 18, 19, 20].includes(day)) {
      dayElement.classList.add('booked');
    } else if ([1, 7, 8, 15, 21, 22, 28, 29].includes(day)) {
      dayElement.classList.add('unavailable');
    }
    
    calendarGrid.appendChild(dayElement);
  }
}

// Charts Setup
function setupCharts() {
  setupEarningsChart();
  setupUsersChart();
}

function setupEarningsChart() {
  const earningsChartCanvas = document.getElementById('earnings-chart');
  if (!earningsChartCanvas) return;
  
  // Check if a chart instance already exists and destroy it
  const existingChart = Chart.getChart(earningsChartCanvas);
  if (existingChart) {
    existingChart.destroy();
  }
  
  new Chart(earningsChartCanvas, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Earnings (USD)',
        data: [1200, 1900, 1500, 2200, 1800, 2150],
        backgroundColor: 'rgba(33, 128, 141, 0.2)',
        borderColor: 'rgba(33, 128, 141, 1)',
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '$' + value;
            }
          }
        }
      }
    }
  });
}

function setupUsersChart() {
  const usersChartCanvas = document.getElementById('users-chart');
  if (!usersChartCanvas) return;
  
  // Check if a chart instance already exists and destroy it
  const existingChart = Chart.getChart(usersChartCanvas);
  if (existingChart) {
    existingChart.destroy();
  }
  
  new Chart(usersChartCanvas, {
    type: 'doughnut',
    data: {
      labels: ['Patients', 'Doctors', 'Admins'],
      datasets: [{
        data: [2, 2, 1],
        backgroundColor: [
          '#1FB8CD',
          '#FFC185',
          '#B4413C'
        ],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      },
      cutout: '70%'
    }
  });
}