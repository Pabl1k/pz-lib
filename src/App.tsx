import React from "react";

import UseInputExample from "./hooks/useInput";
import UseTabsExample from "./hooks/useTabs";
import UseTitleExample from "./hooks/useTitle";
import UseConfirmExample from "./hooks/useConfirm";
import UseClickExample from "./hooks/useClick";
import UsePreventLeaveExample from "./hooks/usePreventLeave";
import UseBeforeLeaveExample from "./hooks/useBeforeLeave";
import UseFadeInExample from "./hooks/useFadeIn";
import UseNetworkStatusExample from "./hooks/useNetworkStatus";
import UseCurrentScrollPositionExample from "./hooks/useCurrentScrollPosition";
import UseNotificationsExample from "./hooks/useNotifications";
import UseAxiosExample from "./hooks/useAxios";
import SingleActiveClass from "./activeClass/SingleActiveClass";
import MultipleActiveClass from "./activeClass/MultipleActiveClass";
import OutsideClickListener from "./outsideClickListener";
import Icon from "./Icon";
import ButtonWithIcon from "./buttons/buttonWithIcon";
import AnimatedButton from "./buttons/animatedButton";
import UseThisYearDaysPastAmount from "./hooks/useTodayDayNumber";
import { uid } from "./hooks/useUniqueId/useUniqueId";
import UseScrollExample from "./hooks/useScroll/useScroll";

function App() {
  return (
    <div style={{ margin: 10 }}>
      <UseScrollExample />
    </div>
  );
}

export default App;
