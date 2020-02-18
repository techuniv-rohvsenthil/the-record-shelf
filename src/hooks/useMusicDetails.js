import { useState, useEffect } from 'react';
import axios from 'axios';

const useMusicDetails = () => {
  const [rock, setRock] = useState([]);
  const [pop, setPop] = useState([]);
  const [bollywood, setBollywood] = useState([]);
  const [country, setCountry] = useState([]);
  const [callComplete, setCallComplete] = useState(null);
  useEffect(() => {
    const someFunc = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjM0ZGMxMWQ2LTM5YTktNDAyOS04N2E2LTM3MjU1MDRkZjVjYSIsIm5iZiI6MTU4MTk5ODc0OSwiZXhwIjoxNTgyMDg1MTQ5LCJpYXQiOjE1ODE5OTg3NDksImlzcyI6InJlY29yZHMtc2hlbGYuY29tIn0.TfUdqd5SRUUyuhcrOG8mEqEgensTFIb3uVbaVJf65i0';
        const instance = axios.create({
          baseURL: '/api',
          headers: { Authorization: `Bearer ${token}` },
        });
        const response = await instance.get('/records');
        const records = response.data.data;
        let i = 0;
        while (i < records.length) {
          const { genres } = records[i];
          if (genres.includes('pop')) {
            setPop([...pop, records[i]]);
          }
          if (genres.includes('rock')) {
            setRock([...rock, records[i]]);
          }
          if (genres.includes('bollywood')) {
            setBollywood([...bollywood, records[i]]);
          }
          if (genres.includes('country')) {
            setCountry([...country, records[i]]);
          }
          i += 1;
        }
        setCallComplete(true);
      } catch (err) {
        setCallComplete(false);
      }
    };
    someFunc();
  }, []);
  return [rock, pop, bollywood, country, callComplete];
};
export default useMusicDetails;
