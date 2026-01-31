import * as React from "react";
import { Menu, X, ChevronLeft, ChevronRight, Mail, Phone, Linkedin } from "lucide-react";

type IconProps = React.ComponentProps<typeof Menu> & { className?: string };

const withDefaults = (Icon: any) => ({ className = "text-zinc-600", size = 16, strokeWidth = 1.5, ...props }: IconProps) => (
  <Icon className={className} size={size} strokeWidth={strokeWidth} {...props} />
);

export const MenuIcon = withDefaults(Menu);
export const CloseIcon = withDefaults(X);
export const ChevronLeftIcon = withDefaults(ChevronLeft);
export const ChevronRightIcon = withDefaults(ChevronRight);
export const MailIcon = withDefaults(Mail);
export const PhoneIcon = withDefaults(Phone);
export const LinkedinIcon = withDefaults(Linkedin);

export default {
  MenuIcon,
  CloseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MailIcon,
  PhoneIcon,
  LinkedinIcon,
};