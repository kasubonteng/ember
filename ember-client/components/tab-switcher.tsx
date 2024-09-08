"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export const tabs = [
  {
    name: "Featured",
    value: 0,
  },
  {
    name: "Bedroom",
    value: 1,
  },
  {
    name: "Living Room",
    value: 2,
  },
  {
    name: "Dining Room",
    value: 3,
  },
  {
    name: "Office",
    value: 4,
  },
];

const TabSwitcher = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleTabClick = (value: number) => {
    setActiveTab(value);
    setIsOpen(false);
  };

  const activeTabName =
    tabs.find((tab) => tab.value === activeTab)?.name || "Select Tab";

  return (
    <div className="z-20 w-full max-w-xs sm:max-w-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="relative w-full"
      >
        {/* Mobile Dropdown */}
        <div className="sm:hidden">
          <Button
            onClick={toggleDropdown}
            className="flex w-full items-center justify-between rounded-full bg-gray-200 px-4 py-2 text-left text-black"
          >
            <span>{activeTabName}</span>
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </Button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 right-0 mt-2 rounded-lg bg-white text-black shadow-lg"
              >
                {tabs.map((tab) => (
                  <Button
                    key={tab.value}
                    className={cn(
                      "w-full rounded-none bg-white px-4 py-2 text-left text-black",
                      tab.value === activeTab
                        ? "bg-primary font-semibold text-white"
                        : "hover:bg-primary hover:text-white",
                    )}
                    onClick={() => handleTabClick(tab.value)}
                  >
                    {tab.name}
                  </Button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Horizontal Tabs */}
        <div className="hidden sm:block">
          <div className="flex justify-center space-x-2 rounded-full bg-gray-200 p-2">
            {tabs.map((tab) => (
              <motion.div
                key={tab.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    tab.value === activeTab
                      ? "bg-white text-black hover:text-white"
                      : "bg-transparent text-black hover:bg-primary hover:text-white",
                  )}
                  onClick={() => setActiveTab(tab.value)}
                >
                  {tab.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TabSwitcher;
