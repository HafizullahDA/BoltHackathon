'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaTimes, FaExpandAlt, FaBell, FaChevronUp } from 'react-icons/fa';

export const TwitterFeed = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasNewTweets, setHasNewTweets] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    // Simulate new tweets notification
    const interval = setInterval(() => {
      if (!isVisible) {
        setHasNewTweets(true);
      }
    }, 30000);

    return () => {
      document.body.removeChild(script);
      clearInterval(interval);
    };
  }, [isVisible]);

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  return (
    <motion.div 
      className="fixed right-4 bottom-4 z-40"
      drag
      dragMomentum={false}
      dragElastic={0.1}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      animate={position}
      whileDrag={{ scale: 1.02 }}
    >
      <AnimatePresence>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="w-[300px] glass rounded-xl overflow-hidden shadow-lg relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Draggable Handle */}
            <motion.div 
              className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full cursor-move
                       hover:bg-white/40 transition-colors"
              whileHover={{ scale: 1.2 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
            />

            {/* Header */}
            <motion.div 
              className="p-2 bg-gradient-to-r from-[#00f5ff] to-[#8A2BE2] flex items-center justify-between relative"
              whileHover={{ height: "auto" }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaTwitter className="text-white text-lg" />
                </motion.div>
                <span className="text-white font-medium">Latest Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  onClick={() => setHasNewTweets(false)}
                  className="text-white hover:text-yellow-300 transition-colors relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaBell />
                  {hasNewTweets && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full"
                    />
                  )}
                </motion.button>
                <motion.button
                  onClick={() => setIsVisible(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </motion.button>
              </div>

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                className="absolute left-0 right-0 -bottom-8 text-xs text-center text-white/70"
              >
                Drag handle to move • Click bell for notifications
              </motion.div>
            </motion.div>

            {/* Twitter Timeline */}
            <motion.div
              className="relative"
              animate={{
                boxShadow: isDragging ? "0 0 20px rgba(0,245,255,0.3)" : "none"
              }}
            >
              <a
                className="twitter-timeline"
                data-theme="dark"
                data-height="400"
                data-chrome="noheader nofooter transparent"
                href="https://twitter.com/boltdotnew"
              >
                Loading tweets...
              </a>

              {/* Interactive gradient overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  background: isDragging
                    ? "linear-gradient(45deg, rgba(0,245,255,0.1) 0%, rgba(138,43,226,0.1) 100%)"
                    : "none"
                }}
              />
            </motion.div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsVisible(true);
              setHasNewTweets(false);
            }}
            className="relative p-3 rounded-full bg-gradient-to-r from-[#00f5ff] to-[#8A2BE2] text-white shadow-lg
                     hover:shadow-[#00f5ff]/20 transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaExpandAlt />
            {hasNewTweets && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full"
              />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}; 