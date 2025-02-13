import React, { useState, useEffect, useRef } from 'react';
import Button from '../components/Button';
import toyGun from '../assets/toygun.png'; // your toy gun image
import myImage from '../assets/image 3.jpg'; // your cat image
import gunshotSound from '../assets/gunshot.mp3';

export default function Survive() {
  // Phases:
  // "initial"  → user sees the initial prompt with two buttons.
  // "aiming"   → after clicking No, the gun appears next to the No button and tracks the cursor.
  // "shooting" → after 3 seconds of aiming, the gun fires bullets continuously.
  //              In shooting phase, every 5 seconds the bullet speed increases by 1.2×
  //              and the spawn interval decreases by a factor of 1.5.
  //              Also the background fades to black with white text and white bullets.
  // "dead"     → a bullet hit the cursor.
  // "valentine"→ 3 seconds after death, a simple final screen appears with two "Yes" buttons.
  const [phase, setPhase] = useState("initial");

  // For the initial phase, track the No button’s CSS position.
  const [noButtonPos, setNoButtonPos] = useState({ top: "50%", left: "50%" });
  // The primary gun’s origin (set from the No button).
  const [gunOrigin, setGunOrigin] = useState({ x: null, y: null });
  // Track the current cursor position (initially centered).
  const [currentCursor, setCurrentCursor] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  // A ref so our bullet-spawn callback always gets the latest cursor.
  const currentCursorRef = useRef(currentCursor);
  useEffect(() => {
    currentCursorRef.current = currentCursor;
  }, [currentCursor]);

  // We'll also track extra guns (which will be added over time in the shooting phase).
  const [extraGuns, setExtraGuns] = useState([]);
  
  // During firing phases, we keep an array of active bullets.
  const [bullets, setBullets] = useState([]);
  const bulletIdRef = useRef(0);

  // Update the current cursor on every mouse move.
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCurrentCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Transition from "aiming" to "shooting" after 3 seconds.
  useEffect(() => {
    if (phase === "aiming") {
      const timer = setTimeout(() => {
        setPhase("shooting");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Transition from "dead" to "valentine" after 3 seconds.
  useEffect(() => {
    if (phase === "dead") {
      const timer = setTimeout(() => {
        setPhase("valentine");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // --- Shooting Phase Difficulty Settings ---
  // These states are used only in the shooting phase.
  // They start at 500 ms (spawn interval) and 1500 pixels/second (bullet speed).
  const [spawnInterval, setSpawnInterval] = useState(500); 
  const [currentBulletSpeed, setCurrentBulletSpeed] = useState(1500);

  // Every 5 seconds in the shooting phase, increase the difficulty.
  useEffect(() => {
    if (phase === "shooting") {
      const timer = setInterval(() => {
        setSpawnInterval(prev => prev / 1.5);
        setCurrentBulletSpeed(prev => prev * 1.2);
      }, 10000);
      return () => clearInterval(timer);
    }
  }, [phase]);

  // --- Extra Guns Spawning ---
  // Once in the shooting phase, schedule extra guns to appear every 20 seconds.
  useEffect(() => {
    if (phase === "shooting") {
      const timers = [];
      // After 10 seconds, add a gun at top right.
      timers.push(
        setTimeout(() => {
          setExtraGuns(prev => [...prev, { x: window.innerWidth - 50, y: 50 }]);
        }, 10000)
      );
      // After 20 seconds, add a gun at top left.
      timers.push(
        setTimeout(() => {
          setExtraGuns(prev => [...prev, { x: 50, y: 50 }]);
        }, 20000)
      );
      // After 30 seconds, add a gun at bottom right.
      timers.push(
        setTimeout(() => {
          setExtraGuns(prev => [...prev, { x: window.innerWidth - 50, y: window.innerHeight - 50 }]);
        }, 30000)
      );
      // After 40 seconds, add a gun at bottom left.
      timers.push(
        setTimeout(() => {
          setExtraGuns(prev => [...prev, { x: 50, y: window.innerHeight - 50 }]);
        }, 40000)
      );
      return () => timers.forEach(timer => clearTimeout(timer));
    }
  }, [phase]);

  // --- Bullet Spawning ---
  // This effect runs only in the shooting phase.
  useEffect(() => {
    let intervalId;
    if (phase === "shooting") {
      // Use the dynamic spawnInterval and bullet speed.
      const effectiveInterval = spawnInterval;
      const effectiveSpeed = currentBulletSpeed;
      intervalId = setInterval(() => {
        // Combine the primary gun and extra guns.
        const allGuns = [];
        if (gunOrigin.x !== null && gunOrigin.y !== null) {
          allGuns.push(gunOrigin);
        }
        extraGuns.forEach(gun => allGuns.push(gun));
        allGuns.forEach(gun => {
          const dx = currentCursorRef.current.x - gun.x;
          const dy = currentCursorRef.current.y - gun.y;
          const angle = Math.atan2(dy, dx);
          const vx = Math.cos(angle) * effectiveSpeed;
          const vy = Math.sin(angle) * effectiveSpeed;
          const newBullet = {
            id: bulletIdRef.current++,
            x: gun.x,
            y: gun.y,
            vx,
            vy,
          };
          setBullets(bullets => [...bullets, newBullet]);

          // Play the gunshot sound for each gun.
          const shot = new Audio(gunshotSound);
          shot.play();
        });
      }, effectiveInterval);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [phase, gunOrigin, extraGuns, spawnInterval, currentBulletSpeed]);

  // --- Bullet Updating and Collision Detection ---
  useEffect(() => {
    let animationFrameId;
    let lastTime = Date.now();

    const updateBullets = () => {
      const now = Date.now();
      const delta = (now - lastTime) / 1000; // seconds elapsed
      lastTime = now;

      setBullets(bullets => {
        const updated = bullets
          .map(bullet => ({
            ...bullet,
            x: bullet.x + bullet.vx * delta,
            y: bullet.y + bullet.vy * delta,
          }))
          .filter(bullet =>
            bullet.x >= 0 && bullet.x <= window.innerWidth &&
            bullet.y >= 0 && bullet.y <= window.innerHeight
          );

        updated.forEach(bullet => {
          const distance = Math.hypot(bullet.x - currentCursor.x, bullet.y - currentCursor.y);
          if (distance < 10) { // collision threshold
            setPhase("dead");
          }
        });
        return updated;
      });

      animationFrameId = requestAnimationFrame(updateBullets);
    };

    if (phase === "shooting") {
      animationFrameId = requestAnimationFrame(updateBullets);
    }
    return () => cancelAnimationFrame(animationFrameId);
  }, [phase, currentCursor]);

  // Clear bullets when the phase becomes "dead".
  useEffect(() => {
    if (phase === "dead") {
      setBullets([]);
    }
  }, [phase]);

  // --- RENDERING ---

  // INITIAL PHASE
  if (phase === "initial") {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl mb-4">last chance to be my valentine</h1>
        <div className="flex gap-4">
          <Button to="/YAYYY" className="bg-red-400 text-white px-4 py-2 rounded">
            Yes, I don't want to not be your valentine
          </Button>
          <Button
            to="/no"
            className="bg-gray-400 text-white px-4 py-2 rounded"
            onClick={(e) => {
              e.preventDefault();
              const rect = e.target.getBoundingClientRect();
              setGunOrigin({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
              });
              setNoButtonPos({ left: '70%', top: '30%' });
              setPhase("aiming");
            }}
          >
            Opposite of the other choice
          </Button>
        </div>
      </div>
    );
  }

  // AIMING PHASE
  if (phase === "aiming") {
    const dx = currentCursor.x - gunOrigin.x;
    const dy = currentCursor.y - gunOrigin.y;
    const gunAngle = Math.atan2(dy, dx) * (180 / Math.PI);
    const flip = dx < 0 ? " scaleY(-1)" : "";
    return (
      <div className="relative h-screen w-screen bg-black">
        <h1
          className="absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl text-white"
          style={{ fontFamily: 'Chiller, fantasy' }}
        >
          u asked for this
        </h1>
        <img
          src={toyGun}
          alt="Toy Gun"
          style={{
            position: 'absolute',
            left: gunOrigin.x,
            top: gunOrigin.y,
            transform: `translate(-50%, -50%) rotate(${gunAngle}deg)${flip}`,
          }}
          className="w-32 h-32 object-cover mt-4 mx-auto"
        />
      </div>
    );
  }

  // SHOOTING PHASE
  if (phase === "shooting") {
    const dx = currentCursor.x - gunOrigin.x;
    const dy = currentCursor.y - gunOrigin.y;
    const gunAngle = Math.atan2(dy, dx) * (180 / Math.PI);
    const flip = dx < 0 ? " scaleY(-1)" : "";
    return (
      <div className="relative h-screen w-screen bg-black">
        <h1
          className="absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl text-red-600"
          style={{ fontFamily: 'Chiller, fantasy' }}
        >
          i didnt wanna have to do this
        </h1>
        {/* Primary Gun */}
        <img
          src={toyGun}
          alt="Toy Gun"
          style={{
            position: 'absolute',
            left: gunOrigin.x,
            top: gunOrigin.y,
            transform: `translate(-50%, -50%) rotate(${gunAngle}deg)${flip}`,
          }}
          className="w-32 h-32 object-cover mt-4 mx-auto"
        />
        {/* Extra Guns */}
        {extraGuns.map((gun, index) => {
          const dxExtra = currentCursor.x - gun.x;
          const dyExtra = currentCursor.y - gun.y;
          const gunAngleExtra = Math.atan2(dyExtra, dxExtra) * (180 / Math.PI);
          const flipExtra = dxExtra < 0 ? " scaleY(-1)" : "";
          return (
            <img
              key={index}
              src={toyGun}
              alt="Extra Gun"
              style={{
                position: 'absolute',
                left: gun.x,
                top: gun.y,
                transform: `translate(-50%, -50%) rotate(${gunAngleExtra}deg)${flipExtra}`,
              }}
              className="w-32 h-32 object-cover"
            />
          );
        })}
        {/* Bullets */}
        {bullets.map(bullet => (
          <div
            key={bullet.id}
            style={{
              position: 'absolute',
              left: bullet.x,
              top: bullet.y,
              width: '10px',
              height: '10px',
              backgroundColor: 'white',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          ></div>
        ))}
      </div>
    );
  }

  // DEAD PHASE
  if (phase === "dead") {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black w-screen">
        <h1
          className="text-4xl text-red-600"
          style={{ fontFamily: 'Chiller, fantasy' }}
        >
          You died
        </h1>
      </div>
    );
  }

  // VALENTINE PHASE (Final Screen)
  if (phase === "valentine") {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl mb-4">pls be my valentine</h1>
        <img
          src={myImage}
          alt="Description of image"
          className="w-[200px] h-[200px] object-cover mt-4 mx-auto"
        />
        <div className="flex gap-4">
          <Button to="/YAYYY" className="bg-red-400 text-white px-4 py-2 rounded">
            Yes
          </Button>
          <Button to="/YAYYY" className="bg-red-400 text-white px-4 py-2 rounded">
            Yes
          </Button>
        </div>
      </div>
    );
  }

  return null;
}

function getRandomPosition() {
  const left = Math.random() * 80;
  const top = Math.random() * 80;
  return { left: `${left}%`, top: `${top}%` };
}
