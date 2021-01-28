import winston from "winston";

const log = winston.createLogger({
    level: "silly",
    format: winston.format.json(),
    transports: [
      new winston.transports.Console()
    ]
  });

export default log;