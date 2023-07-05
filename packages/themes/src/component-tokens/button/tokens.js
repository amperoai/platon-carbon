import { platonColors } from '@carbon/colors';

const buttonSeparator = {
  fallback: '#e0e0e0',
  whiteTheme: '#e0e0e0',
  g10: '#e0e0e0',
  g90: '#161616',
  g100: '#161616',
  platon: '#e0e0e0', // TODO
};

const buttonPrimary = {
  whiteTheme: '#0f62fe',
  g10: '#0f62fe',
  g90: '#0f62fe',
  g100: '#0f62fe',
  platon: platonColors.purple60
};

const buttonSecondary = {
  whiteTheme: '#393939',
  g10: '#393939',
  g90: '#6f6f6f',
  g100: '#6f6f6f',
};

const buttonTertiary = {
  whiteTheme: '#0f62fe',
  g10: '#0f62fe',
  g90: '#ffffff',
  g100: '#ffffff',
  platon: platonColors.white,
};

const buttonDangerPrimary = {
  whiteTheme: '#da1e28',
  g10: '#da1e28',
  g90: '#da1e28',
  g100: '#da1e28',
  platon: platonColors.red70,
};

const buttonDangerSecondary = {
  whiteTheme: '#da1e28',
  g10: '#da1e28',
  g90: '#ff8389',
  g100: '#fa4d56',
  platon: platonColors.red70,
};

const buttonDangerActive = {
  whiteTheme: '#750e13',
  g10: '#750e13',
  g90: '#750e13',
  g100: '#750e13',
  platon: platonColors.red50,
};

const buttonPrimaryActive = {
  whiteTheme: '#002d9c',
  g10: '#002d9c',
  g90: '#002d9c',
  g100: '#002d9c',
  platon: platonColors.purple20,
};

const buttonSecondaryActive = {
  whiteTheme: '#6f6f6f',
  g10: '#6f6f6f',
  g90: '#393939',
  g100: '#393939',
  platon: platonColors.purple20,
};

const buttonTertiaryActive = {
  whiteTheme: '#002d9c',
  g10: '#002d9c',
  g90: '#c6c6c6',
  g100: '#c6c6c6',
  platon: platonColors.grey70,
};

const buttonDangerHover = {
  whiteTheme: '#b81921',
  g10: '#b81921',
  g90: '#b81921',
  g100: '#b81921',
  platon: platonColors.red80,
};

const buttonPrimaryHover = {
  whiteTheme: '#0050e6',
  g10: '#0050e6',
  g90: '#0050e6',
  g100: '#0050e6',
  platon: platonColors.purple70,
};

const buttonSecondaryHover = {
  whiteTheme: '#474747',
  g10: '#474747',
  g90: '#5e5e5e',
  g100: '#5e5e5e',
  platon: platonColors.purple70,
};

const buttonTertiaryHover = {
  whiteTheme: '#0050e6',
  g10: '#0050e6',
  g90: '#f4f4f4',
  g100: '#f4f4f4',
  platon: platonColors.grey90,
};

const buttonDisabled = {
  whiteTheme: '#c6c6c6',
  g10: '#c6c6c6',
  g90: 'rgb(141 141 141 / 30%)',
  g100: 'rgb(141 141 141 / 30%)',
  platon: platonColors.grey30,
};

export {
  buttonSeparator,
  buttonPrimary,
  buttonSecondary,
  buttonTertiary,
  buttonDangerPrimary,
  buttonDangerSecondary,
  buttonDangerActive,
  buttonPrimaryActive,
  buttonSecondaryActive,
  buttonTertiaryActive,
  buttonDangerHover,
  buttonPrimaryHover,
  buttonSecondaryHover,
  buttonTertiaryHover,
  buttonDisabled,
};
