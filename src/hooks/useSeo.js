import { useEffect } from 'react';
import { setSeo } from '../utils/seo.js';

export default function useSeo(config) {
  useEffect(() => {
    setSeo(config);
  }, [config]);
}
