import CauHoi from "./CauHoi.js";
import TracNghiem from "./TracNghiem.js";
import TuLuan from "./TuLuan.js";

class DeThi{
    id;
    tenBaiTest;
    thoiLuong;
    cacCauHoi = [];
    ngayTao;
    constructor(id, tenBaiTest, thoiLuong, cacCauHoi, ngayTao){
        this.id = id;
        this.tenBaiTest = tenBaiTest;
        this.thoiLuong = thoiLuong;
        this.cacCauHoi = cacCauHoi;
        this.ngayTao = ngayTao;
    }
}

export default DeThi;