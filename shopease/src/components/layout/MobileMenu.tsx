import { NavLink } from "react-router";
import { NAV_LINKS } from "../../lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="mobile-menu"
      className="border-t border-gray-200 bg-white md:hidden"
    >
      <nav
        aria-label="Mobile"
        className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6"
      >
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end
            onClick={onClose}
            className={({ isActive }) =>
              [
                "rounded-lg px-3 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                isActive
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
              ].join(" ")
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default MobileMenu;
