import log from "../config/log.config.js";
import fs from "fs";
import { get } from "http";
import path from "path";

const getIt = (req, res) => {
    log.info("It==>")
    res.send("Ave Router!!");
}

const getC3 = async () => {
    log.debug("svc getDeterminations determinations=");
    const url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo&datatype=csv";
    const c3 = await dataFrame.plot().renderImage("/Users/geoffryroberts/my-chart.png");
  return c3;
}

const getLogo = async (req, res) => {
    log.info("getLogo1==>");
    var file = path.join(__dirname, "..", "img", "hl7-logo.png");
//    const data = fs.readFile("./img/hl7-logo.jpg")
    log.info("getLogo2==>" + path.dirname(file));
    log.info("getLogo3==>" + fs.existsSync(file));
    await res.sendFile(file)
}
const forJupyter = async (req, res) => {
    log.debug("forJupyter==>");
    await res.send("<h1>Ave Jupyter!!</h1>")
}

const renderC3 = async (req, res) => {
    log.debug("renderC3=" + JSON.stringify(req.body));
    var file = path.join(__dirname, "index.html");
     og.debug("renderC32=" + JSON.stringify(csv));
    await res.sendFile(file);
}

export default { 
    getIt: getIt,
    getC3: getC3,
    getLogo: getLogo, 
    forJupyter: forJupyter,
    renderC3: renderC3
}