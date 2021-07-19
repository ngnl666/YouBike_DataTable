window.$ = window.jQuery = require("jquery");
const dt = require("datatables.net")(window, $);
const goToPlace = require("./map.js");
let counter = $(".logo__counter");
let countdown = 59;
let data;

$(function () {
  var myTable = $("#myTable").DataTable({
    ajax: {
      url: "https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json",
      dataSrc: function (json) {
        let tempData = Object.values(json.retVal);
        data = tempData;

        // regex
        tempData.forEach((station) => {
          station.act ? (station.act = "營運") : (station.act = "不開放");
          station.mday = station.mday.replace(
            /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g,
            "$1/$2/$3 $4:$5:$6"
          );
        });

        return tempData;
      },
    },
    columns: [
      { data: "sarea" },
      { data: "sna" },
      { data: "sbi" },
      { data: "bemp" },
      { data: "act" },
      { data: "mday" },
    ],
    language: {
      zeroRecords: "沒有符合條件的資料",
      lengthMenu: "顯示 _MENU_ 筆",
      search: "輸入關鍵字:",
      info: "當前第 _PAGE_ 頁, 共 _PAGES_ 頁, 共 _MAX_ 條資料",
      paginate: {
        next: "下一頁",
        previous: "上一頁",
      },
    },
    initComplete: function () {
      var api = this.api();

      api.$("td").click(function () {
        let sta = $(this).parents("tr").children()[1].innerText;
        const station = data.find((item) => item.sna === sta);
        api.search(this.innerHTML).draw();
        goToPlace(station);
      });
    },
  });

  // updata data every 1min
  setInterval(() => myTable.ajax.reload(), 60100);

  // countdown
  setInterval(() => {
    countdown--;
    countdown < 0 ? (countdown = 59) : false;
    countdown < 10
      ? counter.text(`00:0${countdown}`)
      : counter.text(`00:${countdown}`);
  }, 1000);
});
