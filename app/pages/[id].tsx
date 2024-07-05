import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Redirect() {
  const router = useRouter();
  const { id } = router.query as { id: string };

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const res = await fetch(`/api/tiny?id=${id}`);
        if (res.ok) {
          window.location.href = res.url;
        } else {
          console.error('Failed to redirect:', res.status);
          // Handle 404 or other errors
        }
      } catch (error) {
        console.error('Failed to fetch:', error);
        // Handle network errors
      }
    };

    if (id) fetchUrl();
  }, [id]);

  return <div>Redirecting...</div>;
}
