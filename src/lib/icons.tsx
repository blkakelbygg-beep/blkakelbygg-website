import {
  Archive,
  BadgeCheck,
  Droplets,
  Gem,
  Grid3x3,
  Hammer,
  LayoutGrid,
  Layers,
  Palette,
  Ruler,
  Shapes,
  ShieldCheck,
  SquareStack,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  grid: Grid3x3,
  gem: Gem,
  shapes: Shapes,
  ruler: Ruler,
  "layout-grid": LayoutGrid,
  "square-stack": SquareStack,
  archive: Archive,
  droplets: Droplets,
  "shield-check": ShieldCheck,
  palette: Palette,
  hammer: Hammer,
  layers: Layers,
  "badge-check": BadgeCheck,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Shapes;
}
