import React from "react";
import { Badge } from "./Badge";
import { Icon } from "./Icons";

export function TabIcon({ visibleBadge, iconName }) {
  if (visibleBadge) {
    return (
      <Badge fontSize={10}>
        <Icon iconName={iconName} size={20} color={"black"} />
      </Badge>
    );
  }

  return <Icon iconName={iconName} size={20} color={"black"} />;
}
