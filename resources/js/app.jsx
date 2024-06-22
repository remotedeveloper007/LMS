import './bootstrap';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Swal from 'sweetalert2';
import Modal from 'react-modal';

// Set app element for react-modal
Modal.setAppElement('#app');

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

// Sweet Alert 2 Start 
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

window.Toast = Toast;
// Sweet Alert 2 End

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  // Resolve the App component properly
  resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),

  setup({ el, App, props }) {
    //
    createRoot(el).render(<StrictMode><App {...props} /></StrictMode>)
  },
})
