import * as geo from "./geo-infor.js";

const pointPopupTemplate = {
    title: "{Name}",
    content: "{Location}</b>.",
};

const lineColor = [0, 0, 255];

const polygons = [
    {
        type: "polygon",
        rings: geo.wardsGeo.TanDinh,
        Name: "Phường Tân Định",
        Location: "Phường Tân Định, Quận 1, Hồ Chí Minh",
        symbol: {
            type: "simple-fill",
            color: [227, 139, 79, 0.4],
            outline: {
                color: [255, 255, 255],
                width: 1,
            },
        },
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "polygon",
        rings: geo.wardsGeo.DaKao,
        Name: "Phường Đa Kao",
        Location: "Phường Đa Kao, Quận 1, Hồ Chí Minh",
        symbol: {
            type: "simple-fill",
            color: [0, 153, 0, 0.4],
            outline: {
                color: [25555255, 255],
                width: 1,
            },
        },
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "polygon",
        rings: geo.wardsGeo.BenNghe,
        Name: "Phường Bến Nghé",
        Location: "Phường Bến Nghé, Quận 1, Hồ Chí Minh",
        symbol: {
            type: "simple-fill",
            color: [145, 145, 145, 0.4],
            outline: {
                color: [255, 255, 255],
                width: 1,
            },
        },
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "polygon",
        rings: geo.wardsGeo.BenThanh,
        Name: "Phường Bến Thành",
        Location: "Phường Bến Thành, Quận 1, Hồ Chí Minh",
        symbol: {
            type: "simple-fill",
            color: [201, 79, 183, 0.4],
            outline: {
                color: [2551, 255, 255],
                width: 1,
            },
        },
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "polygon",
        rings: geo.wardsGeo.NguyeThaiBinh,
        Name: "Phường Nguyễn Thái Bình",
        Location: "Phường Nguyễn Thái Bình, Quận 1, Hồ Chí Minh",
        symbol: {
            type: "simple-fill",
            color: [0, 247, 255, 0.4],
            outline: {
                color: [2551, 255, 255, 0],
                width: 1,
            },
        },
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "polygon",
        rings: geo.wardsGeo.PhamNguLao,
        Name: "Phường Phạm Ngũ Lão",
        Location: "Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh",
        symbol: {
            type: "simple-fill",
            color: [255, 157, 0, 0.4],
            outline: {
                color: [25555255, 255],
                width: 1,
            },
        },
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "polygon",
        rings: geo.wardsGeo.CauOngLanh,
        Name: "Phường Cầu Ông Lãnh",
        Location: "Phường Cầu Ông Lãnh, Quận 1, Hồ Chí Minh",
        symbol: {
            type: "simple-fill",
            color: [51, 102, 255, 0.4],
            outline: {
                color: [2557, 255, 255],
                width: 1,
            },
        },
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "polygon",
        rings: geo.wardsGeo.CoGiang,
        Name: "Phường Cô Giang",
        Location: "Phường Cô Giang, Quận 1, Hồ Chí Minh",
        symbol: {
            type: "simple-fill",
            color: [255, 251, 5, 0.4],
            outline: {
                color: [2551, 255, 255],
                width: 1,
            },
        },
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "polygon",
        rings: geo.wardsGeo.NguyenCuTrinh,
        Name: "Phường Nguyễn Cư Trinh",
        Location: "Phường Nguyễn Cư Trinh, Quận 1, Hồ Chí Minh",
        symbol: {
            type: "simple-fill",
            color: [252, 0, 84, 0.4],
            outline: {
                color: [255, 255, 255],
                width: 1,
            },
        },
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "polygon",
        rings: geo.wardsGeo.CauKho,
        Name: "Phường Cầu Kho",
        Location: "Phường Cầu Kho, Quận 1, Hồ Chí Minh",
        symbol: {
            type: "simple-fill",
            color: [255, 135, 163, 0.4],
            outline: {
                color: [2551, 255, 255],
                width: 1,
            },
        },
        popupTemplate: pointPopupTemplate,
    },
];

