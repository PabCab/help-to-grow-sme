$( document ).ready(function() {

  $(".govuk-error-summary, .govuk-error-message").hide();

  // form validation for select-software-category page
  $('.select-software-category').on("click", function() {
    if (!$("input[name='select-software-category']:checked").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for select-crm-software page
  $('.select-crm-software').on("click", function() {
    if (!$("input[name='select-software']:checked").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });
  
  // form validation for new to software page
  $('.select-software-purchase').on("click", function() {
    if (!$("input[name='new-to-software']:checked").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for major upgrade page
  $('.major-upgrade').on("click", function() {
    if (!$("input[name='major-upgrade']:checked").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for addons page
  $('.add-ons').on("click", function() {
    if (!$("input[name='add-on']:checked").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for account software page
  $('.account-software').on("click", function() {
    if (!$("input[name='select-software']:checked").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for select ecommerce page
  $('.select-ecommerce').on("click", function() {
    if (!$("input[name='select-software']:checked").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for company size page
  $('.company-size').on("click", function() {
    if (!$("input[name='company-size']:checked").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for company size page
  $('.company-house').on("click", function() {
    if (!$("input[name='company-number']:checked").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for company house number page
  $('.company-house-number').on("click", function() {
    if (!$("input[name='companies-house-number']").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });

  // form validation for fca number page
  $('.fca-number').on("click", function() {
    if (!$("input[name='fca-number']").val()) {
      $("div").closest(".govuk-form-group").addClass("govuk-form-group--error");
      $(".govuk-error-summary, .govuk-error-message").show();
      return false;
    }
  });


});