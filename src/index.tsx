// superstarmodal

import * as React from "react";
/**
 * A simple modal component for React with Tailwind CSS.
 *
 * This Modal component displays content (children) in a modal window when the "open" property is true.
 *
 */
export const Modal: React.FC<{ open: boolean; children: JSX.Element }> = ({
  open,
  children,
}) => {
  return (
    <>
      {open && (
        <div className="w-full h-full bg-slate-400 flex justify-center items-center absolute bg-opacity-80">
          {children}
        </div>
      )}
    </>
  );
};
