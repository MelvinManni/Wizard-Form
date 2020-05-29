$(document).ready(function () {
  // SmartWizard initialize
  $('#smartwizard').smartWizard({
    selected: 0,
    theme: 'dots',
    justified: true,
    autoAdjustHeight: true,
    cycleSteps: false,
    backButtonSupport: true,
    enableURLhash: true,
    transition: {
      animation: 'none',
      speed: '400',
      easing: '',
    },
    toolbarSettings: {
      toolbarPosition: 'bottom', // none, top, bottom, both
      toolbarButtonPosition: 'right', // left, right, center
      showNextButton: false, // show/hide a Next button
      showPreviousButton: false, // show/hide a Previous button
      toolbarExtraButtons: [], // Extra buttons to show on toolbar, array of jQuery input/buttons elements
    },
      keyboardSettings: {
          keyNavigation: false, // Enable/Disable keyboard navigation(left and right keys are used if enabled)
          keyLeft: [37], // Left key code
          keyRight: [39] // Right key code
      }
  });

    $('#redirect').click(function (e) { 
      e.preventDefault();
        setTimeout(() => {
            $('#smartwizard').smartWizard('goToStep', 0);
        }, 500); 
  });

  $('#step1-form').submit(function (e) {
    e.preventDefault();
    $('#smartwizard').smartWizard('goToStep', 1);
  });

  $('#step2-form').submit(function (e) {
    e.preventDefault();
    $('#smartwizard').smartWizard('goToStep', 2);
  });

  $('#step3-form').submit(function (e) {
    e.preventDefault();
    $('#smartwizard').smartWizard('goToStep', 3);
  });

  $('#tenure').change(function (e) {
    e.preventDefault();
    $('#range-inValue').text(e.target.value);
    $('#tenure-view').text(e.target.value);
    let weekPay = $('#loan').val() / $('#tenure').val();
    $('#weekPay').text(parseInt(weekPay));
  });

  $('#loan').change(function (e) {
    e.preventDefault();
    $('#loan-inValue').text(e.target.value);
    $('#loan-view').text(e.target.value);
    let weekPay = $('#loan').val() / $('#tenure').val();
    $('#weekPay').text(parseInt(weekPay));
  });
});
