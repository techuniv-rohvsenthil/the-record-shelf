import { useState, useEffect } from 'react';
import axios from 'axios';

const useMusicDetails = () => {
  const [data, setData] = useState([]);
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
        setData(records);
        setCallComplete(true);
      } catch (err) {
        setCallComplete(false);
      }
    };
    someFunc();
  }, []);
  return [data, callComplete];
};
export default useMusicDetails;