const points = [
    {
        type: "point",
        latitude: geo.points.PhoNguyenHue[0],
        longitude: geo.points.PhoNguyenHue[1],
        Name: "Phố đi bộ Nguyễn Huệ",
        Location:
            "Phố đi bộ Nguyễn Huệ, Nguyễn Huệ, P. Bến Nghé, Quận 1, TP. Hồ Chí Minh",
        symbol: {
            type: "picture-marker",
            url: "./assets/Icon-Location.png", // đường dẫn đến icon của bạn
            width: "30px", // điều chỉnh kích thước theo ý bạn
            height: "30px",
            outline: {
                color: [2, 31, 247],
                width: 2,
            },
        },
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "point",
        latitude: geo.points.PhoBuiVien[0],
        longitude: geo.points.PhoBuiVien[1],
        Name: "Phố Tây Bùi Viện",
        Location:
            "50 - 82 Bùi Viện, Phường Phạm Ngũ Lão, Quận 1, TP. Hồ Chí Minh",
        symbol: {
            type: "picture-marker",
            url: "./assets/Icon-Location.png", // đường dẫn đến icon của bạn
            width: "30px", // điều chỉnh kích thước theo ý bạn
            height: "30px",
            outline: {
                color: [2, 31, 247],
                width: 2,
            },
        },
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "point",
        latitude: geo.points.Bitexco[0],
        longitude: geo.points.Bitexco[1],
        Name: "Toà nhà Bitexco",
        Location:
            "Tòa nhà tài chính Bitexco, 7, 2 Hải Triều, Bến Nghé, Quận 1, TP. Hồ Chí Minh",
        symbol: {
            type: "picture-marker",
            url: "./assets/Icon-Bitexco.png", // đường dẫn đến icon của bạn
            width: "30px", // điều chỉnh kích thước theo ý bạn
            height: "30px",
            outline: {
                color: [2, 31, 247],
                width: 2,
            },
        },
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "point",
        latitude: geo.points.VincomDongKhoi[0],
        longitude: geo.points.VincomDongKhoi[1],
        Name: "Vincom Đồng Khởi",
        Location: "Số 72 Lê Thánh Tôn, P. Bến Nghé, Quận 1, TP. Hồ Chí Minh",
        symbol: {
            type: "picture-marker",
            url: "./assets/Icon-Vincom.png", // đường dẫn đến icon của bạn
            width: "30px", // điều chỉnh kích thước theo ý bạn
            height: "30px",
            outline: {
                color: [2, 31, 247],
                width: 2,
            },
        },
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "point",
        latitude: geo.points.DinhDocLap[0],
        longitude: geo.points.DinhDocLap[1],
        Name: "Dinh Độc Lập",
        Location: "135 Nam Kỳ Khởi Nghĩa, Phường Bến Thành, Quận 1",
        symbol: {
            type: "picture-marker",
            url: "./assets/Icon-DinhDocLap.png", // đường dẫn đến icon của bạn
            width: "30px", // điều chỉnh kích thước theo ý bạn
            height: "30px",
            outline: {
                color: [2, 31, 247],
                width: 2,
            },
        },
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "point",
        latitude: geo.points.UBNDTPHCM[0],
        longitude: geo.points.UBNDTPHCM[1],
        Name: "Ủy ban Nhân dân Thành phố Hồ Chí Minh",
        Location:
            "86 Đ. Lê Thánh Tôn, Bến Nghé, Quận 1, Hồ Chí Minh 710212, Việt Nam",
        symbol: {
            type: "picture-marker",
            url: "./assets/Icon-UBND.png", // đường dẫn đến icon của bạn
            width: "30px", // điều chỉnh kích thước theo ý bạn
            height: "30px",
            outline: {
                color: [2, 31, 247],
                width: 2,
            },
        },
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "point",
        latitude: geo.points.GaTauBachDang[0],
        longitude: geo.points.GaTauBachDang[1],
        Name: "Ga Tàu Thuỷ Bạch Đằng",
        Location: "Bến Nghé, Quận 1, Hồ Chí Minh, Việt Nam",
        symbol: {
            type: "picture-marker",
            url: "./assets/Icon-GaBachDang.png", // đường dẫn đến icon của bạn
            width: "30px", // điều chỉnh kích thước theo ý bạn
            height: "30px",
            outline: {
                color: [2, 31, 247],
                width: 2,
            },
        },
        popupTemplate: pointPopupTemplate,
    },
];

// Hàm decode Polyline trả về danh sách tọa độ (latitude, longitude)
const decodePolyline = (encoded) => {
    const decoded = polyline.decode(encoded);
    // Đổi chiều tọa độ (longitude, latitude) thành (latitude, longitude)
    return decoded.map(([longitude, latitude]) => [latitude, longitude]);
};

