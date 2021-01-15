import React, { useEffect, useState } from 'react';
import './Cookies.css';

export default function Cookies() {
  const [isVisible, setIsVisible] = useState(false);
  const useMountEffect = (func) => useEffect(func, []);

  useMountEffect(() => {
    if (localStorage.getItem('areCookiesApplied')) {
      setIsVisible(false);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  function applyCookies() {
    localStorage.setItem('areCookiesApplied', true);
    setIsVisible(false);
  }

  return (
    <div className={`cookies ${isVisible && 'cookies_visible'}`}>
      <p className="cookies__text">
        By continuing, you're agreeing to our customer terms of service, privacy
        policy and{' '}
        <a className="cookies__link" href="about:blank">
          cookie policy
        </a>
      </p>
      <button onClick={applyCookies} className="cookies__btn">
        Apply
      </button>
    </div>
  );
}
