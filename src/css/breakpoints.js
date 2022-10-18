const phoneMaxWidth = 767;
const tabletMinWidth = phoneMaxWidth + 1;
const tabletMaxWidth = 1024;
const laptopMinWidth = tabletMaxWidth + 1;
const laptopMaxWidth = 1440;
const desktopMinWidth = laptopMaxWidth + 1;
const desktopMaxWidth = 1920;
const hdMinWidth = desktopMaxWidth + 1;

export const rules = {
  phoneOnly: `(max-width: ${phoneMaxWidth}px)`,
  tabletOnly: `(min-width: ${tabletMinWidth}px) and (max-width: ${tabletMaxWidth}px)`,
  laptopOnly: `(min-width: ${laptopMinWidth}px) and (max-width: ${laptopMaxWidth}px)`,
  tabletDown: `(max-width: ${tabletMaxWidth}px)`,
  laptopDown: `(max-width: ${laptopMaxWidth}px)`,
  tabletUp: `(min-width: ${tabletMinWidth}px)`,
  laptopUp: `(min-width: ${laptopMinWidth}px)`,
  desktopUp: `(min-width: ${desktopMinWidth}px)`,
  hdUp: `(min-width: ${hdMinWidth}px)`,
};

const css = {
  phoneOnly: `@media ${rules.phoneOnly}`,
  tabletOnly: `@media ${rules.tabletOnly}`,
  laptopOnly: `@media ${rules.laptopOnly}`,
  tabletDown: `@media ${rules.tabletDown}`,
  laptopDown: `@media ${rules.laptopDown}`,
  tabletUp: `@media ${rules.tabletUp}`,
  laptopUp: `@media ${rules.laptopUp}`,
  desktopUp: `@media ${rules.desktopUp}`,
  hdUp: `@media ${rules.hdUp}`,
};

export default css;