// Lấy key: https://account.goong.io
const api_key = "gTtOygyPl9y68qA3fwhtpK2g0Vkbggy7uqrvm0h8";
// Hàm lấy danh sách tọa độ giữa hai điểm
const getRouteCoordinates = async (origin, destination) => {
    const url = `https://rsapi.goong.io/Direction?origin=${origin}&destination=${destination}&vehicle=bike&api_key=${api_key}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("data: ", data);
        if (data.routes?.length > 0) {
            const encodedPolyline = data.routes[0].overview_polyline.points;
            const coordinates = decodePolyline(encodedPolyline);
            return coordinates;
        } else {
            console.log("Không tìm thấy tuyến đường.");
            return [];
        }
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        return [];
    }
};

// const getPoints = await getRouteCoordinates('10.765773835106776,106.68204860391458', '10.7544431866413,106.6872787252529');
// console.log(JSON.stringify(getPoints));

const lines = [
    {
        type: "polyline",
        paths: geo.district1Geo,
        symbol: {
            type: "simple-line",
            color: [226, 119, 40], // orange
            width: 2,
        },
        Name: "Quận 1",
        Location: "Ranh giới đơn vị hành chính Quận 1, TP HCM",
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "polyline",
        paths: geo.lines.NguyenTrai_BenNghe,
        symbol: {
            type: "simple-line",
            color: lineColor, // orange
            width: 5,
        },
        Name: "PGD Nguyễn Trãi - PGD Bến Nghé",
        Location: "Tuyến đường PGD Nguyễn Trãi - PGD Bến Nghé",
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "polyline",
        paths: geo.lines.PGDQuan1_PGDVoVanKiet,
        symbol: {
            type: "simple-line",
            color: lineColor, // orange
            width: 5,
        },
        Name: "PGD Quận 1 - PGD Võ Văn Kiệt",
        Location: "Tuyến đường PGD Quận 1 - PGD Võ Văn Kiệt",
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "polyline",
        paths: geo.lines.TonDucThang,
        symbol: {
            type: "simple-line",
            color: lineColor, // orange
            width: 5,
        },
        Name: "Tôn Đức Thắng",
        Location: "Tuyến đường Tôn Đức Thắng",
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "polyline",
        paths: geo.lines.PGDNTMK_PGDND,
        symbol: {
            type: "simple-line",
            color: lineColor, // orange
            width: 5,
        },
        Name: "PGD Nguyễn Thị Minh Khai - PGD Vinhomes BaSon",
        Location: "Tuyến đường PGD Nguyễn Thị Minh Khai - PGD Vinhomes BaSon",
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "polyline",
        paths: geo.lines.TranQuangKhai_MacDinhChi,
        symbol: {
            type: "simple-line",
            color: lineColor, // orange
            width: 5,
        },
        Name: "PGD Trần Quang Khải - PGD Mạc Đĩnh Chi",
        Location: "Tuyến đường PGD Trần Quang Khải - PGD Mạc Đĩnh Chi",
        popupTemplate: pointPopupTemplate,
    },
    {
        type: "polyline",
        paths: geo.lines.NguyenHue_BuiVien,
        symbol: {
            type: "simple-line",
            color: lineColor, // orange
            width: 5,
        },
        Name: "Phố đi bộ Nguyễn Huệ - Phố Tây Bùi Viện",
        Location: "Tuyến đường Phố đi bộ Nguyễn Huệ - Phố Tây Bùi Viên",
        popupTemplate: pointPopupTemplate,
    },
    {
      type: "polyline",
      paths: geo.lines.VoVanKiet,
      symbol: {
          type: "simple-line",
          color: [165,42,42], // orange
          width: 8,
      },
      Name: "Võ Văn Kiệt",
      Location: "Tuyến đường Võ Văn Kiệt - Đại lộ Đông Tây",
      popupTemplate: pointPopupTemplate,
  },
];

require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "esri/symbols/PictureMarkerSymbol",
], function (Map, MapView, Graphic, GraphicsLayer, PictureMarkerSymbol) {
    // Add Icon to map
    const bankIcon = new PictureMarkerSymbol({
        url: "./assets/icon-vcb.png", // URL to your icon image
        width: "20px",
        height: "20px",
    });

    const iconGraphic = function (data) {
        return new Graphic({
            geometry: data,
            symbol: bankIcon,
            attributes: data,
            popupTemplate: data.popupTemplate,
        });
    };

    const transactionPoints = geo.transactionBankGeos.map((branch) => {
        return {
            type: "point",
            latitude: branch.branchLocation[0],
            longitude: branch.branchLocation[1],
            Name: `Vietcombank ${branch.branchName}`,
            Location: `Địa chỉ: ${branch.branchAddress}`,
            symbol: bankIcon,
            popupTemplate: pointPopupTemplate,
        };
    });

    const jsondata = {
        points,
        lines,
        polygons,
    };

    // Create map
    const map = new Map({
        basemap: "topo-vector",
    });

    map.on("load", function () {
        map.graphics.enableMouseEvents();
    });

    // Init Map View
    const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [106.703362, 10.776971], // Tọa độ trung tâm của Quận 1
        zoom: 14,
        highlightOptions: {
            color: "blue",
        },
    });

    const createGraphic = function (data) {
        return new Graphic({
            geometry: data,
            symbol: data.symbol,
            attributes: data,
            popupTemplate: data.popupTemplate,
        });
    };

    const graphicsLayer = new GraphicsLayer();

    jsondata.polygons.forEach(function (data) {
        graphicsLayer.add(createGraphic(data));
    });
    jsondata.lines.forEach(function (data) {
        graphicsLayer.add(createGraphic(data));
    });
    jsondata.points.forEach(function (data) {
        graphicsLayer.add(createGraphic(data));
    });
    transactionPoints.forEach(function (point) {
        graphicsLayer.add(iconGraphic(point));
    });

    map.add(graphicsLayer);

    view.when(() => {
        console.log("Map and view are loaded.");
    }).catch((error) => {
        console.error("Error loading map or view:", error);
    });
});
