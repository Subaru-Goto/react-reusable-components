import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { MdError } from "react-icons/md";

export default function Banners({ children, variant, type, ...rest }) {
  const backgroundColors = {
    success: "#ebfdf5",
    warning: "#FFFBEB",
    error: "#fef2f1",
    neutral: "#EFF6FF",
  };
  
  const iconColors = {
    success: "#34D399",
    warning: "#FBBF24",
    error: "#F87171",
    neutral: "#60A5FA",
  };
  
  const icons = {
    success: FaCheckCircle,
    warning: IoWarning,
    error: MdError,
    neutral: FaInfoCircle,
  };

  const Icon = icons[variant];
  const colors = iconColors[variant];
  return (
    <div
      className="banner--content"
      style={{backgroundColor: backgroundColors[variant]}}
      {...rest}
    >
      {variant && <Icon className="banner--icon" style={{color:colors}}/>}
        <div className="banner--title">{children}</div>
    </div>
    )
  }