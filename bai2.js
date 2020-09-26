import DeThi from "./Module/DeThi.js";
import TracNghiem from "./Module/TracNghiem.js";
import TuLuan from "./Module/TuLuan.js";

let id = 0;
let deThi = [];
while (true){
    let input = prompt(`Chào mừng đến hệ thống quản lý đề thi!
            Nhập 1 để thêm đề thi,
            Nhập 2 để sửa đề thi,
            Nhập 3 để xem danh sách đề thi,
            Nhập 4 đề thoát chương trình!
    `);
    if (input == "1"){
        id++;
        let name = prompt(`Tên đề thi thứ ${id}?`);
        let time = prompt(`Thời lượng?`);
        let nCauHoi = Number(prompt("Số lượng câu hỏi?"));
        let arrCH = [];
        for (let i = 0; i< nCauHoi; i++){
            alert(`Câu hỏi thứ ${i+1}`);
            let dangDe = prompt("Trắc nghiệm (Press 1), Tự luận (Press 2)");
            if (dangDe == "1"){
                let cauhoi = prompt("Nhập câu hỏi trắc nghiệm");
                let dapana = prompt("Nhập đáp án A");
                let dapanb = prompt("Nhập đáp án B");
                let dapanc = prompt("Nhập đáp án C");
                let dapandung = prompt("Nhập đáp án Đúng");
                arrCH.push(new TracNghiem(i, cauhoi, dapana, dapanb, dapanc, dapandung));
            }
            else if(dangDe == "2"){
                let cauhoi = prompt("Nhập câu hỏi tự luận");
                let dapan = prompt("Nhập đáp án");
                let dapandung = prompt("Nhập đáp án Đúng");
                arrCH.push(new TuLuan(i, cauhoi, dapan, dapandung));
            }
            else break;
        }
        let today = new Date();
        let ngayTao = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();;
        deThi.push(new DeThi(id, name, time, arrCH, ngayTao));
    }
    else if (input == "2"){
        let idDeSua = Number(prompt("Nhập id đề thi muốn sửa câu hỏi"));
        idDeSua--;
        let idCHSua = Number(prompt(`Đề thi thứ ${idDeSua+1} có ${deThi[idDeSua].cacCauHoi.length} câu hỏi
                                Nhập id câu hỏi cần sửa?`));
        idCHSua--;
        if (deThi[idDeSua].cacCauHoi[idCHSua].dapanA){
            let newCH = prompt("Nhập câu hỏi mới!");
            let newDAA = prompt("Đáp án A?");
            let newDAB = prompt("Đáp án B?");
            let newDAC = prompt("Đáp án C?");
            let newDAD = prompt("Đáp án đúng?");
            deThi[idDeSua].cacCauHoi[idCHSua].noiDung = newCH;
            deThi[idDeSua].cacCauHoi[idCHSua].dapanA = newDAA;
            deThi[idDeSua].cacCauHoi[idCHSua].dapanB = newDAB;
            deThi[idDeSua].cacCauHoi[idCHSua].dapanC = newDAC;
            deThi[idDeSua].cacCauHoi[idCHSua].dapAnDung = newDAD;
            alert("Sửa thành công");
        }
        else {
            let newCH = prompt("Nhập câu hỏi mới!");
            let newDA = prompt("Đáp án?");
            let newDAD = prompt("Đáp án đúng?");
            deThi[idDeSua].cacCauHoi[idCHSua].noiDung = newCH;
            deThi[idDeSua].cacCauHoi[idCHSua].dapan = newDA;
            deThi[idDeSua].cacCauHoi[idCHSua].dapAnDung = newDAD;
            alert("Sửa thành công");
        }
    }
    else if (input == "3"){
        console.log(...deThi);
    }
    else if (input == "4") break;
}
    