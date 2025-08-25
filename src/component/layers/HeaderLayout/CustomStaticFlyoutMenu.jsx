import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CustomStaticFlyoutMenu = ({ stickyNav, menuData }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextMenu, setNextMenu] = useState(null);
  const [menuWidths, setMenuWidths] = useState({});
  const menuRef = useRef([]);

  useEffect(() => {
    // Measure button widths dynamically
    const widths = menuRef.current.reduce((acc, ref, index) => {
      if (ref) {
        acc[Object.keys(menuData)[index]] = ref.offsetWidth;
      }
      return acc;
    }, {});
    setMenuWidths(widths);
  }, [menuData]);

  let closeTimeout;
  let openTimeout;

  const handleMouseEnter = (menuName) => {
    clearTimeout(closeTimeout);
    clearTimeout(openTimeout);

    if (openMenu === menuName) {
      return;
    }

    if (openMenu && openMenu !== menuName) {
      setIsAnimating(true);
      setNextMenu(menuName);
      openTimeout = setTimeout(() => {
        setOpenMenu(menuName);
        setIsAnimating(false);
        setNextMenu(null);
      }, 150);
    } else {
      openTimeout = setTimeout(() => {
        setOpenMenu(menuName);
      }, 80);
    }
  };

  const handleMouseLeave = () => {
    clearTimeout(openTimeout);
    closeTimeout = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setOpenMenu(null);
        setIsAnimating(false);
      }, 300);
    }, 150);
  };

  return (
    <div className={` ${stickyNav ? "" : "relative"}`}>
      {/* Menu Buttons */}
      <div
        className={`flex justify-center  py-2 ${stickyNav ? "gap-2" : "gap-2"}`}
      >
        {Object?.keys(menuData)?.map((menuName, index) => (
          <>
            <div
              key={menuName}
              className=""
              onMouseEnter={() => handleMouseEnter(menuName)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                ref={(el) => (menuRef.current[index] = el)}
                className={`
                    flex items-center gap-1 text-white ${
                      stickyNav
                        ? ""
                        : "text-xs lg:text-sm xl:text-lg mr-3 3xl:mr-10"
                    } 
                    font-semibold rounded
                    text-big-text-color focus:outline-none
                    ${openMenu === menuName ? "" : ""}
                `}
                aria-expanded={openMenu === menuName}
                aria-controls={`${menuName}-menu`}
              >
                {!menuData[menuName].dropdown && (
                  <>
                    <a href={menuData[menuName].link}>
                      {menuData[menuName].name}
                    </a>
                  </>
                )}
                {menuData[menuName].dropdown && (
                  <>
                    {menuData[menuName].name}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="w-3 mr-2 text-white"
                    />
                  </>
                )}
              </button>

              <div
                style={{ width: `${menuWidths[menuName] || 70}px` }}
                className={`h-[3px] ${
                  openMenu === menuName
                    ? "bg-primary-color"
                    : "hover:bg-primary-color"
                }`}
              ></div>
            </div>
          </>
        ))}
        {/* Dropdown Menu */}
        {openMenu && menuData[openMenu].dropdown && (
          <div
            id={`${openMenu}-menu`}
            className={`absolute z-50 flex flex-col w-full min-w-[795px] pt-2 bg-transparent shadow-md top-11 rounded-custom transition-opacity duration-300 ease-in-out ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
            style={{
              left: `${menuData[openMenu].move}px`,
            }}
            onMouseEnter={() => handleMouseEnter(openMenu)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`w-full rounded-xl p-5 text-black bg-white shadow-md top-11 rounded-custom transition-all duration-300 ease-in-out ${
                isAnimating ? "transform  opacity-0" : "transform opacity-100"
              }`}
            >
              <div className="flex">
                {/* Menu Content Section */}
                <div className="flex-grow p-1 ">
                  <div className="flex flex-col lg:flex-row">
                    {menuData[openMenu]?.sections?.map((section) => (
                      <div key={section.id} className="w-1/2 mb-4 ml-5 lg:mb-0">
                        <h1 className="mb-5 text-2xl font-semibold text-big-text-color min-h-[33px]">
                          {section.headline1}
                        </h1>
                        <ul>
                          {section.subItems.map((item, index) => (
                            <li key={index} className="mb-2">
                              <a
                                href={item.link}
                                className="block duration-300 text-big-text-color hover:text-custom-primary"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Menu Right Section */}
                <div className="flex-shrink-0 w-1/3 pb-5">
                  <img
                    src={menuData[openMenu].image}
                    alt={openMenu}
                    className="w-full md:h-full md:rounded-s-2xl md:rounded-none rounded-xl h-[325px] object-cover"
                  />
                </div>
              </div>

              {/* Footer Section */}
              <div className="pt-6 mt-3 text-center bg-transparent text-big-text-color rounded-custom">
                <div className="flex justify-center">
                  <div className="flex items-center justify-center gap-5">
                    {menuData[openMenu]?.footerLinks?.map((link, index) =>
                      index === 0 ? (
                        <span
                          key={index}
                          href={link.link}
                          className="font-semibold lg:text-2xl text-big-text-color"
                        >
                          {link.name}
                        </span>
                      ) : (
                        <a
                          key={index}
                          href={link.link}
                          className="text-xs duration-300 lg:text-xl text-big-text-color hover:text-custom-primary"
                        >
                          {link.name}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default CustomStaticFlyoutMenu;
