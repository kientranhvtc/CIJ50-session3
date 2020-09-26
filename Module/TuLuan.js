import CauHoi from "./CauHoi.js";

class TuLuan extends CauHoi{
    dapan;
    constructor(id, noiDung, dapan, dapAnDung){
        super(id, noiDung, dapAnDung)
        this.dapan = dapan;
    }
}
export default TuLuan;