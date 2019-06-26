const isPolymer2 = document.querySelector('script[src*="wct-browser-legacy"]') === null;

window.VcfEnhancedDatePickerSuites = [
  'basic.html',
  'dropdown.html',
  'overlay.html',
  'month-calendar.html',
  'scroller.html',
  'form-input.html',
  'custom-input.html',
  'keyboard-navigation.html',
  'keyboard-input.html',
  'theme-propagation.html',
  'wai-aria.html'
];

if (isPolymer2) {
  window.VcfEnhancedDatePickerSuites.push('late-upgrade.html');
}
