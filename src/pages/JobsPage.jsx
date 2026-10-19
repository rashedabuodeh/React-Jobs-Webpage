import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import JobListings from '../components/JobListings';

function JobsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const message = location.state?.toastMessage;

    if (!message) return;

    toast.success(message);

    const timer = setTimeout(() => {
      navigate(location.pathname, {
        replace: true,
        state: null
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [location.state, navigate, location.pathname]);

  return (
    <section className="bg-gray-100 min-h-screen py-8">
      <JobListings />
    </section>
  )
}

export default JobsPage