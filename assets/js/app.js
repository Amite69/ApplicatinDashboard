$(function () {
  "use strict";
  var body = $("body");
  var mainWrapper = $(".main-wrapper");
  var footer = $("footer");
  var sidebar = $(".sidebar");
  var navbar = $(".navbar").not(".top-navbar");
  var colors = {
    primary: "#14121E",
    secondary: "#7987a1",
    success: "#9CD1A9",
    info: "#BAC6E1",
    warning: "#E7AF93",
    light: "#e9ecef",
    muted: "#7987a1",
    gridBorder: "rgba(77, 138, 240, .15)",
    transparent: "transparent",
    bodyColor: "#000",
    cardBg: "#fff",
  };

  var fontFamily = "'Roboto', Helvetica, sans-serif";

  // Enable feather-icons
  feather.replace();

  // Sidebar toggle to sidebar-folded
  $(".sidebar-toggler").on("click", function (e) {
    e.preventDefault();
    $(".sidebar-header .sidebar-toggler").toggleClass("active not-active");
    if (window.matchMedia("(min-width: 992px)").matches) {
      e.preventDefault();
      body.toggleClass("sidebar-folded");
    } else if (window.matchMedia("(max-width: 991px)").matches) {
      e.preventDefault();
      body.toggleClass("sidebar-open");
    }
  });

  //  open sidebar-folded when hover
  $(".sidebar .sidebar-body").hover(
    function () {
      if (body.hasClass("sidebar-folded")) {
        body.addClass("open-sidebar-folded");
      }
    },
    function () {
      if (body.hasClass("sidebar-folded")) {
        body.removeClass("open-sidebar-folded");
      }
    }
  );

  // close sidebar when click outside on mobile/table
  $(document).on("click touchstart", function (e) {
    e.stopPropagation();

    // closing of sidebar menu when clicking outside of it
    if (!$(e.target).closest(".sidebar-toggler").length) {
      var sidebar = $(e.target).closest(".sidebar").length;
      var sidebarBody = $(e.target).closest(".sidebar-body").length;
      if (!sidebar && !sidebarBody) {
        if ($("body").hasClass("sidebar-open")) {
          $("body").removeClass("sidebar-open");
        }
      }
    }
  });

  $(window).scroll(function () {
    if (window.matchMedia("(min-width: 992px)").matches) {
      var header = $(".horizontal-menu");
      if ($(window).scrollTop() >= 60) {
        $(header).addClass("fixed-on-scroll");
      } else {
        $(header).removeClass("fixed-on-scroll");
      }
    }
  });

  // Prevent body scrolling while sidebar scroll
  $(".sidebar .sidebar-body").hover(
    function () {
      $("body").addClass("overflow-hidden");
    },
    function () {
      $("body").removeClass("overflow-hidden");
    }
  );

  // Date Picker
  if ($("#dashboardDate").length) {
    flatpickr("#dashboardDate", {
      wrap: true,
      dateFormat: "d-M-Y",
      defaultDate: "today",
    });
  }
  // Date Picker - END

  // Earning Chart
  if ($("#earningChart").length) {
    var options1 = {
      chart: {
        type: "line",
        height: 60,
        sparkline: {
          enabled: !0,
        },
      },
      series: [
        {
          name: "",
          data: [
            844, 1855, 2841, 1867, 2000, 2843, 2821, 4841, 856, 3827, 6843,
          ],
        },
      ],
      xaxis: {
        type: "datetime",
        categories: [
          "Aug 10 2022",
          "Aug 11 2022",
          "Aug 12 2022",
          "Aug 13 2022",
          "Aug 14 2022",
          "Aug 15 2022",
          "Aug 16 2022",
          "Aug 17 2022",
          "Aug 18 2022",
          "Aug 19 2022",
          "Aug 20 2022",
        ],
      },
      stroke: {
        width: 4,
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      colors: [colors.success],
    };
    new ApexCharts(document.querySelector("#earningChart"), options1).render();
  }
  // New Customers Chart - END

  // Orders Chart
  if ($("#sellsChart").length) {
    var options2 = {
      chart: {
        type: "line",
        height: 60,
        sparkline: {
          enabled: !0,
        },
      },
      series: [
        {
          name: "",
          data: [
            35044, 35855, 35841, 36867, 45000, 44843, 55821, 56841, 55856,
            57827, 54843,
          ],
        },
      ],
      xaxis: {
        type: "datetime",
        categories: [
          "Aug 10 2022",
          "Aug 11 2022",
          "Aug 12 2022",
          "Aug 13 2022",
          "Aug 14 2022",
          "Aug 15 2022",
          "Aug 16 2022",
          "Aug 17 2022",
          "Aug 18 2022",
          "Aug 19 2022",
          "Aug 20 2022",
        ],
      },
      stroke: {
        width: 4,
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      colors: [colors.info],
    };
    new ApexCharts(document.querySelector("#sellsChart"), options2).render();
  }
  // Orders Chart - END

  // Growth Chart
  if ($("#incomeChart").length) {
    var options3 = {
      chart: {
        type: "line",
        height: 60,
        sparkline: {
          enabled: !0,
        },
      },
      series: [
        {
          name: "",
          data: [41, 65, 44, 66, 52, 54, 43, 74, 82, 92, 99],
        },
      ],
      xaxis: {
        type: "datetime",
        categories: [
          "Aug 10 2022",
          "Aug 11 2022",
          "Aug 12 2022",
          "Aug 13 2022",
          "Aug 14 2022",
          "Aug 15 2022",
          "Aug 16 2022",
          "Aug 17 2022",
          "Aug 18 2022",
          "Aug 19 2022",
          "Aug 20 2022",
        ],
      },
      stroke: {
        width: 4,
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      colors: [colors.warning],
    };
    new ApexCharts(document.querySelector("#incomeChart"), options3).render();
  }
  // Growth Chart - END

  // Monthly Sales Chart
  if ($("#monthlySalesChart").length) {
    var options = {
      chart: {
        type: "bar",
        height: "318",
        parentHeightOffset: 0,
        foreColor: colors.bodyColor,
        background: colors.cardBg,
        toolbar: {
          show: false,
        },
      },
      theme: {
        mode: "light",
      },
      tooltip: {
        theme: "light",
      },
      colors: [colors.primary],
      fill: {
        opacity: 0.9,
      },
      grid: {
        padding: {
          bottom: -4,
        },
        borderColor: colors.gridBorder,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      series: [
        {
          name: "Sales",
          data: [200, 420, 350, 500, 560],
        },
      ],
      xaxis: {
        type: "datetime",
        categories: [
          "04/01/2022",
          "05/01/2022",
          "06/01/2022",
          "07/01/2022",
          "08/01/2022",
        ],
        axisBorder: {
          color: colors.gridBorder,
        },
        axisTicks: {
          color: colors.gridBorder,
        },
      },
      yaxis: {
        title: {
          style: {
            size: 9,
            color: colors.muted,
          },
        },
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "center",
        fontFamily: fontFamily,
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
      },
      stroke: {
        width: 0,
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "10px",
          fontFamily: fontFamily,
        },
        offsetY: -27,
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          borderRadius: 4,
          dataLabels: {
            position: "top",
            orientation: "vertical",
          },
        },
      },
    };

    var apexBarChart = new ApexCharts(
      document.querySelector("#monthlySalesChart"),
      options
    );
    apexBarChart.render();
  }
  // Monthly Sales Chart - END
});
