import CauHoi from "./CauHoi.js";

class TracNghiem extends CauHoi{
    dapanA;
    dapanB;
    dapanC;
    constructor(id, noiDung, dapanA, dapanB, dapanC, dapAnDung){
        super(id, noiDung, dapAnDung)
        this.dapanA = dapanA;
        this.dapanB = dapanB;
        this.dapanC = dapanC;
    }
}
export default TracNghiem;