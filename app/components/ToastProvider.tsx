"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface Toast {
  id: string;
  type: "success" | "error";
  message: string;
}

interface ToastContextType {
  showToast: (type: Toast["type"], message: string) => void;
}

const ToastContext = createContext<ToastContextType>({ showToast: () => {} });

export const useToast = () => useContext(ToastContext);

export default function ToastProvider() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((type: Toast["type"], message: string) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(
      () => setToasts((prev) => prev.filter((t) => t.id !== id)),
      4000,
    );
  }, []);

  // Expose showToast globally for usage outside React tree
  useEffect(() => {
    (window as unknown as Record<string, unknown>).__showToast = showToast;
  }, [showToast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      <div className="fixed bottom-6 right-6 z-[9990] flex flex-col gap-3 max-w-xs w-full">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className={`glass-card rounded-xl p-4 flex items-start gap-3 shadow-2xl ${
                toast.type === "success"
                  ? "border-primary/30"
                  : "border-red-500/30"
              }`}
            >
              {toast.type === "success" ? (
                <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              ) : (
                <XCircleIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              )}
              <p className="text-sm text-foreground flex-1">{toast.message}</p>
              <button
                onClick={() =>
                  setToasts((prev) => prev.filter((t) => t.id !== toast.id))
                }
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <XMarkIcon className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
